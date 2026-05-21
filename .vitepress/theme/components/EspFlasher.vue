<template>
  <div class="esp-flasher">
    <h2>ESP32 烧录工具 (官方API)</h2>
    
    <!-- 烧录状态显示区域 -->
    <div class="status-area">
      <div class="connection-status" :class="connectionStatus.toLowerCase().replace(' ', '-')">
        <span class="status-icon">{{ getStatusIcon() }}</span>
        <span>{{ connectionStatus }}</span>
      </div>
      <div v-if="detectedFlashSize" style="margin-top:6px;color:#555;font-size:14px;">
        Flash 容量: <strong>{{ detectedFlashSize }}</strong>
      </div>
      
      <div v-if="showProgress" class="progress-section">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <div class="progress-text">{{ progressText }}</div>
      </div>
    </div>

    <!-- 固件选择 -->
    <div class="firmware-section">
      <h3>选择固件</h3>
      <div class="firmware-selection">
        <select v-model="selectedFirmware" :disabled="isFlashing">
          <option :value="null">请选择固件</option>
          <option v-for="firmware in availableFirmware" :key="firmware.id" :value="firmware">
            {{ firmware.name }}
          </option>
        </select>
        
        <div v-if="selectedFirmware" class="firmware-details">
          <p><strong>描述：</strong>{{ selectedFirmware.description }}</p>
          <p><strong>版本：</strong>{{ selectedFirmware.version }}</p>
          <p><strong>大小：</strong>{{ isFetchingSize ? '获取中...' : (firmwareFileSize || '未知') }}</p>
          <p><strong>烧录地址：</strong>0x{{ selectedFirmware.address.toString(16).toUpperCase() }}</p>
        </div>
      </div>
    </div>

    <!-- 控制按钮 -->
    <div class="controls">
      <button 
        @click="detectAvailableDevices" 
        :disabled="isFlashing"
        class="btn btn-info"
      >
        检测设备
      </button>
      
      <button 
        @click="connectToDevice" 
        :disabled="isConnected || isFlashing"
        class="btn btn-primary"
      >
        {{ isConnected ? '已连接' : '连接设备' }}
      </button>
      
      <button 
        @click="startFlashing" 
        :disabled="!selectedFirmware || isFlashing"
        class="btn btn-success"
      >
        {{ isFlashing ? '烧录中...' : '开始烧录' }}
      </button>
      
      <button 
        @click="disconnectDevice" 
        :disabled="!isConnected || isFlashing"
        class="btn btn-secondary"
      >
        断开连接
      </button>
      
      <button 
        @click="forceReset" 
        :disabled="isFlashing"
        class="btn btn-warning"
        title="当连接出现问题时使用"
      >
        强制重置
      </button>

      <button
        @click="eraseFlashChip"
        :disabled="!isConnected || isFlashing || isErasing"
        class="btn btn-danger"
        title="整片擦除 Flash（耗时较长）"
      >
        {{ isErasing ? '正在擦除...' : '擦除 Flash' }}
      </button>
    </div>

    <!-- 日志输出区域 -->
    <div class="terminal">
      <h3>操作日志</h3>
      <div class="log-output" ref="logOutput">
        <div 
          v-for="(log, index) in logs" 
          :key="index" 
          :class="'log-' + log.type"
          class="log-entry"
        >
          <span class="log-timestamp">{{ log.timestamp }}</span>
          <span class="log-message">{{ log.message }}</span>
        </div>
      </div>
      <button @click="clearLogs" class="btn btn-clear">清空日志</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, computed, watch } from 'vue'

// Props 定义
const props = defineProps({
  firmwareOptions: {
    type: Array,
    default: () => [
      {
        id: 'basic',
        name: 'ESP32 基础固件',
        version: 'v1.0.0',
        description: 'ESP32 基础固件，包含基本功能',
        url: 'https://github.com/espressif/arduino-esp32/releases/download/1.0.6/esp32-20210902-v1.17.bin',
        address: 0x0000
      },
      {
        id: 'wifi',
        name: 'ESP32 WiFi功能固件',
        version: 'v2.1.0', 
        description: '包含WiFi连接功能的完整固件',
        url: 'https://micropython.org/resources/firmware/esp32-20220618-v1.19.1.bin',
        address: 0x0000
      },
      {
        id: 'advanced',
        name: 'ESP32 物联网完整固件',
        version: 'v3.0.0',
        description: '包含完整物联网功能的高级固件',
        url: 'https://micropython.org/resources/firmware/esp32-20230426-v1.20.0.bin',
        address: 0x0000
      }
    ]
  },
  baudRate: {
    type: Number,
    default: 115200
  }
})

const connectionStatus = ref('未连接')
const isConnected = ref(false)
const isFlashing = ref(false)
const showProgress = ref(false)
const progressPercentage = ref(0)
const progressText = ref('')
const selectedFirmware = ref(null)
const logs = ref([])
const logOutput = ref()
const detectedFlashSize = ref('')
const isErasing = ref(false)
const firmwareFileSize = ref(null)
const isFetchingSize = ref(false)
const firmwareCache = new Map()

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

watch(selectedFirmware, async (firmware) => {
  if (!firmware) {
    firmwareFileSize.value = null
    return
  }
  if (firmwareCache.has(firmware.url)) {
    firmwareFileSize.value = formatBytes(firmwareCache.get(firmware.url).byteLength)
    return
  }
  try {
    isFetchingSize.value = true
    const res = await fetch(firmware.url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const contentType = res.headers.get('Content-Type') || ''
    if (contentType.includes('text/html')) throw new Error('URL 返回了 HTML 页面，请检查固件路径是否正确')
    const data = await res.arrayBuffer()
    firmwareCache.set(firmware.url, data)
    firmwareFileSize.value = formatBytes(data.byteLength)
  } catch (_) {
    firmwareFileSize.value = null
  } finally {
    isFetchingSize.value = false
  }
})

// 计算属性：转换固件列表格式
const availableFirmware = computed(() => {
  return props.firmwareOptions.map(firmware => ({
    id: firmware.id || firmware.name,
    name: firmware.name,
    description: firmware.description,
    version: firmware.version,
    size: firmware.size || '未知大小',
    url: firmware.url,
    address: firmware.address || 0x0000
  }))
})

// 全局变量
let espLoader = null
let transport = null
let ESPLoader = null
let Transport = null
let currentPort = null

// 获取状态图标
const getStatusIcon = () => {
  switch (connectionStatus.value) {
    case '未连接': return '⚪'
    case '连接中': return '🔄'
    case '已连接': return '🟢' 
    case '烧录中': return '⚡'
    case '烧录完成': return '✅'
    case '连接错误': return '❌'
    default: return '⚪'
  }
}

// 添加日志
const addLog = (message, type = 'info') => {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.push({ message, type, timestamp })
  nextTick(() => {
    if (logOutput.value) {
      logOutput.value.scrollTop = logOutput.value.scrollHeight
    }
  })
}

// 清空日志
const clearLogs = () => {
  logs.value = []
}

// 更新进度
const updateProgress = (percentage, text) => {
  progressPercentage.value = percentage
  progressText.value = text
  if (percentage > 0 && !showProgress.value) {
    showProgress.value = true
  }
}

// 创建终端接口
const createTerminal = () => {
  return {
    clean: () => {
      addLog('终端清屏', 'info')
    },
    write: (data) => {
      if (data && data.trim()) {
        addLog(`设备输出: ${data.trim()}`, 'device')
      }
    },
    writeLine: (data) => {
      if (data && data.trim()) {
        addLog(`设备输出: ${data.trim()}`, 'device')
      }
    }
  }
}

// 检测可用设备
const detectAvailableDevices = async () => {
  try {
    if (!navigator.serial) {
      addLog('❌ 浏览器不支持 Web Serial API', 'error')
      return []
    }

    const ports = await navigator.serial.getPorts()
    addLog(`🔍 检测到 ${ports.length} 个已授权的串口设备`, 'info')
    
    for (let i = 0; i < ports.length; i++) {
      const port = ports[i]
      const info = port.getInfo()
      const vendorId = info.usbVendorId?.toString(16).toUpperCase().padStart(4, '0') || 'XXXX'
      const productId = info.usbProductId?.toString(16).toUpperCase().padStart(4, '0') || 'XXXX'
      
      let deviceName = '未知设备'
      if (info.usbVendorId === 0x10c4) deviceName = 'CP210x 系列'
      else if (info.usbVendorId === 0x1a86) deviceName = 'CH340 系列'
      else if (info.usbVendorId === 0x0403) deviceName = 'FTDI FT232 系列'
      else if (info.usbVendorId === 0x303a) deviceName = 'ESP32 原生USB'
      
      addLog(`📱 设备 ${i + 1}: ${deviceName} (VID=${vendorId}, PID=${productId})`, 'info')
    }
    
    return ports
  } catch (error) {
    addLog(`❌ 检测设备失败: ${error.message}`, 'error')
    return []
  }
}

// 连接设备
const connectToDevice = async () => {
  try {
    connectionStatus.value = '连接中'
    addLog('🚀 开始连接ESP32设备...', 'info')

    if (!navigator.serial) {
      throw new Error('浏览器不支持Web Serial API，请使用Chrome、Edge等现代浏览器。')
    }

    // 清理旧连接
    await cleanupConnection()

    if (!ESPLoader || !Transport) {
      try {
        addLog('📦 正在加载 esptool-js 库...', 'info')
        const esptoolModule = await import('esptool-js')
        ESPLoader = esptoolModule.ESPLoader
        Transport = esptoolModule.Transport
        addLog('✅ esptool-js 库加载成功', 'success')
      } catch (importError) {
        throw new Error(`无法加载 esptool-js 库: ${importError.message}`)
      }
    }

    addLog('📋 请在弹出的对话框中选择 ESP32 设备...', 'info')
    
    let port
    try {
      port = await navigator.serial.requestPort()
      currentPort = port
    } catch (selectError) {
      if (selectError.name === 'NotFoundError') {
        throw new Error('用户取消选择设备或没有可用设备')
      }
      throw selectError
    }

    const deviceInfo = port.getInfo()
    const vendorId = deviceInfo.usbVendorId?.toString(16).toUpperCase().padStart(4, '0') || '未知'
    const productId = deviceInfo.usbProductId?.toString(16).toUpperCase().padStart(4, '0') || '未知'
    
    let deviceType = '未知设备'
    if (deviceInfo.usbVendorId === 0x10c4) deviceType = 'CP210x 系列'
    else if (deviceInfo.usbVendorId === 0x1a86) deviceType = 'CH340 系列'
    else if (deviceInfo.usbVendorId === 0x0403) deviceType = 'FTDI FT232 系列'
    else if (deviceInfo.usbVendorId === 0x303a) deviceType = 'ESP32 原生USB'
    
    addLog(`✅ 已选择串口设备: ${deviceType} (VID=${vendorId}, PID=${productId})`, 'success')

    addLog(`🔌 正在创建Transport实例...`, 'info')
    transport = new Transport(port, true)
    addLog('✅ Transport 实例创建成功', 'success')
    
    const terminal = createTerminal()
    const loaderOptions = {
      transport: transport,
      baudrate: props.baudRate,
      terminal: terminal,
      debugLogging: false,
      // 关闭底层 tracing，避免潜在的字符串解析路径
    //   enableTracing: false,
      // 明确指定 Flash 大小，绕过自动解析
    //   flashSize: 'detect'
    }
    espLoader = new ESPLoader(loaderOptions)
    addLog('✅ ESPLoader 实例创建成功', 'success')

    addLog('🔍 开始主连接流程...', 'info')
    const chipName = await espLoader.main()
    addLog(`🎯 检测到芯片: ${chipName}`, 'success')

    // 读取 Flash ID 并解析容量
    try {
      const flashId = await espLoader.readFlashId()
      const sizeId = (flashId >>> 16) & 0xff
      const sizeStr = espLoader.DETECTED_FLASH_SIZES?.[sizeId] || '未知'
      detectedFlashSize.value = sizeStr
      addLog(`🧭 Flash ID: 0x${flashId.toString(16)}，容量: ${sizeStr}`, 'info')
    } catch (e) {
      addLog('⚠️ 读取 Flash ID 失败，无法解析容量', 'warning')
    }

    connectionStatus.value = '已连接'
    isConnected.value = true
    addLog('🎉 设备连接完成！', 'success')

  } catch (error) {
    connectionStatus.value = '连接错误'
    isConnected.value = false
    
    addLog(`❌ 连接失败: ${error.message}`, 'error')
    
    await cleanupConnection()
  }
}

// 清理连接
const cleanupConnection = async () => {
  try {
    if (transport) {
      await transport.disconnect()
      addLog('🔌 Transport已断开', 'info')
    }
  } catch (error) {
    addLog(`断开连接时出现警告: ${error.message}`, 'warning')
  }
  
  // 清理引用
  transport = null
  espLoader = null
  currentPort = null
}

// 强制重置状态
const forceReset = async () => {
  addLog('🔄 正在执行强制重置...', 'warning')
  
  connectionStatus.value = '未连接'
  isConnected.value = false
  isFlashing.value = false
  showProgress.value = false
  progressPercentage.value = 0
  progressText.value = ''
  
  await cleanupConnection()
  
  addLog('✅ 强制重置完成', 'success')
}

// 断开连接  
const disconnectDevice = async () => {
  try {
    connectionStatus.value = '断开中'
    addLog('🔌 正在断开连接...', 'info')
    
    await cleanupConnection()
    
    connectionStatus.value = '未连接'
    isConnected.value = false
    showProgress.value = false
    progressPercentage.value = 0
    
    addLog('✅ 设备已断开连接', 'success')
  } catch (error) {
    addLog(`断开连接时出错: ${error.message}`, 'warning')
  } finally {
    connectionStatus.value = '未连接'
    isConnected.value = false
  }
}

// 开始烧录
const startFlashing = async () => {
  // 先确保已选择固件
  if (!selectedFirmware.value) {
    addLog('❌ 请先选择固件', 'error')
    return
  }

  // 若尚未连接，则自动尝试连接一次
  if (!espLoader) {
    addLog('🔌 未连接设备，正在尝试连接...', 'info')
    try {
      await connectToDevice()
    } catch (e) {
      // 连接内部已记录日志
    }
    if (!espLoader) {
      addLog('❌ 未能连接到设备，无法开始烧录', 'error')
      return
    }
  }

  try {
    isFlashing.value = true
    connectionStatus.value = '烧录中'
    showProgress.value = true
    
    addLog(`🚀 开始烧录固件: ${selectedFirmware.value.name}`, 'info')
    
    updateProgress(5, '下载固件文件...')

    let firmwareData
    if (firmwareCache.has(selectedFirmware.value.url)) {
      firmwareData = firmwareCache.get(selectedFirmware.value.url)
      addLog('✅ 使用已缓存的固件数据', 'success')
    } else {
      const response = await fetch(selectedFirmware.value.url)
      if (!response.ok) throw new Error(`固件下载失败: ${response.status}`)
      firmwareData = await response.arrayBuffer()
      firmwareCache.set(selectedFirmware.value.url, firmwareData)
    }
    // 根据官方示例的方法，直接使用字符串转换而不是字节转换
    const uint8Array = new Uint8Array(firmwareData)
    let firmwareString = ''
    for (let i = 0; i < uint8Array.length; i++) {
      firmwareString += String.fromCharCode(uint8Array[i])
    }
    
    addLog(`✅ 固件下载完成，大小: ${firmwareData.byteLength} 字节`, 'success')
    updateProgress(20, '准备烧录...')

    const flashSize = detectedFlashSize.value || 'keep'
    addLog(`⚙️ Flash 大小: ${flashSize}`, 'info')

    const flashOptions = {
      fileArray: [{
        address: selectedFirmware.value.address,
        data: firmwareString
      }],
      flashMode: 'keep',
      flashFreq: 'keep',
      flashSize,
      eraseAll: false,
      compress: true,
      reportProgress: (fileIndex, written, total) => {
        const progress = Math.round((written / total) * 80) + 20
        const progressText = `烧录进度: ${Math.round((written / total) * 100)}% (${written}/${total} 字节)`
        updateProgress(progress, progressText)
        addLog(progressText, 'info')
      }
    }

    addLog('⚡ 开始写入闪存...', 'info')
    await espLoader.writeFlash(flashOptions)
    
    updateProgress(100, '烧录完成')
    connectionStatus.value = '烧录完成'
    addLog('🎉 固件烧录完成！', 'success')
    addLog('🔄 设备正在重启...', 'info')
    
    setTimeout(() => {
      showProgress.value = false
      progressPercentage.value = 0
    }, 2000)

  } catch (error) {
    addLog(`❌ 烧录失败: ${error.message}`, 'error')
    if (error && error.stack) {
      addLog(String(error.stack).split('\n')[0], 'error')
    }
    connectionStatus.value = '已连接'
    updateProgress(0, '烧录失败')
    setTimeout(() => {
      showProgress.value = false
    }, 2000)
  } finally {
    isFlashing.value = false
  }
}

// 擦除 Flash（整片擦除）
const eraseFlashChip = async () => {
  if (!espLoader) {
    addLog('❌ 请先连接设备再进行擦除', 'error')
    return
  }
  try {
    isErasing.value = true
    addLog('🧹 开始整片擦除 Flash，这可能需要一段时间...', 'warning')
    await espLoader.eraseFlash()
    addLog('✅ 擦除完成', 'success')
  } catch (error) {
    addLog(`❌ 擦除失败: ${error?.message || error}`, 'error')
  } finally {
    isErasing.value = false
  }
}
</script>

<style scoped>
.esp-flasher {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.status-area {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.connection-status {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
}

.status-icon {
  margin-right: 10px;
  font-size: 18px;
}

.connection-status.未连接 {
  color: #666;
}

.connection-status.连接中 {
  color: #ff9800;
}

.connection-status.已连接 {
  color: #4caf50;
}

.connection-status.烧录中 {
  color: #2196f3;
}

.connection-status.烧录完成 {
  color: #4caf50;
}

.connection-status.连接错误 {
  color: #f44336;
}

.progress-section {
  margin-top: 15px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #81c784);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.firmware-section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.firmware-section h3 {
  margin: 0 0 15px 0;
  color: #333;
}

.firmware-selection select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 15px;
}

.firmware-details {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid #4caf50;
}

.firmware-details p {
  margin: 5px 0;
  font-size: 14px;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #2196f3;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #1976d2;
}

.btn-success {
  background-color: #4caf50;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background-color: #388e3c;
}

.btn-secondary {
  background-color: #757575;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #616161;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover:not(:disabled) {
  background-color: #138496;
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning:hover:not(:disabled) {
  background-color: #e0a800;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}

.btn-danger:hover:not(:disabled) {
  background-color: #c82333;
}

.terminal {
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.terminal h3 {
  margin: 0;
  padding: 15px;
  background-color: #f5f5f5;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
}

.log-output {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  background-color: #1e1e1e;
  color: #f0f0f0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.4;
}

.log-entry {
  display: flex;
  margin-bottom: 5px;
}

.log-timestamp {
  color: #888;
  margin-right: 10px;
  min-width: 80px;
  font-size: 12px;
}

.log-message {
  flex: 1;
}

.log-info {
  color: #f0f0f0;
}

.log-success {
  color: #4caf50;
}

.log-warning {
  color: #ff9800;
}

.log-error {
  color: #f44336;
}

.log-device {
  color: #2196f3;
}

.btn-clear {
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 8px 16px;
  font-size: 12px;
}

.btn-clear:hover:not(:disabled) {
  background-color: #e0e0e0;
}

/* 响应式设计 */
@media (max-width: 600px) {
  .esp-flasher {
    margin: 10px;
    padding: 15px;
  }
  
  .controls {
    flex-direction: column;
  }
  
  .btn {
    min-width: auto;
    width: 100%;
  }
}
</style>