/* ScaleX Ads landing — كل اللي بيتعدّل في الصفحة موجود في الجزء ده */
const CONFIG = {
  waNumber: '201203747232',                 // رقم الواتساب بصيغة دولية بدون +
  brand: 'ScaleX Ads'
};

const SERVICES = [
  { icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    title: 'إدارة إعلانات ميتا',
    short: 'إعلانات فيسبوك وإنستجرام بتوصّل لعميلك الصح وتجيبلك رسايل وحجوزات.',
    more: ['حملات وعي وتفاعل ورسايل ومبيعات تشتغل مع بعض', 'تصميم إعلانات وكتابة نصوص مقنعة', 'تحسين مستمر على الأرقام', 'تقارير نتايج واضحة'] },
  { icon: 'M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z',
    title: 'إعلانات جوجل',
    short: 'لما العميل يدوّر على خدمتك، يلاقيك قدّامه في نتايج البحث.',
    more: ['إعلانات البحث والخرائط', 'إعادة استهداف (ريماركتنج) لمن زار موقعك', 'يوتيوب بإعلانات فيديو', 'تتبع المكالمات والرسايل'] },
  { icon: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    title: 'تيك توك وسناب شات',
    short: 'وصول لجمهور شاب بفيديوهات سريعة بتتشاف وتتشارك.',
    more: ['إعلانات فيديو قصيرة', 'استهداف حسب الاهتمام والموقع', 'مناسبة للمتاجر والمطاعم والخدمات', 'ممكن تتضاف لباقتك كإضافة اختيارية'] },
  { icon: 'M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.3A8 8 0 1 1 21 12Z',
    title: 'إعلانات ChatGPT',
    short: 'منصة إعلانية جديدة بتوصّلك للناس وهما بيسألوا ويقرروا.',
    more: ['لأي نشاط ولأي بلد', 'صياغة إعلان متوافق مع المنصة', 'إدارة ومتابعة وتقارير', 'مناسبة لمن يريد السبق على منافسيه'] },
  { icon: 'M4 4h16v12H4zM8 20h8M12 16v4',
    title: 'تصميم ومحتوى',
    short: 'تصاميم سوشيال بهوية نشاطك وكتابة محتوى ونشر منظم.',
    more: ['تصاميم بوستات وكاروسيل وإعلانات', 'كتابة محتوى وخطة شهرية', 'نشر وجدولة على فيسبوك وإنستجرام', 'من غير تصوير لو مش عايز'] },
  { icon: 'M23 7l-7 5 7 5V7ZM1 5h15v14H1z',
    title: 'مونتاج فيديو وريلز',
    short: 'ريلز وإعلانات فيديو بمونتاج احترافي وكابشن عربي.',
    more: ['هوك قوي في أول ثانيتين', 'كابشن عربي محروق على الفيديو', 'مقاسات للريلز والإعلانات', 'جلسة تصوير اختيارية في باقة FUSION'] },
  { icon: 'M4 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm14 3 4-2v8l-4-2M7 4h4',
    title: 'بروداكشن ميديا',
    short: 'تصوير وإنتاج فيديوهات وصور احترافية لنشاطك، من الفكرة لحد اللقطة الأخيرة.',
    more: ['تصوير ريلز وإعلانات فيديو', 'تصوير منتجات وأماكن وعيادات', 'فكرة وسيناريو وإخراج وإضاءة وصوت', 'بيتسلّم جاهز للمونتاج والنشر'] },
  { icon: 'M2 4h20v14H2zM8 22h8M12 18v4',
    title: 'تصميم المواقع',
    short: 'موقع أو صفحة هبوط بتحوّل الزائر لرسالة على واتساب.',
    more: ['موقع تعريفي أو متجر أو حجز أونلاين', 'سريع ومظبوط على الموبايل', 'جاهز لمحركات البحث والتتبع', 'زرار واتساب في كل صفحة'] },
  { icon: 'M12 2l3 7 7 1-5.5 5 1.5 7-6-3.8L6 22l1.5-7L2 10l7-1z',
    title: 'براندينج وهوية',
    short: 'اسم وشعار وهوية بصرية ونبرة صوت تخلّي نشاطك يفضل في ذاكرة عملائك.',
    more: ['هوية بصرية ودليل استخدام', 'نبرة صوت ورسالة للبراند', 'تطبيق الهوية على السوشيال والمطبوعات', 'تحديد مكانك في السوق'] }
];

const PKG_ITEMS = [
  'إعلانات ميتا', 'إعلانات جوجل', 'إعلانات تيك توك', 'إعلانات سناب', 'إعلانات ChatGPT',
  'تصاميم سوشيال', 'مونتاج ريلز', 'كتابة محتوى ونشر', 'جلسة تصوير', 'موقع أو صفحة هبوط', 'براندينج وهوية'
];

const DESIGNS = ['d01','d02','d03','d04','d05','d06','d07','d08','d09','d10','d11','d12','d13','d14','d15','d16','d17','d18'];
const REVIEWS = Array.from({ length: 17 }, (_, i) => 'r' + String(i + 1).padStart(2, '0'));

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = text => `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(text)}`;
function openWA(url) {
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); a.remove();
}
const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- WhatsApp buttons ---------- */
function wireWA(root = document) {
  $$('[data-wa]', root).forEach(a => {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

/* ---------- services ---------- */
(function () {
  const g = $('#svcGrid');
  g.innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal" style="--d:${(i % 4) * .08}s">
      <div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${s.icon}"/></svg></div>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
      <div class="more"><div><ul>${s.more.map(m => `<li>${m}</li>`).join('')}</ul></div></div>
      <div class="acts">
        <button class="tog" type="button" aria-expanded="false">التفاصيل</button>
        <a class="btn btn-wa sm" data-wa="أهلاً ${CONFIG.brand}، عايز أعرف أكتر عن خدمة: ${s.title}" href="#"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg><span>اطلب الخدمة</span></a>
      </div>
    </article>`).join('');
  $$('.svc', g).forEach(c => {
    const b = $('.tog', c);
    b.addEventListener('click', () => {
      const o = c.classList.toggle('open');
      b.setAttribute('aria-expanded', o);
      b.textContent = o ? 'إخفاء التفاصيل' : 'التفاصيل';
    });
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--x', (e.clientX - r.left) + 'px');
      c.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
  });
})();

/* ---------- designs rail ---------- */
(function () {
  const rail = $('#rail');
  rail.innerHTML = DESIGNS.map((d, i) =>
    `<figure><img data-lb src="assets/img/designs/${d}.webp" alt="تصميم إعلاني من أعمال ScaleX رقم ${i + 1}" loading="lazy" width="900" height="${d === 'd06' ? 900 : 1125}" draggable="false"></figure>`).join('');
  const step = () => rail.clientWidth * .7;
  $('#rNext').onclick = () => rail.scrollBy({ left: -step(), behavior: 'smooth' });  // RTL: السالب = للأمام
  $('#rPrev').onclick = () => rail.scrollBy({ left: step(), behavior: 'smooth' });
  let down = false, sx = 0, sl = 0, moved = false;
  rail.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) { moved = true; rail.classList.add('drag'); } rail.scrollLeft = sl - dx; });
  addEventListener('pointerup', () => { down = false; rail.classList.remove('drag'); setTimeout(() => moved = false, 0); });
  rail.addEventListener('click', e => { if (moved) { e.stopImmediatePropagation(); e.preventDefault(); } }, true);
})();

/* ---------- reviews marquee ---------- */
(function () {
  const rows = $('#rvRows');
  const mk = (list, cls) => {
    const html = list.map((r, i) => `<img data-lb src="assets/img/reviews/${r}.webp" alt="تقييم عميل لـ ScaleX Ads على فيسبوك" loading="lazy" height="130">`).join('');
    return `<div class="rv-row ${cls}">${html}${html}</div>`;
  };
  const a = REVIEWS.filter((_, i) => i % 2 === 0), b = REVIEWS.filter((_, i) => i % 2 === 1);
  rows.innerHTML = mk(a, '') + mk(b, 'rev');
})();

/* marquee duplicate */
(function () {
  const m = $('#marq'); m.innerHTML += m.innerHTML;
  m.querySelectorAll('span').forEach((s, i, all) => { if (i >= all.length / 2) s.setAttribute('aria-hidden', 'true'); });
})();

/* ---------- package builder ---------- */
(function () {
  const box = $('#chips');
  box.innerHTML = PKG_ITEMS.map((t, i) => `<label class="chip"><input type="checkbox" value="${t}"><span>${t}</span></label>`).join('');
  $('#bSend').addEventListener('click', () => {
    const picked = $$('input:checked', box).map(i => i.value);
    const note = $('#bNote');
    if (!picked.length) { note.textContent = 'اختار على الأقل عنصر واحد عشان نفصّل باقتك.'; note.style.color = '#ff9d8a'; box.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    note.textContent = 'تمام، هيفتحلك واتساب برسالة فيها اختياراتك.'; note.style.color = '';
    const budget = $('#bBudget').value;
    const msg = `أهلاً ${CONFIG.brand}، عايز أفصّل باقة على حسب احتياجي:\n` + picked.map(p => '• ' + p).join('\n') + (budget ? `\nميزانية الإعلان الشهرية: ${budget}` : '') + '\nممكن عرض مناسب؟';
    openWA(waLink(msg));
  });
})();

/* ---------- lead form ---------- */
(function () {
  const f = $('#leadForm'), err = $('#fErr');
  const phoneOk = v => { const d = v.replace(/[\s\-()]/g, '').replace(/^\+/, ''); return /^\d{9,15}$/.test(d); };
  const norm = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  f.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName'), phone = $('#fPhone'), field = $('#fField'), country = $('#fCountry'), svc = $('#fService');
    [name, phone, country, field, svc].forEach(x => x.classList.remove('bad'));
    const bad = [];
    if (name.value.trim().length < 2) bad.push(name);
    if (!phoneOk(norm(phone.value))) bad.push(phone);
    if (country.value.trim().length < 2) bad.push(country);
    if (field.value.trim().length < 2) bad.push(field);
    if (!svc.value) bad.push(svc);
    if (bad.length) {
      bad.forEach(x => x.classList.add('bad'));
      err.hidden = false;
      err.textContent = bad.includes(phone) && bad.length === 1 ? 'رقم الموبايل مش مظبوط، راجعه.' : 'من فضلك كمّل الخانات المعلّمة.';
      bad[0].focus();
      return;
    }
    err.hidden = true;
    const msg = `أهلاً ${CONFIG.brand}،\nالاسم: ${name.value.trim()}\nالموبايل: ${norm(phone.value).trim()}\nالدولة: ${country.value.trim()}\nمجال النشاط: ${field.value.trim()}\nالخدمة المطلوبة: ${svc.value}\nعايز أعرف التفاصيل والعرض المناسب.`;
    openWA(waLink(msg));
  });
  f.addEventListener('input', e => e.target.classList.remove('bad'));
})();

/* ---------- lightbox + video modal ---------- */
(function () {
  const lb = $('#lb'), img = $('#lbImg');
  const close = () => { lb.hidden = true; img.src = ''; };
  document.addEventListener('click', e => {
    const t = e.target.closest('img[data-lb]');
    if (t) { img.src = t.currentSrc || t.src; img.alt = t.alt; lb.hidden = false; }
  });
  lb.addEventListener('click', e => { if (e.target !== img) close(); });
  $('#lbX').onclick = close;
  const vm = $('#vm'), vv = $('#vmV');
  const vclose = () => { vv.pause(); vv.removeAttribute('src'); vv.load(); vm.hidden = true; };
  $$('.vid').forEach(v => v.addEventListener('click', () => {
    vv.src = v.dataset.vid; vm.hidden = false; vv.play().catch(() => {});
  }));
  vm.addEventListener('click', e => { if (e.target === vm) vclose(); });
  $('#vmX').onclick = vclose;
  addEventListener('keydown', e => { if (e.key === 'Escape') { if (!lb.hidden) close(); if (!vm.hidden) vclose(); } });
})();

/* ---------- nav ---------- */
(function () {
  const nav = $('#nav'), b = $('#burger'), l = $('#links');
  const on = () => nav.classList.toggle('on', scrollY > 24);
  on(); addEventListener('scroll', on, { passive: true });
  b.addEventListener('click', () => { const o = l.classList.toggle('open'); b.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
  $$('a', l).forEach(a => a.addEventListener('click', () => { l.classList.remove('open'); b.setAttribute('aria-expanded', false); document.body.style.overflow = ''; }));
})();

/* ---------- reveal, counters, ads video ---------- */
(function () {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px' });
  $$('.reveal').forEach(el => io.observe(el));

  const fmt = n => n.toLocaleString('en-US');
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; co.unobserve(e.target);
    const el = e.target, end = +el.dataset.count;
    if (prefersReduced) { el.textContent = fmt(end); return; }
    const t0 = performance.now(), dur = 1800;
    const tick = t => { const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 4))); el.textContent = fmt(v); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .5 });
  $$('[data-count]').forEach(el => co.observe(el));

  const av = $('#adsVid');
  if (av) new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? av.play().catch(() => {}) : av.pause()), { threshold: .35 }).observe(av);
})();

/* ---------- pointer spotlight + hero parallax ---------- */
(function () {
  if (prefersReduced || !matchMedia('(pointer:fine)').matches) return;
  const root = document.documentElement, stack = $('.hero-stack');
  addEventListener('pointermove', e => {
    root.style.setProperty('--mx', e.clientX + 'px'); root.style.setProperty('--my', e.clientY + 'px');
    if (stack) {
      const x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
      $$('.hc', stack).forEach((c, i) => { const k = (i + 1) * 12; c.style.translate = `${x * k}px ${y * k}px`; });
    }
  }, { passive: true });
})();



/* ---------- design stage: creative transitions ---------- */
(function () {
  const st = document.getElementById('stage'); if (!st) return;
  const A = document.getElementById('stA'), B = document.getElementById('stB'), dots = document.getElementById('stDots');
  const frame = st.querySelector('.stage-frame');
  const SRC = Array.from({ length: 12 }, (_, i) => `assets/img/stage/s${i + 1}.webp`);
  const E = 'cubic-bezier(.7,0,.2,1)';
  // simple keyframe effects on the incoming image
  const KF = [
    [[{ clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)' }], 650],
    [[{ opacity: 0, transform: 'scale(1.6) rotate(-8deg)', filter: 'blur(20px)' }, { opacity: 1, transform: 'none', filter: 'none' }], 700],
    [[{ transform: 'perspective(900px) rotateY(90deg)', opacity: 0 }, { transform: 'perspective(900px) rotateY(0)', opacity: 1 }], 650],
    [[{ clipPath: 'polygon(50% 50%,50% 50%,50% 50%,50% 50%)' }, { clipPath: 'polygon(-50% 50%,50% -50%,150% 50%,50% 150%)' }], 650],
    [[{ opacity: 0, transform: 'translateX(-14%) skewX(10deg)', filter: 'saturate(3) brightness(1.8)' }, { opacity: 1, transform: 'none', filter: 'none' }], 600],
    [[{ clipPath: 'inset(0 50% 0 50%)' }, { clipPath: 'inset(0 0 0 0)' }], 600],
    // glitch: stepped slices + color shift
    [[{ clipPath: 'inset(0 0 80% 0)', transform: 'translateX(-6%)', filter: 'hue-rotate(90deg) saturate(3)', offset: 0 },
      { clipPath: 'inset(40% 0 30% 0)', transform: 'translateX(5%)', filter: 'hue-rotate(-60deg) saturate(2)', offset: .25 },
      { clipPath: 'inset(15% 0 55% 0)', transform: 'translateX(-3%)', filter: 'hue-rotate(40deg)', offset: .5 },
      { clipPath: 'inset(0 0 0 0)', transform: 'translateX(1%)', filter: 'none', offset: .75 },
      { clipPath: 'inset(0 0 0 0)', transform: 'none', filter: 'none', offset: 1 }], 700]
  ];
  // composite effects built from many pieces
  const piece = (src, css) => { const d = document.createElement('div'); d.style.cssText = `position:absolute;background-image:url(${src});${css}`; return d; };
  function strips(src, n, vertical) {
    const c = document.createElement('div'); c.style.cssText = 'position:absolute;inset:0;overflow:hidden'; frame.appendChild(c);
    const anims = [];
    for (let i = 0; i < n; i++) {
      const sz = vertical ? `${n * 100}% 100%` : `100% ${n * 100}%`, pos = vertical ? `${i / (n - 1) * 100}% 0` : `0 ${i / (n - 1) * 100}%`;
      const geo = vertical ? `left:${i / n * 100}%;width:${100 / n + .3}%;top:0;height:100%` : `top:${i / n * 100}%;height:${100 / n + .3}%;left:0;width:100%`;
      const d = piece(src, `${geo};background-size:${sz};background-position:${pos}`); c.appendChild(d);
      const from = (i % 2 ? 1 : -1) * 105, tr = vertical ? `translateY(${from}%)` : `translateX(${from}%)`;
      anims.push(d.animate([{ transform: tr }, { transform: 'none' }], { duration: 520, delay: i * 45, easing: E, fill: 'both' }).finished);
    }
    return Promise.all(anims).then(() => c);
  }
  function tiles(src, cols, rows) {
    const c = document.createElement('div'); c.style.cssText = 'position:absolute;inset:0;overflow:hidden'; frame.appendChild(c);
    const anims = [];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const d = piece(src, `left:${x / cols * 100}%;top:${y / rows * 100}%;width:${100 / cols + .3}%;height:${100 / rows + .3}%;background-size:${cols * 100}% ${rows * 100}%;background-position:${x / (cols - 1) * 100}% ${y / (rows - 1) * 100}%`); c.appendChild(d);
      anims.push(d.animate([{ opacity: 0, transform: 'scale(.2) rotate(25deg)' }, { opacity: 1, transform: 'none' }], { duration: 380, delay: Math.random() * 380, easing: E, fill: 'both' }).finished);
    }
    return Promise.all(anims).then(() => c);
  }
  const COMP = [s => strips(s, 7, true), s => tiles(s, 4, 5), s => strips(s, 9, false)];
  let cur = 0, k = 0, busy = false, timer;
  SRC.forEach((_, i) => { const d = document.createElement('i'); d.onclick = () => go(i); dots.appendChild(d); });
  A.src = SRC[0]; B.style.display = 'none';
  const mark = () => [...dots.children].forEach((d, i) => d.classList.toggle('on', i === cur));
  function done(n, extra) { A.src = SRC[n]; B.style.display = 'none'; if (extra) extra.remove(); busy = false; }
  function go(n) {
    n = (n + SRC.length) % SRC.length;
    if (busy || n === cur) return;
    busy = true; cur = n; mark();
    B.src = SRC[n];
    const run = () => {
      if (prefersReduced || !B.animate) return done(n);
      const total = KF.length + COMP.length, i = k++ % total;
      // gentle punch on the outgoing image
      A.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }], { duration: 650, easing: 'ease-in', fill: 'both' });
      if (i < KF.length) {
        B.style.display = 'block';
        const a = B.animate(KF[i][0], { duration: KF[i][1], easing: E, fill: 'both' });
        a.onfinish = () => { done(n); a.cancel(); A.getAnimations().forEach(x => x.cancel()); };
      } else {
        COMP[i - KF.length](SRC[n]).then(c => { done(n, c); A.getAnimations().forEach(x => x.cancel()); });
      }
    };
    B.decode ? B.decode().then(run, run) : run();
  }
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 2600); };
  document.getElementById('stNext').onclick = () => { go(cur + 1); auto(); };
  document.getElementById('stPrev').onclick = () => { go(cur - 1); auto(); };
  dots.addEventListener('click', auto);
  new IntersectionObserver(es => { es[0].isIntersecting ? auto() : clearInterval(timer); }).observe(st);
  mark();
})();

wireWA();
