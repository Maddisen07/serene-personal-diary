// ============================================================
// SERENE — Lavender redesign
// Drop-in replacement: delete your existing `const GLOBAL_STYLES = `...`;`
// block and paste this one in its place. No JSX changes needed.
// ============================================================
const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

:root{
  /* lavender scale */
  --accent-deep:#7C5CBF; --accent-mid:#C9B8EC; --accent-light:#EFE9FB;
  --lav-50:#FAF7FF; --lav-100:#F3EEFC; --lav-200:#E6DCF8;
  --ink:#2B2540;
  --blush:#F6D5E3; --blush-deep:#D9769E;
  --sage:#CFE5DA; --sage-deep:#5E9C80;
  --sky:#D5E4F7; --sky-deep:#7A9FD6;
  --cream:#FCFAFF;
  --card-bg:rgba(255,255,255,.82); --card-border:rgba(124,92,191,.14);
  --shadow:0 2px 6px rgba(92,64,150,.05),0 10px 30px rgba(92,64,150,.08);
  --shadow-md:0 12px 40px rgba(92,64,150,.14);
  --shadow-lg:0 18px 50px rgba(92,64,150,.20);
  --text-1:#2B2540; --text-2:#625C7B; --text-3:#948DAE;
  --r-sm:12px; --r-md:16px; --r-lg:24px; --r-xl:32px;
  --t:all .25s cubic-bezier(.4,0,.2,1);
  --bg:linear-gradient(160deg,#F4EEFF 0%,#FBF4FA 45%,#EEF1FC 100%);
  --hero:linear-gradient(135deg,#8E6FD0 0%,#7C5CBF 45%,#6F7BD0 100%);
  --font-body:'DM Sans',sans-serif; --font-serif:'Lora',serif; --font-display:'Fraunces',serif;
}
[data-theme="dark"]{
  --accent-deep:#B49BEA; --accent-mid:#4A3C75; --accent-light:#2A2347;
  --card-bg:rgba(34,28,56,.82); --card-border:rgba(180,155,234,.16);
  --cream:#17132A; --text-1:#EEEAFB; --text-2:#B5AED0; --text-3:#7F78A0;
  --shadow:0 2px 6px rgba(0,0,0,.25),0 10px 30px rgba(0,0,0,.3); --shadow-md:0 12px 40px rgba(0,0,0,.4); --shadow-lg:0 18px 50px rgba(0,0,0,.5);
  --bg:linear-gradient(160deg,#120E22 0%,#1A1230 50%,#0F1226 100%);
  --hero:linear-gradient(135deg,#4A3A82 0%,#3B2F72 50%,#33407A 100%);
  --blush:#4A2A40; --sage:#244236; --sky:#26365A;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body,#root{min-height:100vh;width:100%}
body{font-family:var(--font-body);background:var(--bg);background-attachment:fixed;color:var(--text-1);overflow-x:hidden;-webkit-font-smoothing:antialiased;transition:background .5s,color .3s}
button{cursor:pointer;font-family:inherit;border:none;background:none;color:inherit}
input,textarea,select{font-family:inherit;color:var(--text-1)}
textarea{resize:none}
a{text-decoration:none;color:inherit}
:focus-visible{outline:2px solid var(--accent-deep);outline-offset:2px}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-thumb{background:var(--accent-mid);border-radius:10px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Background: two soft lavender glows only */
.blob-bg{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:0}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.45}
.b1{width:560px;height:560px;background:var(--accent-mid);top:-200px;left:-160px}
.b2{width:460px;height:460px;background:var(--blush);bottom:-160px;right:-120px;opacity:.35}
.b3,.b4{display:none}
.glass{background:var(--card-bg);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--card-border);box-shadow:var(--shadow)}
.page-wrap{position:relative;z-index:1;min-height:100vh}

/* Navigation: floating pill (desktop) */
.nav{position:fixed;top:16px;left:50%;transform:translateX(-50%);width:calc(100% - 32px);max-width:1100px;display:flex;align-items:center;justify-content:space-between;padding:9px 12px 9px 22px;z-index:1000;border-radius:100px}
.nav-brand{font-family:var(--font-display);font-size:23px;font-weight:600;color:var(--accent-deep);cursor:pointer;display:flex;align-items:center;gap:8px}
.nav-brand::before{content:'';width:10px;height:10px;border-radius:50%;background:var(--accent-deep);box-shadow:0 0 0 4px var(--accent-light)}
.nav-links{display:flex;gap:4px;background:var(--lav-100);padding:4px;border-radius:100px}
[data-theme="dark"] .nav-links{background:var(--accent-light)}
.nav-link{padding:8px 16px;border-radius:100px;font-size:13.5px;font-weight:500;color:var(--text-2);transition:var(--t)}
.nav-link:hover{color:var(--accent-deep)}
.nav-link.active{background:#fff;color:var(--accent-deep);box-shadow:0 2px 8px rgba(92,64,150,.12)}
[data-theme="dark"] .nav-link.active{background:var(--accent-mid);color:#fff}
.btn-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent-light);color:var(--accent-deep);font-size:16px;transition:var(--t);flex-shrink:0}
.btn-icon:hover{background:var(--accent-mid)}

/* Auth */
.auth-wrap{display:grid;grid-template-columns:1.05fr 1fr;max-width:920px;width:100%;min-height:580px;border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--shadow-md)}
.auth-panel{padding:56px 48px;background:var(--hero);display:flex;flex-direction:column;justify-content:center;color:#fff;position:relative;overflow:hidden}
.auth-panel::after{content:'';position:absolute;width:320px;height:320px;border-radius:50%;background:rgba(255,255,255,.1);bottom:-120px;right:-100px}
.auth-panel h1{font-family:var(--font-display);font-size:38px;font-weight:600;line-height:1.2;margin-bottom:18px}
.auth-panel p{font-size:15px;line-height:1.75;opacity:.88;margin-bottom:28px}
.auth-panel .quote{font-family:var(--font-serif);font-style:italic;font-size:14px;opacity:.8;border-left:2px solid rgba(255,255,255,.4);padding-left:14px;position:relative;z-index:1}
.auth-form{padding:48px;background:var(--cream);display:flex;flex-direction:column;justify-content:center}
.auth-form h2{font-family:var(--font-display);font-size:28px;font-weight:600;margin-bottom:6px}
.auth-form>p{font-size:13.5px;color:var(--text-2);margin-bottom:26px}
.form-group{margin-bottom:14px}
.form-label{display:block;font-size:13px;font-weight:500;color:var(--text-2);margin-bottom:6px}
.form-input{width:100%;padding:12px 14px;border-radius:var(--r-sm);border:1.5px solid var(--lav-200);background:#fff;font-size:14px;outline:none;transition:var(--t)}
[data-theme="dark"] .form-input{background:var(--accent-light);border-color:var(--card-border)}
.form-input:focus{border-color:var(--accent-deep);box-shadow:0 0 0 4px rgba(124,92,191,.14)}
.form-input-wrap{position:relative}
.eye-btn{position:absolute;right:11px;top:50%;transform:translateY(-50%);color:var(--text-3);font-size:15px;padding:2px}
.err{font-size:12px;color:#D64545;margin-top:3px;min-height:16px}
.form-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;font-size:13px;color:var(--text-2)}
.check-label{display:flex;align-items:center;gap:7px;cursor:pointer}
.check-label input{accent-color:var(--accent-deep)}
.link{color:var(--accent-deep);cursor:pointer;font-size:13px;font-weight:500}
.link:hover{text-decoration:underline}
.btn-primary{width:100%;padding:13px;border-radius:var(--r-md);background:var(--accent-deep);color:#fff;font-size:14.5px;font-weight:600;transition:var(--t);box-shadow:0 6px 18px rgba(124,92,191,.3)}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(124,92,191,.4)}
.auth-switch{text-align:center;margin-top:18px;font-size:13px;color:var(--text-2)}

/* Page shells */
.dash-wrap,.journal-wrap,.cal-wrap,.analytics-wrap,.settings-wrap{padding:104px 28px 96px;margin:0 auto}
.dash-wrap{max-width:1100px}.journal-wrap{max-width:1000px}.cal-wrap{max-width:900px}.analytics-wrap{max-width:1000px}.settings-wrap{max-width:720px}
.page-title{font-family:var(--font-display);font-size:34px;font-weight:600;margin-bottom:6px;letter-spacing:-.3px}
.page-sub{font-size:14.5px;color:var(--text-2);margin-bottom:28px}

/* Dashboard hero: one lavender banner, greeting left, clock right */
.hero{display:grid;grid-template-columns:1fr auto;column-gap:24px;align-items:center;padding:34px 38px;margin-bottom:22px;border-radius:var(--r-xl);background:var(--hero);color:#fff;box-shadow:0 18px 44px rgba(124,92,191,.28);position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,.09);right:-70px;top:-120px;pointer-events:none}
.greeting{grid-column:1;font-family:var(--font-display);font-size:38px;font-weight:600;line-height:1.15}
.greeting span{color:#fff}
.hero-sub{grid-column:1;font-size:15.5px;opacity:.9;margin-top:8px}
.hero-date{grid-column:1;font-size:13px;opacity:.7;margin-top:3px}
.clock{grid-column:2;grid-row:1/4;font-family:var(--font-serif);font-size:46px;letter-spacing:-1px;position:relative;z-index:1}

/* Stats: quiet tiles */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px}
.stat-card{padding:18px 20px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-md);box-shadow:var(--shadow);display:grid;grid-template-columns:auto 1fr;column-gap:14px;align-items:center}
.stat-icon{grid-row:1/3;width:44px;height:44px;border-radius:14px;background:var(--accent-light);display:flex;align-items:center;justify-content:center;font-size:20px}
.stat-val{font-size:26px;font-weight:600;font-family:var(--font-display);line-height:1.1}
.stat-lbl{font-size:12.5px;color:var(--text-2)}

/* Layout grid */
.dash-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:22px;align-items:start}
.dash-main,.dash-side{display:flex;flex-direction:column;gap:20px}
.dash-side{position:sticky;top:96px}
.section-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);box-shadow:var(--shadow);padding:26px}
.sec-title{font-size:15px;font-weight:600;color:var(--text-1);margin-bottom:16px;font-family:var(--font-display)}
.sec-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.sec-header .sec-title{margin-bottom:0}

/* Mood */
.mood-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:16px}
.mood-btn{padding:12px 4px;border-radius:var(--r-md);background:var(--lav-100);border:2px solid transparent;transition:var(--t);display:flex;flex-direction:column;align-items:center;gap:4px}
[data-theme="dark"] .mood-btn{background:var(--accent-light)}
.mood-btn .em{font-size:26px}.mood-btn .lb{font-size:11px;color:var(--text-2);font-weight:500}
.mood-btn:hover{border-color:var(--accent-mid)}
.mood-btn.sel{border-color:var(--accent-deep);background:var(--accent-light);box-shadow:0 0 0 4px rgba(124,92,191,.1)}
.slider-row{display:flex;align-items:center;gap:12px}
.intensity-slider{flex:1;accent-color:var(--accent-deep)}
.intensity-lbl{font-size:12px;color:var(--text-3)}

/* Quote */
.quote-card{position:relative;overflow:hidden;background:var(--lav-100);border-color:var(--lav-200)}
[data-theme="dark"] .quote-card{background:var(--accent-light)}
.quote-mark{font-family:var(--font-display);font-size:90px;color:var(--accent-mid);line-height:.7;position:absolute;top:18px;left:18px;opacity:.6;user-select:none}
.quote-text{font-family:var(--font-serif);font-style:italic;font-size:16px;line-height:1.8;position:relative;z-index:1;padding-top:22px}
.quote-author{font-size:13px;color:var(--text-3);margin-top:10px}
.quote-nav{display:flex;gap:6px;margin-top:14px}
.q-dot{width:6px;height:6px;border-radius:50%;background:var(--accent-mid);cursor:pointer;transition:var(--t)}
.q-dot.active{background:var(--accent-deep);width:18px;border-radius:3px}

/* Streak + chart */
.streak-card{text-align:center}
.streak-num{font-family:var(--font-display);font-size:54px;color:var(--accent-deep);font-weight:600;line-height:1}
.streak-lbl{font-size:13px;color:var(--text-2);margin-top:4px}
.streak-days{display:flex;gap:6px;justify-content:center;margin-top:16px}
.sday{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600}
.sday.filled{background:var(--accent-deep);color:#fff}
.sday.partial{background:transparent;color:var(--accent-deep);border:1.5px dashed var(--accent-mid)}
.sday.empty{background:var(--lav-100);color:var(--text-3)}
[data-theme="dark"] .sday.empty{background:var(--accent-light)}
.bars{display:flex;align-items:flex-end;gap:7px;height:100px}
.bar-wrap{flex:1;display:flex;flex-direction:column;align-items:center;gap:5px}
.bar{width:100%;border-radius:8px;background:linear-gradient(180deg,var(--accent-deep),var(--accent-mid));min-height:6px;animation:barGrow .6s ease}
@keyframes barGrow{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1);transform-origin:bottom}}
.bar-lbl{font-size:10.5px;color:var(--text-3)}

/* Prompts */
.prompts-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.prompt-card{padding:16px;border-radius:var(--r-md);cursor:pointer;border:1.5px dashed var(--accent-mid);background:transparent;font-size:13.5px;color:var(--text-2);line-height:1.55;transition:var(--t)}
.prompt-card:hover{border-style:solid;border-color:var(--accent-deep);color:var(--accent-deep);background:var(--accent-light)}
.prompt-em{font-size:22px;margin-bottom:8px}

/* Entries */
.entry-list{display:flex;flex-direction:column;gap:12px}
.journal-wrap .entry-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.entry-card{padding:18px 20px 18px 22px;background:#fff;border:1px solid var(--card-border);border-radius:var(--r-md);cursor:pointer;transition:var(--t);position:relative;overflow:hidden;box-shadow:0 1px 3px rgba(92,64,150,.04)}
[data-theme="dark"] .entry-card{background:var(--accent-light)}
.entry-card::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:4px;border-radius:0 4px 4px 0;background:var(--accent-mid)}
.entry-card:hover{box-shadow:var(--shadow-md);border-color:var(--accent-mid)}
.entry-card:hover::before{background:var(--accent-deep)}
.entry-title{font-family:var(--font-display);font-size:16.5px;font-weight:600;margin-bottom:4px}
.entry-meta{display:flex;gap:10px;font-size:12px;color:var(--text-3);align-items:center;flex-wrap:wrap}
.entry-snippet{font-family:var(--font-serif);font-size:13.5px;color:var(--text-2);margin-top:8px;line-height:1.65;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.tag{display:inline-block;padding:3px 10px;background:var(--accent-light);color:var(--accent-deep);border-radius:100px;font-size:11.5px;font-weight:500}
.entry-tags{display:flex;gap:5px;margin-top:10px;flex-wrap:wrap}
.empty{text-align:center;padding:44px 20px}
.empty-icon{font-size:44px;margin-bottom:12px;opacity:.7}
.empty h3{font-family:var(--font-display);font-size:21px;margin-bottom:7px}
.empty p{font-size:14px;color:var(--text-2);line-height:1.6;max-width:300px;margin:0 auto}

/* FAB */
.fab{position:fixed;bottom:32px;right:32px;width:58px;height:58px;border-radius:50%;background:var(--accent-deep);color:#fff;font-size:28px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 28px rgba(124,92,191,.45);transition:var(--t);z-index:500}
.fab:hover{transform:scale(1.08) rotate(90deg)}

/* Journal toolbar + timeline */
.toolbar{display:flex;align-items:center;gap:10px;margin-bottom:24px;flex-wrap:wrap;padding:12px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);box-shadow:var(--shadow)}
.search-wrap{position:relative;flex:1;min-width:200px}
.search-inp{width:100%;padding:11px 14px 11px 40px;background:var(--lav-100);border:1.5px solid transparent;border-radius:100px;font-size:14px;outline:none;transition:var(--t)}
[data-theme="dark"] .search-inp{background:var(--accent-light)}
.search-inp:focus{border-color:var(--accent-deep);background:#fff}
[data-theme="dark"] .search-inp:focus{background:var(--accent-light)}
.search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:14px;pointer-events:none}
.filter-btn{padding:9px 13px;background:transparent;border:1.5px solid var(--card-border);border-radius:100px;font-size:13px;font-weight:500;color:var(--text-2);transition:var(--t)}
.filter-btn:hover,.filter-btn.active{border-color:var(--accent-deep);color:var(--accent-deep);background:var(--accent-light)}
.btn-new{padding:11px 20px;border-radius:100px;background:var(--accent-deep);color:#fff;font-size:13.5px;font-weight:600;transition:var(--t);box-shadow:0 4px 14px rgba(124,92,191,.3);white-space:nowrap}
.btn-new:hover{transform:translateY(-1px)}
.timeline-sec{margin-bottom:30px}
.tl-label{font-family:var(--font-display);font-size:16px;font-weight:600;color:var(--text-1);margin-bottom:14px;display:flex;align-items:center;gap:12px}
.tl-label::after{content:'';flex:1;height:1px;background:var(--card-border)}

/* Editor: paper sheet */
.overlay{position:fixed;inset:0;background:rgba(43,37,64,.35);backdrop-filter:blur(8px);z-index:900;display:flex;align-items:flex-end;justify-content:center;opacity:0;pointer-events:none;transition:opacity .3s}
.overlay.open{opacity:1;pointer-events:all}
.editor-sheet{background:var(--cream);width:100%;max-width:820px;border-radius:var(--r-xl) var(--r-xl) 0 0;box-shadow:0 -20px 60px rgba(43,37,64,.25);transform:translateY(100%);transition:transform .4s cubic-bezier(.4,0,.2,1);max-height:94vh;overflow-y:auto;display:flex;flex-direction:column}
.overlay.open .editor-sheet{transform:translateY(0)}
.editor-hd{padding:16px 28px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:var(--cream);z-index:10;border-bottom:1px solid var(--card-border);gap:12px;flex-wrap:wrap}
.editor-meta{display:flex;gap:14px;align-items:center;flex-wrap:wrap}
.ed-date{font-size:13px;color:var(--text-2);font-weight:500}
.mood-picks{display:flex;gap:2px;background:var(--lav-100);padding:3px 6px;border-radius:100px}
[data-theme="dark"] .mood-picks{background:var(--accent-light)}
.mpick{font-size:19px;opacity:.4;transition:var(--t);padding:2px 4px}
.mpick:hover,.mpick.sel{opacity:1;transform:scale(1.2)}
.autosave-st{font-size:12px;color:var(--sage-deep)}
.ed-actions{display:flex;gap:6px}
.editor-body{padding:28px 36px 32px;flex:1}
.ed-title{width:100%;border:none;outline:none;background:transparent;font-family:var(--font-display);font-size:32px;font-weight:600;line-height:1.25;margin-bottom:14px;overflow:hidden;min-height:46px}
.ed-title::placeholder,.focus-title::placeholder{color:var(--text-3)}
.ed-content{width:100%;border:none;outline:none;background:transparent;font-family:var(--font-serif);font-size:17px;line-height:2;min-height:300px;max-width:68ch}
.ed-content::placeholder,.focus-area::placeholder{color:var(--text-3);font-style:italic}
.tags-row{display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:16px;padding-top:16px;border-top:1px solid var(--card-border)}
.tag-input{border:none;outline:none;background:transparent;font-size:13px;color:var(--text-2);min-width:80px}
.editor-ft{display:flex;justify-content:space-between;align-items:center;padding:14px 28px;border-top:1px solid var(--card-border);background:var(--cream);position:sticky;bottom:0}
.wc-label{font-size:12px;color:var(--text-3)}
.save-btn{padding:10px 24px;border-radius:100px;background:var(--accent-deep);color:#fff;font-size:13.5px;font-weight:600;transition:var(--t);box-shadow:0 4px 14px rgba(124,92,191,.3)}
.save-btn:hover{transform:translateY(-1px)}

/* Focus mode */
.focus-ov{position:fixed;inset:0;background:var(--bg);background-color:var(--cream);z-index:1100;display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .5s}
.focus-ov.open{opacity:1;pointer-events:all}
.focus-hd{padding:18px 36px;display:flex;justify-content:space-between;align-items:center}
.focus-body{flex:1;padding:0 40px 32px;display:flex;flex-direction:column;max-width:720px;margin:0 auto;width:100%}
.focus-title{width:100%;border:none;outline:none;background:transparent;font-family:var(--font-display);font-size:38px;font-weight:600;text-align:center;margin-bottom:10px;overflow:hidden}
.focus-area{flex:1;border:none;outline:none;background:transparent;font-family:var(--font-serif);font-size:19px;line-height:2.1;width:100%}
.focus-ft{padding:14px 40px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--card-border)}

/* Calendar */
.cal-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px}
.cal-month{font-family:var(--font-display);font-size:26px;font-weight:600}
.cal-nav{display:flex;gap:7px}
.cal-btn{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--lav-100);font-size:18px;color:var(--accent-deep);transition:var(--t)}
[data-theme="dark"] .cal-btn{background:var(--accent-light)}
.cal-btn:hover{background:var(--accent-mid)}
.cal-grid-wrap{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}
.cal-dname{text-align:center;font-size:12px;font-weight:600;color:var(--text-3);padding:6px 0}
.cal-cell{aspect-ratio:1;max-height:84px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;font-size:14px;transition:var(--t);position:relative;color:var(--text-2)}
.cal-cell:hover:not(:disabled){background:var(--accent-light);color:var(--accent-deep)}
.cal-cell.today{box-shadow:inset 0 0 0 1.5px var(--accent-deep);color:var(--accent-deep);font-weight:600}
.cal-cell.has-entry{color:var(--text-1);font-weight:600;background:var(--lav-100)}
[data-theme="dark"] .cal-cell.has-entry{background:var(--accent-light)}
.cal-cell.has-entry::after{content:'';position:absolute;bottom:7px;left:50%;transform:translateX(-50%);width:5px;height:5px;border-radius:50%;background:var(--accent-deep)}
.cal-cell.other-m{opacity:.25}
.cal-cell.sel{background:var(--accent-deep);color:#fff;box-shadow:0 6px 16px rgba(124,92,191,.35)}
.cal-cell.sel.has-entry::after{background:#fff}
.cal-preview{margin-top:20px;padding:24px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);min-height:100px;box-shadow:var(--shadow)}
.cal-empty{font-family:var(--font-serif);font-style:italic;color:var(--text-3);font-size:14.5px}

/* Insights */
.an-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.an-card{padding:24px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);box-shadow:var(--shadow)}
.an-card h3{font-family:var(--font-display);font-size:16px;font-weight:600;margin-bottom:18px}
.mood-hist{display:flex;gap:8px;align-items:flex-end;height:110px}
.mh-bar-wrap{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1}
.mh-bar{width:100%;max-width:34px;border-radius:8px;min-height:4px;transition:height .5s}
.mh-em{font-size:18px;margin-top:4px}.mh-cnt{font-size:11.5px;color:var(--text-3)}
.insight-list{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.insight{display:flex;gap:12px;align-items:flex-start;padding:15px;background:var(--lav-100);border-radius:var(--r-md)}
[data-theme="dark"] .insight{background:var(--accent-light)}
.insight-ic{font-size:20px}
.insight-txt{font-size:13.5px;color:var(--text-2);line-height:1.6}
.insight-txt strong{color:var(--text-1)}
.heatmap{display:grid;grid-template-columns:repeat(30,1fr);gap:4px}
.hm-cell{aspect-ratio:1;border-radius:4px}
.hm-0{background:var(--lav-100)}.hm-1{background:var(--accent-mid)}.hm-2{background:var(--accent-deep);opacity:.65}.hm-3{background:var(--accent-deep)}
[data-theme="dark"] .hm-0{background:var(--accent-light)}

/* Settings */
.settings-sec{margin-bottom:22px;padding:26px;background:var(--card-bg);border:1px solid var(--card-border);border-radius:var(--r-lg);box-shadow:var(--shadow)}
.settings-sec h3{font-family:var(--font-display);font-size:18px;font-weight:600;margin-bottom:16px}
.setting-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid var(--card-border)}
.setting-row:last-child{border-bottom:none}
.setting-info h4{font-size:14.5px;font-weight:500}
.setting-info p{font-size:12.5px;color:var(--text-3);margin-top:2px}
.toggle{width:48px;height:27px;border-radius:14px;background:var(--lav-200);cursor:pointer;position:relative;transition:background .3s;flex-shrink:0}
.toggle.on{background:var(--accent-deep)}
.toggle::after{content:'';position:absolute;top:3px;left:3px;width:21px;height:21px;border-radius:50%;background:#fff;transition:transform .3s;box-shadow:0 1px 4px rgba(0,0,0,.2)}
.toggle.on::after{transform:translateX(21px)}
.avatar{width:58px;height:58px;border-radius:50%;background:var(--hero);display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;font-weight:600;flex-shrink:0}
.profile-row{display:flex;gap:14px;align-items:center;margin-bottom:18px}
.swatch{width:34px;height:34px;border-radius:50%;cursor:pointer;border:3px solid var(--cream);box-shadow:0 0 0 1.5px var(--card-border);transition:var(--t)}
.swatch.active{box-shadow:0 0 0 2.5px var(--accent-deep);transform:scale(1.1)}
.swatch-row{display:flex;gap:10px}
.btn-danger{width:100%;padding:11px;border-radius:var(--r-md);border:1.5px solid #D64545;color:#D64545;font-size:14px;font-weight:600;transition:var(--t);margin-top:10px}
.btn-danger:hover{background:#D64545;color:#fff}

/* Toast */
.toast-wrap{position:fixed;bottom:100px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none}
.toast{padding:12px 18px;border-radius:100px;background:var(--ink);color:#fff;font-size:13.5px;font-weight:500;box-shadow:var(--shadow-md);animation:toastIn .3s ease;display:flex;align-items:center;gap:8px}
.toast.success{background:var(--accent-deep)}.toast.error{background:#C84A4A}
@keyframes toastIn{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:none}}

/* Tablet */
@media(max-width:900px){
  .dash-grid{grid-template-columns:1fr}
  .dash-side{position:static}
  .an-grid,.insight-list{grid-template-columns:1fr}
  .heatmap{grid-template-columns:repeat(18,1fr)}
}

/* Mobile: nav links become a bottom tab bar (they were hidden before) */
@media(max-width:780px){
  .auth-panel{display:none}.auth-wrap{grid-template-columns:1fr}
  .nav.glass{transform:none;left:16px;width:calc(100% - 32px);backdrop-filter:none;-webkit-backdrop-filter:none;background:var(--card-bg)}
  .nav-links{position:fixed;bottom:12px;left:12px;right:12px;justify-content:space-between;padding:6px;background:var(--card-bg);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--card-border);box-shadow:var(--shadow-md);z-index:1000}
  .nav-link{flex:1;padding:10px 4px;font-size:12px;text-align:center}
  .dash-wrap,.journal-wrap,.cal-wrap,.analytics-wrap,.settings-wrap{padding:90px 16px 110px}
  .hero{grid-template-columns:1fr;padding:26px 24px}
  .clock{grid-column:1;grid-row:auto;font-size:34px;margin-top:10px}
  .greeting{font-size:28px}
  .stats-grid{grid-template-columns:repeat(2,1fr)}
  .stat-card{padding:14px;column-gap:10px}.stat-icon{width:38px;height:38px}.stat-val{font-size:22px}
  .mood-grid{grid-template-columns:repeat(3,1fr)}
  .prompts-grid,.journal-wrap .entry-list{grid-template-columns:1fr}
  .fab{bottom:90px;right:20px}
  .toast-wrap{bottom:150px;right:16px}
  .editor-body{padding:22px 20px}.editor-hd,.editor-ft{padding:14px 20px}
  .ed-title{font-size:26px}
  .focus-title{font-size:26px}.focus-area{font-size:16px}
  .focus-body{padding:0 20px 24px}.focus-hd,.focus-ft{padding:14px 20px}
  .cal-cell{max-height:none}
  .heatmap{grid-template-columns:repeat(13,1fr)}
}
`;