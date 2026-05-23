/* ==========================================================================
   GRADUATION BOOK SALE - CONTROLLER (JS)
   Logic, LocalStorage Syncing, Admin CRUD, Dynamic CSS Covers & Animations
   ========================================================================== */

/// --- Initial Seed Data from PDF & VSA Official Curriculum ---
const INITIAL_BOOKS = [
  {
    id: "latin-dict",
    title: "Latin and English Dictionary",
    author: "Bantam",
    category: "Latin III: Classical Authors",
    price: 9,
    condition: "Good",
    status: "Available",
    notes: "拉丁语经典双语词典。Veritas Scholars Academy (VSA) Latin III 课程推荐备考及阅读词汇工具书。",
    videoUrl: "https://drive.google.com/file/d/1NlUvQYYQz4a5YskujWn5UXHbO3WKSvI-/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "livy-rome",
    title: "Reading Livy's Rome",
    author: "Livy (Selections)",
    category: "Latin III: Classical Authors",
    price: 44,
    condition: "Very Good",
    status: "Available",
    notes: "VSA Latin III (Latin Readings: Classical Authors) 官方教材，含详尽注释与词汇指南。",
    videoUrl: "https://drive.google.com/file/d/1x2drgvI6WG9BMG9ioepbocG7F4SWzZrB/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "de-amicitia",
    title: "De Amicitia",
    author: "Cicero",
    category: "Latin III: Classical Authors",
    price: 19,
    condition: "Good",
    status: "Available",
    notes: "西塞罗经典篇章《论友谊》拉丁文原版。VSA Latin III 课程指定深度阅读文献。",
    videoUrl: "https://drive.google.com/file/d/1VMrsDKhdbIT74BWeCpbA-Ix0YeEBe6TJ/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "latin-grammar",
    title: "New Latin Grammar",
    author: "Allen and Greenough",
    category: "Latin III: Classical Authors",
    price: 19,
    condition: "Very Good",
    status: "Available",
    notes: "VSA Latin 系列高阶课程通用语法参考书，拉丁语语法界权威圣经。",
    videoUrl: "https://drive.google.com/file/d/1aURuvLmipYB_QXj23yoRRRr6Z4xy91w3/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "latin-poetry",
    title: "A Little Book of Latin Love Poetry",
    author: "Various Authors",
    category: "Latin III: Classical Authors",
    price: 25,
    condition: "Like New",
    status: "Available",
    notes: "收录古罗马著名爱情诗篇。VSA Latin III 及古典文学拓展阅读必选读物。",
    videoUrl: "https://drive.google.com/file/d/14xtF4oLfsFra4WQmAOapzeLgsWqtZ2s7/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "ovid-metamorphoses",
    title: "Selections from Ovid's Metamorphoses",
    author: "Ovid",
    category: "Latin III: Classical Authors",
    price: 15,
    condition: "Good",
    status: "Available",
    notes: "奥维德《变形记》拉英双语精选集。VSA Latin III 课程核心研读原著。",
    videoUrl: "https://drive.google.com/file/d/1Fg1soLj6cU-CLmW0VsHq3TXzsr6Dt8Xq/view?usp=drivesdk",
    hue: 215
  },
  {
    id: "caesar-virgil",
    title: "Caesar",
    author: "Julius Caesar",
    category: "AP Latin / Latin IV",
    price: 45,
    condition: "Very Good",
    status: "Available",
    notes: "恺撒《高卢战记》高阶拉丁文研读本。VSA AP Latin (Latin IV: Virgil & Caesar) 官方指定核心教材。",
    videoUrl: "https://drive.google.com/file/d/1VFeRh-6VhpDhIwwkUZrtLaYeG3M56Gk8/view?usp=drivesdk",
    hue: 240
  },
  {
    id: "jane-eyre",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Literature Transition",
    price: 5,
    condition: "Good",
    status: "Available",
    notes: "《简·爱》英文原版。VSA Secondary 级别 Literature Transition (文学过渡课) 核心阅读小说。",
    videoUrl: "https://drive.google.com/file/d/15PyGPR-_pCplyneMpr8pC-VRQA069V0e/view?usp=drivesdk",
    hue: 195
  },
  {
    id: "scarlet-pimpernel",
    title: "The Scarlet Pimpernel",
    author: "Baroness Orczy",
    category: "Literature Transition",
    price: 12,
    condition: "Very Good",
    status: "Available",
    notes: "《红花侠》原版。VSA Literature Transition 课程核心小说，情节引人入胜，成色良好。",
    videoUrl: "https://drive.google.com/file/d/1vi2EY_5eK0fk-z1hQ2-0GyMQwjpLgdZo/view?usp=drivesdk",
    hue: 195
  },
  {
    id: "tempest",
    title: "The Tempest",
    author: "William Shakespeare",
    category: "Literature Transition",
    price: 10,
    condition: "Good",
    status: "Available",
    notes: "莎士比亚戏剧《暴风雨》。VSA Literature Transition 经典文学赏析单元指定阅读版本。",
    videoUrl: "https://drive.google.com/file/d/1fUMRt8SnEGIyEHRS8xOWf3-PwgYtvGfR/view?usp=drivesdk",
    hue: 195
  },
  {
    id: "mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Literature Transition",
    price: 17,
    condition: "Very Good",
    status: "Available",
    notes: "《杀死一只知更鸟》英文原版。VSA Literature Transition 指定必读现代经典文学。",
    videoUrl: "https://drive.google.com/file/d/1pChakdamsmM-LTkf8m0lhPPcrYzs4sti/view?usp=drivesdk",
    hue: 195
  },
  {
    id: "argument-student",
    title: "The Argument Builder (Student Edition)",
    author: "Classical Academic Press",
    category: "Logic II",
    price: 25,
    condition: "Very Good",
    status: "Available",
    notes: "《论证构建者》学生版。VSA Logic II (逻辑学二) 官方选用教材，用于培养高阶论证与说服力技能。",
    videoUrl: "https://drive.google.com/file/d/1z9sUPvjcyGkEdUQhYxeSWvIpbO3iapio/view?usp=drivesdk",
    hue: 120
  },
  {
    id: "argument-teacher",
    title: "The Argument Builder (Teacher Edition)",
    author: "Classical Academic Press",
    category: "Logic II",
    price: 30,
    condition: "Like New",
    status: "Available",
    notes: "《论证构建者》教师参考版。VSA Logic II 课程配套辅导用书，带完整习题解答与教学参考。",
    videoUrl: "https://drive.google.com/file/d/1Vc2C6-TqafX4qjhYvfG9kpeI_llki5du/view?usp=drivesdk",
    hue: 120
  },
  {
    id: "thinking-toolbox",
    title: "The Thinking Toolbox",
    author: "Nathaniel Bluedorn",
    category: "Logic II",
    price: 25,
    condition: "Very Good",
    status: "Available",
    notes: "《思维工具箱》。VSA 逻辑学（Logic I & II）经典参考书，极富趣味性的逻辑思维训练读本。",
    videoUrl: "https://drive.google.com/file/d/1RxIJm3-yiurHbjsMDajnaaOOFVU3p38P/view?usp=drivesdk",
    hue: 120
  },
  {
    id: "algebra-trig",
    title: "Algebra and Trigonometry",
    author: "Ron Larson",
    category: "Algebra II / Pre-Calculus",
    price: 69,
    condition: "Fair",
    status: "Reserved for Lucy",
    notes: "Old Version. 经典代数与三角学。VSA Algebra II / Pre-Calculus 课程官方选用教材。此书已被 Lucy 买走，如有需要可直接联系 Lucy 购买。",
    hue: 280
  },
  {
    id: "eusebius-omnibus",
    title: "Eusebius",
    author: "Eusebius of Caesarea",
    category: "Omnibus II: Primary",
    price: 30,
    condition: "Very Good",
    status: "Reserved for Lucy",
    notes: "Different Version. 尤西比乌斯《教会史》经典英译本。VSA 核心综合大课 Omnibus II (中世纪史诗/神学) 官方指定研读 primary source 第一单元丛书。此书已被 Lucy 买走，如有需要可直接联系 Lucy 购买。",
    hue: 350
  },
  {
    id: "confessions",
    title: "Confessions",
    author: "Augustine of Hippo",
    category: "Omnibus II: Primary",
    price: 10,
    condition: "Good",
    status: "Reserved for Lucy",
    notes: "圣奥古斯丁《忏悔录》经典英译注释本。VSA 核心综合大课 Omnibus II 的核心初级阅读文献。此书已被 Lucy 买走，如有需要可直接联系 Lucy 购买。",
    hue: 350
  },
  {
    id: "rule-benedict",
    title: "The Rule of St. Benedict",
    author: "Benedict of Nursia",
    category: "Omnibus II: Primary",
    price: 4,
    condition: "Good",
    status: "Reserved for Lucy",
    notes: "《圣本笃会规》。VSA 核心大课 Omnibus II 原版中古神学与制度核心阅读书籍。此书已被 Lucy 买走，如有需要可直接联系 Lucy 购买。",
    hue: 350
  },
  {
    id: "divine-comedy-inferno",
    title: "The Divine Comedy: Inferno",
    author: "Dante Alighieri",
    category: "Omnibus II: Primary",
    price: 16,
    condition: "Very Good",
    status: "Reserved for Samuel",
    notes: "但丁《神曲·地狱篇》英译注释版。此书为 VSA Omnibus II (中世纪) 与 Omnibus V (高阶中世纪) 课程通用核心阅读原著（两节课均会使用）。此书已被 Samuel 买走，如有需要可直接联系 Samuel 购买。",
    hue: 350
  },
  {
    id: "augustus-world",
    title: "Augustus Caesar's World",
    author: "Genevieve Foster",
    category: "Omnibus IV: Primary",
    price: 19,
    condition: "Like New",
    status: "Available",
    notes: "《屋大维恺撒的世界》。VSA 核心人文大课 Omnibus IV (古代世界史与文学) 指定必读历史文献叙事书。",
    videoUrl: "https://drive.google.com/file/d/1RaGFAX39QOQNHDBSJBHgdKzd0DAGHriD/view?usp=drivesdk",
    hue: 30
  },
  {
    id: "fierce-wars",
    title: "Fierce Wars and Faithful Loves",
    author: "Roy Maynard",
    category: "Omnibus V: Primary",
    price: 20,
    condition: "Very Good",
    status: "Reserved for Samuel",
    notes: "斯宾塞《仙后》导读本。VSA 高阶人文神学综合课 Omnibus V (中世纪至现代II) 经典必读原著伴读书籍。此书已被 Samuel 买走，如有需要可直接联系 Samuel 购买。",
    hue: 45
  },
  {
    id: "omnibus-v-textbook",
    title: "Omnibus V Primary Textbook",
    author: "Veritas Press",
    category: "Omnibus V: Primary",
    price: 99,
    condition: "Like New",
    status: "Reserved for Samuel",
    notes: "Veritas Press 史诗级人文神学大教材第五册（Primary 卷）。VSA 高阶人文学科 Omnibus V 核心大纲读本。此书已被 Samuel 买走，如有需要可直接联系 Samuel 购买。",
    hue: 45
  },
  {
    id: "jane-austen-miniatures",
    title: "Miniatures and Morals",
    author: "Peter J. Leithart",
    category: "Literature Elective: Jane Austen's Novel",
    price: 15,
    condition: "Like New",
    status: "Available",
    notes: "《微缩模型与道德》。简·奥斯汀文学世界与古典叙事分析。VSA 高阶文学选修/小说写作/人文学科经典伴读推荐书目。",
    videoUrl: "https://drive.google.com/file/d/1amkVYbUJn-Jq-XIfRU7cfTiJAWn0Xw9d/view?usp=drivesdk",
    hue: 320
  },
  {
    id: "novare-science",
    title: "Novare Physical Science",
    author: "John D. Mays",
    category: "Physical Science: Novare",
    price: 85,
    condition: "Very Good",
    status: "Reserved for Lucy",
    notes: "Novare 物理科学教材。VSA 官方选用 Physical Science (物理科学) 课程核心教科书，成色极佳。此书已被 Lucy 买走，如有需要可直接联系 Lucy 购买。",
    hue: 145
  },
  {
    id: "rhetoric-ii",
    title: "Rhetoric II Textbook",
    author: "Classical Academic Press",
    category: "Rhetoric II",
    price: 49,
    condition: "Very Good",
    status: "Reserved for Samuel",
    notes: "《修辞学第二册》高阶学术教材。VSA Rhetoric II (修辞学二) 官方选用教材，成色极佳。此书已被 Samuel 买走，如有需要可直接联系 Samuel 购买。",
    hue: 175
  },
  {
    id: "ap-biology-lab",
    title: "AP Biology Lab Manual & Companion",
    author: "TPS / Apologia",
    category: "AP Biology (TPS)",
    price: 25,
    condition: "Good",
    status: "Available",
    notes: "AP 生物课程配套实验指导书及部分基础耗材工具包。适合 The Potter's School (TPS) 或同等 AP 生物课实验部分使用。",
    videoUrl: "https://drive.google.com/file/d/15er0vjxNJYPVZ1380W0nsQWIw48Vuh0K/view?usp=drivesdk",
    hue: 90
  },
  {
    id: "ap-physics-1",
    title: "AP Physics 1 Student Text",
    author: "TPS",
    category: "AP Physics 1 (TPS)",
    price: 39,
    condition: "Very Good",
    status: "Available",
    notes: "AP 物理 1 核心教材与习题册。适合 TPS (The Potter's School) 课前预习、同步提升及备考使用，讲解详尽。",
    videoUrl: "https://drive.google.com/file/d/1DZE27CQSCJvvV8_IwzTV0SeEPjHBZSmG/view?usp=drivesdk",
    hue: 15
  },
  {
    id: "advanced-physics",
    title: "Exploring Creation with Advanced Physics (2nd Edition)",
    author: "Apologia",
    category: "Physics II",
    price: 45,
    condition: "Very Good",
    status: "Available",
    notes: "Apologia 经典高阶物理教材。深入探讨高阶物理定理，适合完成基础物理及三角学后的高阶理科学生或 VSA/TPS 课程选修。",
    videoUrl: "https://drive.google.com/file/d/1ISKH8rnWZ_-6P7mx32djIQgj8pPpKpBv/view?usp=drivesdk",
    hue: 160
  },
  {
    id: "advanced-physics-solutions",
    title: "Solutions and Tests for Exploring Creation with Advanced Physics",
    author: "Apologia",
    category: "Physics II",
    price: 15,
    condition: "Very Good",
    status: "Available",
    notes: "高阶物理（Advanced Physics）配套答案与测试手册。包含书中所有 Module 课后习题、复习题的详细解答以及单元测试题与评分标准。",
    videoUrl: "https://drive.google.com/file/d/1SGYSBiDeUnoVZeUXbgTYzUDLkkcC_OZy/view?usp=drivesdk",
    hue: 160
  }
];

// --- Default Category Hue Map (for adding custom categories easily) ---
const CATEGORY_HUES = {
  "Latin III: Classical Authors": 215,
  "AP Latin / Latin IV": 240,
  "Literature Transition": 195,
  "Logic II": 120,
  "Algebra II / Pre-Calculus": 280,
  "Omnibus II: Primary": 350,
  "Omnibus IV: Primary": 30,
  "Omnibus V: Primary": 45,
  "Literature Elective: Jane Austen's Novel": 320,
  "Physical Science: Novare": 145,
  "Rhetoric II": 175,
  "AP Biology (TPS)": 90,
  "AP Physics 1 (TPS)": 15,
  "Physics II": 160
};


// --- App State ---
let booksState = [];
let currentCategory = "all";
let currentSearch = "";
let currentStatusFilter = "all";
let currentSort = "default";
let isAdmin = false;

// --- DOM Elements ---
const bookGrid = document.getElementById("bookGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const courseFiltersContainer = document.getElementById("courseFiltersContainer");
const statusFilter = document.getElementById("statusFilter");
const sortSelect = document.getElementById("sortSelect");

// Stats Elements
const statTotalBooks = document.getElementById("statTotalBooks");
const statTotalValue = document.getElementById("statTotalValue");
const statAvailable = document.getElementById("statAvailable");
const statReserved = document.getElementById("statReserved");
const statPercent = document.getElementById("statPercent");
const statProgressBar = document.getElementById("statProgressBar");

// Modals
const contactModal = document.getElementById("contactModal");
const adminModal = document.getElementById("adminModal");
const dataModal = document.getElementById("dataModal");

// Form Elements
const bookForm = document.getElementById("bookForm");
const formActionTitle = document.getElementById("formActionTitle");
const editBookId = document.getElementById("editBookId");
const bookTitleInput = document.getElementById("bookTitleInput");
const bookAuthorInput = document.getElementById("bookAuthorInput");
const bookPriceInput = document.getElementById("bookPriceInput");
const bookCategorySelect = document.getElementById("bookCategorySelect");
const bookCustomCategoryInput = document.getElementById("bookCustomCategoryInput");
const customCategoryGroup = document.getElementById("customCategoryGroup");
const toggleCustomCategoryLink = document.getElementById("toggleCustomCategoryLink");
const bookStatusSelect = document.getElementById("bookStatusSelect");
const bookConditionSelect = document.getElementById("bookConditionSelect");
const bookNotesInput = document.getElementById("bookNotesInput");
const bookVideoUrlInput = document.getElementById("bookVideoUrlInput");
const bookHueSlider = document.getElementById("bookHueSlider");
const huePreviewBlock = document.getElementById("huePreviewBlock");
const cancelFormBtn = document.getElementById("cancelFormBtn");

// Preview Elements
const previewCover = document.getElementById("previewCover");
const previewCoverCourse = document.getElementById("previewCoverCourse");
const previewCoverTitle = document.getElementById("previewCoverTitle");
const previewCoverAuthor = document.getElementById("previewCoverAuthor");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Check if admin mode is activated via URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('admin')) {
    isAdmin = true;
    const adminToggleBtn = document.getElementById("adminToggleBtn");
    if (adminToggleBtn) adminToggleBtn.style.display = "inline-flex";
  }

  // Load State
  loadState();

  // Bind Events
  setupEventListeners();

  // Render Category pills & book cards
  renderCategories();
  renderApp();
});

// --- State Controllers ---
function loadState() {
  const localData = localStorage.getItem("chris_bookshelf");
  if (localData) {
    try {
      booksState = JSON.parse(localData);
      // Auto-upgrade from legacy categories to the latest refined course classifications
      const hasLegacy = booksState.some(b => 
        b.category === "Latin" || 
        b.category === "Science" || 
        b.category === "Literature" || 
        b.category === "Latin IV: Classical Authors" || 
        b.category === "AP Latin / Latin V" || 
        b.category === "Omnibus II & V: Primary" || 
        b.category === "Literature Electives" || 
        b.category === "Physical Science" || 
        b.category === "AP Physics 1" || 
        b.category === "AP Biology" || 
        b.category === "Advanced Physics"
      );
      if (hasLegacy) {
        booksState = [...INITIAL_BOOKS];
        saveState();
      } else {
        // Smart merge: if books in INITIAL_BOOKS have updates (like newly added videoUrls, Hues, or other fields)
        // that are not present/defined in localStorage booksState, merge them without overwriting user customizations.
        let upgraded = false;
        INITIAL_BOOKS.forEach(initBook => {
          const stateBook = booksState.find(b => b.id === initBook.id);
          if (stateBook) {
            let bookChanged = false;
            // 1. If videoUrl is defined in default but not in state (or is empty), copy it
            if (initBook.videoUrl && !stateBook.videoUrl) {
              stateBook.videoUrl = initBook.videoUrl;
              bookChanged = true;
            }
            // 2. Add any other properties that exist in INITIAL_BOOKS but not in the saved state
            for (const key in initBook) {
              if (!(key in stateBook)) {
                stateBook[key] = initBook[key];
                bookChanged = true;
              }
            }
            if (bookChanged) upgraded = true;
          } else {
            // New book added to the codebase list, insert it
            booksState.push({ ...initBook });
            upgraded = true;
          }
        });
        if (upgraded) {
          saveState();
        }
      }
    } catch (e) {
      showToast("❌ 本地数据解析失败，已加载预设书目！", "danger");
      booksState = [...INITIAL_BOOKS];
      saveState();
    }
  } else {
    booksState = [...INITIAL_BOOKS];
    saveState();
  }
}

function saveState() {
  localStorage.setItem("chris_bookshelf", JSON.stringify(booksState));
}

// --- Render Logic ---
function renderApp() {
  // 1. Calculate Stats
  calculateStats();

  // 2. Filter & Sort Books
  let filteredBooks = booksState.filter(book => {
    // Search filter
    const matchesSearch = 
      book.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      (book.author && book.author.toLowerCase().includes(currentSearch.toLowerCase())) ||
      book.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
      (book.notes && book.notes.toLowerCase().includes(currentSearch.toLowerCase()));
    
    // Category filter
    const matchesCategory = currentCategory === "all" || book.category === currentCategory;

    // Status filter
    let matchesStatus = true;
    if (currentStatusFilter === "available") {
      matchesStatus = book.status === "Available";
    } else if (currentStatusFilter === "reserved") {
      matchesStatus = book.status.startsWith("Reserved") || book.status === "Sold";
    }

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort books
  if (currentSort === "price-asc") {
    filteredBooks.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filteredBooks.sort((a, b) => b.price - a.price);
  } else if (currentSort === "title-asc") {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  // 3. Render Book Grid
  renderGrid(filteredBooks);

  // 4. Update Category Pill Counts
  updatePillCounts();
}

function calculateStats() {
  const total = booksState.length;
  const totalVal = booksState.reduce((sum, b) => sum + b.price, 0);
  const available = booksState.filter(b => b.status === "Available").length;
  const reserved = booksState.filter(b => b.status.startsWith("Reserved") || b.status === "Sold").length;
  const percent = total > 0 ? Math.round((reserved / total) * 100) : 0;

  statTotalBooks.textContent = total;
  if (statTotalValue) statTotalValue.textContent = `$${totalVal}`;
  statAvailable.textContent = available;
  statReserved.textContent = reserved;
  statPercent.textContent = `${percent}%`;
  statProgressBar.style.width = `${percent}%`;
}

function renderCategories() {
  // Extract all categories
  const categories = ["all", ...new Set(booksState.map(b => b.category))];
  
  // Render Pills
  courseFiltersContainer.innerHTML = "";
  categories.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = `pill ${currentCategory === cat ? 'active' : ''}`;
    pill.dataset.category = cat;
    
    const catName = document.createElement("span");
    catName.textContent = cat === "all" ? "全部" : cat;
    
    const catCount = document.createElement("span");
    catCount.className = "pill-count";
    catCount.id = `count_${cat.replace(/\s+/g, "_")}`;
    catCount.textContent = "0";

    pill.appendChild(catName);
    pill.appendChild(catCount);
    courseFiltersContainer.appendChild(pill);
  });

  // Re-populate Category Dropdown in Admin Panel Form
  populateFormCategoryDropdown();
}

function populateFormCategoryDropdown() {
  const categories = [...new Set(booksState.map(b => b.category))];
  bookCategorySelect.innerHTML = "";
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    bookCategorySelect.appendChild(opt);
  });
}

function updatePillCounts() {
  // Update "all" count
  const allCountEl = document.querySelector('[data-category="all"] .pill-count');
  if (allCountEl) allCountEl.textContent = booksState.length;

  // Update specific category counts
  const categories = [...new Set(booksState.map(b => b.category))];
  categories.forEach(cat => {
    const countEl = document.getElementById(`count_${cat.replace(/\s+/g, "_")}`);
    const count = booksState.filter(b => b.category === cat).length;
    if (countEl) countEl.textContent = count;
  });
}

function renderGrid(books) {
  bookGrid.innerHTML = "";

  if (books.length === 0) {
    bookGrid.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  bookGrid.style.display = "grid";
  emptyState.style.display = "none";

  books.forEach(book => {
    // Generate card element
    const card = document.createElement("div");
    card.className = "book-card glass";
    card.dataset.id = book.id;

    // Cover color
    const hue = book.hue || 210;
    const coverGradient = `linear-gradient(135deg, hsl(${hue}, 50%, 40%), hsl(${hue}, 50%, 20%))`;
    
    // Status Badge
    let statusClass = "available";
    let statusLabel = "在售 (Available)";
    if (book.status === "Reserved for Lucy") {
      statusClass = "reserved";
      statusLabel = "已售 • Lucy";
    } else if (book.status === "Reserved for Samuel") {
      statusClass = "reserved";
      statusLabel = "已售 • Samuel";
    } else if (book.status === "Sold") {
      statusClass = "sold";
      statusLabel = "已售出";
    } else if (book.status.startsWith("Reserved")) {
      statusClass = "reserved";
      statusLabel = book.status.replace("Reserved for ", "已售 • ");
    }

    // Get simple spine initial or course code for visual cover
    const coverCode = book.category.substring(0, 5).toUpperCase();

    const adminOverlay = isAdmin ? `
      <!-- Admin overlay hover triggers -->
      <div class="card-admin-action">
        <button class="admin-circle-btn btn-edit" title="编辑书目" data-edit-id="${book.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
        <button class="admin-circle-btn btn-delete" title="删除书目" data-delete-id="${book.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </div>
    ` : '';

    const videoBtnHtml = book.videoUrl ? `
      <a href="${book.videoUrl}" target="_blank" rel="noopener noreferrer" class="book-video-btn" onclick="event.stopPropagation()">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
        <span>视频看书况</span>
      </a>
    ` : '';

    card.innerHTML = `
      ${adminOverlay}

      <!-- Physical 3D Cover Mockup -->
      <div class="book-cover-container">
        <div class="book-cover-3d" style="background: ${coverGradient};">
          <div class="book-spine"></div>
          <div class="book-cover-content">
            <span class="cover-course">${coverCode}</span>
            <h4 class="cover-title">${book.title}</h4>
            <span class="cover-author">${book.author || 'Chris Gu'}</span>
          </div>
        </div>
      </div>

      <!-- Book Info Metadata -->
      <div class="book-info">
        <div class="book-meta-top">
          <span class="book-course-label">${book.category}</span>
          <span class="book-condition-badge">${book.condition}</span>
        </div>
        <h3 class="book-title" title="${book.title}">${book.title}</h3>
        <p class="book-author">作者：${book.author || "未知"}</p>
        <div class="book-notes" title="${book.notes || ''}">
          ${book.notes || "暂无备注。书况优良，适合高中相应课程及备考使用。"}
        </div>
        ${videoBtnHtml}
      </div>

      <!-- Card Footer -->
      <div class="book-card-footer">
        <div class="book-price-box">
          <span class="price-label">标价</span>
          <span class="price-value">$${book.price}</span>
        </div>
        <span class="status-pill ${statusClass}">
          <span class="status-dot"></span>
          <span>${statusLabel}</span>
        </span>
      </div>
    `;
    bookGrid.appendChild(card);
  });
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  
  // Search bar live filter
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    clearSearchBtn.style.display = currentSearch ? "flex" : "none";
    renderApp();
  });

  // Clear search keyword
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderApp();
  });

  // Course pills delegate click
  courseFiltersContainer.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;

    // Toggle active classes
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    currentCategory = pill.dataset.category;
    renderApp();
  });

  // Status Filter
  statusFilter.addEventListener("change", (e) => {
    currentStatusFilter = e.target.value;
    renderApp();
  });

  // Sorting Selector
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderApp();
  });

  // Reset Filters Empty State Button
  document.getElementById("resetFiltersBtn").addEventListener("click", resetAllFilters);

  // Modals Actions
  document.getElementById("contactBtn").addEventListener("click", () => openModal(contactModal));
  document.getElementById("adminToggleBtn").addEventListener("click", () => {
    resetAdminForm();
    openModal(adminModal);
  });

  // Close modals on generic overlays or close buttons
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.closeModal;
      closeModal(document.getElementById(modalId));
    });
  });

  // Esc Key closes active modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) closeModal(activeModal);
    }
  });

  // Copy Buttons inside Contact Card Modal
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.clipboard;
      const targetText = document.getElementById(targetId).textContent;
      
      navigator.clipboard.writeText(targetText).then(() => {
        const oldText = btn.textContent;
        btn.textContent = "已复制！";
        btn.classList.add("btn-primary");
        showToast(`📋 已成功复制：${targetText}`);
        setTimeout(() => {
          btn.textContent = oldText;
          btn.classList.remove("btn-primary");
        }, 1500);
      }).catch(err => {
        showToast("❌ 复制失败，请手动选择复制！", "danger");
      });
    });
  });

  // Form Category Toggle (Custom vs Dropdown select)
  toggleCustomCategoryLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (customCategoryGroup.style.display === "none") {
      customCategoryGroup.style.display = "flex";
      bookCategorySelect.required = false;
      bookCustomCategoryInput.required = true;
      toggleCustomCategoryLink.textContent = "选择已有分类";
    } else {
      customCategoryGroup.style.display = "none";
      bookCategorySelect.required = true;
      bookCustomCategoryInput.required = false;
      toggleCustomCategoryLink.textContent = "或新建分类";
    }
  });

  // Admin Live Card Preview sync
  bookTitleInput.addEventListener("input", updateFormPreview);
  bookAuthorInput.addEventListener("input", updateFormPreview);
  bookCategorySelect.addEventListener("change", updateFormPreview);
  bookCustomCategoryInput.addEventListener("input", updateFormPreview);
  bookHueSlider.addEventListener("input", (e) => {
    const hueVal = e.target.value;
    huePreviewBlock.style.backgroundColor = `hsl(${hueVal}, 80%, 48%)`;
    updateFormPreview();
  });

  // Save Book Form Submit
  bookForm.addEventListener("submit", handleSaveBook);

  // Edit / Delete Book Grid Delegate Trigger
  bookGrid.addEventListener("click", (e) => {
    // Edit
    const editBtn = e.target.closest(".btn-edit");
    if (editBtn) {
      const bookId = editBtn.dataset.editId;
      triggerEditBook(bookId);
      return;
    }

    // Delete
    const deleteBtn = e.target.closest(".btn-delete");
    if (deleteBtn) {
      const bookId = deleteBtn.dataset.deleteId;
      triggerDeleteBook(bookId);
      return;
    }

    // Ignore if direct video preview button is clicked (let standard link handle it)
    const videoBtn = e.target.closest(".book-video-btn");
    if (videoBtn) {
      return;
    }

    // Default: Click on card itself -> Trigger Details View Modal
    const card = e.target.closest(".book-card");
    if (card) {
      const bookId = card.dataset.id;
      triggerViewBookDetail(bookId);
    }
  });

  cancelFormBtn.addEventListener("click", resetAdminForm);

  // Data Actions
  document.getElementById("exportDataBtn").addEventListener("click", triggerDataExport);
  document.getElementById("importDataBtn").addEventListener("click", triggerDataImport);
  document.getElementById("resetDefaultBtn").addEventListener("click", triggerResetDefault);
  document.getElementById("saveDataActionBtn").addEventListener("click", executeDataImport);
}

function triggerViewBookDetail(bookId) {
  const book = booksState.find(b => b.id === bookId);
  if (!book) return;

  const bookDetailModal = document.getElementById("bookDetailModal");
  const detailCover = document.getElementById("detailCover");
  const detailCoverCourse = document.getElementById("detailCoverCourse");
  const detailCoverTitle = document.getElementById("detailCoverTitle");
  const detailCoverAuthor = document.getElementById("detailCoverAuthor");
  const detailCategory = document.getElementById("detailCategory");
  const detailCondition = document.getElementById("detailCondition");
  const detailTitle = document.getElementById("detailTitle");
  const detailAuthor = document.getElementById("detailAuthor");
  const detailNotes = document.getElementById("detailNotes");
  const detailPrice = document.getElementById("detailPrice");
  const detailStatusPill = document.getElementById("detailStatusPill");
  const detailStatusLabel = document.getElementById("detailStatusLabel");
  const detailButtonsContainer = document.getElementById("detailButtonsContainer");

  // Cover 3D HSL gradient
  const hue = book.hue || 210;
  detailCover.style.background = `linear-gradient(135deg, hsl(${hue}, 50%, 40%), hsl(${hue}, 50%, 20%))`;
  
  // Set 3D cover text
  detailCoverCourse.textContent = book.category.substring(0, 5).toUpperCase();
  detailCoverTitle.textContent = book.title;
  detailCoverAuthor.textContent = book.author || 'Chris Gu';

  // Set Metadata Details
  detailCategory.textContent = book.category;
  detailCondition.textContent = book.condition;
  detailTitle.textContent = book.title;
  detailAuthor.textContent = book.author || "未知";
  detailNotes.textContent = book.notes || "暂无备注。书况优良，适合高中相应课程及备考使用。";
  detailPrice.textContent = `$${book.price}`;

  // Status Pill Configuration
  detailStatusPill.className = "status-pill"; // Reset classes
  let statusClass = "available";
  let statusLabel = "在售 (Available)";
  
  if (book.status === "Reserved for Lucy") {
    statusClass = "reserved";
    statusLabel = "已售 • Lucy";
  } else if (book.status === "Reserved for Samuel") {
    statusClass = "reserved";
    statusLabel = "已售 • Samuel";
  } else if (book.status === "Sold") {
    statusClass = "sold";
    statusLabel = "已售出";
  } else if (book.status.startsWith("Reserved")) {
    statusClass = "reserved";
    statusLabel = book.status.replace("Reserved for ", "已售 • ");
  }
  detailStatusPill.classList.add(statusClass);
  detailStatusLabel.textContent = statusLabel;

  // Setup Dynamic Action Buttons
  detailButtonsContainer.innerHTML = "";

  // 1. Direct Video Button in modal
  if (book.videoUrl) {
    const videoBtn = document.createElement("a");
    videoBtn.href = book.videoUrl;
    videoBtn.target = "_blank";
    videoBtn.rel = "noopener noreferrer";
    videoBtn.className = "btn-large-glow btn-video";
    videoBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
      <span>📺 观看详细视频书况</span>
    `;
    detailButtonsContainer.appendChild(videoBtn);
  }

  // 2. Reservation Button
  const actionBtn = document.createElement("button");
  actionBtn.className = "btn-large-glow btn-reserve";
  
  if (book.status === "Available") {
    actionBtn.innerHTML = `<span>🤝 联系 Chris 预订这本书</span>`;
    actionBtn.onclick = () => {
      closeModal(bookDetailModal);
      openModal(document.getElementById("contactModal"));
    };
  } else {
    // Reserved / sold out context
    const buyerName = statusLabel.includes(" • ") ? statusLabel.split(" • ")[1] : "其他同学";
    actionBtn.innerHTML = `<span>💬 咨询二次转让（联系 ${buyerName}）</span>`;
    actionBtn.onclick = () => {
      alert(`此书已被 ${buyerName} 买走。若你确实极其急需，可在后续开学后与该同学联系，咨询其使用完毕后是否可以二次转让给你，或联系 Chris 为你推荐同类型参考教材！`);
    };
  }
  detailButtonsContainer.appendChild(actionBtn);

  // Open the Modal View
  openModal(bookDetailModal);
}

// --- Modal Helper Functions ---
function openModal(modalEl) {
  modalEl.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeModal(modalEl) {
  modalEl.classList.remove("active");
  if (!document.querySelector(".modal-overlay.active")) {
    document.body.style.overflow = ""; // Re-enable background scrolling
  }
}

function resetAllFilters() {
  searchInput.value = "";
  currentSearch = "";
  clearSearchBtn.style.display = "none";
  currentCategory = "all";
  currentStatusFilter = "all";
  currentSort = "default";
  
  // Reset course filter pill
  document.querySelectorAll(".pill").forEach(p => {
    p.classList.toggle("active", p.dataset.category === "all");
  });
  statusFilter.value = "all";
  sortSelect.value = "default";

  renderApp();
  showToast("🔄 书架过滤条件已全部重置！");
}

// --- Toast Micro-alerts ---
function showToast(message, type = "primary") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  
  let typeGlow = "var(--color-primary)";
  if (type === "danger") typeGlow = "var(--color-danger)";
  else if (type === "warning") typeGlow = "var(--color-warning)";

  toast.className = "toast";
  toast.style.borderColor = typeGlow;
  toast.innerHTML = `
    <span>⚡</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Auto clean after animation
  setTimeout(() => {
    toast.remove();
  }, 3300);
}

// --- Admin Panel Controls & CRUD ---
function resetAdminForm() {
  bookForm.reset();
  editBookId.value = "";
  bookVideoUrlInput.value = "";
  formActionTitle.textContent = "📖 添加新书目";
  cancelFormBtn.style.display = "none";
  
  // Reset category toggles
  customCategoryGroup.style.display = "none";
  bookCategorySelect.required = true;
  bookCustomCategoryInput.required = false;
  toggleCustomCategoryLink.textContent = "或新建分类";
  
  // Set slider to a nice default blue/emerald
  bookHueSlider.value = 210;
  huePreviewBlock.style.backgroundColor = "hsl(210, 80%, 48%)";

  populateFormCategoryDropdown();
  updateFormPreview();
}

function updateFormPreview() {
  const title = bookTitleInput.value.trim() || "书籍封面效果预览";
  const author = bookAuthorInput.value.trim() || "Chris Gu";
  
  // Determine course label
  let course = "LATIN";
  if (customCategoryGroup.style.display !== "none" && bookCustomCategoryInput.value.trim()) {
    course = bookCustomCategoryInput.value.trim().substring(0, 5).toUpperCase();
  } else if (bookCategorySelect.value) {
    course = bookCategorySelect.value.substring(0, 5).toUpperCase();
  }

  const hueVal = bookHueSlider.value;

  // Apply visual updates
  previewCover.style.background = `linear-gradient(135deg, hsl(${hueVal}, 50%, 40%), hsl(${hueVal}, 50%, 20%))`;
  previewCoverCourse.textContent = course;
  previewCoverTitle.textContent = title;
  previewCoverAuthor.textContent = author;
}

function handleSaveBook(e) {
  e.preventDefault();

  const idVal = editBookId.value;
  const titleVal = bookTitleInput.value.trim();
  const authorVal = bookAuthorInput.value.trim() || "未知";
  const priceVal = parseFloat(bookPriceInput.value) || 0;
  const statusVal = bookStatusSelect.value;
  const conditionVal = bookConditionSelect.value;
  const notesVal = bookNotesInput.value.trim();
  const videoUrlVal = bookVideoUrlInput.value.trim();
  const hueVal = parseInt(bookHueSlider.value);

  // Determine category
  let categoryVal = "";
  if (customCategoryGroup.style.display !== "none" && bookCustomCategoryInput.value.trim()) {
    categoryVal = bookCustomCategoryInput.value.trim();
  } else {
    categoryVal = bookCategorySelect.value;
  }

  if (!titleVal || !categoryVal) {
    showToast("⚠️ 书名和课程分类不能为空！", "warning");
    return;
  }

  if (idVal) {
    // Edit Mode
    const index = booksState.findIndex(b => b.id === idVal);
    if (index !== -1) {
      booksState[index] = {
        ...booksState[index],
        title: titleVal,
        author: authorVal,
        category: categoryVal,
        price: priceVal,
        status: statusVal,
        condition: conditionVal,
        notes: notesVal,
        videoUrl: videoUrlVal,
        hue: hueVal
      };
      showToast(`📝 成功修改书籍《${titleVal}》！`);
    }
  } else {
    // Add Mode
    const newId = "book_" + Date.now();
    booksState.push({
      id: newId,
      title: titleVal,
      author: authorVal,
      category: categoryVal,
      price: priceVal,
      status: statusVal,
      condition: conditionVal,
      notes: notesVal,
      videoUrl: videoUrlVal,
      hue: hueVal
    });
    showToast(`✨ 成功上架新书《${titleVal}》！`);
  }

  // Update State
  saveState();
  
  // Refresh UI
  renderCategories();
  renderApp();

  // Reset form / dialog
  resetAdminForm();
  closeModal(adminModal);
}

function triggerEditBook(bookId) {
  const book = booksState.find(b => b.id === bookId);
  if (!book) return;

  // Open modal first
  openModal(adminModal);
  
  // Set Action values
  formActionTitle.textContent = "📝 编辑书籍条目";
  cancelFormBtn.style.display = "inline-flex";
  editBookId.value = book.id;
  
  // Set values to fields
  bookTitleInput.value = book.title;
  bookAuthorInput.value = book.author;
  bookPriceInput.value = book.price;
  bookStatusSelect.value = book.status;
  bookConditionSelect.value = book.condition;
  bookNotesInput.value = book.notes || "";
  bookVideoUrlInput.value = book.videoUrl || "";
  bookHueSlider.value = book.hue || 210;
  
  // Update Color Slider block
  huePreviewBlock.style.backgroundColor = `hsl(${book.hue || 210}, 80%, 48%)`;

  // Make sure category dropdown is fully populated and set
  populateFormCategoryDropdown();
  
  // Determine if it matches select dropdown or requires custom inputs
  const selectOptions = Array.from(bookCategorySelect.options).map(o => o.value);
  if (selectOptions.includes(book.category)) {
    bookCategorySelect.value = book.category;
    customCategoryGroup.style.display = "none";
    bookCategorySelect.required = true;
    bookCustomCategoryInput.required = false;
    toggleCustomCategoryLink.textContent = "或新建分类";
  } else {
    customCategoryGroup.style.display = "flex";
    bookCustomCategoryInput.value = book.category;
    bookCategorySelect.required = false;
    bookCustomCategoryInput.required = true;
    toggleCustomCategoryLink.textContent = "选择已有分类";
  }

  updateFormPreview();
  showToast(`✏️ 正在编辑：《${book.title}》`);
}

function triggerDeleteBook(bookId) {
  const book = booksState.find(b => b.id === bookId);
  if (!book) return;

  const confirmDelete = confirm(`⚠️ 确认删除书籍《${book.title}》吗？这将不可恢复！`);
  if (!confirmDelete) return;

  // Perform delete
  booksState = booksState.filter(b => b.id !== bookId);
  saveState();
  
  // Re-render
  renderCategories();
  renderApp();
  
  showToast(`🗑️ 书籍《${book.title}》已下架删除！`, "warning");
}

// --- Data Portability - Import / Export ---
function triggerDataExport() {
  openModal(dataModal);
  document.getElementById("dataModalTitle").textContent = "📤 导出书籍数据 (JSON)";
  document.getElementById("dataModalDesc").textContent = "下面是当前最新的全部书籍数据，已自动全选。你可以复制保存到本地的 markdown 笔记或 JS 源码中！";
  
  const textarea = document.getElementById("dataTextarea");
  textarea.value = JSON.stringify(booksState, null, 2);
  textarea.readOnly = true;
  textarea.select();
  
  const actionBtn = document.getElementById("saveDataActionBtn");
  actionBtn.style.display = "none"; // Hide import trigger button
}

function triggerDataImport() {
  openModal(dataModal);
  document.getElementById("dataModalTitle").textContent = "📥 导入书籍数据 (JSON)";
  document.getElementById("dataModalDesc").textContent = "请将之前备份的完整书籍 JSON 数组粘贴到下方文本框中，执行导入将覆盖当前书架上的全部数据！";
  
  const textarea = document.getElementById("dataTextarea");
  textarea.value = "";
  textarea.readOnly = false;
  textarea.placeholder = '[\n  {\n    "id": "example-book",\n    "title": "Example",\n    ...\n  }\n]';
  
  const actionBtn = document.getElementById("saveDataActionBtn");
  actionBtn.style.display = "inline-flex"; // Show import trigger button
}

function executeDataImport() {
  const textarea = document.getElementById("dataTextarea");
  const val = textarea.value.trim();

  if (!val) {
    showToast("⚠️ 输入框不能为空！", "warning");
    return;
  }

  try {
    const parsed = JSON.parse(val);
    
    // Simple verification check
    if (!Array.isArray(parsed)) {
      showToast("❌ 数据格式错误，导入内容必须是书籍 JSON 数组！", "danger");
      return;
    }

    if (parsed.length > 0 && (!parsed[0].title || !parsed[0].category)) {
      showToast("❌ 数据校验失败，书籍属性中缺少 title 或 category 必填项！", "danger");
      return;
    }

    // Confirmation
    const confirmImport = confirm(`⚠️ 确认执行导入吗？这会清除当前书架上的所有 ${booksState.length} 本书，并替换为导入的 ${parsed.length} 本书！`);
    if (!confirmImport) return;

    // Set State
    booksState = parsed;
    saveState();

    // Rerender
    renderCategories();
    renderApp();

    closeModal(dataModal);
    closeModal(adminModal);
    showToast(`🎉 成功导入了 ${parsed.length} 本书籍数据！`);
  } catch (err) {
    showToast("❌ JSON 数据解析失败，请检查语法拼写是否正确！", "danger");
  }
}

function triggerResetDefault() {
  const confirmReset = confirm("⚠️ 确定要清空当前的修改，恢复成最初的 25 本书籍预设数据吗？这会覆盖所有的自定义修改！");
  if (!confirmReset) return;

  booksState = [...INITIAL_BOOKS];
  saveState();

  renderCategories();
  renderApp();

  closeModal(adminModal);
  showToast("🔄 书本数据已成功恢复至出厂预设值！");
}
