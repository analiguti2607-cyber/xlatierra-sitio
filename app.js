/* =====================================================================
   XLATIERRA · MOTOR DEL CURSO
   No necesitas editar este archivo. Los textos están en contenido.js
   y la configuración en config.js.
   ===================================================================== */
(function () {
  "use strict";
  var C = window.XLT_CONTENT, CFG = window.XLT_CONFIG || {};
  var LESSONS = C.lessons, QUIZ = C.quiz, SELF = C.self;
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
  function avatar(c, cls) { return c ? '<img class="av ' + (cls || '') + '" src="' + c.img + '" alt="' + c.name + '" title="' + c.name + (c.origin ? ' · ' + c.origin : '') + '">' : ''; }
  function idx(id) { for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return i; return -1; }

  /* ---------- Router (permite usar el botón «atrás» del navegador) ---------- */
  function route() {
    var h = (location.hash || "").replace("#", "");
    if (h.indexOf("leccion-") === 0) { var i = idx(h.slice(8)); if (i >= 0) return lesson(i); }
    if (h === "recursos") return resources();
    if (h === "cuestionario") return allDone() ? quiz() : home();
    if (h === "certificado") return (S.quiz && S.quiz.pass) ? cert() : home();
    if (h === "privacidad") return privacy();
    home();
  }
  window.addEventListener("hashchange", route);

  /* ---------- Portada del curso ---------- */
  function home() {
    var pct = Math.round(100 * doneCount() / LESSONS.length);
    var g0 = ch("espiritu");
    var h = '<div class="hero"><div class="hero-row"><div><h1>' + C.course.label + ': ' + C.course.title + '</h1><p>' + C.course.subtitle + '</p>' +
      '<div class="tags"><span>' + LESSONS.length + ' lecciones</span><span>' + C.course.totalTime + '</span><span>Gratis</span><span>Certificado al aprobar</span></div></div>' +
      (g0 ? '<figure class="hero-guide">' + avatar(g0, "big") + '<figcaption>«' + g0.quote + '»</figcaption></figure>' : '') + '</div></div>';
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
      LESSONS.forEach(function (l, i) {
        if (l.unit !== u.id) return;
        var d = S.done[l.id], locked = !S.pre;
        h += '<div class="card' + (d ? ' done' : '') + (locked ? ' locked' : '') + '" data-go="' + l.id + '"><div class="num">' + (d ? '✓' : (i + 1)) + '</div><div class="grow"><strong>' + l.title + '</strong><br><small>' + l.time + (d ? ' · Completada' : '') + '</small></div><span>›</span></div>';
      });
    });
    var qs = allDone() ? (S.quiz && S.quiz.pass ? 'Aprobado · ' + Math.round(S.quiz.score * 100) + '%' : 'Disponible') : 'Se desbloquea al terminar las ' + LESSONS.length + ' lecciones';
    h += '<h3 class="unit-h">Cierre</h3><div class="card' + (allDone() ? '' : ' locked') + '" data-quiz="1"><div class="num">★</div><div class="grow"><strong>Cuestionario final y certificado</strong><br><small>' + qs + '</small></div><span>›</span></div>';
    h += '<div class="card" data-res="1"><div class="num">📚</div><div class="grow"><strong>Recursos complementarios</strong><br><small>Informes, cursos y datos para seguir aprendiendo</small></div><span>›</span></div>';
    app.innerHTML = h; toTop();
    app.querySelectorAll("[data-go]").forEach(function (c) { c.onclick = function () { if (S.pre) go("leccion-" + c.dataset.go); }; });
    app.querySelector("[data-quiz]").onclick = function () { if (allDone()) go(S.quiz && S.quiz.pass ? "certificado" : "cuestionario"); };
    app.querySelector("[data-res]").onclick = function () { go("recursos"); };
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
    var gl = guideOf(L), firstOfUnit = i === 0 || LESSONS[i - 1].unit !== L.unit || L.guide;
    h += '<small class="hint">' + (unit ? unit.title : '') + '</small><h1>' + L.title + '</h1>';
    if (gl) h += '<div class="guide">' + avatar(gl) + '<div><small>Te acompaña</small><strong>' + gl.name + '</strong> · <span class="verb">' + gl.verb + '</span>' + (firstOfUnit ? '<em>«' + gl.quote + '»</em>' : '') + '</div></div>';
    h += '<div id="body"></div>';
    h += '<div class="box"><strong>¿Qué te pareció esta lección?</strong><div class="rate" id="rate"></div></div>';
    h += '<p class="src"><strong>Fuentes:</strong> ' + L.sources + '</p>';
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
        var g = el('<div class="box guess"><span class="lbl">¡Adivina!</span><p><strong>' + b.q + '</strong></p><div class="opts"></div><div class="out"></div></div>');
        var opts = g.querySelector(".opts"), out = g.querySelector(".out");
        var reveal = function (pick) {
          opts.querySelectorAll("button").forEach(function (x, j) { x.disabled = true; if (j === b.a) x.classList.add("ok"); else if (j === pick) x.classList.add("bad"); });
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
    }
  }
  function resItem(x) {
    var vid = x.type === "video" ? '<span class="tag vid">▶ Video' + (x.dur ? ' · ' + x.dur : '') + '</span> ' : '';
    return '<a class="res" href="' + x.url + '" target="_blank" rel="noopener"><strong>' + x.title + '</strong> ' + vid + '<span class="tag' + (x.lang === "EN" ? ' en' : '') + '">' + (x.lang === "EN" ? 'En inglés' : 'Español') + '</span><small>' + x.desc + '</small></a>';
  }

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
    var gc = ch("espiritu");
    var h = '<div class="toprow"><a class="btn btn-ghost" href="#">← Índice</a><small>Certificado</small></div><h1>¡Lo lograste! 🌱</h1>' +
      (gc ? '<div class="guide">' + avatar(gc) + '<div><strong>' + gc.name + '</strong><em>«' + gc.quote + '»</em></div></div>' : '');
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
          d.que_hare = S.reflect.r15a || ""; d.con_quien = S.reflect.r15b || ""; d.cuando = S.reflect.r15c || ""; d.como_sabre = S.reflect.r15d || "";
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
      x.textAlign = "left"; x.font = "600 26px Poppins, sans-serif"; x.fillStyle = "#125d55"; x.fillText(CFG.certSigner || "", 170, 920);
      x.font = "300 22px Poppins, sans-serif"; x.fillStyle = "#1d2b2a"; x.fillText(CFG.certSignerRole || "", 170, 955);
      x.strokeStyle = "#125d55"; x.lineWidth = 2; x.beginPath(); x.moveTo(170, 880); x.lineTo(620, 880); x.stroke();
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
    logo.src = "img/logo-rectangular.png";
  }

  /* ---------- Arranque ---------- */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(route); else route();
})();
