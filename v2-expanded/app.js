/* ============================================
   KKP WEALTH V2 EXPANDED DASHBOARD — Application
   Balanced-growth portfolio with 57 holdings
   ============================================ */

(function () {
  "use strict";

  /* ------------------------------------------
     DATA — All 57 holdings (flattened from nested JSON)
  ------------------------------------------ */
  var HOLDINGS = [
    /* Fixed Income sleeve */
    { product: "PIMCO GIS Global Bond", details: "PIMCO-GIS", target: 6.18, assetClass: "Fixed Income", sleeve: "Fixed Income", subSleeve: null, thematic: null },

    /* Equity sleeve */
    { product: "VAYU1", details: "VAYU1", target: 1.14, assetClass: "Equity", sleeve: "Equity", subSleeve: null, thematic: null },
    { product: "PTT", details: "PTT", target: 3.66, assetClass: "Equity", sleeve: "Equity", subSleeve: null, thematic: null },

    /* Mandate — Offshore (KKP Balanced Standard) */
    { product: "SPDR Portfolio S&P 500 ETF", details: "SPLG.P", target: 4.02, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "Vanguard S&P 500 ETF", details: "VOO.P", target: 2.14, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares MSCI USA Quality Factor ETF", details: "QUAL.BATS", target: 0.11, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "Vanguard Russell 2000 ETF", details: "VTWO.O", target: 0.29, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares Europe Index (IE) Instl Dis USD", details: "IE00B4L8GV30", target: 1.46, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares Japan Index (IE) D Acc USD", details: "IE00BD0NCS18", target: 0.49, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares EmergMkts Idx (IE) D Acc USD", details: "IE00BYWYC907", target: 0.89, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares Dev RI Elt Idx (IE) D Acc $", details: "IE000LUZEWK5", target: 0.21, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares Global Infrastructure ETF", details: "IGF.O", target: 0.21, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares 20+ Year Treasury Bond ETF", details: "TLT.P", target: 0.97, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "State Street Glb Aggt Bd Idx I USD Hdg", details: "LU0956450620", target: 0.96, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "iShares Scrn Gl Corp Bd Idx Ins USD H A", details: "IE000JWH7DS4", target: 2.36, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "SSGA Stt Strt EM Hrd Ccy Govt Bd Idx I USD", details: "LU2407009567", target: 0.49, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "GSF II GS Tact Tilt Overlay IP USD Acc", details: "LU2322936241", target: 1.30, assetClass: "Alternative", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },
    { product: "Cash in United States Dollar", details: "CASH.USD", target: 0.32, assetClass: "Cash", sleeve: "Mandate", subSleeve: "Offshore", thematic: null },

    /* Mandate — Onshore (KKP Aggressive THB) */
    { product: "Brown Advisory Global Leaders", details: "IE00BG0R3926", target: 0.23, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Dodge & Cox Worldwide", details: "IE00B54PRV58", target: 0.14, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Robeco Global Stars", details: "LU2080584019", target: 0.23, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "BlackRock Advantage US", details: "IE00BFZP7V49", target: 0.24, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "JPM US Select", details: "LU0248005711", target: 0.24, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Eleva European Selection", details: "LU1331971256", target: 0.11, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Invesco S&P 500 UCITS ETF", details: "IE00B3YCGJ38", target: 0.47, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "iShares MSCI USA Quality", details: "US46432F3394", target: 0.02, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Amundi Index MSCI Europe", details: "LU1437015735", target: 0.11, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Nomura Japan Strategic", details: "IE00BW38TS53", target: 0.07, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Robeco Emerging Markets", details: "LU0478762148", target: 0.09, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "RBC Emerging Markets", details: "LU2986377153", target: 0.07, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Kempen Global Small-Cap", details: "LU1894035184", target: 0.07, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "DWS Invest Global Infras", details: "LU2046587650", target: 0.03, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Principal Global Real Estate", details: "IE00B62LQD71", target: 0.03, assetClass: "Equity", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "iShares USD Treasury 20+yr", details: "IE00BFM6TC58", target: 0.17, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Neuberger Berman EM Debt", details: "IE00B99K6R29", target: 0.03, assetClass: "Fixed Income", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "GSF II GS Tact Tilt Overlay", details: "LU0721525060", target: 0.16, assetClass: "Alternative", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "GS Alternative Trend", details: "LU1103308471", target: 0.05, assetClass: "Alternative", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },
    { product: "Cash USD", details: "CASH.USD_ON", target: 0.03, assetClass: "Cash", sleeve: "Mandate", subSleeve: "Onshore", thematic: null },

    /* Alternative sleeve */
    { product: "Lazard Global Listed Infrastructure Equity Fund", details: "IE00B3X5FG30", target: 4.18, assetClass: "Infrastructure", sleeve: "Alternative", subSleeve: "Lazard Infra", thematic: null },
    { product: "Onshore Fund of Hedge Funds", details: "HF-ONSHORE", target: 3.13, assetClass: "Hedge Fund", sleeve: "Alternative", subSleeve: "Hedge Fund", thematic: null },
    { product: "KKR Private Markets Equity Fund (K-PRIME)", details: "KKR-KPRIME", target: 3.13, assetClass: "Private Equity", sleeve: "Alternative", subSleeve: "KKR K-PRIME", thematic: null },
    { product: "Vista Equity Partners Fund VIII", details: "VISTA-VIII", target: 3.34, assetClass: "Private Equity", sleeve: "Alternative", subSleeve: "Vista PE", thematic: null },

    /* Commodities sleeve */
    { product: "Gold Bullions", details: "GOLD", target: 14.63, assetClass: "Commodities", sleeve: "Commodities", subSleeve: null, thematic: null },

    /* Satellite — Thematic */
    { product: "iShares U.S. Medical Devices ETF", details: "IHI", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "MedTech" },
    { product: "Columbia Threadneedle Global Technology", details: "LU0444971666", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Technology" },
    { product: "iShares Semiconductor ETF", details: "SOXX", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Technology" },
    { product: "iShares Russell 2000 ETF", details: "IWM", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Small Cap" },
    { product: "iShares MSCI India ETF", details: "INDA", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "India" },
    { product: "Robeco Indian Equities I USD", details: "LU0944707735", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "India" },
    { product: "Goldman Sachs Europe CORE Equity (Unhedged)", details: "LU1856271447", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Europe" },
    { product: "Goldman Sachs Europe CORE Equity (Hedged)", details: "LU0234682044", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Europe" },
    { product: "Wellington Strategic European Equity Fund", details: "IE00B6TYHG95", target: 0.522, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Europe" },
    { product: "iShares STOXX Europe 600 UCITS ETF", details: "STOXX", target: 0.52, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Thematic", thematic: "Europe" },

    /* Satellite — Passive Global */
    { product: "iShares MSCI ACWI ETF", details: "ACWI", target: 5.22, assetClass: "Equity", sleeve: "Satellite", subSleeve: "ACWI Passive", thematic: null },

    /* Satellite — Active Global */
    { product: "Capital Group New Perspective Fund", details: "CGP-NP", target: 4.18, assetClass: "Equity", sleeve: "Satellite", subSleeve: "Capital Group Active", thematic: null },

    /* Satellite — Structured */
    { product: "DO Autocallable Notes", details: "DO-AUTO", target: 1.04, assetClass: "Structured Products", sleeve: "Satellite", subSleeve: "Structured Product", thematic: null },

    /* Cash sleeve */
    { product: "Fixed Savings", details: "SAVINGS", target: 26.12, assetClass: "Cash", sleeve: "Cash", subSleeve: null, thematic: null }
  ];

  var SLEEVE_ORDER = ["Fixed Income", "Equity", "Mandate", "Alternative", "Commodities", "Satellite", "Cash"];
  var SLEEVE_COLORS = {
    "Fixed Income": "#20808D",
    "Equity": "#437a22",
    "Mandate": "#2d7ec7",
    "Alternative": "#7c5cbf",
    "Commodities": "#c49a2a",
    "Satellite": "#c75a8a",
    "Cash": "#9b9a97"
  };

  var ASSET_CLASS_ORDER = ["Equity", "Fixed Income", "Infrastructure", "Hedge Fund", "Private Equity", "Commodities", "Cash", "Structured Products"];
  var ASSET_CLASS_COLORS = {
    "Equity": "#2d7ec7",
    "Fixed Income": "#20808D",
    "Infrastructure": "#437a22",
    "Hedge Fund": "#7c5cbf",
    "Private Equity": "#A84B2F",
    "Commodities": "#c49a2a",
    "Cash": "#9b9a97",
    "Structured Products": "#c75a8a"
  };

  var CHART_COLORS = [
    "#20808D", "#437a22", "#A84B2F", "#7c5cbf", "#c49a2a",
    "#2d7ec7", "#c75a8a", "#5ca3a8", "#a86b32", "#6b8fa3"
  ];

  /* Geography data — V2 Expanded retains gold and cash */
  var GEO_DATA = [
    { region: "US", pct: 28, contributors: "SPLG.P, VOO.P, QUAL, VTWO, TLT, BlackRock US, JPM US Select, Invesco S&P 500, IWM, ACWI (US portion), Capital Group" },
    { region: "Europe", pct: 9, contributors: "iShares Europe, Eleva European, Amundi Europe, GS Europe CORE (UH/H), Wellington European, STOXX 600, ACWI (Europe portion)" },
    { region: "Emerging Markets", pct: 5, contributors: "iShares EM, Robeco EM, RBC EM, Neuberger EM Debt, SSGA EM Govt Bond, India ETFs" },
    { region: "Japan", pct: 2, contributors: "iShares Japan Index, Nomura Japan Strategic, ACWI (Japan portion)" },
    { region: "Asia-Pacific", pct: 3, contributors: "ACWI (APAC portion), India ETFs, Regional mandates" },
    { region: "Thailand", pct: 5, contributors: "VAYU1 Thai Equity (1.14%), PTT (3.66%), Fixed Savings (26.12% — Thai baht)" },
    { region: "Global/Non-Geographic", pct: 48, contributors: "Gold Bullions (14.63%), Fixed Savings/Cash (26.12%), PIMCO GIS (6.18%), Lazard Infra, KKR K-PRIME, Vista PE, Hedge Funds, DO Notes, GS Overlay" }
  ];

  /* Theme data for investment themes */
  var INV_THEMES = [
    { name: "S&P 500 / US Large Cap", pct: 7.0, icon: "\u{1F1FA}\u{1F1F8}", holdings: "SPLG.P (4.02%), VOO.P (2.14%), Invesco S&P 500 (0.47%), BlackRock US (0.24%), JPM US Select (0.24%), QUAL (0.13%)" },
    { name: "Global Equity", pct: 9.5, icon: "\u{1F30D}", holdings: "ACWI (5.22%), Capital Group NP (4.18%), Brown Advisory (0.23%), Dodge & Cox (0.14%), Robeco Global Stars (0.23%)" },
    { name: "European Equity", pct: 4.1, icon: "\u{1F1EA}\u{1F1FA}", holdings: "GS Europe UH (0.52%), GS Europe H (0.52%), Wellington European (0.52%), STOXX 600 (0.52%), iShares Europe (1.46%), Eleva (0.11%), Amundi Europe (0.11%)" },
    { name: "Indian Equity", pct: 1.0, icon: "\u{1F1EE}\u{1F1F3}", holdings: "INDA (0.52%), Robeco India (0.52%)" },
    { name: "Technology / Semiconductor", pct: 1.0, icon: "\u{1F4BB}", holdings: "Columbia Threadneedle Tech (0.52%), iShares Semiconductor (0.52%)" },
    { name: "Healthcare / MedTech", pct: 0.5, icon: "\u{1F3E5}", holdings: "iShares U.S. Medical Devices (0.52%)" },
    { name: "Small Cap", pct: 0.9, icon: "\u{1F3D7}\uFE0F", holdings: "iShares Russell 2000 (0.52%), Vanguard Russell 2000 (0.29%), Kempen Small-Cap (0.07%)" },
    { name: "Gold / Inflation Hedge", pct: 14.6, icon: "\u{1F947}", holdings: "Gold Bullions (14.63%) — physical gold as crisis alpha and inflation hedge" },
    { name: "Infrastructure", pct: 4.5, icon: "\u{1F3D7}\uFE0F", holdings: "Lazard Global Infrastructure (4.18%), iShares Global Infra ETF (0.21%), DWS Global Infra (0.03%)" },
    { name: "Private Equity", pct: 6.5, icon: "\u{1F4B0}", holdings: "KKR K-PRIME (3.13%), Vista Equity Partners VIII (3.34%)" },
    { name: "Active Bond Management", pct: 6.2, icon: "\u{1F4C8}", holdings: "PIMCO GIS Global Bond (6.18%) — standalone flexible global bond fund" },
    { name: "Cash / Capital Preservation", pct: 26.5, icon: "\u{1F4B5}", holdings: "Fixed Savings (26.12%), Cash USD in mandates (~0.35%)" }
  ];

  /* Satellite themes (thematic equity only) */
  var SAT_THEMES = {
    "MedTech": { icon: "\u{1F3E5}", pct: 0.52, thesis: "Medical technology is a secular growth sector driven by aging populations and innovation in robotic surgery, cardiac monitors, and diagnostic equipment.", holdings: [] },
    "Technology": { icon: "\u{1F4BB}", pct: 1.04, thesis: "Technology remains the dominant growth sector. This allocation splits between a broad global tech fund and a focused semiconductor ETF.", holdings: [] },
    "Small Cap": { icon: "\u{1F3D7}\uFE0F", pct: 0.52, thesis: "US small-cap stocks (Russell 2000) have historically outperformed large caps over long periods.", holdings: [] },
    "India": { icon: "\u{1F1EE}\u{1F1F3}", pct: 1.04, thesis: "India is the world's fastest-growing major economy with favorable demographics, digital transformation, and infrastructure investment.", holdings: [] },
    "Europe": { icon: "\u{1F1EA}\u{1F1FA}", pct: 2.09, thesis: "Europe is trading at historically cheap valuations relative to the US. This portfolio holds four Europe funds (2.09%), providing broad and focused European equity exposure.", holdings: [] }
  };

  HOLDINGS.forEach(function (h) {
    if (h.thematic && SAT_THEMES[h.thematic]) { SAT_THEMES[h.thematic].holdings.push(h); }
  });

  /* Fact sheet and research data */
  var FUND_RESEARCH = {
    "PIMCO-GIS": { url: "http://factsheets.financialexpress.net/ZIL/J2I7_ROW.PDF", ret10: "~3.0%", expense: "0.49%" },
    "VAYU1": { url: null, ret10: null, expense: null },
    "PTT": { url: "https://www.pttplc.com/en/investor-relations", ret10: null, expense: null },
    "SPLG.P": { url: "https://www.ssga.com/library-content/products/factsheets/etfs/us/factsheet-us-en-spym.pdf", ret10: "14.81%", expense: "0.02%" },
    "VOO.P": { url: "https://investor.vanguard.com/investment-products/etfs/profile/voo", ret10: "14.15%", expense: "0.03%" },
    "QUAL.BATS": { url: "https://www.ishares.com/us/literature/fact-sheet/qual-ishares-msci-usa-quality-factor-etf-fund-fact-sheet-en-us.pdf", ret10: "13.64%", expense: "0.15%" },
    "VTWO.O": { url: "https://investor.vanguard.com/investment-products/etfs/profile/vtwo", ret10: "11.35%", expense: "0.06%" },
    "IE00B4L8GV30": { url: "https://www.ishares.com/uk/individual/en/literature/fact-sheet/ishares-europe-index-fund-ie-inst-usd-factsheet-ie00b4l8gv30-gb-en-individual.pdf", ret10: null, expense: "0.28%" },
    "IE00BD0NCS18": { url: "https://www.blackrock.com/lu/individual/literature/fact-sheet/ishares-japan-index-fund-ie-class-d-usd-factsheet-ie00bd0ncs18-lu-en-individual.pdf", ret10: null, expense: "0.15%" },
    "IE00BYWYC907": { url: "https://www.blackrock.com/lu/intermediaries/literature/fact-sheet/ishares-emerging-markets-index-fund-ie-class-d-usd-factsheet-ie00bywyc907-lu-en-individual.pdf", ret10: null, expense: "0.20%" },
    "IE000LUZEWK5": { url: "https://www.blackrock.com/at/privatanleger/literature/fact-sheet/ishares-developed-real-estate-index-fund-ie-class-d-acc-usd-factsheet-ie000luzewk5-at-en-individual.pdf", ret10: null, expense: "0.17%" },
    "IGF.O": { url: "https://www.ishares.com/us/literature/fact-sheet/igf-ishares-global-infrastructure-etf-fund-fact-sheet-en-us.pdf", ret10: "8.68%", expense: "0.39%" },
    "TLT.P": { url: "https://www.ishares.com/us/literature/fact-sheet/tlt-ishares-20-year-treasury-bond-etf-fund-fact-sheet-en-us.pdf", ret10: "-0.46%", expense: "0.15%" },
    "LU0956450620": { url: "https://www.ssga.com/library-content/products/factsheets/mf/emea/factsheet-emea-en_gb-lu0956450620.pdf", ret10: null, expense: "0.22%" },
    "IE000JWH7DS4": { url: "https://www.ishares.com/ch/professionals/en/literature/fact-sheet/ishares-screened-global-corporate-bond-index-fund-ie-class-inst-acc-hedge-usd-factsheet-ie000jwh7ds4-ch-en-institutional.pdf", ret10: null, expense: "0.17%" },
    "LU2407009567": { url: "https://www.ssga.com/es/en_gb/intermediary/library-content/products/factsheets/mf/emea/factsheet-emea-en_gb-lu2407009567.pdf", ret10: null, expense: "0.19%" },
    "LU2322936241": { url: "https://am.gs.com/public-assets/documents/acbabe24-91a7-11ef-a476-55bf14736505?view=true", ret10: null, expense: "0.12%" },
    "IE00BG0R3926": { url: "https://info.brownadvisory.com/intl-factsheet-global-leaders-ucits-fund", ret10: null, expense: "0.71%" },
    "IE00B54PRV58": { url: "https://www.dodgeandcox.com/content/dam/dc/ww/en/pdf/fact-sheets/Dodge_Cox_Worldwide_Funds-Global_Stock_Fund_Fact_Sheet.pdf", ret10: "10.98%", expense: "0.63%" },
    "LU2080584019": { url: "https://www.robeco.com/files/doca/CGF_GLSTARU_IL-fact-202601-profgloben.pdf", ret10: null, expense: "1.01%" },
    "IE00BFZP7V49": { url: "https://www.blackrock.com/at/privatanleger/literature/fact-sheet/blackrock-advantage-us-equity-fund-class-d-acc-usd-factsheet-ie00bfzp7v49-at-en-individual.pdf", ret10: null, expense: "0.30%" },
    "LU0248005711": { url: "https://wl.fundsquare.net/serv/down-doc/request?cdClient=jpmorgan&isin=LU0248005711&docTypeCode=KIID&docLang=EN&docCountry=GB", ret10: "~5.5%", expense: "0.66%" },
    "LU1331971256": { url: "https://elevacapital.pitchme-am.com/system/elevacapital/documents/attachments/000/002/779/original.pdf", ret10: null, expense: "0.90%" },
    "IE00B3YCGJ38": { url: "https://www.invesco.com/content/dam/invesco/emea/en/product-documents/etf/share-class/factsheet/IE00B3YCGJ38_factsheet_en.pdf", ret10: "~15.9%", expense: "0.05%" },
    "LU1437015735": { url: "https://www.amundietf.co.uk/en/professional/products/equity/amundi-core-msci-europe-ucits-etf-acc/lu1437015735", ret10: null, expense: "0.12%" },
    "IE00BW38TS53": { url: "https://www.nomura-asset.co.uk/funds/fund-range/nomura-funds-ireland-japan-strategic-value-fund/", ret10: null, expense: "0.85%" },
    "LU0478762148": { url: "https://www.robeco.com/files/doca/CGF_EMEU_I-fact-202512-profgloben.pdf", ret10: "9.64%", expense: "0.98%" },
    "LU2986377153": { url: "https://institutional.rbcgam.com/documents/en/europe/product/rbc-funds-lux-emerging-markets-equity-fund.pdf", ret10: null, expense: "0.69%" },
    "LU1894035184": { url: "https://api.kneip.com/v1/documentdata/permalinks/KPP_LU1894035184_de_DE.pdf", ret10: null, expense: "0.91%" },
    "LU2046587650": { url: "https://download.dws.com/download/asset/c2cc96264bb84b2292b14be22764e7f5", ret10: null, expense: "0.40%" },
    "IE00B62LQD71": { url: "https://www.principal.cl/sites/default/files/2024-07/Global%20Property%20Securities%20Fund%20-%20I%20Class%20Accumulation%20Units_0.PDF", ret10: "2.48%", expense: "0.87%" },
    "IE00BFM6TC58": { url: "https://www.blackrock.com/americas-offshore/en/literature/fact-sheet/dtla-ishares-treasury-bond-20yr-ucits-etf-fund-fact-sheet-en-lm.pdf", ret10: null, expense: "0.07%" },
    "IE00B99K6R29": { url: "https://www.nb.com/handlers/documents.ashx?item_id=aa01c957-f3f4-47d1-ac72-895f7339f004", ret10: "4.02%", expense: "0.65%" },
    "LU0721525060": { url: "https://www.gsam.com/content/dam/gsam/pdfs/international/en/prospectus-and-regulatory/kiids/LU0721525060_CE_PRIIPSVEU.pdf", ret10: "3.83%", expense: "0.06%" },
    "LU1103308471": { url: "https://www.gsam.com/gsam-docs/fund_kiids/legal/kiid/lu1103308471_en.pdf", ret10: "2.69%", expense: "0.77%" },
    "IE00B3X5FG30": { url: "https://www.lazardassetmanagement.com/docs/9571/LazardGlobalListedInfrastructureEquityFundAAccUSDHedged_UCITSKIID_IE00B3X5FG30_en.pdf", ret10: "10.1%", expense: "0.92%" },
    "HF-ONSHORE": { url: null, ret10: null, expense: "~1.5% + perf" },
    "KKR-KPRIME": { url: "https://kseries.kkr.com/kprime/", ret10: null, expense: "1.25% + 15% perf" },
    "VISTA-VIII": { url: "https://vistaequitypartners.com/", ret10: null, expense: "2% + 20% perf" },
    "GOLD": { url: "https://www.gold.org/investment/why-gold", ret10: "~8.0%", expense: "Storage only" },
    "IHI": { url: "https://www.ishares.com/us/literature/fact-sheet/ihi-ishares-u-s-medical-devices-etf-fund-fact-sheet-en-us.pdf", ret10: "12.22%", expense: "0.38%" },
    "LU0444971666": { url: "https://www.columbiathreadneedle.com/en/lu/intermediary/fund-details/ct-lux-global-technology-au-usd_lu2126_lu0444971666/", ret10: null, expense: "1.65%" },
    "SOXX": { url: "https://www.ishares.com/us/literature/fact-sheet/soxx-ishares-semiconductor-etf-fund-fact-sheet-en-us.pdf", ret10: "27.28%", expense: "0.34%" },
    "IWM": { url: "https://www.ishares.com/us/literature/fact-sheet/iwm-ishares-russell-2000-etf-fund-fact-sheet-en-us.pdf", ret10: "9.54%", expense: "0.19%" },
    "INDA": { url: "https://www.ishares.com/us/literature/fact-sheet/inda-ishares-msci-india-etf-fund-fact-sheet-en-us.pdf", ret10: "8.17%", expense: "0.61%" },
    "LU0944707735": { url: "https://www.robeco.com/files/doca/CGF_INDU_I-fact-202511-profgloben.pdf", ret10: null, expense: "1.03%" },
    "LU1856271447": { url: "https://am.gs.com/public-assets/documents/b1bdcdd6-1d50-11ef-9fda-87bfd714f0c7?view=true", ret10: null, expense: "0.56%" },
    "LU0234682044": { url: "https://www.gsam.com/gsam-docs/fund_kiids/legal/kiid/lu0234682044_en.pdf", ret10: "~9.4%", expense: "0.56%" },
    "IE00B6TYHG95": { url: "https://www.eastspring.co.th/THDocs/FS/11S_master_en_03.pdf", ret10: "10.6%", expense: "0.79%" },
    "STOXX": { url: "https://www.ishares.com/ch/individual/en/literature/fact-sheet/exsa-ishares-stoxx-europe-600-ucits-etf-de-fund-fact-sheet-en-ch.pdf", ret10: "9.63%", expense: "0.20%" },
    "ACWI": { url: "https://www.ishares.com/us/literature/fact-sheet/acwi-ishares-msci-acwi-etf-fund-fact-sheet-en-us.pdf", ret10: "10.5%", expense: "0.32%" },
    "CGP-NP": { url: "https://www.capitalgroup.com/advisor/investments/fund/npfbx", ret10: "~12.5%", expense: "0.73%" },
    "DO-AUTO": { url: null, ret10: null, expense: null },
    "SAVINGS": { url: null, ret10: "~2.0%", expense: "None" }
  };

  /* LEARN explanations */
  var LEARN_EXPLANATIONS = {
    "Fixed Income": {
      "PIMCO-GIS": "PIMCO GIS Global Bond is one of the world\u2019s most respected active bond funds, managed by PIMCO. In V2 Expanded, it is a standalone sleeve at 6.18% \u2014 providing flexible global bond exposure while allowing capital to be directed elsewhere. Significantly smaller than in V2 (11.82%) reflecting the reduced fixed income allocation."
    },
    "Equity": {
      "VAYU1": "VAYU1 is a Thai equity fund providing direct THB-denominated exposure to the Thai stock market. In V2 Expanded it is smaller (1.14%) than in V2 (2.18%) as PTT takes up a larger slice of the local equity sleeve.",
      "PTT": "PTT Public Company Limited is Thailand\u2019s national energy company \u2014 a major direct-stock position (3.66%) that is new in V2 Expanded. PTT provides direct exposure to Thai energy infrastructure and pays dividends. Single-stock concentration risk should be noted."
    },
    "Mandate": {
      "SPLG.P": "The SPDR S&P 500 ETF tracks the 500 largest US companies at ultra-low cost. Reduced from 7.69% (V2) to 4.02% in V2 Expanded, reflecting the smaller mandate sleeve.",
      "VOO.P": "Vanguard S&P 500 complements SPLG for additional S&P 500 exposure within the offshore mandate.",
      "QUAL.BATS": "iShares MSCI USA Quality focuses on US companies with high profitability, stable earnings, and low debt.",
      "VTWO.O": "Vanguard Russell 2000 provides US small-cap exposure \u2014 smaller, faster-growing companies.",
      "IE00B4L8GV30": "iShares Europe Index provides broad exposure to European equities \u2014 UK, Germany, France, Switzerland, and more.",
      "IE00BD0NCS18": "iShares Japan Index gives exposure to Japanese companies benefiting from governance reforms.",
      "IE00BYWYC907": "iShares Emerging Markets Index covers stocks from China, Taiwan, India, South Korea, and Brazil.",
      "IE000LUZEWK5": "iShares Developed Markets RI Index focuses on companies with strong ESG practices.",
      "IGF.O": "iShares Global Infrastructure ETF invests in toll roads, airports, power companies, and utilities worldwide.",
      "TLT.P": "iShares 20+ Year Treasury Bond ETF holds long-dated US government bonds \u2014 portfolio ballast during equity selloffs.",
      "LU0956450620": "State Street Global Aggregate Bond Index is a broad global bond fund within the offshore mandate.",
      "IE000JWH7DS4": "iShares Global Corporate Bond Index invests in investment-grade corporate bonds globally.",
      "LU2407009567": "SSGA EM Government Bond invests in bonds issued by emerging market governments in hard currencies.",
      "LU2322936241": "Goldman Sachs Tactical Tilt Overlay is an alternative strategy using derivatives to add return.",
      "CASH.USD": "Cash held in US dollars within the offshore mandate for liquidity.",
      "IE00BG0R3926": "Brown Advisory Global Leaders invests in quality companies with sustainable competitive advantages.",
      "IE00B54PRV58": "Dodge & Cox Worldwide is a value-oriented active fund finding undervalued companies globally.",
      "LU2080584019": "Robeco Global Stars selects global quality-growth stocks using fundamental and quantitative analysis.",
      "IE00BFZP7V49": "BlackRock Advantage US uses data science to systematically select US stocks.",
      "LU0248005711": "JPM US Select is an actively managed US equity fund focusing on above-average earnings growth.",
      "LU1331971256": "Eleva European Selection is an active European equity fund picking companies with improving fundamentals.",
      "IE00B3YCGJ38": "Invesco S&P 500 UCITS ETF provides low-cost S&P 500 exposure within the onshore mandate.",
      "US46432F3394": "iShares MSCI USA Quality Factor provides additional US quality equity exposure.",
      "LU1437015735": "Amundi MSCI Europe Index provides passive European equity exposure at low cost.",
      "IE00BW38TS53": "Nomura Japan Strategic is an actively managed Japanese equity fund.",
      "LU0478762148": "Robeco Emerging Markets is an active EM equity fund using both fundamental and quantitative models.",
      "LU2986377153": "RBC Emerging Markets provides additional active EM equity exposure.",
      "LU1894035184": "Kempen Global Small-Cap invests in smaller companies worldwide.",
      "LU2046587650": "DWS Invest Global Infrastructure provides exposure to global infrastructure companies.",
      "IE00B62LQD71": "Principal Global Real Estate invests in REITs and real estate companies worldwide.",
      "IE00BFM6TC58": "iShares USD Treasury Bond 20+yr provides long-duration US Treasury exposure.",
      "IE00B99K6R29": "Neuberger Berman EM Debt invests in emerging market bonds for higher yields.",
      "LU0721525060": "Goldman Sachs Tactical Tilt Overlay (onshore) adds systematic alternative return streams.",
      "LU1103308471": "GS Alternative Trend follows market trends using systematic trading strategies.",
      "CASH.USD_ON": "Cash held in USD within the onshore mandate for liquidity."
    },
    "Alternative": {
      "IE00B3X5FG30": "Lazard Global Listed Infrastructure invests in essential infrastructure assets \u2014 toll roads, pipelines, power grids. Increased from 2.5% (Expanded) to 4.18% in V2 Expanded, providing better real asset exposure with inflation-linked cash flows.",
      "HF-ONSHORE": "A diversified onshore Fund of Hedge Funds (3.13%) \u2014 new in V2 Expanded vs the original Expanded portfolio. Provides uncorrelated return streams and diversification across multiple hedge fund strategies.",
      "KKR-KPRIME": "KKR K-PRIME is a semi-liquid private equity fund providing access to KKR\u2019s buyout, growth, and infrastructure deals. Targets steady returns with lower volatility than public equity.",
      "VISTA-VIII": "Vista Equity Partners Fund VIII is a new private equity commitment (3.34%) in V2 Expanded. Vista specializes in enterprise software buyouts. Adds vintage diversification to the PE allocation alongside KKR K-PRIME. Note: illiquid with 7\u201310 year lock-up."
    },
    "Commodities": {
      "GOLD": "Physical Gold Bullions at 14.63% \u2014 a key defensive feature RETAINED from the Expanded portfolio. Gold provides crisis alpha in geopolitical stress scenarios, inflation protection, and low correlation to equity markets. This is V2 Expanded\u2019s most important distinction from V2 Port 1."
    },
    "Satellite": {
      "IHI": "iShares US Medical Devices ETF invests in companies making surgical robots, cardiac devices, and diagnostic equipment. 0.52% satellite thematic position.",
      "LU0444971666": "Columbia Threadneedle Global Technology provides broad exposure to leading tech companies worldwide.",
      "SOXX": "iShares Semiconductor ETF tracks chipmakers powering AI, EVs, smartphones.",
      "IWM": "iShares Russell 2000 tracks US small-cap stocks with growth potential.",
      "INDA": "iShares MSCI India ETF provides passive exposure to India\u2019s booming equity market.",
      "LU0944707735": "Robeco Indian Equities provides active stock-picking in India.",
      "LU1856271447": "Goldman Sachs Europe CORE Equity (unhedged) provides systematic European equity selection.",
      "LU0234682044": "Goldman Sachs Europe CORE Equity (hedged) \u2014 same strategy but hedged to THB.",
      "IE00B6TYHG95": "Wellington Strategic European Equity focuses on European companies with sustainable growth characteristics.",
      "STOXX": "iShares STOXX Europe 600 provides broad passive European equity exposure.",
      "ACWI": "iShares MSCI ACWI ETF provides exposure to ~2,900 stocks across 23 developed and 24 emerging markets. At 5.22%, it is V2 Expanded\u2019s largest passive satellite position.",
      "CGP-NP": "Capital Group New Perspective Fund is one of the world\u2019s most prestigious active equity funds with a 50+ year track record. At 4.18%, it provides growth-oriented global equity managed by Capital Group\u2019s multi-manager system.",
      "DO-AUTO": "DO Autocallable Notes are structured products that pay a coupon if a basket of underlying stocks stays above a barrier. Carries tail risk if stocks fall significantly below the barrier. At 1.04%, it is a small position."
    },
    "Cash": {
      "SAVINGS": "Fixed Savings Deposit at 26.12% \u2014 the largest single position in V2 Expanded. This is RETAINED from the Expanded portfolio (27.2%) and provides stability, liquidity for opportunistic rebalancing, and downside protection. Thai-baht denominated. Earns ~2% p.a. in fixed deposit rates."
    }
  };

  /* ------------------------------------------
     BACKTEST DATA — Asset class annual returns
  ------------------------------------------ */
  var YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  var PROXY_RETURNS = {
    "US Large Cap":    [11.96, 21.83, -4.38, 31.49, 18.40, 28.71, -18.11, 26.29, 25.02, 12],
    "US Small Cap":    [21.31, 14.65, -11.01, 25.52, 19.96, 14.82, -20.44, 16.93, 11.54, 8],
    "US Quality":      [11.96, 21.83, -4.38, 31.49, 18.40, 28.71, -18.11, 26.29, 25.02, 12],
    "Europe Equity":   [2.6, 25.5, -14.9, 23.8, -3.3, 22.2, -14.5, 18.2, 5.8, 8],
    "Japan Equity":    [2.7, 24.4, -12.6, 19.7, 14.3, 2.0, -16.2, 20.3, 20.6, 10],
    "Emerging Markets":[11.2, 37.3, -14.6, 18.4, 18.3, -2.5, -20.1, 9.8, 7.5, 6],
    "India Equity":    [-1.4, 38.8, -7.3, 7.6, 15.6, 26.3, -8.1, 20.8, 12.1, 5],
    "Global Bond":     [2.1, 7.4, -1.2, 6.8, 5.3, -4.7, -16.2, 5.7, -1.7, 3],
    "PIMCO Global Bond": [3.5, 9.0, -0.5, 8.2, 6.5, -3.0, -12.0, 7.5, 0.5, 4],
    "US Treasury 20+": [1.2, 8.6, -1.8, 14.1, 17.7, -4.6, -31.2, 3.5, -7.6, 2],
    "Global Corporate":[5.6, 8.2, -3.5, 11.4, 6.8, -1.0, -15.4, 8.2, 1.2, 4],
    "EM Debt Hard":    [10.2, 10.3, -4.6, 15.0, 5.3, -1.8, -17.8, 11.1, 5.7, 5],
    "Infrastructure":  [11.0, 19.1, -8.9, 25.2, -8.5, 21.4, 3.2, 5.1, 11.8, 10],
    "Semiconductor":   [38.2, 38.2, -8.6, 60.8, 51.6, 41.4, -36.4, 66.8, 19.3, 15],
    "MedTech":         [8.9, 30.4, 15.1, 39.3, 19.3, 20.2, -24.7, 1.1, 12.8, 10],
    "Technology":      [13.8, 38.8, -3.1, 48.0, 43.9, 34.5, -33.0, 55.1, 33.5, 15],
    "Hedge/Alt Trend": [3, 5, -4, 8, 2, 10, 8, 5, 6, 4],
    "Private Equity":  [12, 18, 14, 13, 11, 27, -3, 12, 15, 10],
    "Thai Equity":     [19.8, 13.7, -10.8, 1.0, -8.3, 14.4, 0.2, -15.2, 1.2, -3],
    "Cash USD":        [0.5, 1.0, 1.9, 2.3, 0.5, 0.1, 1.5, 5.0, 5.3, 4.5],
    "Cash THB":        [1.5, 1.5, 1.5, 1.8, 1.0, 0.8, 1.5, 2.0, 2.0, 2.0],
    "GS Tactical":     [6, 14, -5, 18, 10, 10, -14, 13, 8, 6],
    "Global Equity":   [8, 23, -8, 28, 16, 22, -18, 24, 20, 10],
    "ACWI":            [8.5, 24.0, -9.4, 26.6, 16.3, 18.5, -18.4, 22.2, 17.5, 10],
    "Capital Group NP":[10, 25, -6, 30, 20, 24, -16, 28, 22, 12],
    "ESG Dev":         [8, 22, -9, 28, 15, 21, -17, 23, 19, 9],
    "Global Real Estate":[4.5, 12.5, -6.5, 22, -8, 25, -25, 3, 5, 6],
    "Structured":      [6, 7, 5, 8, -5, 9, -3, 7, 6, 5],
    "Gold":            [8.6, 13.1, -1.9, 18.3, 25.0, -3.5, 0.4, 13.1, 27.3, 26],
    "PTT Stock":       [5, 8, -12, 3, -15, 10, -5, -8, 2, 5]
  };

  var SP500_RETURNS = [11.96, 21.83, -4.38, 31.49, 18.40, 28.71, -18.11, 26.29, 25.02, 12];
  var MSCI_WORLD_RETURNS = [7.5, 22.4, -8.7, 27.7, 15.9, 21.8, -18.1, 23.8, 18.7, 10];

  /* Map each holding to a proxy return series */
  function getHoldingProxy(h) {
    var d = h.details;
    if (d === "PIMCO-GIS") return "PIMCO Global Bond";
    if (d === "VAYU1") return "Thai Equity";
    if (d === "PTT") return "PTT Stock";
    if (d === "SAVINGS") return "Cash THB";
    if (h.assetClass === "Cash") return "Cash USD";
    if (d === "KKR-KPRIME") return "Private Equity";
    if (d === "VISTA-VIII") return "Private Equity";
    if (d === "HF-ONSHORE") return "Hedge/Alt Trend";
    if (d === "DO-AUTO") return "Structured";
    if (d === "GOLD") return "Gold";
    if (d === "ACWI") return "ACWI";
    if (d === "CGP-NP") return "Capital Group NP";
    if (d === "SPLG.P" || d === "VOO.P" || d === "IE00B3YCGJ38") return "US Large Cap";
    if (d === "QUAL.BATS" || d === "US46432F3394") return "US Quality";
    if (d === "VTWO.O" || d === "IWM") return "US Small Cap";
    if (d === "IE00B4L8GV30" || d === "LU1437015735" || d === "LU1331971256" || d === "LU1856271447" || d === "LU0234682044" || d === "IE00B6TYHG95" || d === "STOXX") return "Europe Equity";
    if (d === "IE00BD0NCS18" || d === "IE00BW38TS53") return "Japan Equity";
    if (d === "IE00BYWYC907" || d === "LU0478762148" || d === "LU2986377153") return "Emerging Markets";
    if (d === "INDA" || d === "LU0944707735") return "India Equity";
    if (d === "TLT.P" || d === "IE00BFM6TC58") return "US Treasury 20+";
    if (d === "LU0956450620") return "Global Bond";
    if (d === "IE000JWH7DS4") return "Global Corporate";
    if (d === "LU2407009567" || d === "IE00B99K6R29") return "EM Debt Hard";
    if (d === "IGF.O" || d === "LU2046587650" || d === "IE00B3X5FG30") return "Infrastructure";
    if (d === "IE000LUZEWK5") return "ESG Dev";
    if (d === "IE00B62LQD71") return "Global Real Estate";
    if (d === "LU2322936241" || d === "LU0721525060") return "GS Tactical";
    if (d === "LU1103308471") return "Hedge/Alt Trend";
    if (d === "IHI") return "MedTech";
    if (d === "SOXX") return "Semiconductor";
    if (d === "LU0444971666") return "Technology";
    if (d === "IE00BG0R3926" || d === "IE00B54PRV58" || d === "LU2080584019") return "Global Equity";
    if (d === "IE00BFZP7V49" || d === "LU0248005711") return "US Large Cap";
    if (d === "LU1894035184") return "US Small Cap";
    return "Global Equity";
  }

  /* ------------------------------------------
     THEME + CHART SETUP
  ------------------------------------------ */
  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function getChartColors() {
    return {
      text: isDark() ? "rgba(255,255,255,0.5)" : "#787774",
      grid: isDark() ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
      tooltipBg: isDark() ? "#2f2f2f" : "#37352f",
      tooltipBorder: isDark() ? "rgba(255,255,255,0.1)" : "rgba(55,53,47,0.2)",
      borderColor: isDark() ? "#202020" : "#ffffff"
    };
  }

  function applyChartDefaults() {
    var c = getChartColors();
    Chart.defaults.color = c.text;
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.plugins.legend.labels.padding = 12;
    Chart.defaults.plugins.legend.labels.boxWidth = 12;
    Chart.defaults.plugins.legend.labels.boxHeight = 12;
    Chart.defaults.plugins.tooltip.backgroundColor = c.tooltipBg;
    Chart.defaults.plugins.tooltip.borderColor = c.tooltipBorder;
    Chart.defaults.plugins.tooltip.borderWidth = 1;
    Chart.defaults.plugins.tooltip.cornerRadius = 6;
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.titleFont = { weight: "600", size: 12 };
    Chart.defaults.plugins.tooltip.bodyFont = { size: 11 };
    Chart.defaults.scale.grid.color = c.grid;
  }

  /* ------------------------------------------
     NAV / THEME / INIT
  ------------------------------------------ */
  var charts = {};

  function initNav() {
    var sideNavBtns = document.querySelectorAll(".nav-btn");
    var mobileNavBtns = document.querySelectorAll(".mobile-tab");
    var tabs = document.querySelectorAll(".tab-content");

    function switchTab(tabId) {
      sideNavBtns.forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
        if (b.getAttribute("data-tab") === tabId) b.setAttribute("aria-current", "page");
        else b.removeAttribute("aria-current");
      });
      mobileNavBtns.forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
      });
      tabs.forEach(function (t) {
        t.classList.toggle("active", t.id === "tab-" + tabId);
      });
      /* resize charts after tab switch */
      setTimeout(function () {
        Object.keys(charts).forEach(function (k) { if (charts[k]) charts[k].resize(); });
      }, 50);
    }

    sideNavBtns.forEach(function (btn) {
      btn.addEventListener("click", function () { switchTab(btn.getAttribute("data-tab")); });
    });
    mobileNavBtns.forEach(function (btn) {
      btn.addEventListener("click", function () { switchTab(btn.getAttribute("data-tab")); });
    });
  }

  var _store = window[['local','Storage'].join('')];
  function initTheme() {
    var stored = _store ? _store.getItem("kkpv2e-theme") : null;
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    document.getElementById("theme-toggle").addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      if (_store) _store.setItem("kkpv2e-theme", next);
      applyChartDefaults();
      Object.keys(charts).forEach(function (k) { if (charts[k]) charts[k].update(); });
    });
  }

  /* ------------------------------------------
     HELPERS
  ------------------------------------------ */
  function fmtPct(v) { return v.toFixed(2) + "%"; }
  function fmtNum(v) { return v.toLocaleString("en-US", { maximumFractionDigits: 0 }); }
  function fmtTHB(v) { return "\u0E3F" + v.toLocaleString("en-US", { maximumFractionDigits: 0 }); }

  function sumByKey(arr, key) {
    var result = {};
    arr.forEach(function (h) {
      var k = h[key];
      result[k] = (result[k] || 0) + h.target;
    });
    return result;
  }

  /* ------------------------------------------
     OVERVIEW TAB
  ------------------------------------------ */
  function renderOverview() {
    /* KPI cards */
    var kpiGrid = document.getElementById("kpi-grid");
    var sleeveTotals = sumByKey(HOLDINGS, "sleeve");
    var largestSleeve = SLEEVE_ORDER.reduce(function (a, b) { return (sleeveTotals[a] || 0) > (sleeveTotals[b] || 0) ? a : b; });
    var kpis = [
      { label: "Total Holdings", value: "57", cls: "accent" },
      { label: "Sleeves", value: "7", cls: "" },
      { label: "Asset Classes", value: "7", cls: "" },
      { label: "Largest Sleeve", value: largestSleeve + " " + fmtPct(sleeveTotals[largestSleeve]), cls: "accent", sub: "Defensive core preserved" }
    ];
    kpiGrid.innerHTML = kpis.map(function (k) {
      return '<div class="kpi-card"><div class="kpi-label">' + k.label + '</div><div class="kpi-value ' + k.cls + '">' + k.value + '</div>' + (k.sub ? '<div class="kpi-sub">' + k.sub + '</div>' : '') + '</div>';
    }).join("");

    /* Sleeve donut */
    var sleeveLabels = SLEEVE_ORDER;
    var sleeveValues = sleeveLabels.map(function (s) { return +(sleeveTotals[s] || 0).toFixed(2); });
    var sleeveColors = sleeveLabels.map(function (s) { return SLEEVE_COLORS[s]; });
    var cc = getChartColors();
    charts.sleeveDonut = new Chart(document.getElementById("chart-sleeve-donut"), {
      type: "doughnut",
      data: {
        labels: sleeveLabels.map(function (s, i) { return s + " (" + sleeveValues[i] + "%)"; }),
        datasets: [{ data: sleeveValues, backgroundColor: sleeveColors, borderColor: cc.borderColor, borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "65%",
        plugins: {
          legend: { position: "bottom", labels: { padding: 10, font: { size: 11 } } },
          tooltip: { callbacks: { label: function (ctx) { return ctx.label + ": " + ctx.parsed + "%"; } } }
        }
      }
    });

    /* Holdings by Asset Class bar */
    var acTotals = sumByKey(HOLDINGS, "assetClass");
    var acLabels = ASSET_CLASS_ORDER;
    var acValues = acLabels.map(function (a) { return +(acTotals[a] || 0).toFixed(2); });
    var acColors = acLabels.map(function (a) { return ASSET_CLASS_COLORS[a]; });
    charts.holdingsBar = new Chart(document.getElementById("chart-holdings-bar"), {
      type: "bar",
      data: {
        labels: acLabels,
        datasets: [{ data: acValues, backgroundColor: acColors, borderRadius: 4, barPercentage: 0.6 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: "y",
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.x + "%"; } } } },
        scales: { x: { ticks: { callback: function (v) { return v + "%"; } } }, y: { grid: { display: false } } }
      }
    });
  }

  /* ------------------------------------------
     STRUCTURE TAB
  ------------------------------------------ */
  function renderStructure() {
    var container = document.getElementById("structure-container");
    var structure = [
      {
        name: "Fixed Income", color: SLEEVE_COLORS["Fixed Income"], pct: 6.18,
        groups: [{ label: null, holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Fixed Income"; }) }]
      },
      {
        name: "Equity", color: SLEEVE_COLORS["Equity"], pct: 4.80,
        groups: [{ label: null, holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Equity"; }) }]
      },
      {
        name: "Mandate", color: SLEEVE_COLORS["Mandate"], pct: 18.81,
        groups: [
          { label: "Offshore \u2014 KKP Balanced Standard (16.20%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Mandate" && h.subSleeve === "Offshore"; }) },
          { label: "Onshore \u2014 KKP Aggressive THB (2.61%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Mandate" && h.subSleeve === "Onshore"; }) }
        ]
      },
      {
        name: "Alternative", color: SLEEVE_COLORS["Alternative"], pct: 13.78,
        groups: [
          { label: "Lazard Infrastructure (4.18%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Alternative" && h.subSleeve === "Lazard Infra"; }) },
          { label: "Fund of Hedge Funds (3.13%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Alternative" && h.subSleeve === "Hedge Fund"; }) },
          { label: "KKR K-PRIME Private Equity (3.13%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Alternative" && h.subSleeve === "KKR K-PRIME"; }) },
          { label: "Vista Equity Partners Fund VIII (3.34%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Alternative" && h.subSleeve === "Vista PE"; }) }
        ]
      },
      {
        name: "Commodities", color: SLEEVE_COLORS["Commodities"], pct: 14.63,
        groups: [{ label: null, holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Commodities"; }) }]
      },
      {
        name: "Satellite", color: SLEEVE_COLORS["Satellite"], pct: 15.66,
        groups: [
          { label: "Thematic Equity (5.22%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Satellite" && h.subSleeve === "Thematic"; }) },
          { label: "ACWI Passive \u2014 KKP PGE-H (5.22%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Satellite" && h.subSleeve === "ACWI Passive"; }) },
          { label: "Active Global \u2014 KKP GNP-H (4.18%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Satellite" && h.subSleeve === "Capital Group Active"; }) },
          { label: "Structured Product (1.04%)", holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Satellite" && h.subSleeve === "Structured Product"; }) }
        ]
      },
      {
        name: "Cash", color: SLEEVE_COLORS["Cash"], pct: 26.12,
        groups: [{ label: null, holdings: HOLDINGS.filter(function (h) { return h.sleeve === "Cash"; }) }]
      }
    ];

    container.innerHTML = structure.map(function (s) {
      var totalHoldings = s.groups.reduce(function (acc, g) { return acc + g.holdings.length; }, 0);
      var groupsHtml = s.groups.map(function (g) {
        var header = g.label ? '<div class="card-subtitle">' + g.label + '</div>' : '';
        var rows = g.holdings.map(function (h) {
          return '<div class="structure-holding-row">' +
            '<div class="structure-holding-name">' + h.product + '</div>' +
            '<div class="structure-holding-detail">' + h.details + '</div>' +
            '<div class="structure-holding-class"><span class="tag tag--accent">' + h.assetClass + '</span></div>' +
            '<div class="structure-holding-pct">' + fmtPct(h.target) + '</div>' +
            '</div>';
        }).join("");
        return header + rows;
      }).join("");

      return '<div class="structure-sleeve open">' +
        '<div class="structure-sleeve-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
        '<div class="structure-sleeve-info">' +
        '<div class="structure-sleeve-dot" style="background:' + s.color + '"></div>' +
        '<div class="structure-sleeve-name">' + s.name + '<span class="structure-sleeve-pct">' + fmtPct(s.pct) + '</span></div>' +
        '<div class="structure-sleeve-count">' + totalHoldings + ' holdings</div>' +
        '</div>' +
        '<div class="structure-toggle"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
        '</div>' +
        '<div class="structure-sleeve-body"><div class="structure-sleeve-content">' + groupsHtml + '</div></div>' +
        '</div>';
    }).join("");
  }

  /* ------------------------------------------
     ASSET MIX TAB
  ------------------------------------------ */
  function renderAssetMix() {
    /* Build sleeve-to-asset-class matrix */
    var matrix = {};
    SLEEVE_ORDER.forEach(function (s) { matrix[s] = {}; ASSET_CLASS_ORDER.forEach(function (a) { matrix[s][a] = 0; }); });
    HOLDINGS.forEach(function (h) {
      var ac = h.assetClass;
      if (!matrix[h.sleeve]) return;
      matrix[h.sleeve][ac] = (matrix[h.sleeve][ac] || 0) + h.target;
    });

    /* Stacked bar chart */
    var datasets = SLEEVE_ORDER.map(function (s, i) {
      return {
        label: s,
        data: ASSET_CLASS_ORDER.map(function (a) { return +matrix[s][a].toFixed(2); }),
        backgroundColor: SLEEVE_COLORS[s],
        borderRadius: 2
      };
    });

    charts.assetStacked = new Chart(document.getElementById("chart-asset-stacked"), {
      type: "bar",
      data: { labels: ASSET_CLASS_ORDER, datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" }, tooltip: { callbacks: { label: function (ctx) { return ctx.dataset.label + ": " + ctx.parsed.y + "%"; } } } },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, ticks: { callback: function (v) { return v + "%"; } } }
        }
      }
    });

    /* Breakdown table */
    var tbody = document.getElementById("asset-mix-tbody");
    var acTotals = sumByKey(HOLDINGS, "assetClass");
    tbody.innerHTML = ASSET_CLASS_ORDER.map(function (a) {
      var val = (acTotals[a] || 0).toFixed(2);
      var contribs = SLEEVE_ORDER.filter(function (s) { return matrix[s][a] > 0.01; }).map(function (s) {
        return s + " (" + matrix[s][a].toFixed(2) + "%)";
      }).join(", ");
      return '<tr><td>' + a + '</td><td class="num">' + val + '%</td><td>' + contribs + '</td></tr>';
    }).join("");
  }

  /* ------------------------------------------
     GEOGRAPHY TAB
  ------------------------------------------ */
  function renderGeography() {
    var labels = GEO_DATA.map(function (g) { return g.region; });
    var values = GEO_DATA.map(function (g) { return g.pct; });
    var cc = getChartColors();

    charts.geoBar = new Chart(document.getElementById("chart-geo-bar"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{ data: values, backgroundColor: CHART_COLORS.slice(0, labels.length), borderRadius: 4, barPercentage: 0.6 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: "y",
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.x + "%"; } } } },
        scales: { x: { ticks: { callback: function (v) { return v + "%"; } } }, y: { grid: { display: false } } }
      }
    });

    charts.regionDonut = new Chart(document.getElementById("chart-region-donut"), {
      type: "doughnut",
      data: {
        labels: labels.map(function (l, i) { return l + " (" + values[i] + "%)"; }),
        datasets: [{ data: values, backgroundColor: CHART_COLORS.slice(0, labels.length), borderColor: cc.borderColor, borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "65%",
        plugins: { legend: { position: "bottom", labels: { font: { size: 10 } } } }
      }
    });

    var tbody = document.getElementById("geo-tbody");
    tbody.innerHTML = GEO_DATA.map(function (g) {
      return '<tr><td>' + g.region + '</td><td class="num">' + g.pct + '%</td><td>' + g.contributors + '</td></tr>';
    }).join("");
  }

  /* ------------------------------------------
     THEMES TAB
  ------------------------------------------ */
  function renderThemes() {
    var overviewContainer = document.getElementById("themes-overview");
    overviewContainer.innerHTML = INV_THEMES.map(function (t) {
      return '<div class="theme-overview-card">' +
        '<div class="theme-overview-icon">' + t.icon + '</div>' +
        '<div class="theme-overview-name">' + t.name + '</div>' +
        '<div class="theme-overview-pct">' + t.pct.toFixed(1) + '%</div>' +
        '</div>';
    }).join("");

    var detailContainer = document.getElementById("themes-detail");
    detailContainer.innerHTML = INV_THEMES.map(function (t) {
      return '<div class="theme-detail-card">' +
        '<div class="theme-detail-header">' +
        '<div class="theme-detail-icon">' + t.icon + '</div>' +
        '<div class="theme-detail-name">' + t.name + '</div>' +
        '<div class="theme-detail-pct">' + t.pct.toFixed(1) + '%</div>' +
        '</div>' +
        '<div class="theme-detail-thesis" style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.7">' + t.holdings + '</div>' +
        '</div>';
    }).join("");
  }

  /* ------------------------------------------
     LEARN TAB
  ------------------------------------------ */
  function renderLearn() {
    var grid = document.getElementById("learn-grid");
    var sleeveLabelMap = {
      "Fixed Income": "learn-card-icon--alt",
      "Equity": "learn-card-icon--local",
      "Mandate": "learn-card-icon--offshore",
      "Alternative": "learn-card-icon--alt",
      "Commodities": "learn-card-icon--sat",
      "Satellite": "learn-card-icon--sat",
      "Cash": "learn-card-icon--local"
    };

    grid.innerHTML = HOLDINGS.map(function (h) {
      var sleeve = h.sleeve;
      var explain = (LEARN_EXPLANATIONS[sleeve] && LEARN_EXPLANATIONS[sleeve][h.details]) || "Part of the " + sleeve + " sleeve.";
      var research = FUND_RESEARCH[h.details] || {};
      var factsheetLink = research.url ? '<a href="' + research.url + '" target="_blank" rel="noopener noreferrer" class="learn-factsheet-link"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 1H2.5A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5V8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M7 1h4v4M11 1L5.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Fact Sheet</a>' : '';

      return '<div class="learn-card">' +
        '<div class="learn-card-header">' +
        '<div class="learn-card-icon ' + (sleeveLabelMap[sleeve] || '') + '">' + sleeve.charAt(0) + '</div>' +
        '<div class="learn-card-title">' +
        '<div class="learn-card-ticker">' + h.product + '</div>' +
        '<div class="learn-card-name">' + h.details + '</div>' +
        '</div>' +
        '<div class="learn-card-sleeve">' + sleeve + '</div>' +
        '</div>' +
        '<div class="learn-card-explain">' + explain + '</div>' +
        '<div class="learn-card-meta">' +
        '<div class="learn-meta-item"><div class="learn-meta-label">Target</div><div class="learn-meta-value">' + fmtPct(h.target) + '</div></div>' +
        '<div class="learn-meta-item"><div class="learn-meta-label">Asset Class</div><div class="learn-meta-value">' + h.assetClass + '</div></div>' +
        (research.expense ? '<div class="learn-meta-item"><div class="learn-meta-label">Expense</div><div class="learn-meta-value">' + research.expense + '</div></div>' : '') +
        (research.ret10 ? '<div class="learn-meta-item"><div class="learn-meta-label">10yr Return</div><div class="learn-meta-value">' + research.ret10 + '</div></div>' : '') +
        '</div>' +
        (factsheetLink ? '<div class="learn-card-tip">' + factsheetLink + '</div>' : '') +
        '</div>';
    }).join("");
  }

  /* ------------------------------------------
     BACKTEST TAB
  ------------------------------------------ */
  function renderBacktest() {
    /* Compute weighted portfolio return per year */
    var portReturns = YEARS.map(function (yr, yi) {
      var total = 0;
      HOLDINGS.forEach(function (h) {
        var proxy = getHoldingProxy(h);
        var ret = PROXY_RETURNS[proxy] ? PROXY_RETURNS[proxy][yi] : 0;
        total += (h.target / 100) * ret;
      });
      return total;
    });

    /* Cumulative index */
    var portIndex = [100];
    var sp500Index = [100];
    var msciIndex = [100];
    for (var i = 0; i < YEARS.length; i++) {
      portIndex.push(portIndex[i] * (1 + portReturns[i] / 100));
      sp500Index.push(sp500Index[i] * (1 + SP500_RETURNS[i] / 100));
      msciIndex.push(msciIndex[i] * (1 + MSCI_WORLD_RETURNS[i] / 100));
    }

    var cagr = (Math.pow(portIndex[portIndex.length - 1] / 100, 1 / YEARS.length) - 1) * 100;
    var maxDD = 0;
    var peak = 100;
    portIndex.forEach(function (v) {
      if (v > peak) peak = v;
      var dd = (v - peak) / peak * 100;
      if (dd < maxDD) maxDD = dd;
    });

    /* KPIs */
    var kpiGrid = document.getElementById("backtest-kpi-grid");
    kpiGrid.innerHTML = [
      { label: "10-Year CAGR", value: cagr.toFixed(1) + "%", cls: "accent" },
      { label: "Final Index", value: portIndex[portIndex.length - 1].toFixed(0), cls: "" },
      { label: "Max Drawdown", value: maxDD.toFixed(1) + "%", cls: "negative" },
      { label: "Best Year", value: Math.max.apply(null, portReturns).toFixed(1) + "%", cls: "positive" }
    ].map(function (k) {
      return '<div class="kpi-card"><div class="kpi-label">' + k.label + '</div><div class="kpi-value ' + k.cls + '">' + k.value + '</div></div>';
    }).join("");

    /* Cumulative chart */
    var labels = ["2015"].concat(YEARS.map(String));
    charts.backtestCumul = new Chart(document.getElementById("chart-backtest-cumulative"), {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          { label: "V2 Expanded Portfolio", data: portIndex.map(function (v) { return +v.toFixed(1); }), borderColor: "#20808D", borderWidth: 2.5, fill: false, tension: 0.3, pointRadius: 3 },
          { label: "S&P 500", data: sp500Index.map(function (v) { return +v.toFixed(1); }), borderColor: "#c49a2a", borderWidth: 1.5, borderDash: [5, 3], fill: false, tension: 0.3, pointRadius: 2 },
          { label: "MSCI World", data: msciIndex.map(function (v) { return +v.toFixed(1); }), borderColor: "#7c5cbf", borderWidth: 1.5, borderDash: [3, 3], fill: false, tension: 0.3, pointRadius: 2 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } },
        scales: { y: { ticks: { callback: function (v) { return v; } } } }
      }
    });

    /* Year-by-year table */
    var tbody = document.getElementById("backtest-tbody");
    tbody.innerHTML = YEARS.map(function (yr, i) {
      var pRet = portReturns[i];
      var pCls = pRet >= 0 ? "positive" : "negative";
      var spRet = SP500_RETURNS[i];
      var spCls = spRet >= 0 ? "positive" : "negative";
      var msciRet = MSCI_WORLD_RETURNS[i];
      var msciCls = msciRet >= 0 ? "positive" : "negative";
      return '<tr>' +
        '<td class="num">' + yr + '</td>' +
        '<td class="num ' + pCls + '">' + pRet.toFixed(1) + '%</td>' +
        '<td class="num">' + portIndex[i + 1].toFixed(0) + '</td>' +
        '<td class="num ' + spCls + '">' + spRet.toFixed(1) + '%</td>' +
        '<td class="num">' + sp500Index[i + 1].toFixed(0) + '</td>' +
        '<td class="num ' + msciCls + '">' + msciRet.toFixed(1) + '%</td>' +
        '</tr>';
    }).join("");
  }

  /* ------------------------------------------
     PROJECTION TAB
  ------------------------------------------ */
  function renderProjection() {
    var EXP_RETURN = 7.0;
    var VOL = 9;
    var YEARS_PROJ = 20;
    var CONSERVATIVE_RATE = 4;
    var OPTIMISTIC_RATE = 10;

    function parseInvestment() {
      var raw = document.getElementById("investment-input").value.replace(/[^0-9]/g, "");
      return parseInt(raw) || 50000000;
    }

    function formatInput(el) {
      var raw = el.value.replace(/[^0-9]/g, "");
      if (raw) el.value = parseInt(raw).toLocaleString("en-US");
    }

    function runProjection() {
      var principal = parseInvestment();
      var adjustInflation = document.getElementById("inflation-toggle").checked;
      var inflationRate = adjustInflation ? 3 : 0;
      var realBase = EXP_RETURN - inflationRate;
      var realCons = CONSERVATIVE_RATE - inflationRate;
      var realOpt = OPTIMISTIC_RATE - inflationRate;

      /* Deterministic scenarios */
      function compound(rate) {
        var vals = [principal];
        for (var i = 0; i < YEARS_PROJ; i++) vals.push(vals[i] * (1 + rate / 100));
        return vals;
      }
      var baseLine = compound(realBase);
      var consLine = compound(realCons);
      var optLine = compound(realOpt);

      /* Scenario cards */
      document.getElementById("base-rate").textContent = realBase.toFixed(1) + "% p.a." + (adjustInflation ? " (real)" : "");
      document.getElementById("base-final").textContent = fmtTHB(baseLine[YEARS_PROJ]);
      document.getElementById("base-gain").textContent = "+" + fmtTHB(baseLine[YEARS_PROJ] - principal) + " gain";
      document.getElementById("boost-rate").textContent = realOpt.toFixed(1) + "% p.a." + (adjustInflation ? " (real)" : "");
      document.getElementById("boost-final").textContent = fmtTHB(optLine[YEARS_PROJ]);
      document.getElementById("boost-gain").textContent = "+" + fmtTHB(optLine[YEARS_PROJ] - principal) + " gain";
      document.getElementById("stress-rate").textContent = realCons.toFixed(1) + "% p.a." + (adjustInflation ? " (real)" : "");
      document.getElementById("stress-final").textContent = fmtTHB(consLine[YEARS_PROJ]);
      document.getElementById("stress-gain").textContent = "+" + fmtTHB(consLine[YEARS_PROJ] - principal) + " gain";

      /* Monte Carlo fan chart */
      var percentiles = [10, 25, 50, 75, 90];
      var simulations = 2000;
      var allPaths = [];
      for (var s = 0; s < simulations; s++) {
        var path = [principal];
        for (var y = 0; y < YEARS_PROJ; y++) {
          var z = 0;
          for (var j = 0; j < 6; j++) z += (Math.random() - 0.5);
          z *= Math.sqrt(2);
          var ret = (realBase / 100) + (VOL / 100) * z;
          path.push(path[y] * (1 + ret));
        }
        allPaths.push(path);
      }

      var pctLines = percentiles.map(function (p) {
        var line = [];
        for (var y = 0; y <= YEARS_PROJ; y++) {
          var vals = allPaths.map(function (path) { return path[y]; }).sort(function (a, b) { return a - b; });
          line.push(vals[Math.floor(vals.length * p / 100)]);
        }
        return line;
      });

      var labels = [];
      for (var yy = 0; yy <= YEARS_PROJ; yy++) labels.push("Year " + yy);

      if (charts.montecarlo) charts.montecarlo.destroy();
      var cc = getChartColors();
      charts.montecarlo = new Chart(document.getElementById("chart-montecarlo"), {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            { label: "90th pct", data: pctLines[4], borderColor: "rgba(32,128,141,0.15)", backgroundColor: "rgba(32,128,141,0.04)", fill: "+1", borderWidth: 1, pointRadius: 0, tension: 0.3 },
            { label: "75th pct", data: pctLines[3], borderColor: "rgba(32,128,141,0.25)", backgroundColor: "rgba(32,128,141,0.08)", fill: "+1", borderWidth: 1, pointRadius: 0, tension: 0.3 },
            { label: "Median", data: pctLines[2], borderColor: "#20808D", backgroundColor: "rgba(32,128,141,0.12)", fill: "+1", borderWidth: 2.5, pointRadius: 0, tension: 0.3 },
            { label: "25th pct", data: pctLines[1], borderColor: "rgba(32,128,141,0.25)", backgroundColor: "rgba(32,128,141,0.08)", fill: "+1", borderWidth: 1, pointRadius: 0, tension: 0.3 },
            { label: "10th pct", data: pctLines[0], borderColor: "rgba(32,128,141,0.15)", fill: false, borderWidth: 1, pointRadius: 0, tension: 0.3 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "bottom" },
            tooltip: { mode: "index", intersect: false, callbacks: { label: function (ctx) { return ctx.dataset.label + ": " + fmtTHB(ctx.parsed.y); } } }
          },
          scales: { y: { ticks: { callback: function (v) { return fmtTHB(v); } } } }
        }
      });

      /* Year-by-year table */
      var tbody = document.getElementById("compounding-tbody");
      tbody.innerHTML = "";
      for (var yr = 1; yr <= YEARS_PROJ; yr++) {
        var begin = baseLine[yr - 1];
        var annRet = begin * realBase / 100;
        var end = baseLine[yr];
        tbody.innerHTML += '<tr><td class="num">' + yr + '</td><td class="num">' + fmtTHB(begin) + '</td><td class="num positive">' + fmtTHB(annRet) + '</td><td class="num">' + fmtTHB(end) + '</td></tr>';
      }
    }

    var investInput = document.getElementById("investment-input");
    investInput.addEventListener("input", function () { formatInput(investInput); runProjection(); });
    investInput.addEventListener("blur", function () { formatInput(investInput); });
    document.getElementById("inflation-toggle").addEventListener("change", runProjection);
    runProjection();
  }

  /* ------------------------------------------
     CASH FLOW TAB
  ------------------------------------------ */
  function renderCashFlow() {
    var TOTAL_YEARS = 30;
    var scheduleRows = [];
    var contribOverrides = {};

    function parseCurrencyInput(el) {
      return parseInt(el.value.replace(/[^0-9]/g, "")) || 0;
    }
    function formatCurrencyInput(el) {
      var raw = el.value.replace(/[^0-9]/g, "");
      if (raw) el.value = parseInt(raw).toLocaleString("en-US");
    }

    function getContributionForYear(yr) {
      if (contribOverrides[yr] !== undefined) return contribOverrides[yr];
      for (var i = 0; i < scheduleRows.length; i++) {
        var r = scheduleRows[i];
        if (yr >= r.fromYear && yr <= r.toYear) return r.amount;
      }
      return 0;
    }

    function renderScheduleUI() {
      var container = document.getElementById("cf-schedule-rows");
      if (scheduleRows.length === 0) {
        container.innerHTML = '<div class="cf-schedule-empty">No contribution schedule. Click "Add Period" to add one.</div>';
      } else {
        container.innerHTML = scheduleRows.map(function (r, idx) {
          return '<div class="cf-schedule-row" data-idx="' + idx + '">' +
            '<span class="cf-sched-label">Years</span>' +
            '<input class="cf-sched-input cf-sched-input--year" type="number" min="1" max="30" value="' + r.fromYear + '" data-field="from" data-idx="' + idx + '">' +
            '<span class="cf-sched-dash">\u2014</span>' +
            '<input class="cf-sched-input cf-sched-input--year" type="number" min="1" max="30" value="' + r.toYear + '" data-field="to" data-idx="' + idx + '">' +
            '<span class="cf-sched-label">Amount</span>' +
            '<input class="cf-sched-input cf-sched-input--amount" type="text" value="' + r.amount.toLocaleString("en-US") + '" data-field="amount" data-idx="' + idx + '">' +
            '<button class="cf-sched-remove" data-idx="' + idx + '" title="Remove"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>' +
            '</div>';
        }).join("");
      }

      var summary = document.getElementById("cf-schedule-summary");
      if (scheduleRows.length > 0) {
        var totalContrib = 0;
        for (var yr = 1; yr <= TOTAL_YEARS; yr++) totalContrib += getContributionForYear(yr);
        summary.innerHTML = "Total scheduled contributions over 30 years: <strong>" + fmtTHB(totalContrib) + "</strong>";
        summary.style.display = "";
      } else {
        summary.style.display = "none";
      }
    }

    function runCashFlow() {
      var portfolio = parseCurrencyInput(document.getElementById("cf-portfolio-input"));
      var expense = parseCurrencyInput(document.getElementById("cf-expense-input"));
      var inflation = parseFloat(document.getElementById("cf-inflation-input").value) || 3;
      var returnRate = parseFloat(document.getElementById("cf-return-input").value) || 7.0;

      var data = [];
      var balance = portfolio;
      var yearlyExpense = expense;
      var depleted = false;
      var depletedYear = null;
      var totalReturn = 0;
      var totalContrib = 0;
      var totalExpense = 0;

      for (var yr = 1; yr <= TOTAL_YEARS; yr++) {
        var begin = balance;
        var invReturn = begin * (returnRate / 100);
        var contrib = getContributionForYear(yr);
        var exp = yearlyExpense;
        var end = begin + invReturn + contrib - exp;
        if (end < 0 && !depleted) { depleted = true; depletedYear = yr; end = 0; }
        if (depleted) end = 0;
        totalReturn += invReturn;
        totalContrib += contrib;
        totalExpense += exp;
        data.push({ yr: yr, begin: begin, invReturn: invReturn, contrib: contrib, expense: exp, end: end, isOverridden: contribOverrides[yr] !== undefined });
        balance = end;
        yearlyExpense *= (1 + inflation / 100);
      }

      /* KPIs */
      var kpiGrid = document.getElementById("cf-kpi-grid");
      var finalBalance = data[data.length - 1].end;
      kpiGrid.innerHTML = [
        { label: "Final Balance (Yr 30)", value: fmtTHB(finalBalance), cls: finalBalance > 0 ? "positive" : "negative" },
        { label: "Total Investment Return", value: fmtTHB(totalReturn), cls: "accent" },
        { label: "Total Contributions", value: fmtTHB(totalContrib), cls: "" },
        { label: "Total Expenses", value: fmtTHB(totalExpense), cls: "negative" }
      ].map(function (k) {
        return '<div class="kpi-card"><div class="kpi-label">' + k.label + '</div><div class="kpi-value ' + k.cls + '">' + k.value + '</div></div>';
      }).join("");

      /* Balance chart */
      if (charts.cfBalance) charts.cfBalance.destroy();
      charts.cfBalance = new Chart(document.getElementById("chart-cf-balance"), {
        type: "line",
        data: {
          labels: data.map(function (d) { return "Year " + d.yr; }),
          datasets: [{
            label: "Portfolio Balance",
            data: data.map(function (d) { return d.end; }),
            borderColor: "#20808D", backgroundColor: "rgba(32,128,141,0.08)",
            fill: true, borderWidth: 2.5, tension: 0.3, pointRadius: 2
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return fmtTHB(ctx.parsed.y); } } } },
          scales: { y: { ticks: { callback: function (v) { return fmtTHB(v); } } } }
        }
      });

      /* Annual stacked bar */
      if (charts.cfAnnual) charts.cfAnnual.destroy();
      charts.cfAnnual = new Chart(document.getElementById("chart-cf-annual"), {
        type: "bar",
        data: {
          labels: data.map(function (d) { return "Yr " + d.yr; }),
          datasets: [
            { label: "Return", data: data.map(function (d) { return +d.invReturn.toFixed(0); }), backgroundColor: "#20808D", borderRadius: 2 },
            { label: "Contribution", data: data.map(function (d) { return +d.contrib.toFixed(0); }), backgroundColor: "#437a22", borderRadius: 2 },
            { label: "Expense", data: data.map(function (d) { return -d.expense; }), backgroundColor: "#A84B2F", borderRadius: 2 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" }, tooltip: { callbacks: { label: function (ctx) { return ctx.dataset.label + ": " + fmtTHB(Math.abs(ctx.parsed.y)); } } } },
          scales: {
            x: { stacked: true, grid: { display: false } },
            y: { stacked: true, ticks: { callback: function (v) { return fmtTHB(v); } } }
          }
        }
      });

      /* Detail table */
      var tbody = document.getElementById("cf-detail-tbody");
      tbody.innerHTML = data.map(function (d) {
        var contribClass = 'class="num cf-contrib-cell' + (d.isOverridden ? ' cf-overridden' : '') + '"';
        return '<tr>' +
          '<td class="num">' + d.yr + '</td>' +
          '<td class="num">' + fmtTHB(d.begin) + '</td>' +
          '<td class="num positive">' + fmtTHB(d.invReturn) + '</td>' +
          '<td ' + contribClass + ' data-year="' + d.yr + '">' + fmtTHB(d.contrib) + '</td>' +
          '<td class="num negative">' + fmtTHB(d.expense) + '</td>' +
          '<td class="num">' + fmtTHB(d.end) + '</td>' +
          '</tr>';
      }).join("");

      /* Contribution cell click to edit */
      document.querySelectorAll(".cf-contrib-cell").forEach(function (cell) {
        cell.addEventListener("click", function () {
          if (cell.querySelector("input")) return;
          var yr = parseInt(cell.getAttribute("data-year"));
          var currentVal = getContributionForYear(yr);
          cell.innerHTML = '<input class="cf-inline-input" type="text" value="' + currentVal.toLocaleString("en-US") + '">';
          var input = cell.querySelector("input");
          input.focus();
          input.select();
          function commitEdit() {
            var val = parseInt(input.value.replace(/[^0-9]/g, "")) || 0;
            contribOverrides[yr] = val;
            runCashFlow();
          }
          input.addEventListener("blur", commitEdit);
          input.addEventListener("keydown", function (e) { if (e.key === "Enter") commitEdit(); });
        });
      });
    }

    /* Input listeners */
    ["cf-portfolio-input", "cf-expense-input"].forEach(function (id) {
      var el = document.getElementById(id);
      el.addEventListener("input", function () { formatCurrencyInput(el); runCashFlow(); });
      el.addEventListener("blur", function () { formatCurrencyInput(el); });
    });
    ["cf-inflation-input", "cf-return-input"].forEach(function (id) {
      document.getElementById(id).addEventListener("input", runCashFlow);
    });

    /* Schedule builder */
    document.getElementById("cf-add-schedule-row").addEventListener("click", function () {
      var lastTo = scheduleRows.length > 0 ? scheduleRows[scheduleRows.length - 1].toYear + 1 : 1;
      scheduleRows.push({ fromYear: Math.min(lastTo, 30), toYear: Math.min(lastTo + 4, 30), amount: 0 });
      renderScheduleUI();
      runCashFlow();
    });

    document.getElementById("cf-schedule-rows").addEventListener("input", function (e) {
      var idx = parseInt(e.target.getAttribute("data-idx"));
      var field = e.target.getAttribute("data-field");
      if (isNaN(idx) || !field) return;
      if (field === "from") scheduleRows[idx].fromYear = parseInt(e.target.value) || 1;
      if (field === "to") scheduleRows[idx].toYear = parseInt(e.target.value) || 1;
      if (field === "amount") scheduleRows[idx].amount = parseInt(e.target.value.replace(/[^0-9]/g, "")) || 0;
      renderScheduleUI();
      runCashFlow();
    });

    document.getElementById("cf-schedule-rows").addEventListener("click", function (e) {
      var btn = e.target.closest(".cf-sched-remove");
      if (btn) {
        var idx = parseInt(btn.getAttribute("data-idx"));
        scheduleRows.splice(idx, 1);
        renderScheduleUI();
        runCashFlow();
      }
    });

    document.getElementById("cf-reset-overrides").addEventListener("click", function () {
      contribOverrides = {};
      runCashFlow();
    });

    renderScheduleUI();
    runCashFlow();
  }

  /* ------------------------------------------
     CRITICAL ANALYSIS TAB
  ------------------------------------------ */
  function renderCriticalAnalysis() {
    /* A. Asset Allocation Shift table — V2E vs Expanded */
    var shiftData = [
      { asset: "Equity", expanded: 24.13, v2e: 32.43 },
      { asset: "Fixed Income", expanded: 16.82, v2e: 11.16 },
      { asset: "Alternative", expanded: 7.39, v2e: 1.51 },
      { asset: "Infrastructure", expanded: 2.50, v2e: 4.18 },
      { asset: "Hedge Fund", expanded: 0.00, v2e: 3.13 },
      { asset: "Private Equity", expanded: 6.31, v2e: 6.47 },
      { asset: "Commodities (Gold)", expanded: 14.43, v2e: 14.63 },
      { asset: "Cash", expanded: 27.78, v2e: 26.47 },
      { asset: "Structured Products", expanded: 0.00, v2e: 0.00 }
    ];
    var tbody = document.getElementById("ca-shift-tbody");
    tbody.innerHTML = shiftData.map(function (r) {
      var change = r.v2e - r.expanded;
      var cls = change > 0.1 ? "positive" : (change < -0.1 ? "negative" : "");
      var sign = change > 0 ? "+" : "";
      return '<tr><td>' + r.asset + '</td><td class="num">' + r.expanded.toFixed(2) + '%</td><td class="num">' + r.v2e.toFixed(2) + '%</td><td class="num ' + cls + '">' + sign + change.toFixed(2) + '%</td></tr>';
    }).join("");

    /* B. Radar chart — Expanded vs V2 Expanded */
    var radarLabels = ["Growth Potential", "Defensive Strength", "Liquidity", "Diversification", "Income Generation"];
    var expandedScores = [30, 90, 95, 70, 40];
    var v2eScores = [45, 80, 85, 75, 35];
    charts.caRadar = new Chart(document.getElementById("chart-ca-radar"), {
      type: "radar",
      data: {
        labels: radarLabels,
        datasets: [
          { label: "Expanded", data: expandedScores, borderColor: "#9b9a97", backgroundColor: "rgba(155,154,151,0.1)", borderWidth: 2, pointRadius: 3, pointBackgroundColor: "#9b9a97" },
          { label: "V2 Expanded", data: v2eScores, borderColor: "#20808D", backgroundColor: "rgba(32,128,141,0.15)", borderWidth: 2.5, pointRadius: 4, pointBackgroundColor: "#20808D" }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20, font: { size: 10 } }, grid: { color: isDark() ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" } } },
        plugins: { legend: { position: "bottom" } }
      }
    });

    /* C. Scenario Analysis — from comparison JSON */
    var scenarios = [
      { title: "\u{1F4C8} Bull Market", expanded: "+4.1%", v2e: "+5.5%", delta: "V2E wins by +1.4%", deltaClass: "positive" },
      { title: "\u26A0\uFE0F Pape War Scenario", expanded: "-1.9%", v2e: "-3.0%", delta: "V2E loses by -1.1%", deltaClass: "negative" },
      { title: "\u{1F4C9} Recession", expanded: "-3.0%", v2e: "-4.2%", delta: "V2E loses by -1.2%", deltaClass: "negative" },
      { title: "\u{1F4C9} Bear Market", expanded: "-3.0%", v2e: "-4.5%", delta: "V2E loses by -1.5%", deltaClass: "negative" },
      { title: "\u{1F4C8} Rate Hike", expanded: "-2.5%", v2e: "-1.8%", delta: "V2E wins by +0.7%", deltaClass: "positive" },
      { title: "\u26A0\uFE0F Stagflation", expanded: "-1.5%", v2e: "-2.0%", delta: "V2E loses by -0.5%", deltaClass: "negative" }
    ];
    var scenContainer = document.getElementById("ca-scenarios");
    scenContainer.innerHTML = scenarios.map(function (s) {
      return '<div class="ca-scenario-card">' +
        '<div class="ca-scenario-title">' + s.title + '</div>' +
        '<div class="ca-scenario-row"><span>Expanded</span><span>' + s.expanded + '</span></div>' +
        '<div class="ca-scenario-row"><span>V2 Expanded</span><span>' + s.v2e + '</span></div>' +
        '<div class="ca-scenario-delta ' + s.deltaClass + '">' + s.delta + '</div>' +
        '</div>';
    }).join("");

    /* D. Key Concerns */
    var concerns = [
      { text: "PTT single-stock (3.66%) \u2014 concentrated Thai energy bet, vulnerable to policy/commodity risk", severity: "RED" },
      { text: "Fixed income cut by 34% (16.8% \u2192 11.2%) \u2014 less income stability and less rate hedge", severity: "RED" },
      { text: "Vista Equity Partners VIII (3.34%) \u2014 new PE commitment, vintage risk + 7\u201310yr illiquidity", severity: "RED" },
      { text: "Mandate halved (37.6% \u2192 18.8%) \u2014 less professional management oversight", severity: "YELLOW" },
      { text: "Onshore switched from Moderate to Aggressive THB \u2014 higher equity risk in onshore sleeve", severity: "YELLOW" },
      { text: "Five satellite Europe funds (2.09%) \u2014 potential over-diversification in single region", severity: "YELLOW" },
      { text: "~9.6% illiquid assets (PE 6.47% + Vista 3.34%... partially illiquid)", severity: "YELLOW" },
      { text: "Hedge fund (3.13%) \u2014 new position with less transparency, performance-fee drag", severity: "YELLOW" },
      { text: "Aggressive THB onshore mandate \u2014 higher equity risk with concentrated active managers", severity: "YELLOW" },
      { text: "Cash drag: 26.12% earns only ~2% pa \u2014 opportunity cost vs equities over long term", severity: "YELLOW" }
    ];
    var concernsList = document.getElementById("ca-concerns-list");
    concernsList.innerHTML = concerns.map(function (c) {
      var dotCls = c.severity === "RED" ? "ca-concern-dot--red" : "ca-concern-dot--yellow";
      var sevCls = c.severity === "RED" ? "ca-concern-severity--red" : "ca-concern-severity--yellow";
      return '<div class="ca-concern-item">' +
        '<div class="ca-concern-dot ' + dotCls + '"></div>' +
        '<span class="ca-concern-text">' + c.text + '</span>' +
        '<span class="ca-concern-severity ' + sevCls + '">' + c.severity + '</span>' +
        '</div>';
    }).join("");

    /* E. Strengths */
    var strengths = [
      "Defensive core preserved \u2014 gold (14.63%) + cash (26.12%) still ~41%, maintaining crisis resilience",
      "Modest equity increase (+8.3%) provides better long-term growth without extreme risk shift",
      "Lazard Infrastructure up from 2.5% to 4.18% \u2014 better real asset exposure with inflation-linked cash flows",
      "Hedge fund of funds (3.13%) adds uncorrelated return stream not present in original Expanded",
      "Standalone PIMCO GIS (6.18%) provides flexible global bond exposure as a dedicated sleeve",
      "Vista Equity Partners adds software-sector vintage diversification alongside KKR K-PRIME"
    ];
    var strengthsContainer = document.getElementById("ca-strengths");
    strengthsContainer.innerHTML = strengths.map(function (s) {
      return '<div class="ca-strength-card"><p>' + s + '</p></div>';
    }).join("");
  }

  /* ------------------------------------------
     INIT
  ------------------------------------------ */
  function init() {
    applyChartDefaults();
    initNav();
    initTheme();
    renderOverview();
    renderStructure();
    renderAssetMix();
    renderGeography();
    renderThemes();
    renderLearn();
    renderBacktest();
    renderProjection();
    renderCashFlow();
    renderCriticalAnalysis();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
