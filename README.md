# 個人作品集與履歷網站 (Portfolio & Resume)

這是一個專為資訊傳播學系（UI/UX 設計、專案管理 PM、AI 自動化）量身打造的互動式作品集網站，採用優雅沉靜的莫蘭迪色系（Morandi Palette），具備動態卡片分類篩選、詳情彈窗、本機作品管理（新增/編輯/刪除/備份）等完整功能。

---

## 📁 完整資料夾架構

```text
portfolio-website/
├── index.html          # 網站主頁面結構 (HTML5 + 模態框組件)
├── css/
│   └── style.css       # 莫蘭迪色彩變數、自訂捲軸、卡片陰影與動效樣式 (CSS3)
├── js/
│   └── main.js         # 前端資料渲染、分類篩選、彈窗交互與 localStorage 管理邏輯 (ES6)
└── README.md           # 專案說明與操作指引文件
```

---

## 🚀 如何使用與開啟

1. **直接開啟：**
   - 雙擊資料夾內的 `index.html`，即可直接在任何主流瀏覽器（Chrome、Edge、Safari、Firefox）中開啟瀏覽。
2. **本機或線上部署：**
   - 可直接上傳至 **GitHub Pages**、**Vercel** 或 **Netlify**，無需任何建置步驟（Zero Build Step），隨傳隨用。

---

## 🎨 樣式與色彩自訂 (`css/style.css`)

所有色彩變數皆集中於 `css/style.css` 頂部的 `:root` 宣告中，您可以隨時微調以符合個人品牌風格：

```css
:root {
  --color-morandi-bg: #F7F4F0;        /* 柔和米白背景 */
  --color-morandi-card: #EFECE6;      /* 暖沙色卡片 */
  --color-morandi-sage: #8FA395;      /* 莫蘭迪鼠尾草綠 */
  --color-morandi-pink: #C99E9A;      /* 莫蘭迪乾燥粉 */
  --color-morandi-cocoa: #5C4D43;     /* 主要文字可可棕色 */
  --color-morandi-taupe: #8C7F75;     /* 次要文字灰棕色 */
  --color-morandi-border: #E2DDD5;    /* 邊框線條色 */
}
```

---

## ⚙️ 核心功能說明

1. **作品分類篩選：**
   - 可依「全部專案」、「UI/UX 與專案管理」、「AI 與資料架構」、「影音與行銷企劃」即時篩選卡片。
2. **彈窗詳情展示 (Detail Modal)：**
   - 點擊卡片可展開完整專案背景、量化數據、解決方案、YouTube 影片嵌入、Google Drive 企劃書與 Figma 原型外鏈。
3. **本機新增與管理 (CRUD)：**
   - 點擊右上角「新增 / 管理作品」可新增自己的專案，資料將自動儲存於瀏覽器 `localStorage` 中，重新整理頁面不會消失。
4. **資料重置：**
   - 頁尾提供「重置作品集預設資料」按鈕，可一鍵恢復為初始精選專案展示。
