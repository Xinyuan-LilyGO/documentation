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

Derive the **lowercase directory name** from the official name using the naming table in `CONTRIBUTING.md`:
- Spaces → hyphens
- All lowercase
- e.g. `T-Display S3 Pro` → `t-display-s3-pro`

Confirm the derived name with the user before creating files.

---

## Step 2: Identify or Create the Series Directory

Check whether the series directory already exists:

```
en/products/{series}/
zh/products/{series}/
```

If the series is new, also create a series `index.md` in both locales (see template at end of this skill).

---

## Step 3: Create the Directory Structure

Create the following directories and files:

```
en/products/{series}/{product}/
  index.md
zh/products/{series}/{product}/
  index.md
public/products/{series}/{product}/assets/
  .gitkeep          ← placeholder so git tracks the empty assets dir
```

---

## Step 4: Populate English index.md

Use this template, substituting `{OfficialName}`, `{product}`, `{series}`, `{tags}`, and `{shopUrl}`:

```md
---
title: {OfficialName}
show_source: false
tags: {tags}
---

# {{ $frontmatter.title }} <ShopLink href="{shopUrl}" />

<ImageGallery :columns="3" :images="[
  { src: '/products/{series}/{product}/assets/{product}-1.jpg', alt: '{OfficialName} front' },
  { src: '/products/{series}/{product}/assets/{product}-2.jpg', alt: '{OfficialName} back' },
]" />

## Overview

<!-- Describe the chip solution, supported features, use cases, and certifications. -->

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

- <!-- Feature 1 -->
- <!-- Feature 2 -->

## Specifications

| Parameter | Value |
| --- | --- |
| SOC | |
| Flash | |
| PSRAM | |
| Wireless | |
| Weight | |
| Package size | |

## Pinout

<!-- GPIO mapping table. -->

## Dimensions

<!-- PCB and enclosure dimension diagrams. -->

## Schematic

<!-- Link to public schematic PDF or image. -->

## Datasheet

<!-- Links to SOC and peripheral datasheets. -->

## Software Libraries

<!-- Links to supported driver libraries and example repos. -->

## FAQ

<!-- Errata and common issues. -->

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| V1.0 | | Initial release |
```

---

## Step 5: Populate Chinese index.md

Use the same structure with Chinese headings:

```md
---
title: {OfficialName}
show_source: false
tags: {tags}
---

# {{ $frontmatter.title }} <ShopLink href="{shopUrl}" />

<ImageGallery :columns="3" :images="[
  { src: '/products/{series}/{product}/assets/{product}-1.jpg', alt: '{OfficialName} 正面' },
  { src: '/products/{series}/{product}/assets/{product}-2.jpg', alt: '{OfficialName} 背面' },
]" />

## 概述

<!-- 详细描述主控方案、支持功能、适用场景和认证信息。 -->

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

- <!-- 特性 1 -->
- <!-- 特性 2 -->

## 产品参数

| 参数 | 值 |
| --- | --- |
| SOC | |
| Flash | |
| PSRAM | |
| 无线 | |
| 重量 | |
| 外包装尺寸 | |

## 引脚图

<!-- GPIO 映射关系表。 -->

## 尺寸图

<!-- PCB 和外壳尺寸图。 -->

## 原理图

<!-- 可公开的原理图链接或图片。 -->

## 数据手册

<!-- SOC 和外设传感器数据手册链接。 -->

## 软件开发

<!-- 支持的驱动库和示例代码仓库链接。 -->

## 常见问题

<!-- 产品勘误和常见问题解答。 -->

## 版本迭代

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| V1.0 | | 初版发布 |
```

---

## Step 6: Confirm and Summarize

After creating all files, tell the user:

1. **Files created** — list all paths
2. **Next steps:**
   - Add product images to `public/products/{series}/{product}/assets/` (name them `{product}-1.jpg`, `{product}-2.jpg`, etc.)
   - Fill in the `<!-- ... -->` placeholder sections
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
