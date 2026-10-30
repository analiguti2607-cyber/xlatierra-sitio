/* =====================================================================
   XLATIERRA · MOTOR DEL CURSO
   No necesitas editar este archivo. Los textos están en contenido.js
   y la configuración en config.js.
   ===================================================================== */
(function () {
  "use strict";
  var C = window.XLT_CONTENT, CFG = window.XLT_CONFIG || {};
  var ALL = C.lessons, LESSONS = ALL.filter(function (l) { return !l.soon; }), QUIZ = C.quiz, SELF = C.self;
  var REFS = C.refs || {}, SP = C.species || {};
  var KEY = "xlatierra_" + C.course.id + "_" + (CFG.storageVersion || "v1");
  var app = document.getElementById("app");

  /* ---------- Estado guardado en el navegador ---------- */
  function blank() {
    return { uid: "x" + Math.random().toString(36).slice(2, 10), consent: false, profile: {},
      done: {}, guess: {}, reflect: {}, pick: {}, rate: {}, pre: null, post: null,
      quiz: null, attempts: 0, cert: null, finalSent: false };
  }
  function load() {
    try { var r = localStorage.getItem(KEY); return r ? Object.assign(blank(), JSON.parse(r)) : blank(); }
    catch (e) { return blank(); }
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- Envío a Google Sheets (solo con consentimiento) ---------- */
  function send(tipo, data) {
    if (!CFG.sheetsUrl || !S.consent) return;
    var payload = Object.assign({ tipo: tipo, participante: S.uid, fecha: new Date().toISOString(), curso: C.course.label }, data);
    try {
      fetch(CFG.sheetsUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) })
        .catch(function () {});
    } catch (e) {}
  }

  /* ---------- Utilidades ---------- */
  function el(html) { var d = document.createElement("div"); d.innerHTML = html; return d; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
  function doneCount() { return LESSONS.filter(function (l) { return S.done[l.id]; }).length; }
  function allDone() { return doneCount() === LESSONS.length; }
  function go(h) { if (location.hash === "#" + h) route(); else location.hash = h; }
  function toTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }
  var CH = C.characters || {};
  function ch(id) { return CH[id] || null; }
  function guideOf(L) { var u = C.units.filter(function (x) { return x.id === L.unit; })[0]; return ch(L.guide || (u && u.guide)); }
  function pose(c, p) { return c && c.poses && c.poses[p] ? c.poses[p] : (c ? c.img : ""); }
  function avatar(c, cls, p) { if (c && p) c = Object.assign({}, c, { img: pose(c, p) }); return c ? '<img class="av ' + (cls || '') + '" src="' + c.img + '" alt="' + c.name + '" title="' + c.name + (c.origin ? ' · ' + c.origin : '') + '">' : ''; }
  function idx(id) { for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return i; return -1; }

  /* ---------- Router (permite usar el botón «atrás» del navegador) ---------- */
  function route() {
    var h = (location.hash || "").replace("#", "");
    if (h.indexOf("leccion-") === 0) { var i = idx(h.slice(8)); if (i >= 0) return lesson(i); }
    if (h === "recursos") return resources();
    if (h === "referencias") return references();
    if (h === "fichas") return gallery();
    if (h === "cuestionario") return allDone() ? quiz() : home();
    if (h === "certificado") return (S.quiz && S.quiz.pass) ? cert() : home();
    if (h === "privacidad") return privacy();
    home();
  }
  window.addEventListener("hashchange", route);

  /* ---------- Portada del curso ---------- */
  function home() {
    var pct = Math.round(100 * doneCount() / LESSONS.length);
    var g0 = ch(C.course.heroGuide || "espiritu");
    var h = '<div class="hero"><div class="hero-row"><div><h1>' + C.course.label + ': ' + C.course.title + '</h1><p>' + C.course.subtitle + '</p>' +
      '<div class="tags"><span>' + LESSONS.length + ' lecciones</span><span>' + C.course.totalTime + '</span><span>Gratis</span><span>Certificado al aprobar</span></div></div>' +
      (g0 ? '<figure class="hero-guide">' + avatar(g0, "big", "feliz") + '<figcaption>«' + g0.quote + '»</figcaption></figure>' : '') + '</div></div>';
    h += '<div><strong>Tu avance:</strong> ' + doneCount() + ' de ' + LESSONS.length + ' lecciones</div><div class="bar"><div style="width:' + pct + '%"></div></div>';
    h += '<p class="hint">Tu avance se guarda en este navegador y dispositivo. Si cambias de celular o borras los datos del navegador, empezarás de nuevo.</p>';
    if (!S.pre) h += startBox();
    else {
      var next = LESSONS.filter(function (l) { return !S.done[l.id]; })[0];
      if (next) h += '<div class="nav" style="margin:6px 0 10px"><span></span><a class="btn btn-primary" href="#leccion-' + next.id + '">' + (doneCount() ? 'Continuar donde me quedé' : 'Empezar') + ' →</a></div>';
    }
    C.units.forEach(function (u) {
      var gu = ch(u.guide);
      h += '<div class="unit-head">' + avatar(gu) + '<div><h3 class="unit-h">' + u.title + '</h3><div class="unit-d">' + (gu ? '<span class="verb">' + gu.verb + '</span> Con ' + gu.name + ' · ' : '') + u.desc + '</div></div></div>';
      ALL.forEach(function (l) {
        if (l.unit !== u.id) return;
        if (l.soon) { h += '<div class="card soon"><div class="num">🌱</div><div class="grow"><strong>' + l.title + '</strong><br><small>Próximamente · ' + (l.note || 'Esta lección está en preparación') + '</small></div><span class="tag">Próximamente</span></div>'; return; }
        var i = idx(l.id), d = S.done[l.id], locked = !S.pre;
        h += '<div class="card' + (d ? ' done' : '') + (locked ? ' locked' : '') + '" data-go="' + l.id + '"><div class="num">' + (d ? '✓' : (i + 1)) + '</div><div class="grow"><strong>' + l.title + '</strong><br><small>' + l.time + (d ? ' · Completada' : '') + '</small></div><span>›</span></div>';
      });
    });
    var qs = allDone() ? (S.quiz && S.quiz.pass ? 'Aprobado · ' + Math.round(S.quiz.score * 100) + '%' : 'Disponible') : 'Se desbloquea al terminar las ' + LESSONS.length + ' lecciones';
    h += '<h3 class="unit-h">Cierre</h3><div class="card' + (allDone() ? '' : ' locked') + '" data-quiz="1"><div class="num">★</div><div class="grow"><strong>Cuestionario final y certificado</strong><br><small>' + qs + '</small></div><span>›</span></div>';
    (C.extras || []).forEach(function (x) { h += '<a class="card extra" href="' + x.href + '"' + (x.ext ? ' target="_blank" rel="noopener"' : '') + '><div class="num">' + x.icon + '</div><div class="grow"><strong>' + x.title + '</strong> <span class="tag opt-tag">' + (x.tag || 'Opcional') + '</span><br><small>' + x.desc + '</small></div><span>›</span></a>'; });
    if (Object.keys(REFS).length) h += '<div class="card" data-ref="1"><div class="num">📑</div><div class="grow"><strong>Referencias</strong><br><small>Todas las fuentes del módulo, con enlace</small></div><span>›</span></div>';
    h += '<div class="card" data-res="1"><div class="num">📚</div><div class="grow"><strong>Recursos complementarios</strong><br><small>Informes, cursos y datos para seguir aprendiendo</small></div><span>›</span></div>';
    app.innerHTML = h; toTop();
    app.querySelectorAll("[data-go]").forEach(function (c) { c.onclick = function () { if (S.pre) go("leccion-" + c.dataset.go); }; });
    app.querySelector("[data-quiz]").onclick = function () { if (allDone()) go(S.quiz && S.quiz.pass ? "certificado" : "cuestionario"); };
    app.querySelector("[data-res]").onclick = function () { go("recursos"); };
    var rf = app.querySelector("[data-ref]"); if (rf) rf.onclick = function () { go("referencias"); };
    if (!S.pre) wireStart();
  }

  function startBox() {
    return '<div class="box" id="start"><h3>Antes de empezar: tu punto de partida</h3>' +
      '<p>Responde estas preguntas rápidas. Al final las repetirás para ver cuánto avanzaste.</p>' +
      '<div class="field"><label>Tu edad</label><select id="f-edad"><option value="">Prefiero no decir</option><option>Menos de 16</option><option>16–18</option><option>19–21</option><option>22–24</option><option>25 o más</option></select></div>' +
      '<div class="field"><label>Ocupación</label><select id="f-ocup"><option value="">Prefiero no decir</option><option>Estudiante de secundaria</option><option>Estudiante de preparatoria</option><option>Estudiante de universidad</option><option>Trabajo</option><option>Estudio y trabajo</option><option>Otra</option></select></div>' +
      '<div class="field"><label>País y estado (opcional)</label><input type="text" id="f-lugar" maxlength="80" placeholder="Ej. México, Jalisco"></div>' +
      '<p style="margin-top:18px"><strong>¿Qué tan de acuerdo estás?</strong> (1 = nada, 5 = totalmente)</p><div id="pre"></div>' +
      '<label class="consent"><input type="checkbox" id="f-consent"><span>Acepto que mis respuestas se envíen <strong>de forma anónima</strong> a Xlatierra para mejorar el curso y medir su impacto. No pedimos tu nombre ni tu correo. <a href="#privacidad">Más información</a>. (Si no aceptas, puedes tomar el curso igual.)</span></label>' +
      '<button class="btn btn-primary" id="pre-go" disabled>Guardar y empezar</button></div>';
  }
  function wireStart() {
    var tmp = {};
    likert(document.getElementById("pre"), tmp, function () { document.getElementById("pre-go").disabled = Object.keys(tmp).length < SELF.length; });
    document.getElementById("pre-go").onclick = function () {
      S.pre = tmp; S.consent = document.getElementById("f-consent").checked;
      S.profile = { edad: document.getElementById("f-edad").value, ocupacion: document.getElementById("f-ocup").value, lugar: document.getElementById("f-lugar").value.trim() };
      save();
      var d = { edad: S.profile.edad, ocupacion: S.profile.ocupacion, lugar: S.profile.lugar };
      SELF.forEach(function (q, i) { d["antes_" + (i + 1)] = tmp[i]; });
      send("inicio", d);
      go("leccion-" + LESSONS[0].id);
    };
  }
  function likert(box, store, cb) {
    SELF.forEach(function (q, i) {
      var w = el('<p style="margin:10px 0 4px">' + q + '</p><div class="likert"></div><div class="scale-help"><span>Nada de acuerdo</span><span>Totalmente</span></div>');
      var row = w.querySelector(".likert");
      [1, 2, 3, 4, 5].forEach(function (n) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = n;
        b.onclick = function () { store[i] = n; row.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); if (cb) cb(); };
        row.appendChild(b);
      });
      box.appendChild(w);
    });
  }

  /* ---------- Lección ---------- */
  function lesson(i) {
    if (!S.pre) return home();
    var L = LESSONS[i], unit = C.units.filter(function (u) { return u.id === L.unit; })[0];
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Lección ' + (i + 1) + ' de ' + LESSONS.length + ' · ' + L.time + '</small></div>';
    h += '<div class="bar"><div style="width:' + Math.round(100 * (i + 1) / LESSONS.length) + '%"></div></div>';
    var gl = guideOf(L); CUR_GUIDE = gl; var firstOfUnit = i === 0 || LESSONS[i - 1].unit !== L.unit || L.guide;
    h += '<small class="hint">' + (unit ? unit.title : '') + '</small><h1>' + L.title + '</h1>';
    if (gl) h += '<div class="guide">' + avatar(gl) + '<div><small>Te acompaña</small><strong>' + gl.name + '</strong> · <span class="verb">' + gl.verb + '</span>' + (firstOfUnit ? '<em>«' + gl.quote + '»</em>' : '') + '</div></div>';
    h += '<div id="body"></div>';
    h += '<div class="box"><strong>¿Qué te pareció esta lección?</strong><div class="rate" id="rate"></div></div>';
    if (L.refs && L.refs.length) h += refBox(L.refs);
    else if (L.sources) h += '<p class="src"><strong>Fuentes:</strong> ' + L.sources + '</p>';
    h += '<div class="nav">' + (i > 0 ? '<a class="btn btn-ghost" href="#leccion-' + LESSONS[i - 1].id + '">← Anterior</a>' : '<span></span>') + '<button class="btn btn-primary" id="next">Completar lección →</button></div>';
    h += '<p class="hint" id="next-hint" style="text-align:right"></p>';
    app.innerHTML = h; toTop();
    var body = document.getElementById("body"), guesses = [];
    L.blocks.forEach(function (b, k) { render(body, b, L.id + "_" + k, guesses, check); });

    var rate = document.getElementById("rate");
    ["No me gustó", "Aceptable", "Buena", "¡Increíble!"].forEach(function (t, j) {
      var bt = document.createElement("button"); bt.type = "button"; bt.textContent = t; if (S.rate[L.id] === j) bt.classList.add("on");
      bt.onclick = function () { S.rate[L.id] = j; save(); rate.querySelectorAll("button").forEach(function (x) { x.classList.remove("on"); }); bt.classList.add("on"); };
      rate.appendChild(bt);
    });
    var next = document.getElementById("next"), hint = document.getElementById("next-hint");
    function check() {
      if (!next) return;
      var ok = guesses.every(function (g) { return S.guess[g] !== undefined; });
      next.disabled = !ok; hint.textContent = ok ? "" : "Responde todas las preguntas ¡Adivina! para continuar.";
    }
    check();
    next.onclick = function () {
      var first = !S.done[L.id];
      S.done[L.id] = true; save();
      if (first) {
        var correct = 0; guesses.forEach(function (g) { if (S.guess[g + "_ok"]) correct++; });
        send("leccion", { leccion: (i + 1) + ". " + L.title, valoracion: S.rate[L.id] != null ? ["No me gustó", "Aceptable", "Buena", "¡Increíble!"][S.rate[L.id]] : "", aciertos_adivina: correct + " de " + guesses.length });
      }
      if (i < LESSONS.length - 1) go("leccion-" + LESSONS[i + 1].id);
      else go(allDone() ? "cuestionario" : "");
    };
  }

  var CUR_GUIDE = null;
  function render(body, b, key, guesses, check) {
    switch (b.t) {
      case "p": body.appendChild(el('<p>' + b.html + '</p>')); break;
      case "h": body.appendChild(el('<h2 style="margin-top:28px">' + b.text + '</h2>')); break;
      case "list": body.appendChild(el('<ul>' + b.items.map(function (x) { return '<li style="margin-bottom:10px">' + x + '</li>'; }).join("") + '</ul>')); break;
      case "table":
        body.appendChild(el('<div class="tablewrap"><table><tr>' + b.head.map(function (x) { return '<th>' + x + '</th>'; }).join("") + '</tr>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>')); break;
      case "stats":
        body.appendChild(el('<div class="stats">' + b.items.map(function (s) { return '<div class="stat"><b>' + s.n + '</b><span>' + s.l + '</span><i>Fuente: ' + s.s + '</i></div>'; }).join("") + '</div>')); break;
      case "note":
        var na = b.kind === "act" ? ch("nutria") : null;
        body.appendChild(el('<div class="note ' + b.kind + (na ? ' with-av' : '') + '">' + (na ? avatar(na) : '') + '<div><h4>' + b.title + '</h4><div>' + b.html + '</div></div></div>')); break;
      case "land": if (b.html) body.appendChild(el('<div class="note land"><h4>🌱 Saberes del territorio</h4><div>' + b.html + '</div></div>')); break;
      case "answers":
        var w = el('<div class="box"><div class="tabs"><button type="button" class="tab on" data-m="s">Respuesta corta</button><button type="button" class="tab" data-m="l">Respuesta larga</button></div><div class="ans"><p>' + b.short + '</p></div></div>');
        var ans = w.querySelector(".ans");
        w.querySelectorAll(".tab").forEach(function (t) {
          t.onclick = function () { w.querySelectorAll(".tab").forEach(function (x) { x.classList.remove("on"); }); t.classList.add("on"); ans.innerHTML = t.dataset.m === "s" ? '<p>' + b.short + '</p>' : b.long; };
        });
        body.appendChild(w); break;
      case "guess":
        guesses.push(key);
        var gg = CUR_GUIDE, gimg = gg && gg.poses ? '<img class="guess-av" src="' + pose(gg, "pensativo") + '" alt="' + gg.name + '">' : '';
        var g = el('<div class="box guess">' + gimg + '<span class="lbl">¡Adivina!</span><p><strong>' + b.q + '</strong></p><div class="opts"></div><div class="out"></div></div>');
        var opts = g.querySelector(".opts"), out = g.querySelector(".out");
        var reveal = function (pick) {
          opts.querySelectorAll("button").forEach(function (x, j) { x.disabled = true; if (j === b.a) x.classList.add("ok"); else if (j === pick) x.classList.add("bad"); });
          var gi = g.querySelector(".guess-av"); if (gi && pick === b.a) gi.src = pose(gg, "feliz");
          out.innerHTML = '<div class="exp">' + (pick === b.a ? '✅ <strong>¡Exacto!</strong> ' : '💡 <strong>No exactamente.</strong> ') + b.e + '</div>';
        };
        b.o.forEach(function (o, j) {
          var bt = document.createElement("button"); bt.type = "button"; bt.className = "opt"; bt.textContent = o;
          bt.onclick = function () { S.guess[key] = j; S.guess[key + "_ok"] = (j === b.a); save(); reveal(j); check(); };
          opts.appendChild(bt);
        });
        if (S.guess[key] !== undefined) reveal(S.guess[key]);
        body.appendChild(g); break;
      case "reflect":
        var r = el('<div class="box"><strong>✍️ Para pensar</strong><p style="margin-top:6px">' + b.q + '</p><textarea rows="3" placeholder="Escribe aquí. Se guarda en tu dispositivo.">' + esc(S.reflect[b.id]) + '</textarea></div>');
        r.querySelector("textarea").oninput = function (e) { S.reflect[b.id] = e.target.value; save(); };
        body.appendChild(r); break;
      case "pick":
        var p = el('<div class="box pick"><strong>👣 ' + b.q + '</strong>' + b.o.map(function (o, j) { return '<label><input type="radio" name="' + b.id + '" value="' + j + '"' + (S.pick[b.id] === j ? ' checked' : '') + '>' + o + '</label>'; }).join("") + '</div>');
        p.querySelectorAll("input").forEach(function (x) { x.onchange = function () { S.pick[b.id] = +x.value; save(); }; });
        body.appendChild(p); break;
      case "read":
        body.appendChild(el('<div class="read"><h4>📖 Para profundizar</h4>' + b.items.map(resItem).join("") + '</div>')); break;
      case "fig": body.appendChild(el(figure(b))); break;
      case "species": body.appendChild(el(speciesCard(SP[b.sp], true))); break;
      case "cta": body.appendChild(el('<a class="cta" href="' + b.href + '"' + (b.ext ? ' target="_blank" rel="noopener"' : '') + '>' + (b.icon ? '<span class="cta-i">' + b.icon + '</span>' : '') + '<span><strong>' + b.title + '</strong><small>' + b.html + '</small></span><span class="cta-go">' + (b.btn || 'Abrir') + ' →</span></a>')); break;
      case "match": guesses.push(key); body.appendChild(matchGame(b, key, check)); break;
      case "web": guesses.push(key); body.appendChild(foodWeb(b, key, check)); break;
      case "deck": guesses.push(key); body.appendChild(deckGame(b, key, check)); break;
      case "order": guesses.push(key); body.appendChild(orderGame(b, key, check)); break;
      case "greenhouse": body.appendChild(greenhouse(b)); break;
      case "commit": body.appendChild(commitCard(b)); break;
    }
  }
  function resItem(x) {
    var vid = x.type === "video" ? '<span class="tag vid">▶ Video' + (x.dur ? ' · ' + x.dur : '') + '</span> ' : '';
    return '<a class="res" href="' + x.url + '" target="_blank" rel="noopener"><strong>' + x.title + '</strong> ' + vid + '<span class="tag' + (x.lang === "EN" ? ' en' : '') + '">' + (x.lang === "EN" ? 'En inglés' : 'Español') + '</span><small>' + x.desc + '</small></a>';
  }

  /* ---------- Fotos, fichas, referencias ---------- */
  function figure(b) {
    return '<figure class="fig"><img src="' + b.src + '" alt="' + esc(b.alt || "") + '" loading="lazy" onerror="this.parentNode.classList.add(\'noimg\')"><figcaption>' + (b.cap ? b.cap + '<br>' : '') +
      '<span class="credit">📷 ' + b.credit + ' · <a href="' + b.link + '" target="_blank" rel="noopener">' + b.license + '</a> · Foto real con licencia libre</span></figcaption></figure>';
  }
  function badge(kind, v) {
    if (!v) return '';
    var cls = { CR: "cr", EN: "en", VU: "vu", NT: "nt", LC: "lc", P: "cr", A: "vu", Pr: "nt", E: "cr" }[v.c] || "nt";
    return '<span class="st ' + cls + '" title="' + esc(v.src || "") + '"><b>' + kind + '</b> ' + v.l + '</span>';
  }
  function speciesCard(s, inLesson) {
    if (!s) return '';
    return '<div class="ficha-wrap' + (inLesson ? '' : ' sm') + '"><img class="ficha-axo" src="img/axo-ficha.png" alt="Axo, el ajolote, con una idea"><div class="ficha"><div class="ficha-top"><strong>Ficha de Axo</strong></div>' +
      (s.photo ? '<div class="ficha-ph">' + figure(s.photo) + '</div>' : '<div class="ficha-ph noph"><span>' + (s.icon || '🌿') + '</span><small>Foto pendiente de licencia libre</small></div>') +
      '<div class="ficha-b"><h3>' + s.name + '</h3><p class="sci"><em>' + s.sci + '</em></p>' +
      '<div class="sts">' + badge("UICN", s.iucn) + badge("NOM-059", s.nom) + '</div>' +
      '<dl><dt>Dónde vive</dt><dd>' + s.where + '</dd><dt>Dato de Axo</dt><dd>' + s.fact + '</dd><dt>Qué la amenaza</dt><dd>' + s.threat + '</dd>' + (s.hope ? '<dt>Buenas noticias</dt><dd>' + s.hope + '</dd>' : '') + '</dl>' +
      '<p class="ficha-src">Fuentes: ' + s.refs.map(function (r) { return refShort(r); }).join(" · ") + '</p></div></div></div>';
  }
  function refShort(id) { var r = REFS[id]; if (!r) return id; return r.url ? '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.short + '</a>' : r.short; }
  function refFull(id) { var r = REFS[id]; if (!r) return ''; return r.text + (r.url ? ' <a href="' + r.url + '" target="_blank" rel="noopener">' + r.url.replace(/^https?:\/\//, '').slice(0, 70) + (r.url.length > 78 ? '…' : '') + '</a>' : ''); }
  function refBox(ids) {
    return '<details class="refs"><summary>📑 Fuentes de esta lección (' + ids.length + ')</summary><ol>' + ids.map(function (id) { return '<li>' + refFull(id) + '</li>'; }).join("") + '</ol>' +
      '<p class="hint">Lo marcado como «conocimiento general» no viene de un informe específico; puedes ver el detalle en <a href="#referencias">Referencias</a>.</p></details>';
  }
  function references() {
    var ids = Object.keys(REFS).sort(function (a, b) { return REFS[a].text.localeCompare(REFS[b].text, "es"); });
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Referencias</small></div><h1>Referencias</h1>' +
      '<p>Todas las fuentes que usamos en este módulo, en orden alfabético. Cada lección muestra al final las suyas. Si encuentras un error, escríbenos a ' + esc(CFG.contactEmail || "") + '.</p>' +
      (C.refsNote ? '<div class="note info"><div>' + C.refsNote + '</div></div>' : '') +
      '<ol class="reflist">' + ids.map(function (id) { return '<li id="ref-' + id + '">' + refFull(id) + '</li>'; }).join("") + '</ol>';
    app.innerHTML = h; toTop();
  }
  function gallery() {
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Fichas de especies</small></div><h1>Las fichas de Axo</h1>' +
      '<p>Especies de América Latina que aparecen en el módulo. Las categorías de riesgo cambian con el tiempo: revisa siempre la fuente.</p>' +
      '<div class="leg"><span class="st cr"><b>CR/P</b> mayor riesgo</span><span class="st en"><b>EN</b> en peligro</span><span class="st vu"><b>VU/A</b> vulnerable o amenazada</span><span class="st nt"><b>NT/Pr</b> casi amenazada o protección especial</span></div>' +
      '<div class="fichas">' + Object.keys(SP).map(function (k) { return speciesCard(SP[k], false); }).join("") + '</div>';
    app.innerHTML = h; toTop();
  }

  /* ---------- Actividad: ¿Quién vive aquí? ---------- */
  function matchGame(b, key, check) {
    var st = S.guess[key + "_m"] || {};
    var w = el('<div class="box match"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p><div class="m-list"></div><div class="m-score"></div></div>').firstChild;
    var list = w.querySelector(".m-list"), score = w.querySelector(".m-score");
    function upd() {
      var n = Object.keys(st).length, ok = Object.keys(st).filter(function (k) { return st[k] === b.items[k].a; }).length;
      score.innerHTML = n < b.items.length ? 'Llevas ' + n + ' de ' + b.items.length : '<div class="exp">🎉 <strong>' + ok + ' de ' + b.items.length + ' correctas.</strong> ' + (b.done || '') + '</div>';
      if (n === b.items.length) { S.guess[key] = ok; S.guess[key + "_ok"] = ok >= Math.ceil(b.items.length * 0.6); }
      S.guess[key + "_m"] = st; save(); check();
    }
    b.items.forEach(function (it, i) {
      var row = el('<div class="m-row"><div class="m-sp">' + (it.icon ? '<span class="m-ic">' + it.icon + '</span>' : '') + '<div><strong>' + it.n + '</strong>' + (it.sci ? ' <em>' + it.sci + '</em>' : '') + '</div></div><div class="m-opts"></div><div class="m-exp"></div></div>').firstChild;
      var opts = row.querySelector(".m-opts"), ex = row.querySelector(".m-exp");
      function show(j) {
        opts.querySelectorAll("button").forEach(function (x, k) { x.disabled = true; if (k === it.a) x.classList.add("ok"); else if (k === j) x.classList.add("bad"); });
        ex.innerHTML = (j === it.a ? '✅ ' : '💡 ') + it.e;
      }
      b.eco.forEach(function (e, j) {
        var bt = document.createElement("button"); bt.type = "button"; bt.className = "chip"; bt.textContent = e;
        bt.onclick = function () { st[i] = j; show(j); upd(); };
        opts.appendChild(bt);
      });
      if (st[i] !== undefined) show(st[i]);
      list.appendChild(row);
    });
    upd();
    return w;
  }

  /* ---------- Actividad: La red de la vida ---------- */
  function foodWeb(b, key, check) {
    var w = el('<div class="box web"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p>' +
      '<div class="web-wrap"><svg viewBox="0 0 600 430" class="web-svg" role="img" aria-label="Red alimentaria"></svg></div>' +
      '<p class="web-info hint">Toca a un integrante para ver qué come y quién se lo come.</p>' +
      '<div class="web-btns"><button type="button" class="btn btn-primary" data-x="1">' + b.removeLabel + '</button><button type="button" class="btn btn-ghost" data-r="1">Reiniciar</button></div>' +
      '<div class="web-steps"></div></div>').firstChild;
    var svg = w.querySelector("svg"), info = w.querySelector(".web-info"), steps = w.querySelector(".web-steps");
    var NS = "http://www.w3.org/2000/svg", N = {}, E = [];
    function mk(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }
    var defs = mk("defs", {}); var mkr = mk("marker", { id: "arw", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
    mkr.appendChild(mk("path", { d: "M0,0 L10,5 L0,10 z", fill: "#7a8786" })); defs.appendChild(mkr); svg.appendChild(defs);
    b.links.forEach(function (l) {
      var a = b.nodes.filter(function (n) { return n.id === l[0]; })[0], z = b.nodes.filter(function (n) { return n.id === l[1]; })[0];
      var dx = z.x - a.x, dy = z.y - a.y, d = Math.sqrt(dx * dx + dy * dy), r = 40;
      var ln = mk("line", { x1: a.x + dx / d * r, y1: a.y + dy / d * r, x2: z.x - dx / d * r, y2: z.y - dy / d * r, class: "edge", "marker-end": "url(#arw)" });
      ln.dataset.a = l[0]; ln.dataset.z = l[1]; svg.appendChild(ln); E.push(ln);
    });
    b.nodes.forEach(function (n) {
      var g = mk("g", { class: "node lvl" + n.lvl, transform: "translate(" + n.x + "," + n.y + ")", tabindex: "0" });
      g.appendChild(mk("circle", { r: 36 }));
      var t1 = mk("text", { y: -2, "text-anchor": "middle", class: "ic" }); t1.textContent = n.icon; g.appendChild(t1);
      var t2 = mk("text", { y: 54, "text-anchor": "middle", class: "nm" }); t2.textContent = n.name; g.appendChild(t2);
      g.onclick = function () { focus(n); }; g.onkeydown = function (e) { if (e.key === "Enter") focus(n); };
      svg.appendChild(g); N[n.id] = g;
    });
    function focus(n) {
      E.forEach(function (e) { e.classList.toggle("hi", e.dataset.a === n.id || e.dataset.z === n.id); });
      info.innerHTML = '<strong>' + n.icon + ' ' + n.name + '</strong> <em>' + (n.sci || '') + '</em> · ' + n.role + '<br>' + n.eats;
    }
    function reset() { Object.keys(N).forEach(function (k) { N[k].classList.remove("gone", "boom", "down"); }); E.forEach(function (e) { e.classList.remove("hi", "gone"); }); steps.innerHTML = ""; info.innerHTML = "Toca a un integrante para ver qué come y quién se lo come."; }
    function remove() {
      reset(); N[b.remove].classList.add("gone");
      E.forEach(function (e) { if (e.dataset.a === b.remove || e.dataset.z === b.remove) e.classList.add("gone"); });
      steps.innerHTML = "";
      b.cascade.forEach(function (c, i) {
        setTimeout(function () {
          (c.up || []).forEach(function (id) { N[id].classList.add("boom"); });
          (c.down || []).forEach(function (id) { N[id].classList.add("down"); });
          steps.appendChild(el('<div class="step"><b>' + (i + 1) + '</b><span>' + c.text + '</span></div>').firstChild);
          if (i === b.cascade.length - 1) {
            steps.appendChild(el('<div class="exp">' + b.done + '</div>').firstChild);
            if (S.guess[key] === undefined) { S.guess[key] = 1; S.guess[key + "_ok"] = true; save(); check(); }
          }
        }, 700 * (i + 1));
      });
    }
    w.querySelector("[data-x]").onclick = remove; w.querySelector("[data-r]").onclick = reset;
    return w;
  }

  /* ---------- Actividad: ¿Mito o dato? (tarjetas) ---------- */
  function deckGame(b, key, check) {
    var st = S.guess[key + "_d"] || {}, i = 0;
    var w = el('<div class="box deck"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p><div class="deck-card"></div><div class="deck-score"></div></div>').firstChild;
    var card = w.querySelector(".deck-card"), score = w.querySelector(".deck-score");
    function ok() { return Object.keys(st).filter(function (k) { return st[k] === b.cards[k].a; }).length; }
    function finish() {
      var n = ok(); S.guess[key] = n; S.guess[key + "_ok"] = n >= Math.ceil(b.cards.length * 0.6); save(); check();
      card.innerHTML = '<div class="deck-end"><b>' + n + ' de ' + b.cards.length + '</b><span>' + (n === b.cards.length ? '¡Perfecto! Tu kit funciona.' : 'Bien. Repasa las que fallaste: así se entrena el ojo.') + '</span>' +
        '<ol>' + b.cards.map(function (c, k) { return '<li class="' + (st[k] === c.a ? 'ok' : 'bad') + '"><strong>' + b.labels[c.a] + ':</strong> «' + c.t + '»</li>'; }).join("") + '</ol>' +
        '<button type="button" class="btn btn-ghost" data-again="1">Jugar otra vez</button></div>';
      card.querySelector("[data-again]").onclick = function () { st = {}; i = 0; show(); };
    }
    function show() {
      score.textContent = "Tarjeta " + Math.min(i + 1, b.cards.length) + " de " + b.cards.length;
      if (i >= b.cards.length) { score.textContent = ""; return finish(); }
      var c = b.cards[i];
      card.innerHTML = '<div class="deck-q">«' + c.t + '»</div><div class="deck-btns">' + b.labels.map(function (l, j) { return '<button type="button" class="btn ' + (j === 0 ? 'deck-a' : 'deck-b') + '" data-j="' + j + '">' + (b.icons ? b.icons[j] + ' ' : '') + l + '</button>'; }).join("") + '</div><div class="deck-exp"></div>';
      card.querySelectorAll("[data-j]").forEach(function (bt) {
        bt.onclick = function () {
          var j = +bt.dataset.j; st[i] = j; S.guess[key + "_d"] = st; save();
          card.querySelectorAll("[data-j]").forEach(function (x) { x.disabled = true; if (+x.dataset.j === c.a) x.classList.add("ok"); else if (+x.dataset.j === j) x.classList.add("bad"); });
          card.querySelector(".deck-exp").innerHTML = '<div class="exp">' + (j === c.a ? '✅ <strong>¡Bien!</strong> ' : '💡 <strong>No.</strong> ') + '<strong>Es ' + b.labels[c.a].toLowerCase() + '.</strong> ' + c.e + '</div><button type="button" class="btn btn-primary deck-next">' + (i < b.cards.length - 1 ? 'Siguiente →' : 'Ver resultado') + '</button>';
          card.querySelector(".deck-next").onclick = function () { i++; show(); };
        };
      });
    }
    if (Object.keys(st).length >= b.cards.length) { i = b.cards.length; finish(); } else show();
    return w;
  }

  /* ---------- Actividad: ordenar (¿de dónde salen?) ---------- */
  function orderGame(b, key, check) {
    var pickd = (S.guess[key + "_o"] || []).slice();
    var w = el('<div class="box order"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p><div class="o-pool"></div><ol class="o-list"></ol><div class="o-btns"><button type="button" class="btn btn-ghost" data-reset="1">Reiniciar</button></div><div class="o-res"></div></div>').firstChild;
    var pool = w.querySelector(".o-pool"), list = w.querySelector(".o-list"), res = w.querySelector(".o-res");
    var correct = b.items.map(function (x, k) { return k; }).sort(function (a, c) { return b.items[c].v - b.items[a].v; });
    function draw() {
      pool.innerHTML = ""; list.innerHTML = "";
      b.items.forEach(function (it, k) {
        if (pickd.indexOf(k) >= 0) return;
        var bt = document.createElement("button"); bt.type = "button"; bt.className = "chip"; bt.textContent = it.icon + " " + it.n;
        bt.onclick = function () { pickd.push(k); S.guess[key + "_o"] = pickd; save(); draw(); };
        pool.appendChild(bt);
      });
      pickd.forEach(function (k, pos) { list.appendChild(el('<li>' + b.items[k].icon + ' ' + b.items[k].n + '</li>').firstChild); });
      if (pickd.length < b.items.length) { pool.insertAdjacentHTML("afterbegin", '<p class="hint" style="width:100%;margin:0">' + (pickd.length ? 'Sigue: ¿cuál va en el lugar ' + (pickd.length + 1) + '?' : 'Toca primero el que crees que emite MÁS.') + '</p>'); res.innerHTML = ""; return; }
      var hits = pickd.filter(function (k, pos) { return correct[pos] === k; }).length, max = b.items[correct[0]].v;
      res.innerHTML = '<div class="exp"><strong>Acertaste ' + hits + ' de ' + b.items.length + ' posiciones.</strong> Este es el orden real:</div>' +
        '<div class="o-bars">' + correct.map(function (k, pos) { var it = b.items[k], mine = pickd.indexOf(k); return '<div class="o-row"><span class="o-n">' + (pos + 1) + '. ' + it.icon + ' ' + it.n + (mine === pos ? ' ✅' : ' <small>(tú: ' + (mine + 1) + '.º)</small>') + '</span><span class="o-bar"><i style="width:' + (it.v / max * 100) + '%"></i></span><b>' + it.v + b.unit + '</b></div>'; }).join("") + '</div>' +
        (b.done ? '<p class="hint" style="margin-top:8px">' + b.done + '</p>' : '');
      if (S.guess[key] === undefined) { S.guess[key] = hits; S.guess[key + "_ok"] = hits >= 3; save(); check(); }
    }
    w.querySelector("[data-reset]").onclick = function () { pickd = []; S.guess[key + "_o"] = pickd; save(); draw(); };
    draw();
    return w;
  }

  /* ---------- Actividad: la cobija del planeta ---------- */
  function greenhouse(b) {
    var w = el('<div class="box gh"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p>' +
      '<svg class="gh-svg" viewBox="0 0 600 330" role="img" aria-label="Animación del efecto invernadero"></svg>' +
      '<div class="gh-ctrl"><input type="range" min="0" max="3" step="1" value="1" aria-label="Cantidad de gases de efecto invernadero"><div class="gh-ticks">' + b.levels.map(function (l) { return '<span>' + l.short + '</span>'; }).join("") + '</div></div>' +
      '<div class="gh-info"></div></div>').firstChild;
    var svg = w.querySelector("svg"), rng = w.querySelector("input"), info = w.querySelector(".gh-info");
    var NS = "http://www.w3.org/2000/svg";
    function mk(t, a, txt) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); if (txt) e.textContent = txt; return e; }
    function render(lv) {
      var L = b.levels[lv]; svg.innerHTML = "";
      var defs = mk("defs", {}); var g1 = mk("linearGradient", { id: "ghsky", x1: 0, y1: 0, x2: 0, y2: 1 });
      g1.appendChild(mk("stop", { offset: "0", "stop-color": "#0f2a3a" })); g1.appendChild(mk("stop", { offset: "1", "stop-color": "#2e6e8a" })); defs.appendChild(g1); svg.appendChild(defs);
      svg.appendChild(mk("rect", { x: 0, y: 0, width: 600, height: 330, fill: "url(#ghsky)", rx: 16 }));
      svg.appendChild(mk("circle", { cx: 70, cy: 55, r: 30, fill: "#f6c945" }));
      svg.appendChild(mk("text", { x: 70, y: 105, "text-anchor": "middle", fill: "#fff", "font-size": 12 }, "Sol"));
      // atmósfera (la cobija)
      var op = [0, .25, .45, .7][lv];
      svg.appendChild(mk("path", { d: "M0,170 Q300,120 600,170 L600,205 Q300,160 0,205 Z", fill: "#cfad30", "fill-opacity": op, stroke: lv ? "#cfad30" : "none", "stroke-opacity": .6 }));
      if (lv) svg.appendChild(mk("text", { x: 520, y: 158, fill: "#fbe7a1", "font-size": 12, "text-anchor": "middle" }, "gases (la cobija)"));
      // suelo
      var hue = ["#7fb3c9", "#4f8a5b", "#9c8a3a", "#b86544"][lv];
      svg.appendChild(mk("path", { d: "M0,330 L0,268 Q300,236 600,268 L600,330 Z", fill: hue }));
      // rayos de sol entrando
      for (var i = 0; i < 3; i++) { var x = 120 + i * 60; svg.appendChild(mk("line", { x1: 90 + i * 8, y1: 75 + i * 6, x2: x + 60, y2: 255, stroke: "#f6c945", "stroke-width": 3, class: "gh-in", style: "animation-delay:" + (i * .3) + "s" })); }
      // calor saliendo: n flechas escapan, m regresan
      var esc = [5, 3, 2, 1][lv], back = [0, 2, 3, 4][lv];
      for (var e = 0; e < esc; e++) { var xx = 330 + e * 45; svg.appendChild(mk("path", { d: "M" + xx + ",255 Q" + (xx + 15) + ",160 " + (xx + 5) + ",20", stroke: "#e8735a", "stroke-width": 3, fill: "none", "stroke-dasharray": "6 6", class: "gh-out", style: "animation-delay:" + (e * .25) + "s" })); }
      for (var r = 0; r < back; r++) { var xb = 300 + r * 55; svg.appendChild(mk("path", { d: "M" + xb + ",255 Q" + (xb + 20) + ",170 " + (xb + 30) + ",185 Q" + (xb + 40) + ",200 " + (xb + 45) + ",255", stroke: "#ff5a3c", "stroke-width": 3.5, fill: "none", class: "gh-back", style: "animation-delay:" + (r * .3) + "s" })); }
      // termómetro
      svg.appendChild(mk("rect", { x: 40, y: 150, width: 18, height: 100, rx: 9, fill: "#fff", "fill-opacity": .9 }));
      var lvlH = [15, 45, 62, 85][lv];
      svg.appendChild(mk("rect", { x: 44, y: 246 - lvlH, width: 10, height: lvlH, rx: 5, fill: ["#4a90c2", "#e0a33a", "#e0703a", "#c43b2b"][lv] }));
      svg.appendChild(mk("circle", { cx: 49, cy: 252, r: 12, fill: ["#4a90c2", "#e0a33a", "#e0703a", "#c43b2b"][lv] }));
      svg.appendChild(mk("text", { x: 70, y: 200, fill: "#fff", "font-size": 15, "font-weight": 700 }, L.temp));
      info.innerHTML = '<strong>' + L.name + '.</strong> ' + L.text;
    }
    rng.oninput = function () { render(+rng.value); };
    render(1);
    return w;
  }

  /* ---------- Actividad: tarjeta de compromiso ---------- */
  function commitCard(b) {
    var w = el('<div class="box commit"><span class="lbl">Actividad</span><h3>' + b.title + '</h3><p>' + b.q + '</p>' +
      '<div class="field"><label>Tu nombre o apodo (opcional, solo se dibuja en tu dispositivo)</label><input type="text" maxlength="40" class="c-name"></div>' +
      '<button type="button" class="btn btn-primary c-make">Crear mi tarjeta</button><p class="hint c-hint"></p>' +
      '<canvas width="1080" height="1350" class="c-cv" style="display:none"></canvas><div class="c-dl"></div></div>').firstChild;
    w.querySelector(".c-make").onclick = function () {
      var pk = b.pick ? S.pick[b.pick] : null, step = (pk != null && b.options) ? b.options[pk] : "", what = (S.reflect[b.what] || "").trim(), when = (S.reflect[b.when] || "").trim(), who = (S.reflect[b.who] || "").trim();
      var hint = w.querySelector(".c-hint");
      if (!step && !what) { hint.textContent = "Primero elige tu primer paso o escribe qué vas a hacer (arriba)."; return; }
      hint.textContent = "";
      var cv = w.querySelector(".c-cv"), x = cv.getContext("2d"), W = 1080, H = 1350, name = w.querySelector(".c-name").value.trim();
      cv.style.display = "block";
      function wrap(t, y, max, lh, font, col, align) {
        x.font = font; x.fillStyle = col; x.textAlign = align || "left"; var words = String(t).split(" "), line = "", lines = [];
        words.forEach(function (wd) { var test = line ? line + " " + wd : wd; if (x.measureText(test).width > max && line) { lines.push(line); line = wd; } else line = test; });
        if (line) lines.push(line); lines = lines.slice(0, 5);
        lines.forEach(function (l, i) { x.fillText(l, align === "center" ? W / 2 : 110, y + i * lh); }); return y + lines.length * lh;
      }
      x.fillStyle = "#125d55"; x.fillRect(0, 0, W, H);
      x.fillStyle = "#fdf8ef"; roundRect(x, 60, 60, W - 120, H - 120, 40); x.fill();
      x.fillStyle = "#cfad30"; x.fillRect(60, 60, W - 120, 18);
      wrap("MI COMPROMISO POR EL CLIMA", 170, 860, 50, "600 34px Poppins, sans-serif", "#b86544", "center");
      var y = wrap(name ? name + " se compromete a:" : "Me comprometo a:", 250, 860, 56, "700 48px Caudex, serif", "#125d55", "center");
      y = wrap("«" + (what || step) + "»", y + 40, 860, 62, "600 46px Poppins, sans-serif", "#1d2b2a");
      if (what && step) y = wrap("Mi primer paso: " + step, y + 26, 860, 42, "300 32px Poppins, sans-serif", "#1d2b2a");
      if (who) y = wrap("Con: " + who, y + 18, 860, 42, "300 32px Poppins, sans-serif", "#1d2b2a");
      if (when) y = wrap("Cuándo: " + when, y + 10, 860, 42, "300 32px Poppins, sans-serif", "#1d2b2a");
      var img = new Image();
      img.onload = function () { var s = 420, hh = img.height * s / img.width; x.drawImage(img, W - s - 80, H - hh - 150, s, hh); end(); };
      img.onerror = end; img.src = b.img;
      function end() {
        x.font = "300 28px Poppins, sans-serif"; x.fillStyle = "#5b6b6a"; x.textAlign = "left";
        x.fillText("Aprendí con Xlatierra", 110, H - 190); x.font = "600 30px Poppins, sans-serif"; x.fillStyle = "#125d55"; x.fillText(b.footer || "#Xlatierra", 110, H - 145);
        var url; try { url = cv.toDataURL("image/png"); } catch (e) { url = null; }
        w.querySelector(".c-dl").innerHTML = '<div class="nav">' + (url ? '<a class="btn btn-primary" download="Mi_compromiso_Xlatierra.png" href="' + url + '">Descargar mi tarjeta</a>' : '') + '<button type="button" class="btn btn-ghost c-share">Compartir</button></div><p class="hint">Súbela a tus historias y etiqueta a @x.latierra.</p>';
        w.querySelector(".c-share").onclick = function () {
          var txt = "Mi compromiso por el clima: " + (what || step) + " 🌱 #Xlatierra";
          if (navigator.share) navigator.share({ title: "Xlatierra", text: txt, url: location.href.split("#")[0] }).catch(function () {});
          else { try { navigator.clipboard.writeText(txt); alert("Texto copiado"); } catch (e) {} }
        };
      }
    };
    return w;
  }
  function roundRect(x, a, b2, w2, h2, r) { x.beginPath(); x.moveTo(a + r, b2); x.arcTo(a + w2, b2, a + w2, b2 + h2, r); x.arcTo(a + w2, b2 + h2, a, b2 + h2, r); x.arcTo(a, b2 + h2, a, b2, r); x.arcTo(a, b2, a + w2, b2, r); x.closePath(); }

  /* ---------- Recursos ---------- */
  function resources() {
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Recursos complementarios</small></div><h1>Recursos complementarios</h1>' +
      '<p>Informes, cursos y datos confiables para seguir aprendiendo. Priorizamos materiales en español; los que están en inglés lo indican.</p>';
    C.resources.forEach(function (c) { h += '<div class="read"><h4>' + c.cat + '</h4>' + c.items.map(resItem).join("") + '</div>'; });
    app.innerHTML = h; toTop();
  }

  /* ---------- Privacidad ---------- */
  function privacy() {
    app.innerHTML = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a></div><h1>Tus datos en este curso</h1>' +
      '<div class="box"><p><strong>Qué se guarda en tu dispositivo:</strong> tu avance, tus respuestas y tus reflexiones se guardan solo en este navegador para que puedas continuar después. Nadie más las ve.</p>' +
      '<p><strong>Qué se envía a Xlatierra (solo si aceptaste):</strong> de forma anónima, tu rango de edad, ocupación, país/estado si lo escribiste, tus respuestas de autoevaluación antes y después, tu valoración de cada lección, tu resultado del cuestionario, el primer paso que elegiste y tu plan de acción. No enviamos tu nombre ni el del certificado.</p>' +
      '<p><strong>Para qué:</strong> para mejorar el curso y medir si ayuda a aprender y actuar.</p>' +
      '<p><strong>Contacto:</strong> ' + esc(CFG.contactEmail || "") + '</p>' +
      '<p class="hint">Si eres menor de 18 años, te recomendamos comentarlo con tu madre, padre o tutor antes de aceptar.</p></div>';
    toTop();
  }

  /* ---------- Cuestionario final ---------- */
  function quiz() {
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Cuestionario final</small></div><h1>Cuestionario final</h1>' +
      '<p>' + QUIZ.length + ' preguntas. Necesitas ' + Math.round((CFG.passScore || 0.7) * 100) + '% o más para obtener tu certificado. Puedes intentarlo las veces que quieras.</p><div id="q"></div>' +
      '<button class="btn btn-primary" id="send" disabled>Enviar respuestas</button><p class="hint" id="qhint"></p><div id="res"></div>';
    app.innerHTML = h; toTop();
    var ans = {}, box = document.getElementById("q"), sendBtn = document.getElementById("send"), qhint = document.getElementById("qhint");
    function upd() { var n = Object.keys(ans).length; sendBtn.disabled = n < QUIZ.length; qhint.textContent = n < QUIZ.length ? "Respondidas: " + n + " de " + QUIZ.length : ""; }
    QUIZ.forEach(function (q, i) {
      var w = el('<div class="box"><p><strong>' + (i + 1) + '. ' + q.q + '</strong></p><div class="opts"></div></div>');
      q.o.forEach(function (o, j) {
        var b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = o;
        b.onclick = function () { ans[i] = j; w.querySelectorAll(".opt").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel"); upd(); };
        w.querySelector(".opts").appendChild(b);
      });
      box.appendChild(w);
    });
    upd();
    sendBtn.onclick = function () {
      var ok = 0;
      QUIZ.forEach(function (q, i) {
        box.children[i].querySelectorAll(".opt").forEach(function (b, j) { b.disabled = true; b.classList.remove("sel"); if (j === q.a) b.classList.add("ok"); else if (j === ans[i]) b.classList.add("bad"); });
        if (ans[i] === q.a) ok++;
      });
      var sc = ok / QUIZ.length, pass = sc >= (CFG.passScore || 0.7);
      S.attempts = (S.attempts || 0) + 1;
      if (!S.quiz || sc > S.quiz.score) S.quiz = { score: sc, pass: pass, date: new Date().toISOString() };
      save();
      send("cuestionario", { puntaje: Math.round(sc * 100) + "%", aprobado: pass ? "sí" : "no", intento: S.attempts });
      sendBtn.style.display = "none"; qhint.textContent = "";
      document.getElementById("res").innerHTML = '<div class="box" style="text-align:center"><h2>' + ok + ' de ' + QUIZ.length + '</h2><p>' +
        (pass ? '¡Aprobaste! 🌱' : 'Te faltó poco. Revisa las respuestas marcadas, repasa las lecciones y vuelve a intentarlo.') + '</p>' +
        (pass ? '<a class="btn btn-primary" href="#certificado">Obtener mi certificado →</a>' : '<button class="btn btn-primary" id="retry">Intentar de nuevo</button>') + '</div>';
      var rt = document.getElementById("retry"); if (rt) rt.onclick = function () { quiz(); };
      document.getElementById("res").scrollIntoView({ behavior: "smooth" });
    };
  }

  /* ---------- Certificado ---------- */
  function cert() {
    var gc = ch(C.course.certGuide || C.course.heroGuide || "espiritu");
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Certificado</small></div><h1>¡Lo lograste! 🌱</h1>' +
      (gc ? '<div class="guide">' + avatar(gc, "", "feliz") + '<div><strong>' + gc.name + '</strong><em>«' + gc.quote + '»</em></div></div>' : '');
    if (!S.post) h += '<div class="box"><h3>Último paso: ¿cómo te sientes ahora?</h3><p>Las mismas preguntas del inicio, para ver tu cambio.</p><div id="post"></div><button class="btn btn-primary" id="post-go" disabled>Guardar</button></div>';
    h += '<div id="change"></div>';
    if (S.post) h += '<div class="box"><label><strong>Tu nombre como quieres que aparezca en el certificado</strong></label><input type="text" id="name" maxlength="60" value="' + esc(S.cert && S.cert.name) + '" style="margin:10px 0"><button class="btn btn-primary" id="make">Generar certificado</button><p class="hint">Tu nombre solo se usa para dibujar el certificado en tu dispositivo. No se envía a ningún lado.</p></div><canvas id="cert" width="1600" height="1130" style="display:none"></canvas><div id="dl"></div>';
    app.innerHTML = h; toTop();
    if (!S.post) {
      var tmp = {};
      likert(document.getElementById("post"), tmp, function () { document.getElementById("post-go").disabled = Object.keys(tmp).length < SELF.length; });
      document.getElementById("post-go").onclick = function () {
        S.post = tmp; save();
        if (!S.finalSent) {
          var d = {}; SELF.forEach(function (q, i) { d["antes_" + (i + 1)] = S.pre ? S.pre[i] : ""; d["despues_" + (i + 1)] = tmp[i]; });
          var lp = LESSONS[LESSONS.length - 1], pk = lp.blocks.filter(function (b) { return b.t === "pick"; })[0];
          d.primer_paso = (pk && S.pick[pk.id] != null) ? pk.o[S.pick[pk.id]] : "";
          var P = C.course.plan || ["r15a", "r15b", "r15c", "r15d"];
          d.que_hare = S.reflect[P[0]] || ""; d.con_quien = S.reflect[P[1]] || ""; d.cuando = S.reflect[P[2]] || ""; d.como_sabre = S.reflect[P[3]] || "";
          send("final", d); S.finalSent = true; save();
        }
        cert();
      };
      return;
    }
    if (S.pre && S.post) {
      var c = '<div class="box"><h3>Tu avance</h3>';
      SELF.forEach(function (q, i) { var a = S.pre[i] || 0, b = S.post[i] || 0, d = b - a; c += '<p style="margin-bottom:8px">' + q + '<br><strong>' + a + ' → ' + b + '</strong> ' + (d > 0 ? '(+' + d + ') 📈' : '') + '</p>'; });
      document.getElementById("change").innerHTML = c + '</div>';
    }
    document.getElementById("make").onclick = function () {
      var n = document.getElementById("name").value.trim(); if (!n) { alert("Escribe tu nombre"); return; }
      if (!S.cert || S.cert.name !== n) S.cert = { name: n, code: "XLT-" + C.course.id.toUpperCase() + "-" + Math.random().toString(36).slice(2, 8).toUpperCase(), date: new Date().toISOString() };
      save(); draw();
    };
    if (S.cert) draw();
  }

  function draw() {
    var cv = document.getElementById("cert"), x = cv.getContext("2d"), W = 1600, H = 1130; cv.style.display = "block";
    var dt = new Date(S.cert.date).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
    function t(s, y, f, col) { x.font = f; x.fillStyle = col; x.textAlign = "center"; x.fillText(s, W / 2, y); }
    function base() {
      x.fillStyle = "#fdf8ef"; x.fillRect(0, 0, W, H);
      x.strokeStyle = "#125d55"; x.lineWidth = 14; x.strokeRect(40, 40, W - 80, H - 80);
      x.strokeStyle = "#cfad30"; x.lineWidth = 3; x.strokeRect(68, 68, W - 136, H - 136);
      x.fillStyle = "#76a8b8"; x.fillRect(68, 68, W - 136, 16);
    }
    function text() {
      t("Educación climática en español", 330, "300 28px Poppins, sans-serif", "#5b8f9f");
      t("CONSTANCIA DE FINALIZACIÓN", 410, "600 30px Poppins, sans-serif", "#b86544");
      t("Se otorga a", 475, "300 28px Poppins, sans-serif", "#1d2b2a");
      t(S.cert.name, 575, "700 76px Caudex, serif", "#125d55");
      x.strokeStyle = "#cfad30"; x.lineWidth = 2; x.beginPath(); x.moveTo(400, 605); x.lineTo(1200, 605); x.stroke();
      t("por completar " + C.course.label + ": " + C.course.title, 675, "400 32px Poppins, sans-serif", "#1d2b2a");
      t(LESSONS.length + " lecciones · calificación final de " + Math.round(S.quiz.score * 100) + "%", 725, "300 26px Poppins, sans-serif", "#1d2b2a");
      if (firma.complete && firma.naturalWidth) { var fh = 95, fw = Math.min(420, firma.naturalWidth * fh / firma.naturalHeight); x.drawImage(firma, 395 - fw / 2, 878 - fh, fw, fh); }
      x.strokeStyle = "#125d55"; x.lineWidth = 2; x.beginPath(); x.moveTo(170, 880); x.lineTo(620, 880); x.stroke();
      x.textAlign = "center"; x.font = "600 26px Poppins, sans-serif"; x.fillStyle = "#125d55"; x.fillText(CFG.certSigner || "", 395, 918);
      x.font = "300 22px Poppins, sans-serif"; x.fillStyle = "#1d2b2a"; x.fillText(CFG.certSignerRole || "", 395, 952);
      if (seal.complete && seal.naturalWidth) { x.save(); x.globalAlpha = 0.9; x.beginPath(); x.arc(W / 2 + 40, 900, 58, 0, Math.PI * 2); x.clip(); x.drawImage(seal, W / 2 - 18, 842, 116, 116); x.restore(); x.strokeStyle = "#cfad30"; x.lineWidth = 3; x.beginPath(); x.arc(W / 2 + 40, 900, 60, 0, Math.PI * 2); x.stroke(); }
      x.textAlign = "right"; x.fillText(dt, W - 170, 920); x.fillText("Folio: " + S.cert.code, W - 170, 955);
      var url; try { url = cv.toDataURL("image/png"); } catch (e) { url = null; }
      document.getElementById("dl").innerHTML = '<div class="nav">' + (url ? '<a class="btn btn-primary" download="Xlatierra_Certificado_' + C.course.id + '.png" href="' + url + '">Descargar certificado</a>' : '') +
        '<button class="btn btn-ghost" id="share">Compartir mi logro</button></div>';
      document.getElementById("share").onclick = function () {
        var txt = "Terminé el " + C.course.label + " de Xlatierra: " + C.course.title + " 🌱";
        if (navigator.share) navigator.share({ title: "Xlatierra", text: txt, url: location.href.split("#")[0] }).catch(function () {});
        else { try { navigator.clipboard.writeText(txt + " " + location.href.split("#")[0]); alert("Texto copiado para compartir"); } catch (e) {} }
      };
    }
    base();
    var logo = new Image();
    logo.onload = function () { var h = 170, w = logo.width * h / logo.height; x.drawImage(logo, W / 2 - w / 2, 110, w, h); text(); };
    logo.onerror = function () { t("XLATIERRA", 260, "700 64px Caudex, serif", "#125d55"); text(); };
    var seal = new Image();
    var firma = new Image();
    firma.onload = firma.onerror = function () { logo.src = "img/logo-rectangular.png"; };
    seal.onload = seal.onerror = function () { firma.src = "img/firma.png"; };
    seal.src = "img/logo-circular.png";
  }

  /* ---------- Arranque ---------- */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(route); else route();
})();
