(function () {
  const data = window.K230_PINOUT;
  const pinmap = document.getElementById("pinmap");
  const detail = document.getElementById("detail");
  const search = document.getElementById("search");
  const filters = document.getElementById("filters");
  const summary = document.getElementById("summary");
  const boardTabs = document.getElementById("board-tabs");
  const activeBoardEl = document.getElementById("active-board");
  const moduleList = document.getElementById("module-list");
  const usageTable = document.getElementById("usage-table");
  const boardCount = document.getElementById("board-count");
  const usageCount = document.getElementById("usage-count");
  const mappedCount = document.getElementById("mapped-count");
  const langSwitch = document.getElementById("lang-switch");

  const I18N = {
    zh: {
      appTitle: "K230 底板 GPIO 占用查询工具",
      subtitle: "按底板查看 GPIO 占用、40Pin 引出和 FPIOA 复用功能",
      baseboards: "底板",
      moduleUsage: "模块占用",
      filterCategories: "功能分类",
      searchPlaceholder: "搜索 GPIO47 / UART / LoRa / SDA / PIN 7",
      filters: {
        ALL: "全部",
        USED: "已占用",
        GPIO: "GPIO",
        UART: "UART",
        I2C: "IIC",
        QSPI: "QSPI/OSPI",
        I2S: "IIS",
        JTAG: "JTAG",
        PWM: "PWM",
        PDM: "PDM",
        MMC: "MMC",
        ADC: "ADC",
        POWER: "电源",
        GND: "GND",
      },
      boards: {
        main: { name: "主板设备", desc: "LoRa、Touch、屏幕、SDMMC、HDMI、Camera 等主板资源占用。" },
        nrf52840: { name: "nRF52840 底板", desc: "nRF52840 串口、AHT20 传感器和 MAX98357A 音频功放占用。" },
        "nrf9151-keyboard": { name: "nRF9151 + Keyboard 底板", desc: "nRF9151、充电/电量计、键盘扩展和键盘背光占用。" },
      },
      currentSelection: "当前选择",
      gpioMetric: "GPIO",
      headerMetric: "40Pin",
      sharedMetric: "共享",
      state: { shared: "共享", mapped: "40Pin", "off-header": "未引出", meta: "信息" },
      type: { ground: "地", power: "电源", analog: "模拟输入", io: "可复用 IO" },
      detail: {
        baseHeader: "排针",
        chip: "芯片",
        chipBall: "K230 球位",
        powerDomain: "电源域",
        ioType: "IO 类型",
        direction: "方向",
        type: "类型",
        signal: "信号",
        status: "状态",
        currentUsage: "当前底板占用",
        noUsage: "当前底板未占用此 GPIO。",
        relatedBus: "相关总线脚：",
        k230Gpio: "K230 GPIO",
        sharedInfo: "共享情况",
        exclusive: "独占或非 GPIO 信息",
        pinDefinition: "引脚定义",
        notOnHeader: "未在当前 40Pin 引出",
        offHeaderNote: "该 GPIO 没有出现在当前 GPIO-40 排针列表中，但仍属于 K230 侧资源占用。",
      },
    },
    en: {
      appTitle: "K230 Baseboard GPIO Usage Explorer",
      subtitle: "Switch baseboards to inspect GPIO usage, 40Pin routing, and FPIOA mux functions",
      baseboards: "Baseboards",
      moduleUsage: "Module usage",
      filterCategories: "Function categories",
      searchPlaceholder: "Search GPIO47 / UART / LoRa / SDA / PIN 7",
      filters: {
        ALL: "All",
        USED: "Used",
        GPIO: "GPIO",
        UART: "UART",
        I2C: "I2C",
        QSPI: "QSPI/OSPI",
        I2S: "I2S",
        JTAG: "JTAG",
        PWM: "PWM",
        PDM: "PDM",
        MMC: "MMC",
        ADC: "ADC",
        POWER: "Power",
        GND: "GND",
      },
      boards: {
        main: { name: "Main Board Devices", desc: "GPIO usage for LoRa, touch, display, SDMMC, HDMI, camera, and other onboard resources." },
        nrf52840: { name: "nRF52840 Baseboard", desc: "GPIO usage for the nRF52840 UART, AHT20 sensor, and MAX98357A audio amplifier." },
        "nrf9151-keyboard": { name: "nRF9151 + Keyboard Baseboard", desc: "GPIO usage for nRF9151, charger, fuel gauge, keyboard expander, and keyboard backlight." },
      },
      currentSelection: "Selected",
      gpioMetric: "GPIO",
      headerMetric: "40Pin",
      sharedMetric: "Shared",
      state: { shared: "Shared", mapped: "40Pin", "off-header": "Off header", meta: "Info" },
      type: { ground: "Ground", power: "Power", analog: "Analog input", io: "Muxable IO" },
      detail: {
        baseHeader: "Header",
        chip: "Chip",
        chipBall: "K230 ball",
        powerDomain: "Power domain",
        ioType: "IO type",
        direction: "Direction",
        type: "Type",
        signal: "Signal",
        status: "Status",
        currentUsage: "Current baseboard usage",
        noUsage: "This GPIO is not used by the selected baseboard.",
        relatedBus: "Related bus pins: ",
        k230Gpio: "K230 GPIO",
        sharedInfo: "Sharing",
        exclusive: "Exclusive or non-GPIO info",
        pinDefinition: "Pin definition",
        notOnHeader: "Not routed to this 40Pin header",
        offHeaderNote: "This GPIO is not present in the current GPIO-40 header list, but it is still a K230-side resource usage.",
      },
    },
    ja: {
      appTitle: "K230 ベースボード GPIO 使用状況ツール",
      subtitle: "ベースボードごとに GPIO 使用状況、40Pin 配線、FPIOA 多重化機能を確認",
      baseboards: "ベースボード",
      moduleUsage: "モジュール使用状況",
      filterCategories: "機能カテゴリ",
      searchPlaceholder: "GPIO47 / UART / LoRa / SDA / PIN 7 を検索",
      filters: {
        ALL: "すべて",
        USED: "使用中",
        GPIO: "GPIO",
        UART: "UART",
        I2C: "I2C",
        QSPI: "QSPI/OSPI",
        I2S: "I2S",
        JTAG: "JTAG",
        PWM: "PWM",
        PDM: "PDM",
        MMC: "MMC",
        ADC: "ADC",
        POWER: "電源",
        GND: "GND",
      },
      boards: {
        main: { name: "メインボード機器", desc: "LoRa、Touch、Display、SDMMC、HDMI、Camera などのオンボードリソースの GPIO 使用状況。" },
        nrf52840: { name: "nRF52840 ベースボード", desc: "nRF52840 UART、AHT20 センサー、MAX98357A オーディオアンプの GPIO 使用状況。" },
        "nrf9151-keyboard": { name: "nRF9151 + Keyboard ベースボード", desc: "nRF9151、充電 IC、燃料計、キーボード拡張、キーボードバックライトの GPIO 使用状況。" },
      },
      currentSelection: "選択中",
      gpioMetric: "GPIO",
      headerMetric: "40Pin",
      sharedMetric: "共有",
      state: { shared: "共有", mapped: "40Pin", "off-header": "未引出", meta: "情報" },
      type: { ground: "GND", power: "電源", analog: "アナログ入力", io: "多重化 IO" },
      detail: {
        baseHeader: "ヘッダー",
        chip: "チップ",
        chipBall: "K230 ボール",
        powerDomain: "電源ドメイン",
        ioType: "IO 種別",
        direction: "方向",
        type: "種類",
        signal: "信号",
        status: "状態",
        currentUsage: "現在のベースボード使用状況",
        noUsage: "選択中のベースボードではこの GPIO は使用されていません。",
        relatedBus: "関連バスピン: ",
        k230Gpio: "K230 GPIO",
        sharedInfo: "共有状況",
        exclusive: "専有または非 GPIO 情報",
        pinDefinition: "ピン定義",
        notOnHeader: "現在の 40Pin には未引出",
        offHeaderNote: "この GPIO は現在の GPIO-40 ヘッダー一覧にはありませんが、K230 側リソースとして使用されています。",
      },
    },
  };

  const supportedLangs = new Set(["zh", "en", "ja"]);
  function getSavedLang() {
    try {
      return window.localStorage.getItem("k230-pinout-lang");
    } catch {
      return "";
    }
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem("k230-pinout-lang", lang);
    } catch {
      // Language switching still works for the current page if storage is unavailable.
    }
  }

  let currentLang = (() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = getSavedLang();
    return supportedLangs.has(urlLang) ? urlLang : supportedLangs.has(savedLang) ? savedLang : "zh";
  })();

  function t(path) {
    return path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), I18N[currentLang]) ?? path;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : currentLang;
    document.title = t("appTitle");
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
    });
    if (langSwitch) {
      langSwitch.querySelectorAll("[data-lang]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === currentLang));
      });
    }
  }

  function refreshLocalizedView() {
    applyStaticTranslations();
    renderFilters();
    renderBoards();
    renderActiveBoard();
    renderModules();
    renderUsageTable();
    applyBoardUsageToMap();
    applyFilter();
    if (selectedUsageId && currentBoard().usages.some((usage) => usage.id === selectedUsageId)) {
      selectUsage(selectedUsageId);
    } else {
      selectPin(selectedPin);
    }
  }

  const BASEBOARDS = [
    {
      id: "main",
      name: "主板设备",
      desc: "LoRa、Touch、屏幕、SDMMC、HDMI、Camera 等主板资源占用。",
      modules: [
        ["LoRa", [["MOSI", "GPIO16"], ["MISO", "GPIO17"], ["SCK", "GPIO15"], ["CS", "GPIO14"], ["RST", "GPIO5"], ["BUSY", "GPIO19"], ["IRQ", "GPIO20"], ["ENABLE", "GPIO44"]]],
        ["Touch", [["SDA", "GPIO37"], ["SCL", "GPIO36"], ["IRQ", "GPIO23"], ["RST", "GPIO24"]]],
        ["RM69A10", [["RST", "GPIO22"], ["ENABLE", "GPIO25"]]],
        ["SDMMC", [["SD CMD", "GPIO54"], ["SD CLK", "GPIO55"], ["SD D0", "GPIO56"], ["SD D1", "GPIO57"], ["SD D2", "GPIO58"], ["SD D3", "GPIO59"]]],
        ["LT9611 HDMI", [["RST", "GPIO24"], ["IRQ", "GPIO23"], ["SCL", "GPIO36"], ["SDA", "GPIO37"]]],
        ["CAMERA GC2093", [["SCL", "GPIO48"], ["SDA", "GPIO49"]]],
      ],
    },
    {
      id: "nrf52840",
      name: "nRF52840 底板",
      desc: "nRF52840 串口、AHT20 传感器和 MAX98357A 音频功放占用。",
      modules: [
        ["nRF52840", [["RX = P0.11", "UART1 TX=GPIO3"], ["TX = P0.12", "UART1 RX=GPIO4"], ["LED = P1.00", "Built-in LED"], ["5V EN = P0.04", "Boost enable"]]],
        ["AHT20 Sensor", [["SCL", "46"], ["SDA", "47"]]],
        ["MAX98357A", [["DOUT", "35"], ["CLK", "32"], ["WS", "33"]]],
      ],
    },
    {
      id: "nrf9151-keyboard",
      name: "nRF9151 + Keyboard 底板",
      desc: "nRF9151、充电/电量计、键盘扩展和键盘背光占用。",
      modules: [
        ["nRF9151", [["UART1 TX1=P0.27", "29"], ["UART1 RX1=P0.26", "28"], ["LED=P0.23", ""], ["POWER ENABLE", "GPIO2"]]],
        ["BQ25896", [["SDA", "47"], ["SCL", "46"], ["Address", "0x6B"]]],
        ["BQ27220", [["SDA", "47"], ["SCL", "46"], ["Address", "0x55"]]],
        ["TCA8418", [["SDA", "47"], ["SCL", "46"], ["RST", "43"], ["IRQ", "42"], ["Address", "0x69"]]],
        ["XL9555", [["SDA", "47"], ["SCL", "46"], ["Address", "0x20"]]],
        ["KEYBOARD LIGHT", [["PWM", "52"]]],
      ],
    },
  ];

  const filterDefs = [
    ["全部", "ALL", "c-pin"],
    ["已占用", "USED", "c-used"],
    ["GPIO", "GPIO", "c-gpio"],
    ["UART", "UART", "c-uart"],
    ["IIC", "I2C", "c-i2c"],
    ["QSPI/OSPI", "QSPI", "c-qspi"],
    ["IIS", "I2S", "c-i2s"],
    ["JTAG", "JTAG", "c-jtag"],
    ["PWM", "PWM", "c-pwm"],
    ["PDM", "PDM", "c-pdm"],
    ["MMC", "MMC", "c-mmc"],
    ["ADC", "ADC", "c-adc"],
    ["电源", "POWER", "c-power"],
    ["GND", "GND", "c-gnd"],
  ];

  const pins = data.pins.map((pin) => ({
    ...pin,
    gpio: normalizeGpio(pin.label),
    search: [
      `PIN ${pin.number}`,
      pin.number,
      pin.label,
      pin.chipName,
      pin.chipPin,
      pin.power,
      pin.ioType,
      pin.direction,
      ...pin.functions.flatMap((fn) => [fn.signal, fn.desc, fn.category]),
    ].join(" ").toUpperCase(),
  }));
  const pinByGpio = new Map(pins.filter((pin) => pin.gpio).map((pin) => [pin.gpio, pin]));

  const boards = BASEBOARDS.map(normalizeBoard);
  let activeBoardId = boards[0].id;
  let activeFilter = "ALL";
  let selectedPin = 1;
  let selectedUsageId = "";

  function normalizeBoard(board) {
    const names = Object.values(I18N).map((dict) => dict.boards[board.id]?.name).filter(Boolean);
    const descs = Object.values(I18N).map((dict) => dict.boards[board.id]?.desc).filter(Boolean);
    let index = 0;
    const modules = board.modules.map(([name, rows]) => ({
      name,
      rows: rows.map(([signal, raw]) => {
        const gpio = normalizeGpio(raw);
        const pin = gpio ? pinByGpio.get(gpio) : null;
        return {
          id: `${board.id}-${index++}`,
          module: name,
          signal,
          raw: String(raw || "").trim(),
          gpio,
          pinNo: pin ? pin.number : null,
          search: [board.name, ...names, ...descs, name, signal, raw, gpio, pin ? `PIN ${pin.number}` : ""].join(" ").toUpperCase(),
        };
      }),
    }));
    return { ...board, modules, usages: modules.flatMap((module) => module.rows) };
  }

  function normalizeGpio(value) {
    const text = String(value || "").trim();
    if (!text || /^0x[0-9a-f]+$/i.test(text)) return "";
    const match = text.match(/GPIO\s*(\d+)/i) || text.match(/^\s*(\d{1,2})\s*$/);
    return match ? `GPIO${match[1]}` : "";
  }

  function pad(num) {
    return String(num).padStart(2, "0");
  }

  function esc(text) {
    return String(text ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function currentBoard() {
    return boards.find((board) => board.id === activeBoardId) || boards[0];
  }

  function currentUsageByGpio() {
    const map = new Map();
    currentBoard().usages.forEach((usage) => {
      if (!usage.gpio) return;
      if (!map.has(usage.gpio)) map.set(usage.gpio, []);
      map.get(usage.gpio).push(usage);
    });
    return map;
  }

  function chipClass(value) {
    const key = String(value).toUpperCase();
    if (key === "USED") return "c-used";
    if (key === "GND") return "c-gnd";
    if (key === "POWER") return "c-power";
    if (key === "ADC") return "c-adc";
    if (key === "GPIO") return "c-gpio";
    if (key === "UART") return "c-uart";
    if (key === "I2C") return "c-i2c";
    if (key === "QSPI") return "c-qspi";
    if (key === "I2S") return "c-i2s";
    if (key === "JTAG") return "c-jtag";
    if (key === "PWM") return "c-pwm";
    if (key === "PDM") return "c-pdm";
    if (key === "MMC") return "c-mmc";
    return "c-func";
  }

  function coreClass(pin) {
    if (pin.categories.includes("GND")) return "gnd";
    if (pin.categories.includes("POWER")) return "power";
    if (pin.categories.includes("ADC")) return "adc";
    return "";
  }

  function shortSignals(pin) {
    const list = pin.functions
      .filter((fn) => fn.signal !== pin.label && fn.signal !== pin.chipName)
      .map((fn) => fn.signal);
    const base = pin.categories.includes("POWER") || pin.categories.includes("GND") ? pin.label : pin.chipName;
    return [base, ...list].filter(Boolean).slice(0, 4);
  }

  function chips(pin) {
    return shortSignals(pin)
      .map((signal) => {
        const fn = pin.functions.find((item) => item.signal === signal);
        const cls = chipClass(fn ? fn.category : pin.categories[0]);
        return `<span class="chip ${cls}" data-pin="${pin.number}" title="PIN ${pad(pin.number)} - ${esc(signal)}">${esc(signal)}</span>`;
      })
      .join("");
  }

  function rowMarkup(left, right) {
    return `
      <div class="chips left" data-pin-group="${left.number}">${chips(left)}</div>
      <div class="wire-pin left" data-pin-wire="${left.number}">
        <span class="num" data-pin="${left.number}">${pad(left.number)}</span><span class="wire"></span>
      </div>
      <div class="core left ${coreClass(left)}" data-pin="${left.number}" data-gpio="${esc(left.gpio)}" title="PIN ${pad(left.number)} - ${esc(left.label)}">
        <span>${esc(left.label)}</span><small data-pin-usage="${left.number}"></small>
      </div>
      <div class="core right ${coreClass(right)}" data-pin="${right.number}" data-gpio="${esc(right.gpio)}" title="PIN ${pad(right.number)} - ${esc(right.label)}">
        <span>${esc(right.label)}</span><small data-pin-usage="${right.number}"></small>
      </div>
      <div class="wire-pin right" data-pin-wire="${right.number}">
        <span class="wire"></span><span class="num" data-pin="${right.number}">${pad(right.number)}</span>
      </div>
      <div class="chips right" data-pin-group="${right.number}">${chips(right)}</div>
    `;
  }

  function renderFilters() {
    filters.innerHTML = filterDefs
      .map(([, key, cls]) => `<button type="button" class="${cls}" data-key="${key}" aria-pressed="${key === activeFilter}">${t(`filters.${key}`)}</button>`)
      .join("");
  }

  function renderPinmap() {
    for (let odd = 1; odd <= 39; odd += 2) {
      const left = pins.find((pin) => pin.number === odd);
      const right = pins.find((pin) => pin.number === odd + 1);
      pinmap.insertAdjacentHTML("beforeend", rowMarkup(left, right));
    }
  }

  function renderSummary() {
    if (!summary) return;
    const counts = new Map();
    pins.forEach((pin) => pin.categories.forEach((category) => counts.set(category, (counts.get(category) || 0) + 1)));
    summary.innerHTML = filterDefs
      .filter(([, key]) => !["ALL", "USED"].includes(key) && counts.has(key))
      .map(([label, key]) => `<div class="summary-item"><span>${label}</span><strong>${counts.get(key)}</strong></div>`)
      .join("");
  }

  function renderBoards() {
    boardCount.textContent = boards.length;
    boardTabs.innerHTML = boards.map((board) => {
      const used = board.usages.filter((usage) => usage.gpio).length;
      const boardText = t(`boards.${board.id}.name`);
      return `
        <button type="button" class="board-tab" data-board="${board.id}" aria-pressed="${board.id === activeBoardId}">
          <span>${esc(boardText)}</span>
          <strong>${used}</strong>
        </button>
      `;
    }).join("");
  }

  function renderActiveBoard() {
    const board = currentBoard();
    const gpioUsages = board.usages.filter((usage) => usage.gpio);
    const onHeader = gpioUsages.filter((usage) => usage.pinNo).length;
    const shared = [...currentUsageByGpio().values()].filter((items) => items.length > 1).length;
    activeBoardEl.innerHTML = `
      <span class="eyebrow">${esc(t("currentSelection"))}</span>
      <h2>${esc(t(`boards.${board.id}.name`))}</h2>
      <p>${esc(t(`boards.${board.id}.desc`))}</p>
      <div class="metric-row">
        <span><b>${gpioUsages.length}</b> ${esc(t("gpioMetric"))}</span>
        <span><b>${onHeader}</b> ${esc(t("headerMetric"))}</span>
        <span><b>${shared}</b> ${esc(t("sharedMetric"))}</span>
      </div>
    `;
  }

  function usageState(usage, usageByGpio) {
    if (!usage.gpio) return "meta";
    const list = usageByGpio.get(usage.gpio) || [];
    if (list.length > 1) return "shared";
    return usage.pinNo ? "mapped" : "off-header";
  }

  function stateText(state) {
    return t(`state.${state}`);
  }

  function renderModules() {
    const board = currentBoard();
    const usageByGpio = currentUsageByGpio();
    usageCount.textContent = board.usages.filter((usage) => usage.gpio).length;
    moduleList.innerHTML = board.modules.map((module) => `
      <article class="module-card">
        <h3>${esc(module.name)}<span>${module.rows.filter((usage) => usage.gpio).length}</span></h3>
        <div class="module-rows">
          ${module.rows.map((usage) => {
            const state = usageState(usage, usageByGpio);
            return `
              <button type="button" class="usage-row ${state}" data-usage="${usage.id}">
                <span class="usage-signal">${esc(usage.signal)}</span>
                <span class="usage-gpio">${esc(usage.gpio || usage.raw || "-")}</span>
                <small>${stateText(state)}</small>
              </button>
            `;
          }).join("")}
        </div>
      </article>
    `).join("");
  }

  function renderUsageTable() {
    if (!usageTable || !mappedCount) return;
    const board = currentBoard();
    const usageByGpio = currentUsageByGpio();
    mappedCount.textContent = `${board.usages.filter((usage) => usage.pinNo).length}/${board.usages.filter((usage) => usage.gpio).length}`;
    usageTable.innerHTML = `
      <div class="usage-head"><span>${esc(t("moduleUsage"))}</span><span>${esc(t("detail.signal"))}</span><span>K230 GPIO</span><span>40Pin</span><span>${esc(t("detail.status"))}</span></div>
      ${board.usages.map((usage) => {
        const state = usageState(usage, usageByGpio);
        return `
          <button type="button" class="usage-line ${state}" data-usage="${usage.id}">
            <span>${esc(usage.module)}</span>
            <span>${esc(usage.signal)}</span>
            <span>${esc(usage.gpio || usage.raw || "-")}</span>
            <span>${usage.pinNo ? `PIN ${pad(usage.pinNo)}` : "-"}</span>
            <span>${stateText(state)}</span>
          </button>
        `;
      }).join("")}
    `;
  }

  function busKey(signal) {
    const s = signal.toUpperCase();
    const tests = [/^(UART\d+)_/, /^(IIC\d+)_/, /^(IIS)_/, /^(QSPI\d+)_/, /^(OSPI)_/, /^(JTAG)_/, /^(PDM)_/, /^(MMC\d+)_/];
    for (const test of tests) {
      const match = s.match(test);
      if (match) return match[1];
    }
    return "";
  }

  function findPartners(pin) {
    const keys = new Set(pin.functions.map((fn) => busKey(fn.signal)).filter(Boolean));
    if (!keys.size) return [];
    return pins.filter((item) => item.number !== pin.number && item.functions.some((fn) => keys.has(busKey(fn.signal))));
  }

  function typeName(pin) {
    if (pin.categories.includes("GND")) return t("type.ground");
    if (pin.categories.includes("POWER")) return t("type.power");
    if (pin.categories.includes("ADC")) return t("type.analog");
    return t("type.io");
  }

  function renderFunctionRows(pin) {
    return pin.functions.map((fn) => `
      <div class="func-row">
        <span class="chip ${chipClass(fn.category)}">${esc(fn.signal)}</span>
        <p>${esc(fn.desc || fn.category)}${fn.no ? ` · FUNC ${esc(fn.no)}` : ""}</p>
      </div>
    `).join("");
  }

  function usageListForPin(pin) {
    if (!pin.gpio) return [];
    return currentBoard().usages.filter((usage) => usage.gpio === pin.gpio);
  }

  function renderPinDetail(pin) {
    const partners = findPartners(pin);
    const usages = usageListForPin(pin);
    const usageHtml = usages.length
      ? `<div class="usage-detail"><h3>${esc(t("detail.currentUsage"))}</h3>${usages.map((usage) => `<p><b>${esc(usage.module)}</b> · ${esc(usage.signal)}</p>`).join("")}</div>`
      : `<div class="usage-detail empty">${esc(t("detail.noUsage"))}</div>`;
    const pairHtml = partners.length
      ? `<p class="pair-box"><b>${esc(t("detail.relatedBus"))}</b>${partners.map((item) => `PIN ${pad(item.number)} (${esc(item.label)})`).join(" / ")}</p>`
      : "";

    detail.innerHTML = `
      <span class="detail-pin">PIN ${pad(pin.number)} - ${esc(pin.label)}</span>
      <h2>${esc(pin.chipName || pin.label)}</h2>
      <dl>
        <dt>${esc(t("detail.baseHeader"))}</dt><dd>${esc(data.meta.header)}</dd>
        <dt>${esc(t("detail.chip"))}</dt><dd>${esc(data.meta.board)}</dd>
        <dt>${esc(t("detail.chipBall"))}</dt><dd>${esc(pin.chipPin || "-")}</dd>
        <dt>${esc(t("detail.powerDomain"))}</dt><dd>${esc(pin.power || "-")}</dd>
        <dt>${esc(t("detail.ioType"))}</dt><dd>${esc(pin.ioType || "-")}</dd>
        <dt>${esc(t("detail.direction"))}</dt><dd>${esc(pin.direction || "-")}</dd>
        <dt>${esc(t("detail.type"))}</dt><dd>${typeName(pin)}</dd>
      </dl>
      <div class="detail-tags">${pin.categories.map((category) => `<span class="chip ${chipClass(category)}">${esc(category)}</span>`).join("")}</div>
      ${usageHtml}
      <div class="function-list">${renderFunctionRows(pin)}</div>
      ${pairHtml}
    `;
  }

  function renderUsageDetail(usage) {
    const pin = usage.pinNo ? pins.find((item) => item.number === usage.pinNo) : null;
    const same = usage.gpio ? currentBoard().usages.filter((item) => item.gpio === usage.gpio) : [];
    detail.innerHTML = `
      <span class="detail-pin">${esc(t(`boards.${currentBoard().id}.name`))}</span>
      <h2>${esc(usage.module)} · ${esc(usage.signal)}</h2>
      <dl>
        <dt>${esc(t("detail.k230Gpio"))}</dt><dd>${esc(usage.gpio || usage.raw || "-")}</dd>
        <dt>40Pin</dt><dd>${pin ? `PIN ${pad(pin.number)} (${esc(pin.label)})` : esc(t("detail.notOnHeader"))}</dd>
        <dt>${esc(t("detail.sharedInfo"))}</dt><dd>${same.length > 1 ? same.map((item) => `${item.module}/${item.signal}`).join(" / ") : esc(t("detail.exclusive"))}</dd>
      </dl>
      ${pin ? `<div class="usage-detail"><h3>${esc(t("detail.pinDefinition"))}</h3><p>${esc(pin.chipName)} · ${esc(pin.power || "-")} · ${esc(pin.ioType || "-")}</p></div><div class="function-list">${renderFunctionRows(pin)}</div>` : `<div class="usage-detail empty">${esc(t("detail.offHeaderNote"))}</div>`}
    `;
  }

  function clearSelection() {
    document.querySelectorAll(".selected, .paired").forEach((item) => item.classList.remove("selected", "paired"));
  }

  function selectPin(pinNo) {
    selectedPin = Number(pinNo);
    selectedUsageId = "";
    const pin = pins.find((item) => item.number === selectedPin);
    if (!pin) return;
    clearSelection();
    document.querySelectorAll(`[data-pin="${selectedPin}"]`).forEach((item) => item.classList.add("selected"));
    usageListForPin(pin).forEach((usage) => document.querySelectorAll(`[data-usage="${usage.id}"]`).forEach((item) => item.classList.add("selected")));
    findPartners(pin).forEach((partner) => {
      document.querySelectorAll(`[data-pin="${partner.number}"], [data-pin-group="${partner.number}"]`).forEach((item) => item.classList.add("paired"));
    });
    renderPinDetail(pin);
  }

  function selectUsage(usageId) {
    const usage = currentBoard().usages.find((item) => item.id === usageId);
    if (!usage) return;
    selectedUsageId = usageId;
    selectedPin = usage.pinNo || selectedPin;
    clearSelection();
    document.querySelectorAll(`[data-usage="${usage.id}"]`).forEach((item) => item.classList.add("selected"));
    if (usage.pinNo) document.querySelectorAll(`[data-pin="${usage.pinNo}"]`).forEach((item) => item.classList.add("selected"));
    renderUsageDetail(usage);
  }

  function applyBoardUsageToMap() {
    const usageByGpio = currentUsageByGpio();
    pins.forEach((pin) => {
      const usages = pin.gpio ? usageByGpio.get(pin.gpio) || [] : [];
      document.querySelectorAll(`[data-pin="${pin.number}"]`).forEach((node) => {
        node.classList.toggle("used", usages.length > 0);
        node.classList.toggle("shared", usages.length > 1);
      });
      const label = document.querySelector(`[data-pin-usage="${pin.number}"]`);
      if (label) label.textContent = usages.length ? usages.map((usage) => usage.module).join(" / ") : "";
    });
  }

  function applyFilter() {
    const q = search.value.trim().toUpperCase();
    const usageByGpio = currentUsageByGpio();
    pins.forEach((pin) => {
      const pinUsages = pin.gpio ? usageByGpio.get(pin.gpio) || [] : [];
      const usageHit = pinUsages.some((usage) => usage.search.includes(q));
      const hitSearch = !q || pin.search.includes(q) || usageHit;
      const hitFilter = activeFilter === "ALL" || (activeFilter === "USED" ? pinUsages.length > 0 : pin.categories.includes(activeFilter));
      const visible = hitSearch && hitFilter;
      document.querySelectorAll(`[data-pin="${pin.number}"], [data-pin-group="${pin.number}"], [data-pin-wire="${pin.number}"]`).forEach((node) => {
        node.classList.toggle("muted", !visible);
      });
    });

    currentBoard().usages.forEach((usage) => {
      const hit = !q || usage.search.includes(q);
      document.querySelectorAll(`[data-usage="${usage.id}"]`).forEach((node) => node.classList.toggle("hidden", !hit));
    });
  }

  function renderBoardView() {
    renderBoards();
    renderActiveBoard();
    renderModules();
    renderUsageTable();
    applyBoardUsageToMap();
    applyFilter();
    const firstUsage = currentBoard().usages.find((usage) => usage.gpio);
    if (firstUsage) selectUsage(firstUsage.id);
  }

  applyStaticTranslations();
  renderFilters();
  renderPinmap();
  renderSummary();
  renderBoardView();

  if (langSwitch) {
    langSwitch.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang]");
      if (!button || button.dataset.lang === currentLang) return;
      currentLang = button.dataset.lang;
      saveLang(currentLang);
      refreshLocalizedView();
    });
  }

  boardTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-board]");
    if (!button || button.dataset.board === activeBoardId) return;
    activeBoardId = button.dataset.board;
    selectedUsageId = "";
    renderBoardView();
  });

  moduleList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-usage]");
    if (target) selectUsage(target.dataset.usage);
  });

  if (usageTable) {
    usageTable.addEventListener("click", (event) => {
      const target = event.target.closest("[data-usage]");
      if (target) selectUsage(target.dataset.usage);
    });
  }

  pinmap.addEventListener("click", (event) => {
    const target = event.target.closest("[data-pin]");
    if (target) selectPin(target.dataset.pin);
  });

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeFilter = button.dataset.key;
    filters.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyFilter();
  });

  search.addEventListener("input", applyFilter);
})();
