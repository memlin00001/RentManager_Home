### 檔案：index.html
```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Deam2Easy 隨身租屋管家 — 讓房東管理更輕鬆。收租記帳、房客管理、合約追蹤，一手掌握。" />
  <title>Deam2Easy 隨身租屋管家 — 讓管房更輕鬆</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ========== HERO ========== -->
  <header class="hero">
    <div class="container hero__inner">
      <div class="hero__text">
        <p class="hero__eyebrow">智慧租屋管理</p>
        <h1 class="hero__title">Deam2Easy<br /><span>隨身租屋管家</span></h1>
        <p class="hero__slogan">收租、記帳、管房客，<br />全部一支 App 搞定。</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.rentmanager.app.byD2E"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-download"
          id="hero-cta"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/zh-tw_badge_web_generic.png"
            alt="立即在 Google Play 下載"
            class="gplay-badge"
          />
        </a>
      </div>
      <div class="hero__visual" aria-hidden="true">
        <div class="phone-mockup phone-mockup--hero">
          <div class="phone-mockup__screen">
            <div class="mock-app-ui">
              <div class="mock-topbar">隨身租屋管家</div>
              <div class="mock-card">
                <span class="mock-label">本月應收</span>
                <span class="mock-amount">NT$68,000</span>
              </div>
              <div class="mock-row"><span class="dot dot--green"></span>3 筆已收款</div>
              <div class="mock-row"><span class="dot dot--red"></span>1 筆待收款</div>
              <div class="mock-row"><span class="dot dot--yellow"></span>2 份合約即將到期</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__wave" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8f9fb"/>
      </svg>
    </div>
  </header>

  <main>

    <!-- ========== FEATURES ========== -->
    <section class="features" id="features">
      <div class="container">
        <h2 class="section-title">為房東而生的五大功能</h2>
        <p class="section-sub">從第一筆租金到合約到期，全程陪你管</p>
        <div class="features__grid">

          <div class="feature-card">
            <div class="feature-card__icon">💰</div>
            <h3>收租記帳</h3>
            <p>自動產生每月應收清單，一鍵標記已收款，帳務清晰不漏接。</p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">👥</div>
            <h3>房客管理</h3>
            <p>集中儲存房客資料、入住紀錄與聯絡資訊，隨時查閱不費力。</p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">📄</div>
            <h3>合約追蹤</h3>
            <p>合約到期前自動提醒，續約、終止一鍵操作，再也不怕漏失。</p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">🔧</div>
            <h3>維修記錄</h3>
            <p>快速記錄修繕需求、費用與完成狀態，物業狀況一目了然。</p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">📊</div>
            <h3>收支報表</h3>
            <p>月度、年度收支自動彙整成圖表，報稅、決策都有據可查。</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ========== SCREENSHOTS ========== -->
    <section class="screenshots" id="screenshots">
      <div class="container">
        <h2 class="section-title">直覺介面，上手零門檻</h2>
        <p class="section-sub">專為忙碌房東設計，操作流程極簡</p>
      </div>
      <div class="carousel" role="region" aria-label="App 截圖展示">
        <div class="carousel__track" id="carouselTrack">

          <div class="carousel__item">
            <div class="screenshot-frame">
              <img
                src="https://play-lh.googleusercontent.com/5-CA52pf8cWhZaIYdB_10Ov3BpHE1iAlOQUfqIfb678ZLKOPNvepRtWKFjUFO1sO0-t0ngNi9yRUGIme1lPFBF8=w540-h960-rw"
                alt="隨身租屋管家 — 首頁總覽"
                class="screenshot-img"
                loading="lazy"
              />
            </div>
            <p class="carousel__caption">首頁總覽</p>
          </div>

          <div class="carousel__item">
            <div class="screenshot-frame">
              <img
                src="https://play-lh.googleusercontent.com/5-CA52pf8cWhZaIYdB_10Ov3BpHE1iAlOQUfqIfb678ZLKOPNvepRtWKFjUFO1sO0-t0ngNi9yRUGIme1lPFBF8=w540-h960-rw"
                alt="隨身租屋管家 — 收租記帳"
                class="screenshot-img"
                loading="lazy"
              />
            </div>
            <p class="carousel__caption">收租記帳</p>
          </div>

          <div class="carousel__item">
            <div class="screenshot-frame">
              <img
                src="https://play-lh.googleusercontent.com/5-CA52pf8cWhZaIYdB_10Ov3BpHE1iAlOQUfqIfb678ZLKOPNvepRtWKFjUFO1sO0-t0ngNi9yRUGIme1lPFBF8=w540-h960-rw"
                alt="隨身租屋管家 — 房客管理"
                class="screenshot-img"
                loading="lazy"
              />
            </div>
            <p class="carousel__caption">房客管理</p>
          </div>

          <div class="carousel__item">
            <div class="screenshot-frame">
              <img
                src="https://play-lh.googleusercontent.com/5-CA52pf8cWhZaIYdB_10Ov3BpHE1iAlOQUfqIfb678ZLKOPNvepRtWKFjUFO1sO0-t0ngNi9yRUGIme1lPFBF8=w540-h960-rw"
                alt="隨身租屋管家 — 合約追蹤"
                class="screenshot-img"
                loading="lazy"
              />
            </div>
            <p class="carousel__caption">合約追蹤</p>
          </div>

          <div class="carousel__item">
            <div class="screenshot-frame">
              <img
                src="https://play-lh.googleusercontent.com/5-CA52pf8cWhZaIYdB_10Ov3BpHE1iAlOQUfqIfb678ZLKOPNvepRtWKFjUFO1sO0-t0ngNi9yRUGIme1lPFBF8=w540-h960-rw"
                alt="隨身租屋管家 — 收支報表"
                class="screenshot-img"
                loading="lazy"
              />
            </div>
            <p class="carousel__caption">收支報表</p>
          </div>

        </div>

        <div class="carousel__controls">
          <button class="carousel__btn" id="prevBtn" aria-label="上一張">&#8249;</button>
          <div class="carousel__dots" id="carouselDots" role="tablist"></div>
          <button class="carousel__btn" id="nextBtn" aria-label="下一張">&#8250;</button>
        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta">
      <div class="container cta__inner">
        <h2>現在就開始，讓管房不再費心</h2>
        <p>免費下載，立即體驗智慧租屋管理</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.rentmanager.app.byD2E"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-download"
          id="cta-download"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/zh-tw_badge_web_generic.png"
            alt="立即在 Google Play 下載"
            class="gplay-badge"
          />
        </a>
      </div>
    </section>

  </main>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__brand">Deam2Easy 隨身租屋管家</p>
      <nav class="footer__links" aria-label="頁尾連結">
        <a href="privacy.html" rel="noopener noreferrer">隱私政策</a>
      </nav>
      <p class="footer__copy">© 2026 Deam2Easy. All rights reserved.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### 檔案：style.css
```css
/* ============================================================
   Reset & Base
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --brand:        #2563eb;
  --brand-dark:   #1d4ed8;
  --brand-light:  #eff6ff;
  --accent:       #10b981;
  --text:         #1e293b;
  --text-muted:   #64748b;
  --bg:           #f8f9fb;
  --card-bg:      #ffffff;
  --radius:       16px;
  --shadow:       0 4px 24px rgba(0,0,0,.08);
  --transition:   .2s ease;
}

html { scroll-behavior: smooth; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC",
               "Noto Sans TC", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
  background: linear-gradient(135deg, var(--brand) 0%, #1e40af 100%);
  color: #fff;
  padding: 72px 0 0;
  position: relative;
  overflow: hidden;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-bottom: 64px;
}

.hero__text {
  text-align: center;
  max-width: 560px;
}

.hero__eyebrow {
  font-size: .85rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  opacity: .8;
  margin-bottom: 12px;
}

.hero__title {
  font-size: clamp(2.2rem, 6vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero__title span { color: #93c5fd; }

.hero__slogan {
  font-size: clamp(1rem, 3vw, 1.2rem);
  opacity: .9;
  margin-bottom: 36px;
  line-height: 1.7;
}

.btn-download { display: inline-block; }

.gplay-badge {
  height: 60px;
  border-radius: 8px;
  transition: transform var(--transition), opacity var(--transition);
}
.gplay-badge:hover { transform: scale(1.04); opacity: .9; }

.hero__wave {
  display: block;
  line-height: 0;
}
.hero__wave svg { width: 100%; display: block; }

/* Phone Mockup */
.phone-mockup {
  width: 180px;
  background: #1e293b;
  border-radius: 28px;
  padding: 10px;
  box-shadow: 0 20px 60px rgba(0,0,0,.4);
  flex-shrink: 0;
}

.phone-mockup--hero { width: 200px; }

.phone-mockup__screen {
  background: #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
  min-height: 340px;
}

/* Mock App UI (inside phone) */
.mock-app-ui { font-size: .72rem; color: #1e293b; }

.mock-topbar {
  background: var(--brand);
  color: #fff;
  padding: 10px 12px;
  font-weight: 700;
  font-size: .8rem;
}

.mock-card {
  background: #fff;
  margin: 10px 10px 6px;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}

.mock-label { font-size: .65rem; color: #64748b; }
.mock-amount { font-size: 1.3rem; font-weight: 800; color: var(--brand); }

.mock-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  font-size: .7rem;
  border-bottom: 1px solid #f1f5f9;
}

.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot--green  { background: #10b981; }
.dot--red    { background: #ef4444; }
.dot--yellow { background: #f59e0b; }

.mock-tenant-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid #f1f5f9;
  font-size: .68rem;
}

.mock-avatar {
  width: 22px; height: 22px;
  border-radius: 50%;
  background: var(--brand-light);
  color: var(--brand);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: .65rem;
  flex-shrink: 0;
}

.mock-contract-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #f1f5f9;
  font-size: .68rem;
}

.tag {
  font-size: .6rem;
  padding: 2px 6px;
  border-radius: 20px;
  font-weight: 600;
  flex-shrink: 0;
}
.tag--green  { background: #d1fae5; color: #065f46; }
.tag--red    { background: #fee2e2; color: #991b1b; }
.tag--yellow { background: #fef3c7; color: #92400e; }

.mock-chart {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 90px;
  padding: 10px 12px 0;
}

.mock-bar {
  flex: 1;
  background: #bfdbfe;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3px;
  font-size: .55rem;
  color: #64748b;
  transition: background var(--transition);
}
.mock-bar--active { background: var(--brand); color: #fff; }
.mock-chart-label { text-align: center; font-size: .6rem; color: #64748b; padding: 4px 0 6px; }

/* ============================================================
   Section Shared
   ============================================================ */
.section-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
}

.section-sub {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 48px;
  font-size: .95rem;
}

/* ============================================================
   FEATURES
   ============================================================ */
.features {
  background: #f8f9fb;
  padding: 80px 0;
}

.features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.feature-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 28px 24px;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,.12);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: 14px;
  line-height: 1;
}

.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--brand);
}

.feature-card p {
  font-size: .9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ============================================================
   SCREENSHOTS / CAROUSEL
   ============================================================ */
.screenshots {
  background: #fff;
  padding: 80px 0 60px;
  overflow: hidden;
}

.carousel {
  position: relative;
  padding-bottom: 20px;
}

.carousel__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 16px 24px 8px;
  scrollbar-width: none;
}
.carousel__track::-webkit-scrollbar { display: none; }

/* Screenshot frame styled as phone bezel */
.screenshot-frame {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.22);
  background: #000;
  border: 3px solid #1e293b;
  width: 100%;
}
.screenshot-img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 9 / 16;
  object-fit: cover;
}

.carousel__item {
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  width: 200px;
}

.carousel__caption {
  font-size: .85rem;
  font-weight: 600;
  color: var(--text-muted);
}

.carousel__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.carousel__btn {
  background: var(--brand);
  color: #fff;
  border: none;
  width: 36px; height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background var(--transition);
}
.carousel__btn:hover { background: var(--brand-dark); }

.carousel__dots { display: flex; gap: 8px; }

.carousel__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background var(--transition), transform var(--transition);
}
.carousel__dot--active {
  background: var(--brand);
  transform: scale(1.3);
}

/* ============================================================
   CTA
   ============================================================ */
.cta {
  background: linear-gradient(135deg, var(--brand) 0%, #1e40af 100%);
  padding: 80px 20px;
  text-align: center;
  color: #fff;
}

.cta__inner h2 {
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: 12px;
}

.cta__inner p {
  opacity: .88;
  margin-bottom: 32px;
  font-size: 1rem;
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: #1e293b;
  color: #94a3b8;
  padding: 36px 20px;
  text-align: center;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.footer__brand {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
}

.footer__links { display: flex; gap: 24px; }

.footer__links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: .875rem;
  transition: color var(--transition);
}
.footer__links a:hover { color: #e2e8f0; }

.footer__copy { font-size: .8rem; }

/* ============================================================
   RESPONSIVE — Tablet (≥ 640px)
   ============================================================ */
@media (min-width: 640px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .carousel__item { width: 220px; }

  .carousel__track {
    padding: 16px 48px 8px;
  }
}

/* ============================================================
   RESPONSIVE — Desktop (≥ 900px)
   ============================================================ */
@media (min-width: 900px) {
  .hero__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding-bottom: 80px;
  }

  .hero__text { text-align: left; max-width: 500px; }

  .hero__slogan br { display: none; }

  .features__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 5th card centred in 3-col grid */
  .feature-card:last-child:nth-child(3n - 2) {
    grid-column: 2;
  }

  .carousel__track {
    justify-content: center;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 32px;
    padding: 16px 60px 8px;
  }

  .carousel__item { width: 200px; }
}
```

## 執行說明

### 安裝依賴
無需安裝，純靜態網頁。

### 啟動方式
直接以瀏覽器開啟 `index.html`，或使用任意靜態伺服器：
```bash
npx serve .
```

### 環境變數
| 變數名 | 說明 | 預設值 |
|--------|------|--------|
| — | 無需環境變數 | — |

---

**變更說明：**
- `index.html`：截圖從 2 張擴充為 5 張（對應五大功能），圖片 URL 改用直式比例（`w540-h960-rw`），補上各功能對應的 caption
- `style.css`：`.screenshot-frame` 加上手機邊框效果（圓角 + 深色 border）；`.screenshot-img` 設定 `aspect-ratio: 9/16` + `object-fit: cover` 確保直式比例一致；`.carousel__item` 預設寬度改為 `200px` 適配直式截圖；桌面版保留 scroll 以支援 5 張捲動

[SD_DONE] task_id: TASK-20260401-001 files: 2
