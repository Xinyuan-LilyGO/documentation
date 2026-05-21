中文 | [English](README.md)

# LILYGO Documentation

LILYGO 产品文档站，基于 [VitePress](https://vitepress.dev/) 构建，支持中英双语。

## 环境要求

- [Node.js](https://nodejs.org/) 18+
- npm

## 安装依赖

```bash
npm install
```

## 开发模式

```bash
npm run dev
```

启动后访问 `http://localhost:5173`（或终端输出的地址）。`--host` 参数已内置，局域网内其他设备也可访问。

修改 `.md` 文件或 `.vitepress/` 下的配置/组件后，页面会自动热更新。

## 构建生产版本

```bash
npm run build
```

构建产物输出到 `vitepress-dist/` 。

## 预览生产构建

```bash
npm run preview
```

在本地预览 `build` 生成的静态文件，用于上线前验证。

## 内容结构

```
en/          # 英文文档
  products/  # 产品页，每个产品一个 index.md
  open-source/
  dev-tools/
zh/          # 中文文档（目录结构与 en/ 镜像）
public/      # 静态资源（图片、logo、固件 .bin 文件）
.vitepress/
  config.mts          # 根配置
  config/en.ts        # 英文侧边栏（自动扫描文件系统生成）
  config/zh.ts        # 中文侧边栏
  products.data.ts    # 产品目录数据加载器
  theme/              # 自定义主题与 Vue 组件
```

## 贡献指南

详细的文档规范、产品命名对照表和产品页结构说明，请参阅 [CONTRIBUTING.zh.md](CONTRIBUTING.zh.md)。
