// ==============================================================
// 1. DATA GỐC 
// ==============================================================
const DATA = {
  genre: { label: 'Thể loại', emoji: '📚',
    tree: {
      'Fiction (Hư cấu)': {
        'Fantasy (Kỳ ảo)': ['High Fantasy', 'Low Fantasy', 'Urban Fantasy', 'Dark Fantasy', 'Sword & Sorcery', 'Mythic Fantasy', 'Fairy Tale', 'Portal Fantasy', 'Isekai (Xuyên không)', 'LitRPG / Game Fantasy', 'Cultivation (Tu tiên)'],
        'Sci-Fi (Viễn tưởng)': ['Hard Sci-fi', 'Soft Sci-fi', 'Cyberpunk', 'Steampunk', 'Space Opera', 'Time Travel', 'Dystopian', 'Post-apocalyptic', 'Alien', 'AI / Robot'],
        'Mystery / Thriller': ['Detective', 'Psychological Thriller', 'Legal Thriller', 'Spy', 'Heist'],
        'Horror (Kinh dị)': ['Supernatural Horror', 'Psychological Horror', 'Survival Horror', 'Cosmic Horror'],
        'Romance (Tình cảm)': ['Contemporary Romance', 'Historical Romance', 'Romcom', 'Tragic Romance', 'BL / GL', 'Harem', 'Slow Burn'],
        'Action / Adventure': ['Survival Action', 'Military', 'Martial Arts', 'Superhero', 'Treasure Hunt', 'Quest'],
        'Slice of Life': ['School Life', 'Coming-of-age', 'Workplace', 'Healing'],
        'Comedy (Hài)': ['Satire', 'Parody', 'Dark Comedy'],
        'Drama (Chính kịch)': ['Family Drama', 'Social Drama', 'Tragedy']
      },
      'Non-fiction (Phi hư cấu)': ['Biography', 'Memoir', 'Essay', 'Self-help', 'True Crime']
    }
  },
  setting: { label: 'Bối cảnh', emoji: '🌍',
    tree: {
      'Thời gian': ['Quá khứ cổ đại', 'Trung cổ', 'Cận đại', 'Hiện đại', 'Tương lai gần', 'Tương lai xa', 'Thời gian hỗn loạn'],
      'Không gian': ['Trái đất', 'Hành tinh khác', 'Không gian vũ trụ', 'Thế giới ngầm', 'Không gian ảo (Cyberspace)'],
      'Môi trường': ['Đô thị', 'Nông thôn', 'Rừng rậm', 'Sa mạc', 'Băng tuyết', 'Biển cả', 'Hòn đảo hoang']
    }
  },
  role: { label: 'Vai trò nhân vật chính', emoji: '🎭',
    tree: {
      'Anh hùng': ['Người được chọn (Chosen One)', 'Anh hùng bất đắc dĩ', 'Chiến binh vĩ đại'],
      'Phản anh hùng (Anti-hero)': ['Lính đánh thuê', 'Sát thủ', 'Kẻ lừa đảo', 'Kẻ báo thù'],
      'Bình thường': ['Học sinh/Sinh viên', 'Nhân viên văn phòng', 'Nông dân', 'Người thợ'],
      'Đặc biệt': ['Người ngoài hành tinh', 'AI/Robot', 'Quái vật', 'Thần thánh', 'Kẻ xuyên không']
    }
  },
  personality: { label: 'Tính cách nhân vật chính', emoji: '🧠',
    tree: {
      'Tích cực': ['Dũng cảm', 'Tốt bụng', 'Thông minh', 'Lạc quan', 'Kiên trì', 'Hài hước'],
      'Tiêu cực': ['Nóng nảy', 'Lạnh lùng', 'Kiêu ngạo', 'Đa nghi', 'Nhát gan', 'Bi quan'],
      'Đặc thù': ['Bí ẩn', 'Hai mặt', 'Lập dị', 'Khó lường', 'Thực dụng']
    }
  },
  goal: { label: 'Mục tiêu', emoji: '🎯',
    tree: {
      'Sinh tồn': ['Sống sót', 'Bảo vệ gia đình/bạn bè', 'Thoát khỏi nguy hiểm'],
      'Thành tựu': ['Trở thành số một', 'Trở nên giàu có', 'Sáng tạo/Phát minh'],
      'Tìm kiếm': ['Tìm kiếm sự thật', 'Tìm người thân', 'Tìm bảo vật', 'Tìm lại ký ức'],
      'Khác': ['Trả thù', 'Cứu thế giới', 'Thay đổi xã hội', 'Tìm kiếm tình yêu', 'Chuộc lỗi']
    }
  },
  conflict: { label: 'Xung đột chính', emoji: '⚔️',
    tree: {
      'Bên ngoài': ['Nhân vật vs Nhân vật', 'Nhân vật vs Tự nhiên', 'Nhân vật vs Xã hội', 'Nhân vật vs Định mệnh', 'Nhân vật vs Siêu nhiên'],
      'Bên trong': ['Nhân vật vs Bản thân (Đạo đức)', 'Nhân vật vs Bản thân (Tâm lý)']
    }
  },
  tone: { label: 'Bầu không khí (Tone)', emoji: '🎨',
    tree: {
      'Nhẹ nhàng': ['Ấm áp', 'Tươi sáng', 'Hài hước', 'Bình yên'],
      'Căng thẳng': ['Hồi hộp', 'Đen tối', 'Bi kịch', 'Đáng sợ', 'Ngột ngạt'],
      'Hùng tráng': ['Bi tráng', 'Hào hùng', 'Kỳ bí', 'Huyền ảo']
    }
  },
  relationship: { label: 'Mối quan hệ', emoji: '🤝',
    tree: {
      'Tình yêu': ['Kẻ thù thành người yêu (Enemies to Lovers)', 'Bạn thân thành người yêu', 'Tình yêu sét đánh', 'Tình đơn phương'],
      'Tình bạn': ['Đồng đội sinh tử', 'Đối thủ cạnh tranh', 'Tình bạn khác thế hệ', 'Tình bạn phản bội'],
      'Gia đình': ['Gia đình êm ấm', 'Gia đình đổ vỡ', 'Bảo vệ em bè/người thân', 'Nhận nuôi']
    }
  },
  scale: { label: 'Quy mô', emoji: '🌌',
    tree: {
      'Siêu nhỏ': ['Một căn phòng', 'Một ngôi nhà', 'Một cá nhân'],
      'Nhỏ': ['Một ngôi làng', 'Một trường học', 'Một công ty'],
      'Vừa': ['Một thành phố', 'Một quốc gia'],
      'Lớn': ['Toàn cầu', 'Một lục địa'],
      'Siêu lớn': ['Hệ mặt trời', 'Thiên hà', 'Đa vũ trụ']
    }
  },
  power: { label: 'Hệ thống sức mạnh', emoji: '⚡',
    tree: {
      'Phép thuật': ['Mana/Năng lượng', 'Nguyên tố (Lửa, Nước,...)', 'Cổ ngữ/Phù thủy'],
      'Khoa học': ['Đột biến gen', 'Công nghệ cấy ghép (Cybernetics)', 'Áo giáp/Vũ khí cao cấp'],
      'Tu luyện': ['Nội công/Võ thuật', 'Linh khí', 'Tiên hiệp'],
      'Hệ thống (System)': ['Cấp độ (Level)', 'Kỹ năng (Skill tree)', 'Nhiệm vụ (Quests)']
    }
  },
  item: { label: 'Vật phẩm quan trọng', emoji: '💎',
    tree: {
      'Vũ khí': ['Thanh kiếm truyền thuyết', 'Súng lượng tử', 'Quyền trượng ma thuật'],
      'Bảo vật': ['Đá quý', 'Nhẫn cổ', 'Sách ma thuật', 'Bản đồ kho báu'],
      'Khác': ['Mảnh vỡ ký ức', 'Chìa khóa không gian', 'Thuốc giải độc']
    }
  },
  race: { label: 'Chủng tộc', emoji: '👽',
    tree: {
      'Cơ bản': ['Con người', 'Tiên (Elf)', 'Người lùn (Dwarf)', 'Thú nhân (Beastman)'],
      'Hắc ám': ['Quỷ (Demon)', 'Ma cà rồng (Vampire)', 'Undead (Xác ướp/Zombie)', 'Orc'],
      'Viễn tưởng': ['Người ngoài hành tinh (Alien)', 'Cyborg', 'AI/Android', 'Thực thể vũ trụ']
    }
  },
  faction: { label: 'Thế lực / Phe phái', emoji: '🛡️',
    tree: {
      'Chính quyền': ['Vương quốc/Đế chế', 'Cộng hòa', 'Hội đồng pháp thuật', 'Liên bang ngân hà'],
      'Ngầm': ['Băng đảng mafia', 'Hội sát thủ', 'Giáo phái hắc ám', 'Phiến quân nổi dậy'],
      'Độc lập': ['Trường học/Học viện', 'Hiệp hội thám hiểm/Lính đánh thuê', 'Gia tộc ẩn danh']
    }
  },
  length: {
    label: 'Độ dài truyện', emoji: '📏',
    tree: {
      'Micro Content (Siêu ngắn)': {
        'One-line Story (Truyện 1 dòng)': ['≤ 10 từ', 'Punchline Story'],
        'Six-word Story (6 từ)': ['Truyện 6 từ'],
        'Microfiction (Truyện cực ngắn)': ['≤ 50 từ', '≤ 100 từ', 'Drabble (100 từ)'],
        'Nano Story': ['≤ 300 từ', 'Flash snippet']
      },
      'Flash Fiction (Truyện rất ngắn)': {
        'Flash Fiction': ['300 – 1,000 từ', 'Ultra Flash'],
        'Sudden Fiction': ['1,000 – 1,500 từ', 'Mini Story'],
        'Short-short Story': ['1,500 – 3,000 từ', 'Compact Narrative']
      },
      'Short Story (Truyện ngắn)': {
        'Classic Short Story': ['3,000 – 7,500 từ', 'Literary Short Story'],
        'Modern Short Story': ['5,000 – 10,000 từ', 'Genre Short Story'],
        'Extended Short Story': ['7,500 – 15,000 từ', 'Long Short Story']
      },
      'Novelette (Truyện vừa ngắn)': ['7,500 – 17,500 từ', 'Structured Story', 'Character-focused Narrative'],
      'Novella (Truyện vừa)': ['17,500 – 40,000 từ', 'Short Novel Format', 'Focused Plot Story'],
      'Novel (Tiểu thuyết)': {
        'Short Novel': ['40,000 – 60,000 từ', 'Fast-paced Novel'],
        'Standard Novel': ['60,000 – 100,000 từ', 'Độ dài phổ biến nhất'],
        'Long Novel': ['100,000 – 150,000 từ', 'Complex Story'],
        'Epic Novel': ['150,000 – 300,000+ từ', 'Multi-plot Narrative']
      },
      'Web Novel / Serialized (Truyện dài kỳ)': {
        'Chapter-based Story': ['Chương ngắn (500 – 1,500 từ)', 'Chương vừa (1,500 – 3,000 từ)', 'Chương dài (3,000 – 10,000+ từ)'],
        'Total Length': ['Web Novel Ngắn (50k – 200k từ)', 'Vừa (200k – 500k từ)', 'Dài (500k – 1M từ)', 'Cực dài (1M – 10M+ từ)'],
        'Arc Structure': ['1 Arc (5–30 chương)', 'Saga (Nhiều arc)', 'Truyện không hồi kết']
      },
      'Series (Chuỗi truyện)': {
        'Duology (2 phần)': ['Duology'],
        'Trilogy (3 phần)': ['Trilogy'],
        'Tetralogy (4 phần)': ['Tetralogy'],
        'Saga Series': ['Multi-book Series', 'Long-running Franchise'],
        'Universe Series': ['Shared Universe', 'Expanded Universe']
      },
      'Script / Screenplay (Kịch bản)': {
        'Short Film Script': ['5 – 30 trang', '~5 – 30 phút'],
        'Feature Film Script': ['90 – 120 trang', '~90 – 120 phút'],
        'TV Episode': ['Tập 20 phút', 'Tập 40 phút', 'Tập 60 phút'],
        'Series Script': ['Dựa trên mùa (Season-based)', 'Nhiều mùa (Multi-season)']
      },
      'Interactive Story (Tương tác)': {
        'Game Story': ['Linear Story (Cốt truyện tuyến tính)', 'Branching Story (Chia nhánh)', 'Open World Narrative'],
        'Visual Novel': ['VN Ngắn (2–10 giờ)', 'VN Vừa (10–40 giờ)', 'VN Dài (40–100+ giờ)'],
        'Choice-based Story': ['Nhiều cái kết', 'Độ dài động']
      },
      'Fanfiction Length (Fanfic)': ['Drabble (100 từ)', 'Ficlet (≤ 1,000 từ)', 'One-shot (1k – 10k từ)', 'Nhiều chương', 'Epic Fanfic (100k+ từ)'],
      'Publishing Format (Theo xuất bản)': {
        'Magazine Story': ['Magazine Story'],
        'Anthology Entry': ['Anthology Entry'],
        'Light Novel': ['40k – 60k từ', 'Định dạng minh họa'],
        'Webtoon / Comic Script': ['Dựa trên tập', 'Theo phân cảnh (Panel pacing)'],
        'Audiobook Length': ['Ngắn (1–3 giờ)', 'Vừa (3–10 giờ)', 'Dài (10–50+ giờ)']
      },
      'Meta / Extreme Length (Đặc biệt)': {
        'Infinite Story (Vô hạn)': ['Vòng lặp vô tận', 'Chuỗi không bao giờ kết thúc'],
        'Procedural Story': ['AI tạo nội dung vô hạn', 'Mở rộng động (Dynamic Expansion)'],
        'Archive-scale Story': ['Hàng triệu từ', 'Ra mắt trong nhiều thập kỷ', 'Vũ trụ nhiều tác giả']
      }
    }
  }
};

// ==============================================================
// 2. LOGIC UI CHỌN TAG 
// ==============================================================
const state = {
  mode: 'simple',
  selections: {},
  userInputs: {},
  decisionMode: {},
};

const SIMPLE_SECTIONS = ['genre','setting','role','personality','goal','relationship','length'];
const ADVANCED_SECTIONS = ['genre','setting','role','personality','goal','conflict','tone','relationship','scale','power','item','race','faction','length'];
const NONE_VALUE = '__NONE__';

function getSelections(key) {
  if (!state.selections[key]) state.selections[key] = new Set();
  return state.selections[key];
}

function totalSelected() {
  let n = 0;
  Object.values(state.selections).forEach(s => {
    if(!s.has(NONE_VALUE)) n += s.size;
  });
  return n;
}

function getAllTagsForKey(key) {
  const tags = [];
  function walk(node) {
    if (Array.isArray(node)) {
      node.forEach(t => { if (t !== NONE_VALUE) tags.push(t); });
    } else if (node && typeof node === 'object') {
      Object.values(node).forEach(walk);
    }
  }
  walk(DATA[key].tree);
  return tags;
}

function fuzzyScore(query, tag) {
  const q = query.toLowerCase().trim();
  const t = tag.toLowerCase();
  if (!q || q.length < 2) return 0;
  if (t === q) return 100;
  if (t.includes(q)) return 85;
  const words = q.split(/[\s\/\-\(\)]+/);
  let matches = 0;
  words.forEach(w => { if (w.length > 1 && t.includes(w)) matches++; });
  return (matches / words.length) * 100;
}

function toggleSection(key, header, body) {
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.section-header').forEach(h => h.classList.remove('open'));
  document.querySelectorAll('.section-body').forEach(b => b.classList.remove('open'));
  if (!isOpen) {
    header.classList.add('open');
    body.classList.add('open');
  }
}

function toggleTag(el, key, val) {
  const sel = getSelections(key);
  
  if (val === NONE_VALUE) {
    if (sel.has(NONE_VALUE)) {
      sel.delete(NONE_VALUE);
      el.classList.remove('selected');
    } else {
      sel.clear();
      sel.add(NONE_VALUE);
      const sectionEl = document.getElementById(`mode-${state.mode}`).querySelector(`[data-key="${key}"]`);
      if (sectionEl) {
        sectionEl.querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
      }
      el.classList.add('selected');
    }
  } else {
    if (sel.has(val)) {
      sel.delete(val);
      el.classList.remove('selected');
    } else {
      sel.add(val);
      el.classList.add('selected');
      if (sel.has(NONE_VALUE)) {
        sel.delete(NONE_VALUE);
        const sectionEl = document.getElementById(`mode-${state.mode}`).querySelector(`[data-key="${key}"]`);
        if (sectionEl) {
          const noneTag = sectionEl.querySelector('.tag-none');
          if (noneTag) noneTag.classList.remove('selected');
        }
      }
    }
  }

  const badge = document.getElementById(`badge-${key}`);
  const len = sel.has(NONE_VALUE) ? 0 : sel.size;
  if (badge) {
    badge.textContent = len;
    badge.style.display = len > 0 ? 'inline-block' : 'none';
  }
  
  updateSummary();
  document.getElementById('total-count').textContent = totalSelected();
}

function setDecision(key, modeType) {
  if (!state.decisionMode[key]) state.decisionMode[key] = { ai: false, user: false };
  
  state.decisionMode[key][modeType] = !state.decisionMode[key][modeType];
  
  const btn = document.querySelector(`#decision-${key}-${state.mode} .btn-${modeType}`);
  if (btn) {
    if (state.decisionMode[key][modeType]) btn.classList.add('active');
    else btn.classList.remove('active');
  }

  if (modeType === 'user') {
    const area = document.getElementById(`user-input-${key}-${state.mode}`);
    if (area) {
      area.style.display = state.decisionMode[key]['user'] ? 'block' : 'none';
    }
  }
  updateSummary();
}

function selectSuggest(key, tagStr) {
  const sel = getSelections(key);
  if (!sel.has(tagStr)) {
    sel.add(tagStr);
    
    const sectionEl = document.getElementById(`mode-${state.mode}`).querySelector(`[data-key="${key}"]`);
    if (sectionEl) {
      const allTags = sectionEl.querySelectorAll('.tag');
      allTags.forEach(t => {
        if (t.textContent === tagStr) t.classList.add('selected');
      });
      if (sel.has(NONE_VALUE)) {
        sel.delete(NONE_VALUE);
        const noneTag = sectionEl.querySelector('.tag-none');
        if (noneTag) noneTag.classList.remove('selected');
      }
    }
    
    const badge = document.getElementById(`badge-${key}`);
    const len = sel.has(NONE_VALUE) ? 0 : sel.size;
    if (badge) {
      badge.textContent = len;
      badge.style.display = len > 0 ? 'inline-block' : 'none';
    }
    
    document.getElementById('total-count').textContent = totalSelected();
    updateSummary();
  }
  
  const dropdown = document.getElementById(`suggest-${key}-${state.mode}`);
  if (dropdown) dropdown.style.display = 'none';
}

function buildSection(key, config) {
  const section = document.createElement('div');
  section.className = 'section';
  section.dataset.key = key;

  const header = document.createElement('div');
  header.className = 'section-header';
  
  const initialLen = getSelections(key).has(NONE_VALUE) ? 0 : getSelections(key).size;
  const displayStyle = initialLen > 0 ? 'inline-block' : 'none';

  header.innerHTML = `
    <div class="section-title">
      <span class="section-emoji">${config.emoji}</span>
      ${config.label}
    </div>
    <div style="display: flex; align-items: center; gap: 14px;">
      <span class="section-badge" id="badge-${key}" style="display: ${displayStyle};">${initialLen}</span>
      <div class="section-chevron">▼</div>
    </div>
  `;

  const body = document.createElement('div');
  body.className = 'section-body';
  
  const noneRow = document.createElement('div');
  noneRow.className = 'none-row tag-grid';
  const noneTag = document.createElement('div');
  noneTag.className = 'tag tag-none';
  noneTag.textContent = '❌ Không có';
  noneTag.title = 'Phần này không có / không áp dụng';
  if (getSelections(key).has(NONE_VALUE)) noneTag.classList.add('selected');
  noneTag.onclick = () => toggleTag(noneTag, key, NONE_VALUE);
  noneRow.appendChild(noneTag);
  body.appendChild(noneRow);

  const treeRoot = document.createElement('div');
  treeRoot.appendChild(buildTree(key, config.tree, 0));
  body.appendChild(treeRoot);
  
  body.appendChild(buildDecisionControls(key));

  header.onclick = () => toggleSection(key, header, body);
  section.appendChild(header);
  section.appendChild(body);
  return section;
}

function buildTree(key, node, depth) {
  const container = document.createElement('div');
  container.className = 'tree-container';
  
  if (depth > 0) {
      container.style.marginLeft = '15px';
      container.style.paddingLeft = '10px';
      container.style.borderLeft = '1px dashed var(--border)';
      container.style.marginTop = '6px';
  }

  if (Array.isArray(node)) {
    const grid = document.createElement('div');
    grid.className = 'tag-grid';
    node.forEach(item => {
      const t = document.createElement('div');
      t.className = 'tag';
      t.textContent = item;
      if (getSelections(key).has(item)) t.classList.add('selected');
      t.onclick = () => toggleTag(t, key, item);
      grid.appendChild(t);
    });
    container.appendChild(grid);
  } else {
    Object.keys(node).forEach(childKey => {
      const folderWrap = document.createElement('div');
      folderWrap.style.marginBottom = '6px';
      
      const t = document.createElement('div');
      t.className = 'tag has-children';
      t.textContent = childKey;
      
      const childContainer = buildTree(key, node[childKey], depth + 1);
      childContainer.style.display = 'none';
      
      t.onclick = () => {
         if (childContainer.style.display === 'none') {
             childContainer.style.display = 'block';
             t.classList.add('open');
         } else {
             childContainer.style.display = 'none';
             t.classList.remove('open');
         }
      };
      
      folderWrap.appendChild(t);
      folderWrap.appendChild(childContainer);
      container.appendChild(folderWrap);
    });
  }
  return container;
}

function buildDecisionControls(key) {
  const modes = state.decisionMode[key] || { ai: false, user: false };
  const wrapper = document.createElement('div');
  
  const div = document.createElement('div');
  div.className = 'decision-row';
  div.id = `decision-${key}-${state.mode}`;
  div.innerHTML = `
    <button class="decision-btn btn-ai ${modes.ai ? 'active' : ''}" onclick="setDecision('${key}','ai')">
      <span class="icon">🤖</span> Nhờ AI quyết định
    </button>
    <button class="decision-btn btn-user ${modes.user ? 'active' : ''}" onclick="setDecision('${key}','user')">
      <span class="icon">✍️</span> Tôi tự điền
    </button>
  `;
  
  const inputArea = document.createElement('div');
  inputArea.className = `user-input-area ${modes.user ? 'visible' : ''}`;
  inputArea.id = `user-input-${key}-${state.mode}`;
  inputArea.style.display = modes.user ? 'block' : 'none';
  
  const inputWrap = document.createElement('div');
  inputWrap.className = 'input-wrap';
  
  const ta = document.createElement('textarea');
  ta.placeholder = `Viết mô tả hoặc yêu cầu tùy chỉnh... (gợi ý tự động sẽ hiện ra)`;
  ta.value = state.userInputs[key] || '';
  
  const dropdown = document.createElement('div');
  dropdown.className = 'suggest-dropdown';
  dropdown.id = `suggest-${key}-${state.mode}`;
  dropdown.style.display = 'none';
  
  ta.oninput = (e) => { 
    state.userInputs[key] = e.target.value; 
    updateSummary(); 
    
    const val = e.target.value.trim();
    if (val.length < 2) {
      dropdown.style.display = 'none';
      return;
    }
    const tags = getAllTagsForKey(key);
    const results = tags.map(t => ({ tag: t, score: fuzzyScore(val, t) }))
                        .filter(r => r.score > 20)
                        .sort((a,b) => b.score - a.score)
                        .slice(0, 5);
                        
    if (results.length > 0) {
      let html = `<div class="suggest-hint">✦ Gợi ý (nhấn để chọn):</div>`;
      results.forEach(r => {
        const safeTag = r.tag.replace(/`/g, "\\`").replace(/'/g, "\\'");
        html += `<div class="suggest-item" onclick="selectSuggest('${key}', '${safeTag}')">${r.tag}</div>`;
      });
      dropdown.innerHTML = html;
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  };
  
  inputWrap.appendChild(ta);
  inputWrap.appendChild(dropdown);
  inputArea.appendChild(inputWrap);
  
  wrapper.appendChild(div);
  wrapper.appendChild(inputArea);
  return wrapper;
}

function updateSummary() {
  const content = document.getElementById('summary-content');
  content.innerHTML = '';
  
  if (state.mode === 'manual') {
    const val = document.getElementById('manual-input')?.value.trim();
    if (val) {
       content.innerHTML = `<div class="summary-empty">Bạn đang viết cốt truyện ở chế độ tự do.</div>`;
    } else {
       content.innerHTML = `<div class="summary-empty">Hãy viết gì đó vào khung...</div>`;
    }
    return;
  }

  const sections = state.mode === 'simple' ? SIMPLE_SECTIONS : ADVANCED_SECTIONS;
  let hasAny = false;

  sections.forEach(key => {
    const cfg = DATA[key];
    const sel = getSelections(key);
    const dMode = state.decisionMode[key] || {ai: false, user: false};
    const userText = state.userInputs[key] || '';
    
    if (sel.size > 0 || dMode.ai || (dMode.user && userText.trim())) {
      hasAny = true;
      const sec = document.createElement('div');
      sec.className = 'summary-section';
      sec.innerHTML = `<div class="summary-section-label">${cfg.emoji} ${cfg.label}</div>`;
      
      const tagsWrap = document.createElement('div');
      tagsWrap.className = 'summary-tags';
      
      if (sel.has(NONE_VALUE)) {
        tagsWrap.innerHTML += `<div class="summary-tag none-tag">Không có</div>`;
      } else {
        [...sel].forEach(val => {
          tagsWrap.innerHTML += `<div class="summary-tag">${val}</div>`;
        });
      }
      
      if (dMode.ai) {
        tagsWrap.innerHTML += `<div class="summary-tag" style="background:rgba(123,111,240,0.1); color:var(--accent2); border-color:var(--accent2)">🤖 AI Chọn</div>`;
      }
      sec.appendChild(tagsWrap);
      
      if (dMode.user && userText.trim()) {
        const ut = document.createElement('div');
        ut.className = 'summary-user-text';
        ut.textContent = userText;
        sec.appendChild(ut);
      }
      
      content.appendChild(sec);
    }
  });

  if (!hasAny) {
    content.innerHTML = '<div class="summary-empty">Chưa có lựa chọn nào được thêm vào cốt truyện.</div>';
  }
}

function resetAll() {
  if (!confirm('Đặt lại tất cả lựa chọn?')) return;
  Object.keys(state.selections).forEach(k => state.selections[k].clear());
  state.userInputs = {};
  state.decisionMode = {};
  document.getElementById('character-names').value = '';
  if(document.getElementById('manual-input')) document.getElementById('manual-input').value = '';
  
  initApp();
  document.getElementById('total-count').textContent = '0';
  updateSummary();
}

function switchMode(newMode) {
  if (state.mode === newMode) return;
  
  Object.keys(state.selections).forEach(k => state.selections[k].clear());
  state.userInputs = {};
  state.decisionMode = {};

  state.mode = newMode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  
  document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`mode-${newMode}`).classList.add('active');
  
  if(newMode !== 'manual') {
      initApp();
  }
  document.getElementById('total-count').textContent = '0';
  updateSummary();
}

function renderMode(mode, keys) {
  const container = document.getElementById(`mode-${mode}`);
  container.innerHTML = '';
  keys.forEach((key, idx) => {
    const cfg = DATA[key];
    if (!cfg) return;
    const section = buildSection(key, cfg);
    container.appendChild(section);
  });
}

function initApp() {
  if(state.mode === 'simple') {
      renderMode('simple', SIMPLE_SECTIONS);
  } else if (state.mode === 'advanced') {
      renderMode('advanced', ADVANCED_SECTIONS);
  }
  updateSummary();
}

// ==============================================================
// 3. HỆ THỐNG TÀI KHOẢN, TỦ TRUYỆN & CHUYỂN TRANG
// ==============================================================
let currentUser = null;
let currentStoryData = null;

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0); 
  if(screenId === 'screen-dashboard') renderDashboard();
}

function initDB() {
  if (!localStorage.getItem('storyUsersDB')) localStorage.setItem('storyUsersDB', JSON.stringify({}));
  const lastUser = localStorage.getItem('storyLastUser');
  if (lastUser) {
    let db = JSON.parse(localStorage.getItem('storyUsersDB'));
    if (db[lastUser]) {
      currentUser = lastUser;
      document.getElementById('display-username').innerText = currentUser;
      document.getElementById('dash-username').innerText = currentUser;
      _migrateUser(db, currentUser);
      db = JSON.parse(localStorage.getItem('storyUsersDB'));
      if (db[currentUser].provider && db[currentUser].keys[db[currentUser].provider]) {
        switchScreen('screen-dashboard');
      } else {
        openApiScreen(false);
      }
      return;
    }
  }
  switchScreen('screen-auth');
}

function toggleRegisterMode() {
  const rePass = document.getElementById('re-password');
  const btnLogin = document.getElementById('btn-login');
  const btnReg = document.getElementById('btn-register');
  if (rePass.style.display === 'none') {
    rePass.style.display = 'block';
    btnLogin.innerText = 'Tạo Tài Khoản Mới';
    btnLogin.onclick = register;
    btnReg.innerText = 'Đã có tài khoản? Quay lại Đăng nhập';
  } else {
    rePass.style.display = 'none';
    btnLogin.innerText = 'Đăng Nhập';
    btnLogin.onclick = login;
    btnReg.innerText = 'Chưa có tài khoản? Đăng ký ngay';
  }
}

function register() {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  const rp = document.getElementById('re-password').value;
  if(!u || !p) return alert("Vui lòng điền đủ thông tin!");
  if(p !== rp) return alert("Mật khẩu xác nhận không khớp!");
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  if(db[u]) return alert("Tên đăng nhập đã có người sử dụng!");
  db[u] = { password: p, provider: '', model: '', keys: {}, savedStories: [] };
  localStorage.setItem('storyUsersDB', JSON.stringify(db));
  alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
  toggleRegisterMode();
}

function login() {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  if(db[u] && db[u].password === p) {
    currentUser = u;
    localStorage.setItem('storyLastUser', u);
    document.getElementById('display-username').innerText = u;
    document.getElementById('dash-username').innerText = u;
    _migrateUser(db, u);
    db = JSON.parse(localStorage.getItem('storyUsersDB'));
    if(db[u].provider && db[u].keys[db[u].provider]) {
      switchScreen('screen-dashboard');
    } else {
      openApiScreen(false);
    }
  } else { alert("Sai tên đăng nhập hoặc mật khẩu!"); }
}

function logout() {
  currentUser = null;
  currentStoryData = null;
  localStorage.removeItem('storyLastUser');
  document.getElementById('username').value = "";
  document.getElementById('password').value = "";
  switchScreen('screen-auth');
}

// migrate tài khoản cũ sang cấu trúc mới (string/array/nested → flat string[])
function _migrateUser(db, u) {
  let changed = false;
  if (!db[u].keys) {
    const oldKey = db[u].apiKey || db[u].apiKeys?.gemini || '';
    // oldKey có thể là string hoặc array — chuẩn hoá luôn
    db[u].keys = {};
    db[u].activeKeyIdx = {};
    db[u].provider = '';
    db[u].model = '';
    if (oldKey) {
      db[u].keys.gemini = typeof oldKey === 'string' ? [oldKey] : [].concat(oldKey).filter(x => typeof x === 'string' && x.trim());
      db[u].provider = 'gemini';
      db[u].model = 'gemini-2.5-flash';
    }
    changed = true;
  }
  if (!db[u].activeKeyIdx) { db[u].activeKeyIdx = {}; changed = true; }
  // Chuẩn hoá từng provider: flatten + filter string + deduplicate
  Object.keys(db[u].keys).forEach(p => {
    const v = db[u].keys[p];
    let flat = Array.isArray(v) ? v : (v ? [v] : []);
    // flatten 1 cấp (xử lý nested array)
    flat = flat.reduce((acc, item) => {
      if (Array.isArray(item)) return acc.concat(item);
      return acc.concat([item]);
    }, []);
    // chỉ giữ string hợp lệ, deduplicate
    flat = [...new Set(flat.filter(x => typeof x === 'string' && x.trim()))];
    if (JSON.stringify(flat) !== JSON.stringify(db[u].keys[p])) changed = true;
    db[u].keys[p] = flat;
    if (db[u].activeKeyIdx[p] === undefined) { db[u].activeKeyIdx[p] = 0; changed = true; }
  });
  if (changed) localStorage.setItem('storyUsersDB', JSON.stringify(db));
}

// ==============================================================
// CONFIG PROVIDERS (thêm provider mới vào đây)
// ==============================================================
const PROVIDERS = {
  gemini: {
    label: '🤖 Gemini', color: '#4285f4',
    keyUrl: 'https://aistudio.google.com/app/apikey', keyLabel: 'Google AI Studio',
    placeholder: 'AIza...',
    badge: 'MIỄN PHÍ', badgeColor: 'var(--green)',
    guide: `Vào <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--accent2);">Google AI Studio</a> → bấm <b>"Create API key"</b> → copy & dán vào ô bên dưới.`,
    models: [
      { v:'gemini-2.5-flash', l:'Gemini 2.5 Flash ⭐ — Tiếng Việt xuất sắc' },
      { v:'gemini-2.5-pro',   l:'Gemini 2.5 Pro — Mạnh hơn, chậm hơn' },
      { v:'gemini-2.0-flash', l:'Gemini 2.0 Flash — Nhanh, ổn định' },
      { v:'__custom__',       l:'✏️ Tự nhập model...' },
    ]
  },
  groq: {
    label: '⚡ Groq', color: '#f55036',
    keyUrl: 'https://console.groq.com/keys', keyLabel: 'Groq Console',
    placeholder: 'gsk_...',
    badge: 'MIỄN PHÍ', badgeColor: 'var(--green)',
    guide: `Vào <a href="https://console.groq.com/keys" target="_blank" style="color:var(--accent2);">Groq Console</a> → <b>"Create API Key"</b> → copy & dán vào ô bên dưới. <b style="color:var(--green);">14.400 req/ngày!</b>`,
    models: [
      { v:'qwen/qwen3-32b',          l:'Qwen3 32B ⭐ — Tiếng Việt tốt' },
      { v:'llama-3.3-70b-versatile', l:'Llama 3.3 70B — Mạnh, đa năng' },
      { v:'llama-3.1-8b-instant',    l:'Llama 3.1 8B — Siêu nhanh' },
      { v:'__custom__',              l:'✏️ Tự nhập model...' },
    ]
  },
  deepseek: {
    label: '🐋 DeepSeek', color: '#1a6cf5',
    keyUrl: 'https://platform.deepseek.com/api_keys', keyLabel: 'DeepSeek Platform',
    placeholder: 'sk-...',
    badge: 'RẺ NHẤT', badgeColor: 'var(--accent)',
    guide: `Vào <a href="https://platform.deepseek.com/api_keys" target="_blank" style="color:var(--accent2);">DeepSeek Platform</a> → <b>"Create API Key"</b> → copy & dán vào ô bên dưới.`,
    models: [
      { v:'deepseek-chat',     l:'DeepSeek V3 ⭐ — Mạnh nhất, tiếng Việt rất tốt' },
      { v:'deepseek-reasoner', l:'DeepSeek R1 — Giỏi suy luận' },
      { v:'__custom__',        l:'✏️ Tự nhập model...' },
    ]
  },
  claude: {
    label: '🔷 Claude', color: '#d97706',
    keyUrl: 'https://console.anthropic.com/settings/keys', keyLabel: 'Anthropic Console',
    placeholder: 'sk-ant-...',
    badge: 'CÓ CREDIT', badgeColor: 'var(--accent)',
    guide: `Vào <a href="https://console.anthropic.com/settings/keys" target="_blank" style="color:var(--accent2);">Anthropic Console</a> → <b>"Create Key"</b> → copy & dán vào ô bên dưới.`,
    models: [
      { v:'claude-haiku-4-5-20251001', l:'Claude Haiku 4.5 — Nhanh, tiết kiệm nhất' },
      { v:'claude-sonnet-4-5',         l:'Claude Sonnet 4.5 ⭐ — Cân bằng tốt nhất' },
      { v:'__custom__',                l:'✏️ Tự nhập model...' },
    ]
  },
  openai: {
    label: '✨ OpenAI', color: '#10a37f',
    keyUrl: 'https://platform.openai.com/api-keys', keyLabel: 'OpenAI Platform',
    placeholder: 'sk-proj-...',
    badge: 'CÓ CREDIT', badgeColor: 'var(--accent)',
    guide: `Vào <a href="https://platform.openai.com/api-keys" target="_blank" style="color:var(--accent2);">OpenAI Platform</a> → <b>"Create new secret key"</b> → copy (chỉ hiện 1 lần!) & dán vào ô bên dưới.`,
    models: [
      { v:'gpt-4o-mini',  l:'GPT-4o mini ⭐ — Nhanh, rẻ nhất' },
      { v:'gpt-4o',       l:'GPT-4o — Mạnh nhất' },
      { v:'gpt-4.1-mini', l:'GPT-4.1 mini — Mới nhất' },
      { v:'__custom__',   l:'✏️ Tự nhập model...' },
    ]
  },
  openrouter: {
    label: '🔀 OpenRouter', color: '#7c3aed',
    keyUrl: 'https://openrouter.ai/keys', keyLabel: 'OpenRouter',
    placeholder: 'sk-or-v1-...',
    badge: 'MIỄN PHÍ', badgeColor: 'var(--green)',
    guide: `Vào <a href="https://openrouter.ai/keys" target="_blank" style="color:var(--accent2);">OpenRouter</a> → <b>"Create Key"</b> → copy & dán vào ô bên dưới. Dùng được hàng trăm model!`,
    models: [
      { v:'deepseek/deepseek-chat-v3-0324:free', l:'DeepSeek V3 (Free) ⭐ — Mạnh nhất miễn phí' },
      { v:'deepseek/deepseek-r1:free',           l:'DeepSeek R1 (Free) — Giỏi suy luận' },
      { v:'qwen/qwen3-235b-a22b:free',           l:'Qwen3 235B (Free) — Tiếng Việt xuất sắc' },
      { v:'meta-llama/llama-4-maverick:free',    l:'Llama 4 Maverick (Free)' },
      { v:'__custom__',                          l:'✏️ Tự nhập model...' },
    ]
  },
  cerebras: {
    label: '🧠 Cerebras', color: '#e85d04',
    keyUrl: 'https://cloud.cerebras.ai', keyLabel: 'Cerebras Cloud',
    placeholder: 'csk-...',
    badge: 'MIỄN PHÍ', badgeColor: 'var(--green)',
    guide: `Vào <a href="https://cloud.cerebras.ai" target="_blank" style="color:var(--accent2);">Cerebras Cloud</a> → <b>API Keys</b> → tạo key & dán vào ô bên dưới. <b style="color:var(--green);">1 triệu token/ngày!</b>`,
    models: [
      { v:'qwen-3-235b',    l:'Qwen3 235B ⭐ — Tiếng Việt xuất sắc, cực nhanh' },
      { v:'qwen-3-32b',     l:'Qwen3 32B — Nhanh hơn' },
      { v:'llama-4-scout-17b-16e-instruct', l:'Llama 4 Scout' },
      { v:'__custom__',     l:'✏️ Tự nhập model...' },
    ]
  },
};

let _curProvider = 'gemini';

function openApiScreen(isEdit) {
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  _migrateUser(db, currentUser);
  db = JSON.parse(localStorage.getItem('storyUsersDB'));
  const u = db[currentUser];

  document.getElementById('display-username').innerText = currentUser || '';
  document.getElementById('api-test-result').innerHTML = '';

  const tabsEl = document.getElementById('api-provider-tabs');
  tabsEl.innerHTML = '';
  Object.keys(PROVIDERS).forEach(key => {
    const p = PROVIDERS[key];
    const btn = document.createElement('button');
    btn.id = `ptab-${key}`;
    btn.textContent = p.label;
    btn.style.cssText = `padding:7px 12px; border-radius:4px; font-family:'Space Mono',monospace; font-size:11px; cursor:pointer; border:1px solid var(--border); background:var(--surface); color:var(--text-dim); transition:all 0.15s; white-space:nowrap;`;
    btn.onclick = () => {
      const db2 = JSON.parse(localStorage.getItem('storyUsersDB'));
      selectProvider(key, null, db2[currentUser]?.keys || {}, db2[currentUser]?.activeKeyIdx || {});
    };
    tabsEl.appendChild(btn);
  });

  _curProvider = u.provider || 'gemini';
  selectProvider(_curProvider, u.model, u.keys || {}, u.activeKeyIdx || {});

  const curKeys = u.keys?.[u.provider] || [];
  const hasKey = Array.isArray(curKeys) ? curKeys.length > 0 : !!curKeys;
  document.getElementById('btn-back-dashboard').style.display = (isEdit || hasKey) ? 'block' : 'none';
  switchScreen('screen-api');
}

function selectProvider(key, savedModel, savedKeys, activeKeyIdx) {
  _curProvider = key;
  const p = PROVIDERS[key];
  if (!p) return;
  activeKeyIdx = activeKeyIdx || {};

  // Highlight tabs
  Object.keys(PROVIDERS).forEach(k => {
    const btn = document.getElementById(`ptab-${k}`);
    if (!btn) return;
    btn.style.borderColor = k === key ? p.color : 'var(--border)';
    btn.style.color       = k === key ? p.color : 'var(--text-dim)';
    btn.style.background  = k === key ? p.color + '22' : 'var(--surface)';
    btn.style.fontWeight  = k === key ? '700' : '400';
  });

  // Guide
  document.getElementById('api-guide-box').innerHTML = p.guide;

  // Models
  const modelWrap = document.getElementById('api-model-wrap');
  const modelSel  = document.getElementById('api-model-select');
  const modelCust = document.getElementById('api-model-custom');
  modelWrap.style.display = 'block';
  modelSel.innerHTML = '';
  p.models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.v; opt.textContent = m.l;
    modelSel.appendChild(opt);
  });
  if (savedModel) {
    const found = p.models.find(m => m.v === savedModel);
    modelSel.value = found ? savedModel : '__custom__';
    if (!found) { modelCust.value = savedModel; modelCust.style.display = 'block'; }
    else modelCust.style.display = 'none';
  } else { modelCust.style.display = 'none'; }
  modelSel.onchange = () => {
    modelCust.style.display = modelSel.value === '__custom__' ? 'block' : 'none';
  };

  // Key input
  const keyInput = document.getElementById('api-key-input');
  document.getElementById('api-key-wrap').style.display = 'block';
  keyInput.value = '';
  const curArr = (savedKeys?.[key] || []).filter(x => typeof x === 'string' && x.trim());
  keyInput.placeholder = curArr.length ? `(đã có ${curArr.length} key — nhập thêm key mới)` : p.placeholder;
  document.getElementById('api-test-result').innerHTML = '';

  // Quick-select: tất cả keys mọi provider
  const el = document.getElementById('api-saved-keys');
  el.innerHTML = '';
  const allKeys = savedKeys || {};
  const flatList = [];
  Object.entries(allKeys).forEach(([pKey, arr]) => {
    const list = Array.isArray(arr) ? arr : (arr ? [arr] : []);
    list.forEach((val, idx) => {
      if (typeof val === 'string' && val.trim()) flatList.push({ pKey, idx, val });
    });
  });

  if (flatList.length) {
    const hint = document.createElement('div');
    hint.style.cssText = 'font-size:10px; color:var(--text-muted); width:100%; margin-bottom:4px;';
    hint.textContent = 'Key đã lưu — bấm để dùng nhanh:';
    el.appendChild(hint);

    flatList.forEach(({ pKey, idx, val }) => {
      const pInfo  = PROVIDERS[pKey];
      const pArr   = (allKeys[pKey] || []).filter(x => typeof x === 'string' && x.trim());
      const label  = pArr.length > 1 ? `${pInfo?.label||pKey} #${idx+1}` : (pInfo?.label||pKey);
      const masked = val.slice(0, 6) + '••••' + val.slice(-4);
      const isActive = pKey === _curProvider && (activeKeyIdx[pKey] ?? 0) === idx;

      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:inline-flex; align-items:center;';

      const btn = document.createElement('button');
      btn.style.cssText = `padding:5px 10px; border-radius:4px 0 0 4px; font-family:'Space Mono',monospace; font-size:10px; cursor:pointer; border:1px solid ${pInfo?.color||'var(--border)'}; border-right:none; background:${isActive?(pInfo?.color||'#888')+'44':(pInfo?.color||'#888')+'18'}; color:${pInfo?.color||'var(--text-dim)'}; white-space:nowrap; transition:all 0.15s;${isActive?'font-weight:700;':''}`;
      btn.innerHTML = `${label} <span style="opacity:0.65;">${masked}</span>`;
      btn.onclick = () => {
        const db2 = JSON.parse(localStorage.getItem('storyUsersDB'));
        if (!db2[currentUser].activeKeyIdx) db2[currentUser].activeKeyIdx = {};
        db2[currentUser].activeKeyIdx[pKey] = idx;
        localStorage.setItem('storyUsersDB', JSON.stringify(db2));
        selectProvider(pKey, db2[currentUser].model, db2[currentUser].keys, db2[currentUser].activeKeyIdx);
        document.getElementById('api-key-input').value = val;
      };

      const del = document.createElement('button');
      del.textContent = '✕';
      del.title = 'Xoá key này';
      del.style.cssText = `padding:5px 7px; border-radius:0 4px 4px 0; font-family:'Space Mono',monospace; font-size:10px; cursor:pointer; border:1px solid ${pInfo?.color||'var(--border)'}; background:transparent; color:${pInfo?.color||'var(--text-dim)'}; opacity:0.5; transition:opacity 0.15s;`;
      del.onmouseenter = () => del.style.opacity = '1';
      del.onmouseleave = () => del.style.opacity = '0.5';
      del.onclick = (e) => {
        e.stopPropagation();
        if (!confirm(`Xoá key #${idx+1} của ${pInfo?.label||pKey}?`)) return;
        const db3 = JSON.parse(localStorage.getItem('storyUsersDB'));
        const list3 = (db3[currentUser].keys[pKey] || []).filter(x => typeof x === 'string' && x.trim());
        list3.splice(idx, 1);
        db3[currentUser].keys[pKey] = list3;
        if ((db3[currentUser].activeKeyIdx?.[pKey] ?? 0) >= list3.length) {
          db3[currentUser].activeKeyIdx[pKey] = Math.max(0, list3.length - 1);
        }
        localStorage.setItem('storyUsersDB', JSON.stringify(db3));
        selectProvider(_curProvider, null, db3[currentUser].keys, db3[currentUser].activeKeyIdx);
      };

      wrap.appendChild(btn);
      wrap.appendChild(del);
      el.appendChild(wrap);
    });
  }
}

async function apiTestAndSave(doSave) {
  const modelVal  = document.getElementById('api-model-select').value;
  const model     = modelVal === '__custom__'
    ? document.getElementById('api-model-custom').value.trim()
    : modelVal;
  if (!model) return setTestResult('⚠ Chưa chọn model!', 'warn');

  let key = document.getElementById('api-key-input').value.trim();
  if (!key) {
    const db = JSON.parse(localStorage.getItem('storyUsersDB'));
    const arr = db[currentUser]?.keys?.[_curProvider] || [];
    const list = Array.isArray(arr) ? arr.filter(x => typeof x === 'string' && x.trim()) : (arr ? [arr] : []);
    const idx  = db[currentUser]?.activeKeyIdx?.[_curProvider] ?? 0;
    key = list[idx] || list[0] || '';
    if (!key) return setTestResult('⚠ Chưa nhập API Key!', 'warn');
  }

  setTestResult('⏳ Đang kiểm tra...', 'load');
  try {
    let ok = false;
    if (_curProvider === 'gemini') {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({contents:[{role:'user',parts:[{text:'Hi'}]}]})
      });
      const d = await r.json();
      if (d.error) throw new Error(d.error.message);
      ok = true;
    } else if (_curProvider === 'claude') {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST',
        headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
        body: JSON.stringify({model, max_tokens:10, messages:[{role:'user',content:'Hi'}]})
      });
      const d = await r.json();
      if (d.error || d.type==='error') throw new Error(d.error?.message || JSON.stringify(d.error));
      ok = true;
    } else {
      const EP = {
        groq:'https://api.groq.com/openai/v1/chat/completions',
        deepseek:'https://api.deepseek.com/v1/chat/completions',
        openai:'https://api.openai.com/v1/chat/completions',
        openrouter:'https://openrouter.ai/api/v1/chat/completions',
        cerebras:'https://api.cerebras.ai/v1/chat/completions',
      };
      const h = {'Content-Type':'application/json','Authorization':`Bearer ${key}`};
      if (_curProvider==='openrouter') { h['HTTP-Referer']=location.href; h['X-Title']='Story Forge'; }
      const r = await fetch(EP[_curProvider], {
        method:'POST', headers:h,
        body: JSON.stringify({model, messages:[{role:'user',content:'Hi'}], max_tokens:10})
      });
      const d = await r.json();
      if (d.error) throw new Error(typeof d.error==='string'?d.error:(d.error.message||JSON.stringify(d.error)));
      ok = true;
    }
    if (ok) {
      setTestResult('✅ Kết nối thành công!', 'ok');
      if (doSave) {
        const db = JSON.parse(localStorage.getItem('storyUsersDB'));
        if (!db[currentUser].keys) db[currentUser].keys = {};
        if (!db[currentUser].activeKeyIdx) db[currentUser].activeKeyIdx = {};
        const inputKey = document.getElementById('api-key-input').value.trim();
        // Lấy list hiện tại, đảm bảo là flat string array
        const existing = db[currentUser].keys[_curProvider] || [];
        const list = (Array.isArray(existing) ? existing : [existing]).filter(x => typeof x === 'string' && x.trim());
        // Thêm key mới nếu chưa có
        if (inputKey && !list.includes(inputKey)) list.push(inputKey);
        db[currentUser].keys[_curProvider] = list;
        const activeIdx = inputKey ? list.indexOf(inputKey) : (db[currentUser].activeKeyIdx[_curProvider] ?? 0);
        db[currentUser].activeKeyIdx[_curProvider] = Math.max(0, Math.min(activeIdx, list.length - 1));
        db[currentUser].provider = _curProvider;
        db[currentUser].model    = model;
        db[currentUser].apiKey   = _curProvider === 'gemini' ? (list[0] || '') : (db[currentUser].apiKey || '');
        localStorage.setItem('storyUsersDB', JSON.stringify(db));
        setTimeout(() => switchScreen('screen-dashboard'), 600);
      }
    }
  } catch(e) {
    setTestResult(`❌ Lỗi: ${e.message}`, 'err');
  }
}

function setTestResult(msg, type) {
  const c = {ok:'var(--green)',err:'var(--accent3)',warn:'var(--accent)',load:'var(--text-dim)'};
  document.getElementById('api-test-result').innerHTML = `<span style="color:${c[type]||c.load};">${msg}</span>`;
}

function saveApiAndGoToDashboard() { apiTestAndSave(true); } // backward compat alias

function saveProviderKey() {} // backward compat stub — không dùng nữa

// Đổi API — mở trang cài đặt
function updateApiKey() {
  _migrateUser(JSON.parse(localStorage.getItem('storyUsersDB')), currentUser);
  openApiScreen(true);
}

function updateActiveBanner() {} // stub

// ==============================================================
// 4. CHỨC NĂNG TỦ TRUYỆN (DASHBOARD)
// ==============================================================
function renderDashboard() {
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  let stories = db[currentUser].savedStories || [];
  const grid = document.getElementById('dashboard-grid');
  grid.innerHTML = "";
  if(stories.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted); border: 1px dashed var(--border);">Bạn chưa có câu chuyện nào. Bấm "Tạo Truyện Mới" để bắt đầu!</div>`;
      return;
  }
  stories.sort((a,b) => b.lastUpdated - a.lastUpdated);
  stories.forEach(story => {
      let date = new Date(story.lastUpdated).toLocaleString('vi-VN');
      grid.innerHTML += `
        <div class="story-card">
           <div>
              <div class="story-card-title">${story.title}</div>
              <div class="story-card-date">Cập nhật: ${date}</div>
           </div>
           <div class="story-card-actions">
              <button class="btn-small" onclick="continueStory(${story.id})">Tiếp tục đọc</button>
              <button class="btn-small btn-danger" onclick="renameStory(${story.id})">✏️ Tên</button>
              <button class="btn-small btn-danger" onclick="deleteStory(${story.id})">Xóa</button>
           </div>
        </div>
      `;
  });
}

function renameStory(id) {
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  let stories = db[currentUser].savedStories;
  let index = stories.findIndex(s => s.id === id);
  let newName = prompt("Nhập tên mới cho truyện của bạn:", stories[index].title);
  if(newName && newName.trim() !== "") {
     stories[index].title = newName.trim();
     db[currentUser].savedStories = stories;
     localStorage.setItem('storyUsersDB', JSON.stringify(db));
     renderDashboard();
  }
}

function deleteStory(id) {
  if(!confirm("Bạn có chắc chắn muốn xóa vĩnh viễn câu chuyện này?")) return;
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  db[currentUser].savedStories = db[currentUser].savedStories.filter(s => s.id !== id);
  localStorage.setItem('storyUsersDB', JSON.stringify(db));
  renderDashboard();
}

function autoSaveCurrentStory() {
  if(!currentStoryData) return;
  currentStoryData.lastUpdated = Date.now();
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  let userStories = db[currentUser].savedStories || [];
  let existingIndex = userStories.findIndex(s => s.id === currentStoryData.id);
  if(existingIndex >= 0) { userStories[existingIndex] = currentStoryData; } 
  else { userStories.push(currentStoryData); }
  db[currentUser].savedStories = userStories;
  localStorage.setItem('storyUsersDB', JSON.stringify(db));
}

// ==============================================================
// 5. KẾT NỐI AI VÀ TẠO TRUYỆN (ĐÃ FIX LỖI MODEL)
// ==============================================================
function preparePromptAndStartStory() {
  let contextParts = [];
  if (state.mode === 'manual') {
      const manualText = document.getElementById('manual-input').value.trim();
      if(manualText) contextParts.push(manualText);
  } else {
      const sections = state.mode === 'simple' ? SIMPLE_SECTIONS : ADVANCED_SECTIONS;
      sections.forEach(key => {
        const sel = getSelections(key);
        const items = [...sel].filter(t => t !== NONE_VALUE);
        const dMode = state.decisionMode[key] || {ai: false, user: false};
        const userText = state.userInputs[key] || '';
        
        let sectionString = `${DATA[key].label}: `;
        let hasData = false;
        
        if (items.length > 0) { sectionString += items.join(', '); hasData = true; }
        if (dMode.user && userText) { sectionString += (hasData ? ' + ' : '') + `(Chi tiết thêm: ${userText})`; hasData = true; }
        if (dMode.ai) { sectionString += (hasData ? ' + ' : '') + `[Nhờ AI tự sáng tạo]`; hasData = true; }
        
        if (hasData) contextParts.push(sectionString);
      });
  }

  const finalContext = contextParts.join('\n');
  const charName = document.getElementById('character-names').value.trim();
  if (!finalContext && !charName) return alert('Bạn phải chọn ít nhất 1 thể loại hoặc viết gì đó vào khung!');

  const masterPrompt = `
    Bạn là một Game Master AI đang điều hành một tựa game Text-based RPG.
    THIẾT LẬP TỪ NGƯỜI CHƠI:
    ${finalContext}
    Nhân vật chính: ${charName || 'Người vô danh'}.

    QUY TẮC DÀNH CHO BẠN:
    1. Cơ chế Mở: Hướng phát triển hoàn toàn do người dùng chọn.
    2. Twist & Random Events (Biến cố ngẫu nhiên):
       - Tỉ lệ xuất hiện: Hãy duy trì ở mức khoảng 20%. Không phải chương nào cũng có biến cố.
       - Cách thực hiện: Thỉnh thoảng, thay vì để mọi chuyện diễn ra suôn sẻ theo lựa chọn của người chơi, hãy đưa vào một yếu tố khách quan (thời tiết, một nhân vật phụ xen vào, một sự vật bị hỏng, một tin tức mới...).
       - Quy tắc vàng về Logic: 
         + Nếu truyện là "Slice of Life/Học đường/Chữa lành": Biến cố phải nhỏ và đời thường (ví dụ: mất chìa khóa, trời mưa to phải trú lại trường, gặp lại bạn cũ). TUYỆT ĐỐI không có tai nạn chết người, ma quỷ hay hành động bạo lực.
         + Nếu truyện là "Hành động/Kinh dị/Fantasy": Biến cố có thể là kẻ thù phục kích, vũ khí hỏng, hoặc một lời nguyền trỗi dậy.
       - Hiển thị: Khi có sự kiện ngẫu nhiên, hãy bắt đầu đoạn văn bằng dòng chữ [SỰ KIỆN NGẪU NHIÊN] để người chơi biết.    
    3. Ending: Luôn xây dựng các nhánh rẽ sinh tồn, tốt, xấu, kết ẩn, kết trung lập,...
     
    
    FORMAT TRẢ LỜI LẦN ĐẦU TIÊN (BẮT BUỘC):

    [Tên truyện do bạn tự nghĩ ra dựa trên bối cảnh, rất ngắn gọn, cực kì hay]
    ***
    [GIỚI THIỆU TỔNG QUAN]
    - Bối cảnh: (Tóm tắt ngắn gọn về thế giới, địa điểm, thời gian)
    - Nhân vật: (Mô tả sơ qua về diện mạo, hoàn cảnh của ${charName || 'Người vô danh'})
    - Cốt truyện: (Tóm tắt tình thế hiện tại trước khi bắt đầu)
    ***
    [Nội dung chương 1 diễn biến...]
    ***
    A. [Lựa chọn 1]
    B. [Lựa chọn 2]
    C. [Lựa chọn 3]
  `;  

  currentStoryData = {
     id: Date.now(),
     title: "Đang nhờ AI nghĩ tên...",
     systemPrompt: masterPrompt,
     history: [],
     lastUpdated: Date.now()
  };
  
  document.getElementById('current-story-title').innerText = currentStoryData.title;
  document.getElementById('chat-history').innerHTML = ""; 
  switchScreen('screen-story'); 
  callAI("Bắt đầu câu chuyện đi Game Master.");
}

function continueStory(id) {
  let db = JSON.parse(localStorage.getItem('storyUsersDB'));
  currentStoryData = db[currentUser].savedStories.find(s => s.id === id);
  document.getElementById('current-story-title').innerText = currentStoryData.title;
  
  const chatBox = document.getElementById('chat-history');
  chatBox.innerHTML = "";
  
  for(let i=0; i < currentStoryData.history.length; i++) {
     let msg = currentStoryData.history[i];
     if(msg.role === 'user') {
         if(msg.parts[0].text !== "Bắt đầu câu chuyện đi Game Master.") {
             chatBox.innerHTML += `<div class="msg user">${msg.parts[0].text}</div>`;
         }
     } else if (msg.role === 'model') {
         let rawText = msg.parts[0].text;
         let parts = rawText.split("***");
         let storyText = parts.length > 1 ? (parts.length >= 3 && i===1 ? parts[1] : parts[0]) : parts[0]; 
         chatBox.innerHTML += `<div class="msg ai">${storyText.trim().replace(/\n/g, '<br>')}</div>`;
         
         // Nếu đây là tin nhắn cuối cùng, render các nút lựa chọn
         if (i === currentStoryData.history.length - 1) {
             let choiceText = parts.length > 1 ? (parts.length >= 3 && i===1 ? parts[2] : parts[1]) : "";
             renderChoices(choiceText);
         }
     }
  }
  
  // SỬA LỖI Ở ĐÂY: Ép buộc hệ thống hiển thị lại Thanh tương tác & ẩn chữ Loading
  document.getElementById('interaction-panel').style.display = 'block';
  document.getElementById('ai-loading').style.display = 'none';

  switchScreen('screen-story');
  chatBox.scrollTop = chatBox.scrollHeight;
}

function renderChoices(choicesPart) {
    const choicesContainer = document.getElementById('ai-choices');
    choicesContainer.innerHTML = "";
    if (choicesPart && choicesPart.trim()) {
      const choiceLines = choicesPart.trim().split('\n').filter(line => line.trim() !== "");
      choiceLines.forEach(line => {
        let btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = line;
        btn.onclick = () => {
          document.getElementById('custom-action-input').value = "";
          callAI(line);
        };
        choicesContainer.appendChild(btn);
      });
    }
}

async function callAI(userText) {
  const db       = JSON.parse(localStorage.getItem('storyUsersDB'));
  const u        = db[currentUser];
  const provider = u.provider || 'gemini';
  const model    = u.model || 'gemini-2.5-flash';
  const rawArr   = u.keys?.[provider] || [];
  const list     = (Array.isArray(rawArr) ? rawArr : [rawArr]).filter(x => typeof x === 'string' && x.trim());
  const idx      = u.activeKeyIdx?.[provider] ?? 0;
  const key      = list[idx] || list[0] || u.apiKey || '';

  const interactionPanel = document.getElementById('interaction-panel');
  const loader           = document.getElementById('ai-loading');
  const chatBox          = document.getElementById('chat-history');

  if (userText !== "Bắt đầu câu chuyện đi Game Master.") {
    chatBox.innerHTML += `<div class="msg user">${userText}</div>`;
  }
  currentStoryData.history.push({ role:"user", parts:[{text:userText}] });
  autoSaveCurrentStory();
  interactionPanel.style.display = 'none';
  loader.style.display = 'block';
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    let aiResponseText = '';

    if (provider === 'gemini') {
      const payload = [
        { role:"user",  parts:[{text:currentStoryData.systemPrompt}] },
        { role:"model", parts:[{text:"Đã rõ. Hệ thống đã ghi nhận thiết lập."}] },
        ...currentStoryData.history
      ];
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({contents:payload})
      });
      const d = await r.json();
      if (d.error) throw new Error(d.error.message);
      aiResponseText = d.candidates[0].content.parts[0].text;

    } else if (provider === 'claude') {
      const messages = currentStoryData.history.map(m => ({
        role: m.role==='model'?'assistant':'user', content:m.parts[0].text
      }));
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST',
        headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
        body: JSON.stringify({model, max_tokens:2000, system:currentStoryData.systemPrompt, messages})
      });
      const d = await r.json();
      if (d.error||d.type==='error') throw new Error(d.error?.message||JSON.stringify(d.error));
      aiResponseText = d.content[0].text;

    } else {
      const EP = {
        groq:       'https://api.groq.com/openai/v1/chat/completions',
        deepseek:   'https://api.deepseek.com/v1/chat/completions',
        openai:     'https://api.openai.com/v1/chat/completions',
        openrouter: 'https://openrouter.ai/api/v1/chat/completions',
        cerebras:   'https://api.cerebras.ai/v1/chat/completions',
      };
      const messages = [
        { role:'system', content:currentStoryData.systemPrompt },
        ...currentStoryData.history.map(m => ({
          role: m.role==='model'?'assistant':'user', content:m.parts[0].text
        }))
      ];
      const h = {'Content-Type':'application/json','Authorization':`Bearer ${key}`};
      if (provider==='openrouter') { h['HTTP-Referer']=location.href; h['X-Title']='Story Forge'; }
      const r = await fetch(EP[provider]||EP.openrouter, {
        method:'POST', headers:h,
        body: JSON.stringify({model, messages, max_tokens:2000})
      });
      const d = await r.json();
      if (d.error) throw new Error(typeof d.error==='string'?d.error:(d.error.message||JSON.stringify(d.error)));
      aiResponseText = d.choices[0].message.content;
    }

    // Xử lý response — giữ nguyên logic gốc
    const parts = aiResponseText.split("***");
    let storyText = "", choiceText = "";
    if (currentStoryData.history.length===1 && parts.length>=3) {
      currentStoryData.title = parts[0].trim() || "Chuyến Phiêu Lưu Vô Danh";
      document.getElementById('current-story-title').innerText = currentStoryData.title;
      storyText = parts[1]; choiceText = parts[2];
    } else if (parts.length>=2) {
      storyText = parts[0]; choiceText = parts[1];
    } else { storyText = parts[0]; }

    chatBox.innerHTML += `<div class="msg ai">${storyText.trim().replace(/\n/g,'<br>')}</div>`;
    currentStoryData.history.push({ role:"model", parts:[{text:aiResponseText}] });
    autoSaveCurrentStory();
    renderChoices(choiceText);

  } catch(error) {
    chatBox.innerHTML += `<div class="msg ai" style="color:var(--accent3);">Lỗi AI: ${error.message}. Kiểm tra lại API Key hoặc mạng.</div>`;
  }

  loader.style.display = 'none';
  interactionPanel.style.display = 'block';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendCustomAction() {
  const text = document.getElementById('custom-action-input').value.trim();
  if(!text) return;
  document.getElementById('custom-action-input').value = "";
  callAI(`[Tôi tự hành động]: ${text}`);
}

function exportStoryJSON() {
  if(!currentStoryData) return;
  const db = JSON.parse(localStorage.getItem('storyUsersDB'));
  const u  = db[currentUser] || {};
  // Xuất toàn bộ tài khoản (bao gồm truyện đang mở)
  const exportData = {
    _type:           'storyforge_account',
    _username:       currentUser,
    _keys:           u.keys         || {},
    _activeKeyIdx:   u.activeKeyIdx || {},
    _provider:       u.provider     || '',
    _model:          u.model        || '',
    _savedStories:   u.savedStories || [],
    _currentStoryId: currentStoryData.id,
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `StoryForge_${currentUser}_Backup.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Xuất tài khoản từ Tủ Truyện (không cần currentStoryData)
function exportAccountJSON() {
  const db = JSON.parse(localStorage.getItem('storyUsersDB'));
  const u  = db[currentUser] || {};
  const exportData = {
    _type:         'storyforge_account',
    _username:     currentUser,
    _keys:         u.keys         || {},
    _activeKeyIdx: u.activeKeyIdx || {},
    _provider:     u.provider     || '',
    _model:        u.model        || '',
    _savedStories: u.savedStories || [],
  };
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `StoryForge_${currentUser}_Backup.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// --------------------------------------------------------------
// HÀM DÙNG CHUNG: xử lý data từ file JSON (account hoặc story)
// --------------------------------------------------------------
function _processImportData(data, event) {
  // ── FORMAT MỚI: backup tài khoản ──
  if (data._type === 'storyforge_account') {
    const srcUser  = data._username    || 'imported';
    const stories  = data._savedStories || [];
    const keys     = data._keys         || {};
    const aidx     = data._activeKeyIdx  || {};
    const provider = data._provider      || '';
    const model    = data._model         || '';

    let db = JSON.parse(localStorage.getItem('storyUsersDB')) || {};
    // Tìm tên tài khoản không trùng
    let newUsername = srcUser;
    let counter = 2;
    while (db[newUsername] && db[newUsername].password && db[newUsername].password !== '__imported__') {
      newUsername = `${srcUser}_${counter++}`;
    }
    db[newUsername] = {
      password:     '__imported__',
      keys,
      activeKeyIdx: aidx,
      provider,
      model,
      apiKey:       (Array.isArray(keys.gemini) ? keys.gemini[0] : keys.gemini) || '',
      savedStories: stories,
    };
    localStorage.setItem('storyUsersDB', JSON.stringify(db));

    // Login thẳng vào tài khoản mới
    currentUser      = newUsername;
    currentStoryData = null;
    localStorage.setItem('storyLastUser', newUsername);
    document.getElementById('display-username').innerText = newUsername;
    document.getElementById('dash-username').innerText    = newUsername;

    if (event) event.target.value = '';
    alert(`✅ Đã tải tài khoản "${newUsername}" thành công!\n📚 ${stories.length} truyện\n🔑 ${Object.values(keys).flat().filter(Boolean).length} API key`);
    switchScreen('screen-dashboard');
    return;
  }

  // ── FORMAT CŨ: backup 1 truyện đơn ──
  if (!data.id || !data.history) {
    alert("File JSON không hợp lệ hoặc không phải của hệ thống này!");
    return;
  }
  let db = JSON.parse(localStorage.getItem('storyUsersDB')) || {};
  if (!db[currentUser]) db[currentUser] = { savedStories: [] };

  if (data._apiKeys) {
    if (!db[currentUser].keys) db[currentUser].keys = {};
    Object.entries(data._apiKeys).forEach(([p, v]) => {
      if (v && !db[currentUser].keys[p]) db[currentUser].keys[p] = v;
    });
    if (data._provider && !db[currentUser].provider) {
      db[currentUser].provider = data._provider;
      db[currentUser].model    = data._model || '';
    }
  }
  const storyData = { ...data };
  delete storyData._apiKeys; delete storyData._provider; delete storyData._model;

  const idx = db[currentUser].savedStories.findIndex(s => s.id === storyData.id);
  if (idx >= 0) db[currentUser].savedStories[idx] = storyData;
  else db[currentUser].savedStories.push(storyData);

  localStorage.setItem('storyUsersDB', JSON.stringify(db));
  if (event) event.target.value = '';
  alert("Tải truyện lên thành công! File đã vào Tủ truyện của bạn.");
  if (document.getElementById('screen-dashboard').classList.contains('active')) renderDashboard();
}

function importStoryJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try { _processImportData(JSON.parse(e.target.result), event); }
    catch { alert("Lỗi khi đọc file: File bị hỏng hoặc không đúng định dạng."); }
  };
  reader.readAsText(file);
}

// Tải tài khoản từ màn hình đăng nhập (chưa cần login)
function importAccountFromLogin(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data._type !== 'storyforge_account') {
        alert("File này không phải backup tài khoản. Hãy đăng nhập trước rồi dùng nút Tải Truyện Lên.");
        event.target.value = '';
        return;
      }
      _processImportData(data, event);
    } catch { alert("Lỗi khi đọc file: File bị hỏng hoặc không đúng định dạng."); }
  };
  reader.readAsText(file);
}

// Khởi chạy hệ thống
initApp();
initDB();
