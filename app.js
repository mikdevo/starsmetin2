(() => {
  'use strict';

  const catalog = window.STARS_COMMANDS;
  if (!catalog) return;

  const translations = {
    en: {
      pageTitle: 'STARS System Bot — Command Guide',
      pageDescription: 'Complete bilingual command guide for the STARS Metin2 Discord system bot.',
      nav: { commands: 'Commands', systems: 'Systems', start: 'Quick start', faq: 'FAQ' },
      hero: {
        eyebrow: 'Official command documentation', titleA: 'One bot.', titleB: 'Every community tool.',
        description: 'Discover every command, permission, alias, and real example for the STARS Metin2 system bot.',
        explore: 'Explore commands', start: 'Setup guide', online: 'Online', now: 'Now',
      },
      metrics: { commands: 'Commands', languages: 'Languages', automation: 'Automation' },
      preview: { label: 'SYSTEM OVERVIEW', title: 'Your complete community toolkit', text: 'Moderation, tickets, leveling, giveaways, automation and much more.', mod: 'Moderation', tickets: 'Tickets', auto: 'Automation', levels: 'Leveling' },
      strip: { moderation: 'Advanced moderation', tickets: 'Complete ticket system', leveling: 'Leveling & rewards', automations: 'Persistent automations', bilingual: 'English & Arabic' },
      commands: {
        kicker: 'COMMAND DIRECTORY', title: 'Find the right command instantly.',
        description: 'Search by name, purpose, alias, or permission. Open any card for full details and copy-ready examples.',
        search: 'Search commands, aliases, features…', allModes: 'All modes', slashMode: 'Slash', prefixMode: 'Prefix', reset: 'Reset filters',
        emptyTitle: 'No commands found', emptyText: 'Try another search or reset your filters.', resetButton: 'Reset filters',
        result: 'Showing {count} of {total} commands', hint: 'Select a card for details', open: 'Details', slash: 'Slash', prefix: 'Prefix', slashOnly: 'Slash only', both: 'Slash + prefix',
      },
      systems: {
        kicker: 'BUILT FOR COMMUNITIES', title: 'More than a command list.', description: 'Persistent systems keep working through restarts, with polished Discord UI and safe owner controls.',
        securityTitle: 'Security & moderation', securityText: 'Link AutoMod, word filters, timeouts, bans, locks, audit logs, and safe permission checks.',
        ticketTitle: 'Ticket workspace', ticketText: 'Panels, sections, invoices, transcripts, ratings, staff analytics, snippets, and inactivity handling.',
        autoTitle: 'Smart automation', autoText: 'Scheduled messages, auto roles, replies, lines, mentions, welcomes, temp voice rooms, and applications.',
        communityTitle: 'Community growth', communityText: 'Level rewards, rankings, giveaways, quote cards, booster art, and live STARS website listings.',
      },
      quick: {
        kicker: 'GET STARTED', title: 'From zero to ready in minutes.', description: 'The bot registers slash commands automatically and stores every configurable system safely.',
        permission: 'Enable Message Content and Server Members intents, then place the bot role above roles it manages.',
        step1Title: 'Configure', step1Text: 'Set owner IDs, channels, reactions, and environment tokens.',
        step2Title: 'Install', step2Text: 'Install the locked project dependencies.', step3Title: 'Launch', step3Text: 'Start the bot and slash commands register automatically.',
      },
      faq: {
        kicker: 'GOOD TO KNOW', title: 'Frequently asked questions.',
        q1: 'Can every command use both slash and prefix?', a1: 'Most commands support both. Security-sensitive or interface-heavy commands marked “Slash only” must use Discord slash commands.',
        q2: 'Do settings survive a restart?', a2: 'Yes. Configurable systems use persistent JSON or SQLite storage, and publisher messages are edited instead of duplicated.',
        q3: 'How do I change the bot language?', a3: 'A configured owner can run /lang language:ar or /lang language:en. The selected locale applies across the bot.',
        q4: 'Why is a command missing in Discord?', a4: 'Restart the bot to register definitions. Guild commands update immediately; global commands can take longer to appear.',
      },
      footer: { text: 'Built for the STARS Metin2 community.', top: 'Back to top' },
      dialog: { permission: 'Required access', slashUsage: 'Slash usage', prefixUsage: 'Prefix usage', example: 'Copy-ready example', aliases: 'Prefix aliases', note: 'Good to know', copy: 'Copy', copied: 'Copied!', noAliases: 'No aliases', close: 'Close command details' },
    },
    ar: {
      pageTitle: 'بوت STARS — دليل الأوامر',
      pageDescription: 'الدليل الكامل باللغتين العربية والإنجليزية لأوامر بوت نظام STARS Metin2.',
      nav: { commands: 'الأوامر', systems: 'الأنظمة', start: 'البدء السريع', faq: 'الأسئلة' },
      hero: {
        eyebrow: 'التوثيق الرسمي للأوامر', titleA: 'بوت واحد.', titleB: 'كل أدوات مجتمعك.',
        description: 'اكتشف كل أمر وصلاحية واسم بديل ومثال حقيقي لبوت نظام STARS Metin2.',
        explore: 'استعرض الأوامر', start: 'دليل الإعداد', online: 'متصل', now: 'الآن',
      },
      metrics: { commands: 'أمراً', languages: 'لغتان', automation: 'أتمتة دائمة' },
      preview: { label: 'نظرة عامة على النظام', title: 'أدوات مجتمعك كاملة', text: 'إشراف وتذاكر ومستويات ومسابقات وأتمتة وأكثر بكثير.', mod: 'الإشراف', tickets: 'التذاكر', auto: 'الأتمتة', levels: 'المستويات' },
      strip: { moderation: 'إشراف متقدم', tickets: 'نظام تذاكر متكامل', leveling: 'مستويات ومكافآت', automations: 'أتمتة دائمة', bilingual: 'العربية والإنجليزية' },
      commands: {
        kicker: 'دليل الأوامر', title: 'اعثر على الأمر المناسب فوراً.',
        description: 'ابحث بالاسم أو الوظيفة أو الاسم البديل أو الصلاحية. افتح أي بطاقة للتفاصيل والأمثلة الجاهزة للنسخ.',
        search: 'ابحث في الأوامر والأسماء والمميزات…', allModes: 'كل الأنماط', slashMode: 'سلاش', prefixMode: 'بادئة', reset: 'إعادة الفلاتر',
        emptyTitle: 'لم يتم العثور على أوامر', emptyText: 'جرب بحثاً آخر أو أعد ضبط الفلاتر.', resetButton: 'إعادة الفلاتر',
        result: 'عرض {count} من أصل {total} أمراً', hint: 'اختر بطاقة لعرض التفاصيل', open: 'التفاصيل', slash: 'سلاش', prefix: 'بادئة', slashOnly: 'سلاش فقط', both: 'سلاش + بادئة',
      },
      systems: {
        kicker: 'مصمم للمجتمعات', title: 'أكثر من مجرد قائمة أوامر.', description: 'أنظمة دائمة تواصل العمل بعد إعادة التشغيل بواجهات ديسكورد احترافية وتحكم آمن للمالكين.',
        securityTitle: 'الحماية والإشراف', securityText: 'حماية الروابط وفلترة الكلمات والتايم أوت والحظر والقفل والسجلات وفحوصات الصلاحيات.',
        ticketTitle: 'مساحة عمل التذاكر', ticketText: 'لوحات وأقسام وفواتير ونصوص محفوظة وتقييمات وإحصائيات للطاقم وردود سريعة وإدارة الخمول.',
        autoTitle: 'أتمتة ذكية', autoText: 'رسائل مجدولة ورتب وردود وخطوط ومنشنات وترحيب وغرف صوت مؤقتة وتقديمات.',
        communityTitle: 'نمو المجتمع', communityText: 'مكافآت مستويات وترتيب ومسابقات وبطاقات اقتباس وصور بوستر وقوائم مباشرة من موقع STARS.',
      },
      quick: {
        kicker: 'ابدأ الآن', title: 'من الصفر إلى الجاهزية خلال دقائق.', description: 'يسجل البوت أوامر السلاش تلقائياً ويحفظ كل نظام قابل للإعداد بأمان.',
        permission: 'فعّل صلاحيتي محتوى الرسائل وأعضاء السيرفر، ثم ضع رتبة البوت فوق الرتب التي سيديرها.',
        step1Title: 'الإعداد', step1Text: 'حدد معرفات المالكين والقنوات والتفاعلات والتوكنات البيئية.',
        step2Title: 'التثبيت', step2Text: 'ثبّت اعتماديات المشروع المقفلة.', step3Title: 'التشغيل', step3Text: 'شغّل البوت وسيتم تسجيل أوامر السلاش تلقائياً.',
      },
      faq: {
        kicker: 'معلومات مهمة', title: 'الأسئلة الشائعة.',
        q1: 'هل يعمل كل أمر بالسلاش والبادئة؟', a1: 'معظم الأوامر تدعم الاثنين. الأوامر الحساسة أو ذات الواجهات التفاعلية والمعلّمة «سلاش فقط» يجب استخدامها كأوامر سلاش.',
        q2: 'هل تبقى الإعدادات بعد إعادة التشغيل؟', a2: 'نعم. تستخدم الأنظمة القابلة للإعداد تخزين JSON أو SQLite دائماً، ويتم تعديل رسائل النشر بدلاً من تكرارها.',
        q3: 'كيف أغير لغة البوت؟', a3: 'يمكن لمالك مضبوط استخدام /lang language:ar أو /lang language:en، وتطبق اللغة المختارة على أنظمة البوت.',
        q4: 'لماذا لا يظهر أمر في ديسكورد؟', a4: 'أعد تشغيل البوت لتسجيل التعريفات. أوامر السيرفر تظهر فوراً، وقد تستغرق الأوامر العامة وقتاً أطول.',
      },
      footer: { text: 'صُمم لمجتمع STARS Metin2.', top: 'العودة للأعلى' },
      dialog: { permission: 'الصلاحية المطلوبة', slashUsage: 'استخدام السلاش', prefixUsage: 'استخدام البادئة', example: 'مثال جاهز للنسخ', aliases: 'أسماء البادئة البديلة', note: 'معلومة مهمة', copy: 'نسخ', copied: 'تم النسخ!', noAliases: 'لا توجد أسماء بديلة', close: 'إغلاق تفاصيل الأمر' },
    },
  };

  const state = {
    language: ['en', 'ar'].includes(localStorage.getItem('stars-docs-language'))
      ? localStorage.getItem('stars-docs-language')
      : (navigator.language?.startsWith('ar') ? 'ar' : 'en'),
    theme: ['dark', 'light'].includes(localStorage.getItem('stars-docs-theme')) ? localStorage.getItem('stars-docs-theme') : 'dark',
    category: 'all', mode: 'all', query: '', activeCommand: null,
  };

  const elements = {
    root: document.documentElement, header: document.querySelector('.site-header'), search: document.getElementById('commandSearch'),
    grid: document.getElementById('commandGrid'), tabs: document.getElementById('categoryTabs'), results: document.getElementById('resultsCount'),
    hint: document.getElementById('activeHint'), empty: document.getElementById('emptyState'), mode: document.getElementById('slashFilter'),
    dialog: document.getElementById('commandDialog'), dialogContent: document.getElementById('dialogContent'), toast: document.getElementById('toast'),
    menuButton: document.getElementById('menuButton'), mobileMenu: document.getElementById('mobileMenu'),
  };

  const get = (path, language = state.language) => path.split('.').reduce((value, key) => value?.[key], translations[language]) ?? path;
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
  const interpolate = (value, variables) => String(value).replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`);
  const commandText = (item) => item.text[state.language] || item.text.en;
  const categoryText = (key) => catalog.categories[key]?.[state.language] || catalog.categories[key]?.en;
  const permissionText = (key) => catalog.permissions[key]?.[state.language] || catalog.permissions[key]?.en;

  function applyTranslations() {
    elements.root.lang = state.language;
    elements.root.dir = state.language === 'ar' ? 'rtl' : 'ltr';
    elements.root.dataset.theme = state.theme;
    document.title = get('pageTitle');
    document.querySelector('meta[name="description"]').content = get('pageDescription');
    document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = get(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => { node.placeholder = get(node.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => { node.setAttribute('aria-label', get(node.dataset.i18nAria)); });
    document.querySelectorAll('[data-language]').forEach((button) => button.classList.toggle('active', button.dataset.language === state.language));
    document.getElementById('dialogClose').setAttribute('aria-label', get('dialog.close'));
    document.getElementById('heroCommandCount').textContent = catalog.commands.length;
    updateModeButton();
    renderCategories();
    renderCommands();
    if (state.activeCommand && elements.dialog.open) renderDialog(state.activeCommand);
  }

  function renderCategories() {
    elements.tabs.innerHTML = Object.entries(catalog.categories).map(([key, category]) => {
      const count = key === 'all' ? catalog.commands.length : catalog.commands.filter((item) => item.category === key).length;
      return `<button class="category-tab${state.category === key ? ' active' : ''}" type="button" role="tab" aria-selected="${state.category === key}" data-category="${key}"><b>${category.icon} ${escapeHtml(categoryText(key))}</b><span>${count}</span></button>`;
    }).join('');
  }

  function normalizedSearch(item) {
    return [item.id, item.slash, item.prefix, ...(item.aliases || []), item.text.en, item.text.ar, categoryText(item.category), permissionText(item.permission)].join(' ').toLocaleLowerCase();
  }

  function filteredCommands() {
    const query = state.query.trim().toLocaleLowerCase();
    return catalog.commands.filter((item) => {
      const categoryMatches = state.category === 'all' || item.category === state.category;
      const modeMatches = state.mode === 'all' || item.mode === 'both' || item.mode === state.mode;
      return categoryMatches && modeMatches && (!query || normalizedSearch(item).includes(query));
    });
  }

  function modeLabel(mode) {
    if (mode === 'slash') return get('commands.slashOnly');
    if (mode === 'prefix') return get('commands.prefix');
    return get('commands.both');
  }

  function renderCommands() {
    const results = filteredCommands();
    elements.results.textContent = interpolate(get('commands.result'), { count: results.length, total: catalog.commands.length });
    elements.hint.textContent = get('commands.hint');
    elements.empty.hidden = results.length > 0;
    elements.grid.hidden = results.length === 0;
    elements.grid.innerHTML = results.map((item, index) => {
      const category = catalog.categories[item.category];
      const permission = catalog.permissions[item.permission];
      return `<button class="command-card" type="button" data-command="${item.id}" style="--card-color:${category.color};--permission-color:${permission.color};animation-delay:${Math.min(index, 12) * 24}ms">
        <span class="card-top"><span class="command-symbol">${category.icon}</span><span class="command-badges"><span class="mini-badge slash">${escapeHtml(modeLabel(item.mode))}</span></span></span>
        <strong class="card-command"><span>/</span>${escapeHtml(item.id)}</strong>
        <p>${escapeHtml(commandText(item))}</p>
        <span class="card-footer"><span class="permission-label"><i></i>${escapeHtml(permissionText(item.permission))}</span><span class="open-label">${escapeHtml(get('commands.open'))}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span></span>
      </button>`;
    }).join('');
  }

  function updateModeButton() {
    const labels = { all: get('commands.allModes'), slash: get('commands.slashMode'), prefix: get('commands.prefixMode') };
    elements.mode.dataset.mode = state.mode;
    elements.mode.querySelector('span').textContent = state.mode === 'all' ? '#' : state.mode === 'slash' ? '/' : '!';
    elements.mode.querySelector('b').textContent = labels[state.mode];
  }

  function setMode(mode) {
    state.mode = mode;
    updateModeButton();
    renderCommands();
  }

  function resetFilters() {
    state.category = 'all'; state.mode = 'all'; state.query = '';
    elements.search.value = '';
    updateModeButton(); renderCategories(); renderCommands();
  }

  function renderDialog(item) {
    const category = catalog.categories[item.category];
    const permission = catalog.permissions[item.permission];
    const aliases = item.aliases?.length
      ? `<div class="aliases-row">${item.aliases.map((alias) => `<code>!${escapeHtml(alias)}</code>`).join('')}</div>`
      : `<div class="aliases-row"><code>${escapeHtml(get('dialog.noAliases'))}</code></div>`;
    const note = item.note ? `<div class="dialog-note"><b>i</b><span>${escapeHtml(item.note[state.language] || item.note.en)}</span></div>` : '';
    elements.dialog.style.setProperty('--dialog-color', category.color);
    elements.dialogContent.innerHTML = `
      <span class="dialog-category">${category.icon} ${escapeHtml(categoryText(item.category))}</span>
      <h2 class="dialog-title" id="dialogTitle"><span>/</span>${escapeHtml(item.id)}</h2>
      <p class="dialog-description">${escapeHtml(commandText(item))}</p>
      <div class="dialog-meta"><span style="border-color:${permission.color}55">● ${escapeHtml(get('dialog.permission'))}: ${escapeHtml(permissionText(item.permission))}</span><span>${escapeHtml(modeLabel(item.mode))}</span></div>
      <div class="detail-block"><span class="detail-label">${escapeHtml(get('dialog.slashUsage'))}</span>${codeRow(item.slash)}</div>
      ${item.prefix ? `<div class="detail-block"><span class="detail-label">${escapeHtml(get('dialog.prefixUsage'))}</span>${codeRow(item.prefix)}</div>` : ''}
      <div class="detail-block"><span class="detail-label">${escapeHtml(get('dialog.example'))}</span>${codeRow(item.example, true)}</div>
      <div class="detail-block"><span class="detail-label">${escapeHtml(get('dialog.aliases'))}</span>${aliases}</div>${note}`;
  }

  function codeRow(value, copy = false) {
    return `<div class="code-row"><code>${escapeHtml(value)}</code>${copy ? `<button class="copy-button" type="button" data-copy="${escapeHtml(value)}">${escapeHtml(get('dialog.copy'))}</button>` : ''}</div>`;
  }

  function openDialog(id) {
    const item = catalog.commands.find((commandItem) => commandItem.id === id);
    if (!item) return;
    state.activeCommand = item;
    renderDialog(item);
    elements.dialog.showModal();
  }

  async function copyText(value, button = null) {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
      else {
        const temporary = document.createElement('textarea');
        temporary.value = value; temporary.style.position = 'fixed'; temporary.style.opacity = '0';
        document.body.appendChild(temporary); temporary.select(); document.execCommand('copy'); temporary.remove();
      }
      if (button) { const old = button.textContent; button.textContent = get('dialog.copied'); setTimeout(() => { button.textContent = old; }, 1300); }
      showToast(get('dialog.copied'));
    } catch { showToast(value); }
  }

  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer); elements.toast.textContent = message; elements.toast.classList.add('show');
    toastTimer = setTimeout(() => elements.toast.classList.remove('show'), 1800);
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible')); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
  }

  function initEvents() {
    document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => {
      state.language = button.dataset.language; localStorage.setItem('stars-docs-language', state.language); applyTranslations();
    }));
    document.getElementById('themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('stars-docs-theme', state.theme); elements.root.dataset.theme = state.theme;
    });
    elements.search.addEventListener('input', (event) => { state.query = event.target.value; renderCommands(); });
    elements.tabs.addEventListener('click', (event) => {
      const tab = event.target.closest('[data-category]'); if (!tab) return;
      state.category = tab.dataset.category; renderCategories(); renderCommands();
    });
    elements.mode.addEventListener('click', () => setMode(state.mode === 'all' ? 'slash' : state.mode === 'slash' ? 'prefix' : 'all'));
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('emptyReset').addEventListener('click', resetFilters);
    elements.grid.addEventListener('click', (event) => { const card = event.target.closest('[data-command]'); if (card) openDialog(card.dataset.command); });
    document.getElementById('dialogClose').addEventListener('click', () => elements.dialog.close());
    elements.dialog.addEventListener('click', (event) => { if (event.target === elements.dialog) elements.dialog.close(); });
    document.addEventListener('click', (event) => { const copyButton = event.target.closest('[data-copy]'); if (copyButton) copyText(copyButton.dataset.copy, copyButton); });
    document.addEventListener('keydown', (event) => {
      if (event.key === '/' && !elements.dialog.open && !/input|textarea/i.test(document.activeElement.tagName)) { event.preventDefault(); elements.search.focus(); }
    });
    elements.menuButton.addEventListener('click', () => {
      const open = elements.mobileMenu.hidden; elements.mobileMenu.hidden = !open; elements.menuButton.classList.toggle('open', open); elements.menuButton.setAttribute('aria-expanded', String(open));
    });
    elements.mobileMenu.addEventListener('click', (event) => { if (event.target.matches('a')) { elements.mobileMenu.hidden = true; elements.menuButton.classList.remove('open'); elements.menuButton.setAttribute('aria-expanded', 'false'); } });
    window.addEventListener('scroll', () => elements.header.classList.toggle('scrolled', window.scrollY > 18), { passive: true });
  }

  applyTranslations();
  initEvents();
  initReveal();
})();
