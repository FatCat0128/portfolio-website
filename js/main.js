// ==========================================================================
// 莫蘭迪作品集 (Morandi Portfolio) - 互動核心邏輯
// ==========================================================================

// 預設 6 項精選專案資料
const defaultProjects = [
  {
    id: 'p1',
    title: '《沐光棲所》Z 世代情緒陪伴 Web App',
    category: 'uiux',
    role: 'PM & UI/UX 設計師（帶領 7 人跨職能團隊）',
    tools: ['Figma', 'Live2D', 'Excel 統計檢定', 'User Flow', '手繪繪本風'],
    summary: '專為 Z 世代量身打造的非批判性情緒陪伴平台，結合 Live2D 角色即時互動、療癒盲盒與加密傾訴傳訊，以量化問卷進行需求驗證。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">專案背景與挑戰</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4">
        現代青年面臨高壓的情緒社交焦慮。團隊打造以「高包容度、低心理負擔」為核心的陪伴 Web App。我作為專案經理與 UI/UX 設計師，帶領 7 人團隊（涵蓋 Live2D 動畫、 UI/UX、視覺繪師與軟體工程）。
      </p>

      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">關鍵解決方案</h4>
      <ul class="list-disc list-inside text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4 space-y-1">
        <li><strong>量化數據驗證：</strong> 主導前測問卷，以 Excel / SPSS 進行皮爾森相關係數與獨立樣本 t 檢定，確保功能切中痛點。</li>
        <li><strong>莫蘭迪暖色調視覺：</strong> 採用大地色系與扁平手繪繪本風定調，降低使用者接觸時的視覺侵略性。</li>
        <li><strong>Live2D 與盲盒機制：</strong> 設計觸覺與視覺雙重反饋的盲盒開啟動畫，獲得極高滿意度。</li>
      </ul>

      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">設計落地與工程妥協</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed">
        在前端實作時，原本設計圖稿有複雜的手繪圖層遮罩。經與工程師討論後，優化為 CSS SVG 遮罩與精簡 Live2D 模型圖層，成功將加載效能提升 40% 且兼顧 RWD 響應式呈現。
      </p>
    `,
    image: 'https://placehold.co/800x500/EFECE6/5C4D43?text=%E6%B2%90%E5%85%89%E6%A4%B9%E6%89%80+Web+App+UI',
    youtubeUrl: '',
    driveUrl: 'https://drive.google.com',
    figmaUrl: 'https://figma.com',
    localVideoBlob: ''
  },
  {
    id: 'p2',
    title: 'AI 永續競賽短片《未來的『貸』價》',
    category: 'media',
    role: '腳本企劃 & AI 生成工具鏈整合',
    tools: ['Gemini', 'Flow AI', 'Suno AI', 'Premiere Pro'],
    summary: '全流程運用生成式 AI 工具協作完成之永續主題主題競賽短片，涵蓋 AI 文字生成劇本、Flow 視覺繪製與 Suno 專屬配樂。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">專案亮點</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4">
        探討氣候變遷與世代資源預支問題。全片自腳本發想、鏡頭語言設計到背景音效皆高度整合生成式 AI 工具鏈。
      </p>
      <ul class="list-disc list-inside text-xs sm:text-sm text-morandi-taupe leading-relaxed space-y-1">
        <li>Gemini 協助擬定敘事轉折與鏡頭 Prompt 指令。</li>
        <li>Flow 生成符合 Morandi 沉靜質感的連續影像。</li>
        <li>Suno 自訂符合情緒起伏的低沉配樂。</li>
      </ul>
    `,
    image: 'https://placehold.co/800x500/C99E9A/5C4D43?text=AI+%E6%B0%B8%E7%BA%8C%E7%9F%AD%E7%89%87',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    driveUrl: 'https://drive.google.com',
    figmaUrl: '',
    localVideoBlob: ''
  },
  {
    id: 'p3',
    title: '《臺北共築》AI 輔助公共空間共創平台',
    category: 'uiux',
    role: '服務設計師 & 平台互動架構規劃',
    tools: ['Service Blueprint', 'AI Prompt Engineering', 'Figma', 'Civic Tech'],
    summary: '以服務設計思維切入市政參與議題，運用生成式 AI 降低市民參與社區公共空間規劃與願景提案門檻的創新機制。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">提案核心</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4">
        市民常常對城市願景有想法，但缺乏專業建築繪圖能力。此平台允許市民輸入文字描述或上傳照片，由 AI 自動轉換為 3D 空間構想圖並公開討論。
      </p>
    `,
    image: 'https://placehold.co/800x500/8FA395/5C4D43?text=%E8%87%BA%E5%8C%97%E5%85%B1%E7%AF%89+Civic+AI',
    youtubeUrl: '',
    driveUrl: 'https://drive.google.com',
    figmaUrl: 'https://figma.com',
    localVideoBlob: ''
  },
  {
    id: 'p4',
    title: '團隊自動化知識管理工作流 (n8n × Notion)',
    category: 'ai',
    role: '系統架構設計師 & 工作流串接',
    tools: ['n8n', 'Notion API', 'Discord Bot', 'WBS', '3S 知識管理'],
    summary: '導入 3S 知識管理架構與 WBS 任務拆解，串接 n8n、Notion、Google Drive 與 Discord，實現跨平台檔案歸檔與專案通知自動化。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">自動化架構設計</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4">
        解決團隊在溝通時檔案散落、任務追蹤遺漏的痛苦。透過自建 n8n webhook 串接 Discord 與 Notion 數據庫，自動整理決議事項並歸檔至 Google Drive 知識庫。
      </p>
    `,
    image: 'https://placehold.co/800x500/EFECE6/5C4D43?text=n8n+%E8%87%AA%E5%8B%95%E5%8C%96%E5%B7%A5%E4%BD%9C%E6%B5%81',
    youtubeUrl: '',
    driveUrl: 'https://drive.google.com',
    figmaUrl: '',
    localVideoBlob: ''
  },
  {
    id: 'p5',
    title: 'RAG 知識庫與本地端 LLM 問答系統',
    category: 'ai',
    role: 'AI 資料工程師 & 檢索架構搭建',
    tools: ['Ollama (gpt-oss)', 'NotebookLM', 'Python Web Scraper', 'RAG'],
    summary: '針對《BTS ARIRANG 世界巡迴演唱會》網路爬蟲資料進行結構化清理，結合 Ollama 本地端 LLM 建立高精準度專屬問答系統。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">技術細節</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed mb-4">
        抓取超過 500+ 篇演唱會新聞、票務規格與交通手冊，建立向量索引。使用者可透過自然語言查詢場地規範、周邊發放時間，精準度高達 94%。
      </p>
    `,
    image: 'https://placehold.co/800x500/8FA395/5C4D43?text=RAG+%E6%9C%AC%E5%9C%B0%E7%AB%AF+LLM+%E7%B3%BB%E7%B5%B1',
    youtubeUrl: '',
    driveUrl: 'https://drive.google.com',
    figmaUrl: '',
    localVideoBlob: ''
  },
  {
    id: 'p6',
    title: '《夏鹿野環球》熱氣球嘉年華整合行銷企劃',
    category: 'media',
    role: '行銷企劃組長 & 策略規劃',
    tools: ['WBS', 'SMART 指標', 'SWOT 分析', 'TA 定位'],
    summary: '針對臺東熱氣球嘉年華撰寫完整整合行銷策略書，包含數位社群擴散機制、WBS 工作分解結構與量化關鍵績效指標。',
    description: `
      <h4 class="font-bold text-morandi-cocoa mb-2 text-base">企劃亮點</h4>
      <p class="text-xs sm:text-sm text-morandi-taupe leading-relaxed">
        拆解前中後期推廣期程，設計跨平台互動活動與地方創生業者合作模式，建立具體可執行的 SMART 目標。
      </p>
    `,
    image: 'https://placehold.co/800x500/C99E9A/5C4D43?text=%E6%95%B4%E5%90%88%E8%A1%8C%E9%8A%B7%E4%BC%81%E5%8A%8B%E6%9B%B8',
    youtubeUrl: '',
    driveUrl: 'https://drive.google.com',
    figmaUrl: '',
    localVideoBlob: ''
  }
];

// 狀態變數
let projects = [];
let currentFilter = 'all';
let tempLocalVideoBlobUrl = '';

// 頁面初始化
window.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  renderProjects();
});

// 從 localStorage 讀取或使用預設資料
function loadProjects() {
  const saved = localStorage.getItem('infocomm_portfolio_projects');
  if (saved) {
    try {
      projects = JSON.parse(saved);
    } catch (e) {
      projects = [...defaultProjects];
    }
  } else {
    projects = [...defaultProjects];
  }
}

// 儲存至 localStorage
function saveProjects() {
  localStorage.setItem('infocomm_portfolio_projects', JSON.stringify(projects));
}

// 分類篩選切換
function filterPortfolio(cat) {
  currentFilter = cat;

  // 更新按鈕外觀樣式
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-morandi-cocoa', 'text-white', 'shadow-sm');
    btn.classList.add('text-morandi-taupe');
  });

  const activeBtn = document.getElementById(`btn-filter-${cat}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-morandi-cocoa', 'text-white', 'shadow-sm');
    activeBtn.classList.remove('text-morandi-taupe');
  }

  renderProjects();
}

// 渲染作品卡片網格
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = projects.filter(p => currentFilter === 'all' || p.category === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-morandi-taupe">
        <i class="fa-regular fa-folder-open text-4xl mb-3 text-morandi-pink"></i>
        <p class="text-sm">這個分類目前沒有作品，點擊右上角「新增 / 管理作品」新增吧！</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-morandi-card rounded-3xl border border-morandi-border overflow-hidden morandi-shadow card-hover flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5';

    // 分類徽章標籤
    let catBadge = '';
    if (p.category === 'uiux') catBadge = '<span class="badge-pink px-2.5 py-1 text-[11px] rounded-full font-medium">UI/UX 與網頁設計</span>';
    else if (p.category === 'ai') catBadge = '<span class="badge-sage px-2.5 py-1 text-[11px] rounded-full font-medium">影音</span>';
    else catBadge = '<span class="badge-cocoa px-2.5 py-1 text-[11px] rounded-full font-medium">企劃</span>';

    // 工具標籤列表
    const toolsHtml = (p.tools || []).slice(0, 3).map(t =>
      `<span class="px-2 py-0.5 text-[10px] rounded-md bg-morandi-bg text-morandi-taupe border border-morandi-border">${t}</span>`
    ).join('');

    card.innerHTML = `
      <div>
        <!-- 圖片與徽章區域 -->
        <div class="relative h-48 bg-morandi-border/40 overflow-hidden cursor-pointer" onclick="openDetailModal('${p.id}')">
          <img src="${p.image || 'https://placehold.co/600x400/EFECE6/5C4D43?text=Portfolio'}" alt="${p.title}" class="w-full h-full object-cover img-hover-zoom" onerror="this.src='https://placehold.co/600x400/EFECE6/5C4D43?text=Project+Cover'">
          <div class="absolute top-3 left-3">
            ${catBadge}
          </div>
          ${p.youtubeUrl ? '<div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center text-xs shadow-md"><i class="fa-brands fa-youtube"></i></div>' : ''}
          ${p.localVideoBlob ? '<div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-morandi-sage/90 text-white flex items-center justify-center text-xs shadow-md"><i class="fa-solid fa-play"></i></div>' : ''}
        </div>

        <!-- 內容卡片文字 -->
        <div class="p-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold text-morandi-sageDark"><i class="fa-solid fa-user-tag mr-1"></i>${p.role || '成員'}</span>
          </div>
          
          <h3 onclick="openDetailModal('${p.id}')" class="font-serif font-bold text-morandi-cocoa text-base sm:text-lg hover:text-morandi-pinkDark cursor-pointer transition-colors leading-snug mb-2 line-clamp-2">
            ${p.title}
          </h3>

          <p class="text-xs text-morandi-taupe leading-relaxed mb-4 line-clamp-3">
            ${p.summary}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-2">
            ${toolsHtml}
          </div>
        </div>
      </div>

      <!-- 底部動作按鈕列 -->
      <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-morandi-border/60 text-xs">
        <button onclick="openDetailModal('${p.id}')" class="font-medium text-morandi-cocoa hover:text-morandi-pinkDark transition-colors flex items-center gap-1.5">
          <span>查看詳細細節</span>
          <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
        </button>

        <div class="flex items-center gap-2">
          <button onclick="openEditModal('${p.id}')" class="p-1.5 rounded-lg text-morandi-taupe hover:text-morandi-cocoa hover:bg-morandi-bg transition-all" title="編輯作品">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onclick="deleteProject('${p.id}')" class="p-1.5 rounded-lg text-morandi-taupe hover:text-red-500 hover:bg-morandi-bg transition-all" title="刪除作品">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// 解析 YouTube 嵌入網址
function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
  } else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v');
  } else if (url.includes('youtube.com/embed/')) {
    return url;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

// 開啟專案詳情彈窗
function openDetailModal(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  const container = document.getElementById('detailModalContent');
  const embedYt = getYoutubeEmbedUrl(p.youtubeUrl);

  // 類別徽章
  let catBadge = '';
  if (p.category === 'uiux') catBadge = '<span class="badge-pink px-3 py-1 text-xs rounded-full font-medium">UI/UX 與專案管理</span>';
  else if (p.category === 'ai') catBadge = '<span class="badge-sage px-3 py-1 text-xs rounded-full font-medium">AI 與資料架構</span>';
  else catBadge = '<span class="badge-cocoa px-3 py-1 text-xs rounded-full font-medium">影音與行銷企劃</span>';

  // 工具標籤
  const toolsHtml = (p.tools || []).map(t =>
    `<span class="px-3 py-1 text-xs rounded-xl bg-morandi-card text-morandi-cocoa border border-morandi-border font-medium">${t}</span>`
  ).join('');

  // 多媒體展示區（YouTube 或本機影片或縮圖）
  let mediaSection = '';
  if (embedYt) {
    mediaSection = `
      <div class="relative w-full rounded-2xl overflow-hidden aspect-video bg-black mb-6 shadow-md">
        <iframe src="${embedYt}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else if (p.localVideoBlob) {
    mediaSection = `
      <div class="relative w-full rounded-2xl overflow-hidden aspect-video bg-black mb-6 shadow-md">
        <video src="${p.localVideoBlob}" controls class="w-full h-full object-contain"></video>
      </div>
    `;
  } else {
    mediaSection = `
      <div class="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-morandi-card border border-morandi-border">
        <img src="${p.image || 'https://placehold.co/800x500/EFECE6/5C4D43?text=Project'}" class="w-full h-full object-cover">
      </div>
    `;
  }

  // Drive / Figma 外鏈按鈕
  let linksButtons = '';
  if (p.driveUrl || p.figmaUrl) {
    linksButtons = `
      <div class="mt-6 pt-6 border-t border-morandi-border flex flex-wrap gap-3">
        ${p.driveUrl ? `
          <a href="${p.driveUrl}" target="_blank" rel="noopener" class="bg-morandi-sage text-white px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-morandi-sageDark transition-all flex items-center gap-2 shadow-sm">
            <i class="fa-brands fa-google-drive"></i>
            <span>開啟 Google 雲端企劃書 / 資料</span>
          </a>
        ` : ''}
        ${p.figmaUrl ? `
          <a href="${p.figmaUrl}" target="_blank" rel="noopener" class="bg-morandi-cocoa text-white px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-morandi-cocoa/90 transition-all flex items-center gap-2 shadow-sm">
            <i class="fa-brands fa-figma text-morandi-pink"></i>
            <span>檢視 Figma 原型 / 設計系統</span>
          </a>
        ` : ''}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="flex items-center gap-3 mb-3">
      ${catBadge}
      <span class="text-xs text-morandi-taupe font-semibold"><i class="fa-solid fa-user-gear mr-1"></i>${p.role}</span>
    </div>

    <h2 class="font-serif font-bold text-2xl sm:text-3xl text-morandi-cocoa mb-4">${p.title}</h2>

    <div class="flex flex-wrap gap-2 mb-6">
      ${toolsHtml}
    </div>

    ${mediaSection}

    <div class="bg-morandi-card/60 p-5 rounded-3xl border border-morandi-border mb-6">
      <h4 class="text-xs font-bold uppercase tracking-wider text-morandi-sageDark mb-1">專案簡介 Summary</h4>
      <p class="text-xs sm:text-sm text-morandi-cocoa leading-relaxed">${p.summary}</p>
    </div>

    <div class="prose prose-sm max-w-none">
      ${p.description || '<p class="text-xs text-morandi-taupe">無額外詳細說明。</p>'}
    </div>

    ${linksButtons}
  `;

  // 顯示彈窗
  const modal = document.getElementById('detailModal');
  const box = document.getElementById('detailModalContainer');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');
  box.classList.add('scale-100');
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  const box = document.getElementById('detailModalContainer');
  box.classList.remove('scale-100');
  box.classList.add('scale-95');
  modal.classList.add('opacity-0', 'pointer-events-none');
}

// 新增 / 編輯彈窗控制
function openAddModal() {
  document.getElementById('projectForm').reset();
  document.getElementById('editProjectId').value = '';
  document.getElementById('localVideoStatus').textContent = '';
  tempLocalVideoBlobUrl = '';

  const modal = document.getElementById('addModal');
  const box = document.getElementById('addModalContainer');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');
  box.classList.add('scale-100');
}

function openEditModal(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  document.getElementById('editProjectId').value = p.id;
  document.getElementById('formTitle').value = p.title || '';
  document.getElementById('formCategory').value = p.category || 'uiux';
  document.getElementById('formRole').value = p.role || '';
  document.getElementById('formTools').value = (p.tools || []).join(', ');
  document.getElementById('formSummary').value = p.summary || '';
  document.getElementById('formDescription').value = p.description || '';
  document.getElementById('formYoutube').value = p.youtubeUrl || '';
  document.getElementById('formDrive').value = p.driveUrl || '';
  document.getElementById('formFigma').value = p.figmaUrl || '';
  document.getElementById('formImage').value = p.image || '';

  tempLocalVideoBlobUrl = p.localVideoBlob || '';
  document.getElementById('localVideoStatus').textContent = p.localVideoBlob ? '現有影片已保留' : '';

  const modal = document.getElementById('addModal');
  const box = document.getElementById('addModalContainer');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');
  box.classList.add('scale-100');
}

function closeAddModal() {
  const modal = document.getElementById('addModal');
  const box = document.getElementById('addModalContainer');
  box.classList.remove('scale-100');
  box.classList.add('scale-95');
  modal.classList.add('opacity-0', 'pointer-events-none');
}

// 處理本機影片選擇
function handleLocalVideoSelect(e) {
  const file = e.target.files[0];
  if (file) {
    tempLocalVideoBlobUrl = URL.createObjectURL(file);
    document.getElementById('localVideoStatus').textContent = `已載入本機影片：${file.name}`;
  }
}

// 儲存表單專案
function handleSaveProject(e) {
  e.preventDefault();

  const editId = document.getElementById('editProjectId').value;
  const title = document.getElementById('formTitle').value.trim();
  const category = document.getElementById('formCategory').value;
  const role = document.getElementById('formRole').value.trim();
  const toolsRaw = document.getElementById('formTools').value.trim();
  const summary = document.getElementById('formSummary').value.trim();
  const description = document.getElementById('formDescription').value.trim();
  const youtubeUrl = document.getElementById('formYoutube').value.trim();
  const driveUrl = document.getElementById('formDrive').value.trim();
  const figmaUrl = document.getElementById('formFigma').value.trim();
  const image = document.getElementById('formImage').value.trim() || 'https://placehold.co/600x400/EFECE6/5C4D43?text=Project+Cover';

  const tools = toolsRaw ? toolsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  if (editId) {
    // 編輯現有專案
    const idx = projects.findIndex(p => p.id === editId);
    if (idx !== -1) {
      projects[idx] = {
        ...projects[idx],
        title, category, role, tools, summary, description,
        youtubeUrl, driveUrl, figmaUrl, image,
        localVideoBlob: tempLocalVideoBlobUrl || projects[idx].localVideoBlob
      };
      showToast('作品成功更新！');
    }
  } else {
    // 新增專案
    const newProj = {
      id: 'p_' + Date.now(),
      title, category, role, tools, summary, description,
      youtubeUrl, driveUrl, figmaUrl, image,
      localVideoBlob: tempLocalVideoBlobUrl
    };
    projects.unshift(newProj);
    showToast('新作品已新增！');
  }

  saveProjects();
  renderProjects();
  closeAddModal();
}

// 刪除作品
function deleteProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  showToast(`已成功移除作品《${p.title.slice(0, 8)}...》`);
  projects = projects.filter(item => item.id !== id);
  saveProjects();
  renderProjects();
}

// 重置預設資料
function resetDefaultData() {
  projects = [...defaultProjects];
  saveProjects();
  renderProjects();
  showToast('已重置回預設作品資料');
}

// 匯出作品資料 JSON
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('已匯出作品備份 JSON 檔案');
}

// 複製 Email 至剪貼簿
function copyContactEmail() {
  const email = 'a112070010@mail.shu.edu.tw';
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  showToast('已複製 Email 至剪貼簿！');
}

// Toast 提示通知元件
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3000);
}

// 參賽經驗分類篩選
function filterCompetitions(category) {
  const cards = document.querySelectorAll('.competition-card');
  const buttons = document.querySelectorAll('.comp-filter-btn');

  buttons.forEach(btn => {
    if (btn.getAttribute('data-comp-filter') === category) {
      btn.className = 'comp-filter-btn px-3.5 py-1.5 rounded-2xl text-xs sm:text-sm font-medium transition-all bg-morandi-cocoa text-white shadow-sm';
    } else {
      btn.className = 'comp-filter-btn px-3.5 py-1.5 rounded-2xl text-xs sm:text-sm font-medium transition-all bg-morandi-card text-morandi-taupe hover:text-morandi-cocoa border border-morandi-border';
    }
  });

  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
