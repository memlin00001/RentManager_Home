# Rentmanager_Pages\Design — 設計稿總目錄

每日 14:00 自動排程 (`rentmanager-daily-design-mockup`) 產出的設計檔案集中在這裡,
依用途分類存放。**排程有權限修改/覆寫此目錄下的圖檔**(其他位置仍是唯讀)。

## 分類規則

| 子目錄 | 用途 | 範例輸入 |
|--------|------|---------|
| `app-ui/` | Android App 內畫面 mockup (Dashboard, Tenants, Payments…) | UI 改善建議、新增畫面 |
| `website/` | RentManager 官網 / 落地頁 / Privacy Policy 視覺 | home.html、homepage 改版 |
| `app-store/` | Google Play / App Store 上架素材 (feature graphic, screenshots) | feature_graphic_*.png 系列 |
| `icons/` | App 圖示、Launcher、通知列圖示 | ic_launcher-playstore.png |
| `cover-art/` | 行銷封面、社群圖、簡報用主視覺 | APP圖/封面/Gemini_*.png |
| `wireframes/` | SVG 線稿(Gemini 失敗回退時的草圖) | 1080x2400 viewBox SVG |
| `_wip/` | 進行中、未分類、實驗性產出 | 草稿 |
| `_archive/` | 手動歸檔的舊版本 | 老闆人工搬入 |

## 命名規則

```
<分類>/<YYYY-MM-DD>/<REC編號>_<語意名稱>_<變體>.<ext>

範例:
app-ui/2026-05-08/REC-001_dashboard-empty-state_v1.png
app-ui/2026-05-08/REC-001_dashboard-empty-state_v2.png
website/2026-05-08/landing_hero-banner.png
wireframes/2026-05-08/REC-002_payment-list.svg
```

每個日期資料夾內必附:
- `_brief.md` — 該批產出的設計目標、對應 #REC 編號、給老闆的審視建議
- `_prompts.md` — 對應的 Gemini Prompt 紀錄

## 修改既有圖檔的規則

排程**可以**修改此目錄下的圖檔,但必須遵守:
1. 修改前先把原檔複製到 `_archive/<原路徑>/<原檔名>_<時間戳>.<ext>` 留底
2. 在當日 `_brief.md` 註明「修改了 X.png,原因:Y」
3. 永遠不能刪除 `screenshots/`、`Day1`-`Day4`、`APP圖`、`RentManager_HomePage` 內的檔案 — 那些是歷史素材,只能新增不能刪減

## 老闆審批

- 設計圖**僅供方向討論**,要實際採用必須經老闆人工核准
- 對應的審批入口仍在 `D:\repos\RentManager-claude-reports\02-improvement-suggestions\<日期>\02-approval-checklist.md`
- 核准後再開新對話,請 Claude 把選定的稿子搬到正式位置(例如 Google Play 上架素材的最終版)

---

_由 14:00 排程維護。索引檔每天更新一次_
