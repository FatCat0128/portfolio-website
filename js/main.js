// ==========================================================================
// 莫蘭迪作品集 (Morandi Portfolio) - 互動核心邏輯
// ==========================================================================

// 預設精選專案資料（唯一正式資料來源：日後編輯完點擊「複製最新程式碼」覆蓋此區塊即可）
const defaultProjects = [
  {
    "id": "p_1795521487355",
    "title": "這個學校有點怪-馬頭人傳說",
    "category": "ai",
    "role": "編劇/攝影/導演/剪輯",
    "tools": [
      "Pr"
    ],
    "summary": "以校園恐怖傳說為主題，第一人稱視角偽遊戲感影片，從腳本發想到拍攝、剪輯一手包辦。",
    "description": "",
    "youtubeUrl": "https://youtu.be/B1Y5mCTm26o",
    "driveUrl": "",
    "figmaUrl": "",
    "image": "https://placehold.co/600x400/EFECE6/5C4D43?text=Project+Cover",
    "localVideoBlob": ""
  },
  {
    "id": "p1",
    "title": "畢業專題《沐光棲所》Z 世代情緒陪伴 App",
    "category": "uiux",
    "role": "UI/UX 設計師",
    "tools": [
      "Figma",
      "手繪繪本風"
    ],
    "summary": "專為 Z 世代量身打造的 AI 情緒陪伴聊天 App，結合 Live2D 角色互動、療癒盲盒與加密傳訊，以溫馨、可愛的風格降低使用者對於 AI 聊天的戒心。",
    "description": "",
    "image": "https://drive.google.com/file/d/1cwFS8-XYO4eRwb6MPJ4ysrLIlvOuz8VC/view?usp=drive_link",
    "youtubeUrl": "",
    "driveUrl": "https://drive.google.com/file/d/1cwFS8-XYO4eRwb6MPJ4ysrLIlvOuz8VC/view?usp=drive_link",
    "figmaUrl": "https://www.figma.com/design/EyY4ym8etNWpOiWKjxkfp4/%E7%9B%AE%E5%89%8D%E6%89%80%E6%9C%89%E9%A0%81%E9%9D%A2?node-id=0-1&t=cfejmYdCpYWDWvhu-1",
    "localVideoBlob": ""
  },
  {
    "id": "p2",
    "title": "AI 永續競賽短片《未來的『貸』價》",
    "category": "ai",
    "role": "腳本企劃 & AI 生成工具鏈整合",
    "tools": [
      "Gemini",
      "Flow AI"
    ],
    "summary": "全流程運用生成式 AI 工具協作完成之永續主題主題競賽短片，涵蓋 AI 文字生成劇本、Flow 影片生成。",
    "description": "",
    "image": "https://placehold.co/600x400/EFECE6/5C4D43?text=Project+Cover",
    "youtubeUrl": "",
    "driveUrl": "",
    "figmaUrl": "",
    "localVideoBlob": ""
  },
  {
    "id": "p3",
    "title": "《臺北共築》AI 輔助公共空間共創平台",
    "category": "media",
    "role": "企劃書撰寫 & 攝影師",
    "tools": [],
    "summary": "以服務設計思維切入市政參與議題，運用生成式 AI 降低市民參與社區公共空間規劃與願景提案門檻的創新機制。",
    "description": "",
    "image": "https://placehold.co/800x500/8FA395/5C4D43?text=%E8%87%BA%E5%8C%97%E5%85%B1%E7%AF%89+Civic+AI",
    "youtubeUrl": "",
    "driveUrl": "https://drive.google.com",
    "figmaUrl": "https://figma.com",
    "localVideoBlob": ""
  },
  {
    "id": "p6",
    "title": "《夏鹿野環球》熱氣球嘉年華整合行銷企劃",
    "category": "media",
    "role": "企劃撰寫",
    "tools": [
      "WBS",
      "SMART 指標",
      "SWOT 分析",
      "TA 定位"
    ],
    "summary": "針對臺東熱氣球嘉年華撰寫完整整合行銷策略書，包含WBS 工作分解結構與量化關鍵績效指標。",
    "description": "",
    "image": "https://placehold.co/800x500/C99E9A/5C4D43?text=%E6%95%B4%E5%90%88%E8%A1%8C%E9%8A%B7%E4%BC%81%E5%8A%8B%E6%9B%B8",
    "youtubeUrl": "",
    "driveUrl": "https://drive.google.com",
    "figmaUrl": "",
    "localVideoBlob": ""
  }
];


// 檢查是否為管理員模式（網址包含 ?admin=true）
const isAdminMode = new URLSearchParams(window.location.search).get('admin') === 'true';

// 狀態變數
let projects = [];
let currentFilter = 'all';
let tempLocalVideoBlobUrl = '';

// 頁面初始化
window.addEventListener('DOMContentLoaded', () => {
  setupAdminUI();
  loadProjects();
  renderProjects();
});

// 控制管理員介面顯示或隱藏（面試官打開網址時自動隱藏編輯按鈕）
function setupAdminUI() {
  const addBtn = document.querySelector('button[onclick="openAddModal()"]');
  if (addBtn && !isAdminMode) {
    addBtn.style.display = 'none';
  }

  // 在編輯表單底部自動注入「複製最新程式碼」與「重置資料」工具列
  const form = document.getElementById('projectForm');
  if (form && !document.getElementById('adminExportBar')) {
    const exportBar = document.createElement('div');
    exportBar.id = 'adminExportBar';
    exportBar.className = 'mt-4 pt-4 border-t border-dashed border-morandi-border flex flex-wrap items-center justify-between gap-2 bg-morandi-card/60 p-3 rounded-2xl';
    exportBar.innerHTML = `
      <div class="text-[11px] text-morandi-taupe">
        <strong class="text-morandi-cocoa block">同步至 GitHub 步驟：</strong>
        編輯完畢後點擊右側按鈕，覆蓋貼回 <code class="bg-morandi-bg px-1 rounded">js/main.js</code> 最上方即可永久保存。
      </div>
      <div class="flex items-center gap-2">
        <button type="button" onclick="resetDefaultData()" class="px-3 py-1.5 rounded-xl text-[11px] font-medium border border-morandi-border text-morandi-taupe hover:text-morandi-cocoa bg-morandi-bg transition-all">
          還原程式碼預設值
        </button>
        <button type="button" onclick="copyProjectsCode()" class="px-3.5 py-1.5 rounded-xl text-[11px] font-semibold bg-morandi-cocoa text-white hover:bg-morandi-cocoa/90 transition-all flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-code"></i>
          <span>複製最新 defaultProjects 程式碼</span>
        </button>
      </div>
    `;
    form.appendChild(exportBar);
  }
}

// 讀取資料：一般訪客強制讀取 defaultProjects（確保跨裝置一致）；管理員模式才讀取暫存編輯
function loadProjects() {
  if (isAdminMode) {
    const saved = localStorage.getItem('infocomm_portfolio_projects');
    if (saved) {
      try {
        projects = JSON.parse(saved);
        return;
      } catch (e) {
        console.warn('暫存資料解析失敗，載入預設資料');
      }
    }
  }
  projects = [...defaultProjects];
}

// 儲存至 localStorage（僅供管理員本機編輯暫存使用）
function saveProjects() {
  localStorage.setItem('infocomm_portfolio_projects', JSON.stringify(projects));
}

// 一鍵複製最新 defaultProjects 程式碼（解決跨電腦不保存問題）
function copyProjectsCode() {
  // 清理無效的暫存 blob 網址，避免寫入正式程式碼
  const cleanProjects = projects.map(p => ({
    ...p,
    localVideoBlob: (p.localVideoBlob && p.localVideoBlob.startsWith('blob:')) ? '' : (p.localVideoBlob || '')
  }));

  const codeString = `const defaultProjects = ${JSON.stringify(cleanProjects, null, 2)};`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(codeString).then(() => {
      showToast('已複製最新程式碼！請貼回 js/main.js 覆蓋 defaultProjects');
    }).catch(() => fallbackCopy(codeString));
  } else {
    fallbackCopy(codeString);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('已複製最新程式碼！請貼回 js/main.js 覆蓋 defaultProjects');
}

// 分類篩選切換
function filterPortfolio(cat) {
  currentFilter = cat;

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
        <p class="text-sm">這個分類目前沒有作品。</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-morandi-card rounded-3xl border border-morandi-border overflow-hidden morandi-shadow card-hover flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5';

    let catBadge = '';
    if (p.category === 'uiux') catBadge = '<span class="badge-pink px-2.5 py-1 text-[11px] rounded-full font-medium">UI/UX 與網頁設計</span>';
    else if (p.category === 'ai') catBadge = '<span class="badge-sage px-2.5 py-1 text-[11px] rounded-full font-medium">影音</span>';
    else catBadge = '<span class="badge-cocoa px-2.5 py-1 text-[11px] rounded-full font-medium">企劃</span>';

    const toolsHtml = (p.tools || []).slice(0, 3).map(t =>
      `<span class="px-2 py-0.5 text-[10px] rounded-md bg-morandi-bg text-morandi-taupe border border-morandi-border">${t}</span>`
    ).join('');

    // 僅在 ?admin=true 模式下顯示編輯與刪除按鈕
    const adminActionsHtml = isAdminMode ? `
      <div class="flex items-center gap-2">
        <button onclick="openEditModal('${p.id}')" class="p-1.5 rounded-lg text-morandi-taupe hover:text-morandi-cocoa hover:bg-morandi-bg transition-all" title="編輯作品">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="deleteProject('${p.id}')" class="p-1.5 rounded-lg text-morandi-taupe hover:text-red-500 hover:bg-morandi-bg transition-all" title="刪除作品">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    ` : '';

    card.innerHTML = `
      <div>
        <div class="relative h-48 bg-morandi-border/40 overflow-hidden cursor-pointer" onclick="openDetailModal('${p.id}')">
          <img src="${p.image || 'https://placehold.co/600x400/EFECE6/5C4D43?text=Portfolio'}" alt="${p.title}" class="w-full h-full object-cover img-hover-zoom" onerror="this.src='https://placehold.co/600x400/EFECE6/5C4D43?text=Project+Cover'">
          <div class="absolute top-3 left-3">
            ${catBadge}
          </div>
          ${p.youtubeUrl ? '<div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center text-xs shadow-md"><i class="fa-brands fa-youtube"></i></div>' : ''}
          ${p.localVideoBlob ? '<div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-morandi-sage/90 text-white flex items-center justify-center text-xs shadow-md"><i class="fa-solid fa-play"></i></div>' : ''}
        </div>

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

      <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-morandi-border/60 text-xs">
        <button onclick="openDetailModal('${p.id}')" class="font-medium text-morandi-cocoa hover:text-morandi-pinkDark transition-colors flex items-center gap-1.5">
          <span>查看詳細細節</span>
          <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
        </button>
        ${adminActionsHtml}
      </div>
    `;

    grid.appendChild(card);
  });
}

// 解析 YouTube 嵌入網址（支援 watch、youtu.be、shorts 與參數清理）
function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  let videoId = '';
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  if (match && match[1]) {
    videoId = match[1];
  }
  return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0` : '';
}

// 開啟專案詳情彈窗
function openDetailModal(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  const container = document.getElementById('detailModalContent');
  const embedYt = getYoutubeEmbedUrl(p.youtubeUrl);

  let catBadge = '';
  if (p.category === 'uiux') catBadge = '<span class="badge-pink px-3 py-1 text-xs rounded-full font-medium">UI/UX 與專案管理</span>';
  else if (p.category === 'ai') catBadge = '<span class="badge-sage px-3 py-1 text-xs rounded-full font-medium">影音</span>';
  else catBadge = '<span class="badge-cocoa px-3 py-1 text-xs rounded-full font-medium">企劃</span>';

  const toolsHtml = (p.tools || []).map(t =>
    `<span class="px-3 py-1 text-xs rounded-xl bg-morandi-card text-morandi-cocoa border border-morandi-border font-medium">${t}</span>`
  ).join('');

  let mediaSection = '';
  if (embedYt) {
    mediaSection = `
      <div class="relative w-full rounded-2xl overflow-hidden aspect-video bg-black mb-6 shadow-md">
        <iframe src="${embedYt}" class="w-full h-full border-0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

  let linksButtons = '';
  if (p.driveUrl || p.figmaUrl || p.youtubeUrl) {
    linksButtons = `
      <div class="mt-6 pt-6 border-t border-morandi-border flex flex-wrap gap-3">
        ${p.youtubeUrl ? `
          <a href="${p.youtubeUrl}" target="_blank" rel="noopener" class="bg-red-600/90 text-white px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-red-700 transition-all flex items-center gap-2 shadow-sm">
            <i class="fa-brands fa-youtube"></i>
            <span>前往 YouTube 觀看影片</span>
          </a>
        ` : ''}
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
    document.getElementById('localVideoStatus').textContent = `已載入本機影片：${file.name}（注意：正式上架請將影片放入資料夾並填寫相對路徑）`;
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
    const idx = projects.findIndex(p => p.id === editId);
    if (idx !== -1) {
      projects[idx] = {
        ...projects[idx],
        title, category, role, tools, summary, description,
        youtubeUrl, driveUrl, figmaUrl, image,
        localVideoBlob: tempLocalVideoBlobUrl || projects[idx].localVideoBlob
      };
      showToast('作品已暫存更新！記得點擊「複製最新程式碼」保存至檔案');
    }
  } else {
    const newProj = {
      id: 'p_' + Date.now(),
      title, category, role, tools, summary, description,
      youtubeUrl, driveUrl, figmaUrl, image,
      localVideoBlob: tempLocalVideoBlobUrl
    };
    projects.unshift(newProj);
    showToast('新作品已暫存！記得點擊「複製最新程式碼」保存至檔案');
  }

  saveProjects();
  renderProjects();
  closeAddModal();
}

// 刪除作品
function deleteProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  showToast(`已移除作品《${p.title.slice(0, 8)}...》，記得匯出更新程式碼`);
  projects = projects.filter(item => item.id !== id);
  saveProjects();
  renderProjects();
}

// 重置預設資料
function resetDefaultData() {
  localStorage.removeItem('infocomm_portfolio_projects');
  projects = [...defaultProjects];
  renderProjects();
  showToast('已同步回 js/main.js 內的預設資料');
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
  }, 3500);
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