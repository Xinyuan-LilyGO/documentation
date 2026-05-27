---
name: add-product
description: Add a new LILYGO product page to the documentation site. Use this skill whenever the user wants to add, create, or scaffold a new product page. Trigger when the user says "add product", "new product", "create product page", "新增产品", "添加产品" or names a specific LILYGO product they want to document.
---

# Add LILYGO Product Page

This skill scaffolds a new product documentation page (English + Chinese) following the project conventions.

---

## Step 1: Gather Information

Ask the user for the following if not already provided:

1. **Official product name** — e.g. `T-Display S3 Pro` (as shown on packaging / shop)
2. **Product series / category** — e.g. `t-display-series`. Check existing directories under `en/products/` and suggest the best match.
3. **Tags** — chip name and key features, comma-separated (e.g. `ESP32-S3, LoRa, GPS`)
4. **Shop link** — the full URL to the product on lilygo.cc (optional, can be left as placeholder)
5. **Reference URLs** — ask the user to provide any relevant links to fetch product info from:
   - LILYGO shop page (lilygo.cc product URL)
   - GitHub repository (usually https://github.com/Xinyuan-LilyGO/...)
   - Any other relevant page (wiki, forum, datasheet page, etc.)

   Tell the user: "You can paste multiple URLs. I'll fetch each one and extract specs, features, overview, and pinout info to fill the page automatically."

Derive the **lowercase directory name** from the official name using the naming table in `CONTRIBUTING.md`:
- Spaces → hyphens
- All lowercase
- e.g. `T-Display S3 Pro` → `t-display-s3-pro`

Confirm the derived name with the user before creating files.

---

## Step 2: Fetch and Extract Product Information

For each URL the user provided, use the WebFetch tool to retrieve the page content, then extract the following fields (leave a field empty if not found):

| Field | Where to look |
|-------|---------------|
| `overview` | Shop description, README intro paragraph |
| `features` | Bullet list of key features, README feature section |
| `specs` | Specs table (SOC, Flash, PSRAM, Wireless, Weight, Package size) |
| `pinout` | GPIO mapping table in README or wiki; reformat to the canonical Pin Diagram style (see Step 5) |
| `schematic_url` | Links ending in `.pdf`, `.png`, `.jpg` near words "schematic" / "原理图" |
| `datasheet_urls` | Links near words "datasheet" / "数据手册" |
| `library_urls` | GitHub repo links near "library" / "driver" / "example" |
| `images` | Product image URLs from shop page (jpg/png ending in `-1`, `-2`, etc.) |
| `shop_link` | Canonical shop URL if not already provided |
| `tags` | Chip name and features if not already provided by user |

**Fetching strategy per source type:**

- **LILYGO shop page (lilygo.cc):** Extract product title, description paragraphs, feature bullets, and specs table. Look for image URLs in `<img>` tags with product photo patterns.
- **GitHub README:** Parse the README markdown — extract the intro section as overview, feature bullet lists, spec/parameter tables, GPIO tables, and any linked schematics or datasheets.
- **Other URLs:** Apply best-effort extraction based on page structure.

After fetching all URLs, consolidate the extracted data into a single set of fields. If a field appears in multiple sources, prefer the most detailed version. If any important field (overview, specs) could not be found, note it so placeholder comments remain in those sections.

---

## Step 3: Identify or Create the Series Directory

Check whether the series directory already exists:

```
en/products/{series}/
zh/products/{series}/
```

If the series is new, also create a series `index.md` in both locales (see template at end of this skill).

---

## Step 4: Create the Directory Structure

Create the following directories and files:

```
en/products/{series}/{product}/
  index.md
zh/products/{series}/{product}/
  index.md
public/products/{series}/{product}/index/
  image/            ← product photos (JPG/PNG); add .gitkeep
  hardware/         ← schematics, PCB dimension drawings, DXF files; add .gitkeep
  firmware/         ← firmware binaries; add .gitkeep
  datasheet/        ← SoC and peripheral spec sheets (PDF); add .gitkeep
  model/            ← enclosure and 3D model files; add .gitkeep
```

Create a `.gitkeep` file in each subdirectory so git tracks the empty directories.

---

## Step 5: Populate English index.md

Use the extracted data to fill the template. Replace `<!-- ... -->` placeholder comments with real content wherever data was found. Keep the comment only where no data was extracted.

```md
---
title: {OfficialName}
show_source: false
tags: {tags}
---

# {{ $frontmatter.title }} <ShopLink href="{shopUrl}" />

<ImageGallery :columns="3" :images="[
  { src: '/products/{series}/{product}/index/image/{product}-1.jpg', alt: '{OfficialName} front' },
  { src: '/products/{series}/{product}/index/image/{product}-2.jpg', alt: '{OfficialName} back' },
]" />

## Overview

{overview or <!-- Describe the chip solution, supported features, use cases, and certifications. -->}

## Quick Start

### Hardware Assembly

<!-- Soldering headers, installing antennas, etc. -->

### Arduino

<!-- Link to or embed the Arduino setup guide. -->

### ESP-IDF

<!-- Link to or embed the ESP-IDF setup guide. -->

## Related Videos

<!-- Product promo videos and tutorial videos. -->

## Key Features

{feature bullets, or:
- <!-- Feature 1 -->
- <!-- Feature 2 -->
}

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | {soc} |
| Flash | {flash} |
| PSRAM | {psram} |
| Wireless | {wireless} |
| Weight | {weight} |
| Package size | {package_size} |

## Pin Diagram

{pinout image if available, e.g.:
<img src="/products/{series}/{product}/index/image/{product}-pin.jpg" alt="pin diagram" width=100%>
}

{one subsection per peripheral, following this exact format:

### {Peripheral Name}

| {Chip}   | {FuncA} | {FuncB} | {FuncC} | ...    |
| :------: | :-----: | :-----: | :-----: | :----: |
| ESP32-S3 | GPIO{N} | GPIO{N} | GPIO{N} | ...    |
| XL9555   |         | GPIO{N} |         | ...    |

Rules:
- Section heading is "## Pin Diagram" (not "Pinout")
- One `### {Peripheral Name}` per peripheral (e.g. Display, SDCard, Audio, LoRa, GNSS, NFC, etc.)
- All columns center-aligned with `:------:`
- First column is the chip/expander name (e.g. ESP32-S3, XL9555, TCA8418)
- Subsequent columns are pin function labels (e.g. SCK, MOSI, MISO, CS, INT, RESET, BUSY, Power EN)
- GPIO numbers use format `GPIO{N}` (e.g. GPIO35, GPIO4)
- Power enable pin label: `Power EN`
- Not connected: `NC`
- If multiple chips share the same peripheral (e.g. IO expander handles power enable), add a second row for that chip in the same table — do not create a separate table
- Empty cells are left blank (two spaces between pipes)

Example (Display + IO expander):

### Display

| ST7796   | BL     | RESET  | SCK    | MOSI   | MISO   | CS     | DC     |
| :------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| ESP32-S3 | GPIO42 | NC     | GPIO35 | GPIO34 | GPIO33 | GPIO38 | GPIO37 |

Example (peripheral where IO expander handles enable/reset):

### LoRa

| SX1262 / SX1280 | SCK    | MOSI   | MISO   | CS     | INT    | RESET  | BUSY   | Power EN |
| :-------------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :------: |
| ESP32-S3        | GPIO35 | GPIO34 | GPIO33 | GPIO36 | GPIO14 | GPIO47 | GPIO48 |          |
| XL9555          |        |        |        |        |        |        |        | GPIO3    |

If no pinout data was found: <!-- GPIO mapping table. -->
}

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

{schematic link, or <!-- Link to public schematic PDF or image. -->}

## Datasheet

{datasheet links, or <!-- Links to SOC and peripheral datasheets. -->}

## Software Libraries

{library links, or <!-- Links to supported driver libraries and example repos. -->}

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
```

---

## Step 6: Populate Chinese index.md

Use the same extracted data with Chinese headings. Translate the overview and features into Chinese if the source was English, or keep the original Chinese if the source was already Chinese.

```md
---
title: {OfficialName}
show_source: false
tags: {tags}
---

# {{ $frontmatter.title }} <ShopLink href="{shopUrl}" />

<ImageGallery :columns="3" :images="[
  { src: '/products/{series}/{product}/index/image/{product}-1.jpg', alt: '{OfficialName} 正面' },
  { src: '/products/{series}/{product}/index/image/{product}-2.jpg', alt: '{OfficialName} 背面' },
]" />

## 概述

{overview in Chinese, or <!-- 详细描述主控方案、支持功能、适用场景和认证信息。 -->}

## 快速开始

### 硬件组装

<!-- 焊接排针、安装天线等。 -->

### Arduino

<!-- Arduino 开发环境配置教程链接或说明。 -->

### ESP-IDF

<!-- ESP-IDF 开发环境配置教程链接或说明。 -->

## 相关视频

<!-- 产品宣传视频和使用教程视频。 -->

## 主要特性

{feature bullets in Chinese, or:
- <!-- 特性 1 -->
- <!-- 特性 2 -->
}

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | {soc} |
| Flash | {flash} |
| PSRAM | {psram} |
| 无线 | {wireless} |
| 重量 | {weight} |
| 外包装尺寸 | {package_size} |

## 引脚图

{Same Pin Diagram content as the English page — tables are not translated, GPIO numbers and pin function labels stay in English. Only the section heading changes to 引脚图. If no pinout data was found: <!-- GPIO 映射关系表。 -->}

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

{schematic link, or <!-- 可公开的原理图链接或图片。 -->}

## 数据手册

{datasheet links, or <!-- SOC 和外设传感器数据手册链接。 -->}

## 软件开发

{library links, or <!-- 支持的驱动库和示例代码仓库链接。 -->}

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
```

---

## Step 7: Confirm and Summarize

After creating all files, tell the user:

1. **Files created** — list all paths
2. **Auto-filled sections** — list which sections were populated from fetched data
3. **Sections still needing manual input** — list which sections still have placeholder comments
4. **Next steps:**
   - Add product images to `public/products/{series}/{product}/index/image/` (name them `{product}-1.jpg`, `{product}-2.jpg`, etc.)
   - Place schematics/PCB drawings in `index/hardware/`, firmware in `index/firmware/`, datasheets in `index/datasheet/`, 3D/model files in `index/model/`
   - Fill in the remaining `<!-- ... -->` placeholder sections
   - Update the shop link if it was left as a placeholder
   - Run `npm run dev` to preview the result

---

## New Series index.md Template (if needed)

### English — `en/products/{series}/index.md`

```md
---
title: {Series Display Name}
---

# {Series Display Name}

<ProductGrid category="{series}" />
```

### Chinese — `zh/products/{series}/index.md`

```md
---
title: {系列显示名}
---

# {系列显示名}

<ProductGrid category="{series}" />
```
