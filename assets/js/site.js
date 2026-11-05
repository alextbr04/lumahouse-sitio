/* ==========================================================================
   LUMA HOUSE · SITIO — idioma, navegación, tarjetas y reproductor
   Los textos fijos del sitio están en DICT (es / en).
   Los proyectos están en proyectos.js.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- textos ---------------- */
  var DICT = {
    es: {
      "nav.work": "Trabajo", "nav.studio": "Estudio", "nav.services": "Servicios", "nav.contact": "Contacto",
      "hero.eyebrow": "Casa productora · México",
      "hero.title": "Producción audiovisual <em>con intención.</em>",
      "hero.sub": "Cine para el golf y para las marcas que saben que su imagen vale tanto como su producto.",
      "hero.meta": "Torneos · Clubes · Documental · Marcas premium", "hero.cta1": "Ver trabajo", "hero.cta2": "Hablemos", "hero.rec": "REC",
      "studio.eyebrow": "Estudio",
      "studio.title": "El lujo no siempre grita.",
      "studio.p1": "Luma House es una casa productora cinematográfica nacida en el golf. Filmamos el golf con el lenguaje del cine, y llevamos ese mismo criterio a hospitalidad, desarrollos inmobiliarios y marcas premium.",
      "studio.p2": "Creemos en la intención de cada toma. En la luz correcta. En el ritmo adecuado.",
      "studio.p3": "<strong>No hacemos videos para llenar espacios. Creamos contenido que define cómo te perciben.</strong>",
      "services.eyebrow": "Servicios", "services.title": "Cuatro formas de trabajar con nosotros",
      "s1.t": "Películas de marca", "s1.p": "La pieza que define cómo se ve tu marca. Dirección, guion, rodaje, color y máster.",
      "s2.t": "Torneos y eventos", "s2.p": "Aftermovie, reels verticales y fotografía, entregados mientras el momento sigue vivo.",
      "s3.t": "Documental", "s3.p": "Historias reales con estructura narrativa y acabado de cine.",
      "s4.t": "Contenido continuo", "s4.p": "Jornadas planeadas que alimentan redes, pauta, sitio y cursos durante meses.",
      "plans.eyebrow": "Paquetes mensuales", "plans.title": "Contenido cada mes",
      "plans.sub": "Producción continua para tus redes, con el mismo criterio cinematográfico.",
      "plans.per": "al mes · contrato de 6 meses", "plans.cur": "USD + IVA", "plans.videos": "videos", "plans.carousels": "carruseles", "plans.cta": "Lo quiero",
      "p1.name": "Esencial", "p2.name": "Premium", "nav.plans": "Paquetes",
      "p1.wa": "Hola, me interesa el paquete Esencial de Luma House (8 videos y 2 carruseles al mes).",
      "p2.wa": "Hola, me interesa el paquete Premium de Luma House (12 videos y 4 carruseles al mes).",
      "custom.eyebrow": "Por proyecto", "custom.title": "¿Un proyecto en específico?",
      "custom.text": "Cotizamos piezas individuales: un video cinematográfico, la cobertura de un torneo o la pieza que tu marca necesite.",
      "custom.cta": "Cotizar proyecto", "custom.wa": "Hola, quiero cotizar un proyecto con Luma House.",
      "brands.title": "Marcas que han confiado en nosotros",
      "work.eyebrow": "Trabajo", "work.title": "Lo que hemos filmado", "work.all": "Ver todo el portafolio",
      "portfolio.eyebrow": "Portafolio", "portfolio.title": "Todo el trabajo, en un solo lugar.",
      "portfolio.sub": "Da clic en cualquier pieza para verla aquí mismo.",
      "f.todos": "Todo", "f.torneos": "Torneos", "f.clubes": "Clubes", "f.documental": "Documental", "f.contenido": "Contenido", "f.educativo": "Educativo", "f.original": "Producción original",
      "card.soon": "Próximamente", "card.vertical": "Vertical",
      "player.close": "Cerrar ✕", "player.prev": "← Anterior", "player.next": "Siguiente →",
      "player.empty": "Disponible muy pronto",
      "contact.eyebrow": "Contacto", "contact.title": "Cuéntanos qué quieres comunicar.",
      "contact.sub": "Diseñamos la pieza, la producimos con criterio cinematográfico y la entregamos lista para tus canales.",
      "contact.wa": "WhatsApp", "contact.mail": "Correo",
      "footer.line": "Luma House · Casa productora · México"
    },
    en: {
      "nav.work": "Work", "nav.studio": "Studio", "nav.services": "Services", "nav.contact": "Contact",
      "hero.eyebrow": "Production house · Mexico",
      "hero.title": "Filmmaking <em>with intent.</em>",
      "hero.sub": "Cinema for golf, and for brands that know their image is worth as much as their product.",
      "hero.meta": "Tournaments · Clubs · Documentary · Premium brands", "hero.cta1": "See the work", "hero.cta2": "Let’s talk", "hero.rec": "REC",
      "studio.eyebrow": "Studio",
      "studio.title": "Luxury doesn’t always shout.",
      "studio.p1": "Luma House is a cinematic production house born on the golf course. We film the game the way cinema is filmed, and bring the same eye to hospitality, real estate and premium brands.",
      "studio.p2": "We believe in the intent behind every shot. The right light. The right rhythm.",
      "studio.p3": "<strong>We don’t make videos to fill space. We make content that builds perception.</strong>",
      "services.eyebrow": "Services", "services.title": "Four ways to work with us",
      "s1.t": "Hero & brand films", "s1.p": "The piece that defines how your brand looks. Direction, script, shoot, color and master.",
      "s2.t": "Tournaments & events", "s2.p": "Aftermovie, vertical reels and photography, delivered while the moment is still alive.",
      "s3.t": "Documentary", "s3.p": "Real stories with narrative structure and a cinematic finish.",
      "s4.t": "Ongoing content", "s4.p": "Planned shoot days that feed social, ads, web and courses for months.",
      "plans.eyebrow": "Monthly packages", "plans.title": "Content, every month",
      "plans.sub": "Ongoing production for your social channels, with the same cinematic eye.",
      "plans.per": "per month · 6-month contract", "plans.cur": "USD + VAT", "plans.videos": "videos", "plans.carousels": "carousels", "plans.cta": "I want it",
      "p1.name": "Essential", "p2.name": "Premium", "nav.plans": "Packages",
      "p1.wa": "Hi, I'm interested in Luma House's Essential package (8 videos and 2 carousels per month).",
      "p2.wa": "Hi, I'm interested in Luma House's Premium package (12 videos and 4 carousels per month).",
      "custom.eyebrow": "Per project", "custom.title": "Have a specific project in mind?",
      "custom.text": "We quote individual pieces: a cinematic film, full tournament coverage, or whatever your brand needs.",
      "custom.cta": "Get a quote", "custom.wa": "Hi, I'd like a quote for a project with Luma House.",
      "brands.title": "Brands that have trusted us",
      "work.eyebrow": "Work", "work.title": "What we’ve filmed", "work.all": "See the full portfolio",
      "portfolio.eyebrow": "Portfolio", "portfolio.title": "All the work, in one place.",
      "portfolio.sub": "Click any piece to watch it right here.",
      "f.todos": "All", "f.torneos": "Tournaments", "f.clubes": "Clubs", "f.documental": "Documentary", "f.contenido": "Content", "f.educativo": "Education", "f.original": "Original production",
      "card.soon": "Coming soon", "card.vertical": "Vertical",
      "player.close": "Close ✕", "player.prev": "← Previous", "player.next": "Next →",
      "player.empty": "Available very soon",
      "contact.eyebrow": "Contact", "contact.title": "Tell us what you want to say.",
      "contact.sub": "We design the piece, shoot it with a cinematic eye and deliver it ready for your channels.",
      "contact.wa": "WhatsApp", "contact.mail": "Email",
      "footer.line": "Luma House · Production house · Mexico"
    }
  };

  /* Catálogo (proyectos.js) + lo que genera el monitor de la carpeta Portafolio (videos.js).
     Con videos.js, sólo se ven las piezas con video en la carpeta (y las bloqueadas). */
  var GEN = window.LUMA_VIDEOS || null;
  var CATALOGO = (window.LUMA_PROYECTOS || []).concat(GEN && GEN.nuevos ? GEN.nuevos : []);
  CATALOGO.forEach(function (p) {
    var v = GEN && GEN.videos ? GEN.videos[p.id] : null;
    if (v) {
      p.video = { tipo: v.tipo, id: v.id };
      if (!p.poster && v.poster) p.poster = v.poster;
      if (typeof v.vertical === "boolean") p.vertical = v.vertical;
    }
    p.visible = !GEN || !!p.bloqueado || !!v;
  });
  var PROYECTOS = CATALOGO.filter(function (p) { return p.visible && !p.bloqueado; })
    .concat(CATALOGO.filter(function (p) { return p.visible && p.bloqueado; }));
  var lang = "es";

  function readLang() {
    var saved = null;
    try { saved = localStorage.getItem("luma-lang"); } catch (e) {}
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "es" || q === "en") return q;
    if (saved === "es" || saved === "en") return saved;
    return "es";
  }

  function t(key) { return (DICT[lang] && DICT[lang][key]) || DICT.es[key] || ""; }
  function L(obj) { return obj ? (obj[lang] || obj.es || "") : ""; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem("luma-lang", lang); } catch (e) {}
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/524424222658?text=" + encodeURIComponent(t(a.dataset.wa)); });
    renderGrids();
    if (current) fillPlayer(current);
  }

  /* ---------------- navegación ---------------- */
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("is-solid", window.scrollY > 40 || document.body.dataset.page === "portafolio"); }
  window.addEventListener("scroll", onScroll, { passive: true });
  var burger = document.querySelector(".nav__burger");
  if (burger) burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("is-open"); });
  });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });

  /* ---------------- aparición ---------------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function watch(root) {
    (root || document).querySelectorAll(".reveal:not(.is-in)").forEach(function (el) { io ? io.observe(el) : el.classList.add("is-in"); });
  }

  /* ---------------- tarjetas ---------------- */
  var filter = "todos";
  var linkBase = document.body.dataset.linkBase || ""; // en el inicio: "portafolio/"
  var root = document.body.dataset.root || "";         // en /portafolio/: "../"
  function asset(path) { return /^(https?:)?\/\//.test(path) ? path : root + "assets/" + path.replace(/^\/?assets\//, ""); }

  function cardHTML(p, i) {
    var media = p.poster
      ? '<img src="' + esc(/^https?:\/\//.test(p.poster) ? p.poster : asset("posters/" + p.poster)) + '" alt="' + esc(L(p.titulo)) + '" loading="lazy">'
      : '<div class="card__ph"><span>' + esc(t("f." + p.categoria) || L(p.cliente)) + '</span></div>';
    var hasVideo = p.video && (p.video.id || p.video.src);
    var badge = p.bloqueado ? '<span class="card__badge">' + esc(t("card.soon")) + '</span>'
      : "";
    var tag = p.bloqueado ? "div" : "a";
    var href = p.bloqueado ? "" : ' href="' + linkBase + "#" + p.id + '"';
    return '<' + tag + ' class="card reveal' + (p.bloqueado ? " card--locked" : "") + '" id="' + p.id + '" data-id="' + p.id + '"' + href +
      ' style="transition-delay:' + ((i % 3) * 90) + 'ms">' +
      '<div class="card__media">' + media + badge + '<i class="card__tally"></i>' + (p.bloqueado ? "" : '<span class="card__play" aria-hidden="true"></span>') + '</div>' +
      '<div class="card__info"><div><h3>' + esc(L(p.titulo)) + '</h3><p class="card__meta">' + esc(L(p.cliente)) + '</p></div></div>' +
      '</' + tag + '>';
  }

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  // Carrusel del inicio: una diapositiva grande por pieza
  function slideHTML(p, i) {
    var media = p.poster
      ? '<img src="' + esc(/^https?:\/\//.test(p.poster) ? p.poster : asset("posters/" + p.poster)) + '" alt="' + esc(L(p.titulo)) + '"' + (i > 1 ? ' loading="lazy"' : "") + '>'
      : '<div class="card__ph"><span>' + esc(t("f." + p.categoria) || L(p.cliente)) + '</span></div>';
    var tag = p.bloqueado ? "div" : "a";
    var href = p.bloqueado ? "" : ' href="#' + p.id + '"';
    return '<' + tag + ' class="slide' + (p.bloqueado ? " slide--locked" : "") + (p.vertical ? " slide--vertical" : "") + '" id="' + p.id + '" data-id="' + p.id + '"' + href + '>' +
      '<div class="slide__media' + (p.vertical && p.poster ? ' is-vertical" style="--bg:url(\'' + esc(/^https?:\/\//.test(p.poster) ? p.poster : asset("posters/" + p.poster)) + '\')"' : '"') + '>' + media +
      (p.bloqueado ? '<span class="card__badge">' + esc(t("card.soon")) + '</span>' : '<span class="slide__play" aria-hidden="true"></span>') + '</div>' +
      '<div class="slide__info"><span class="mono slide__num">' + pad2(i + 1) + '</span><div><h3>' + esc(L(p.titulo)) + '</h3><p class="slide__meta">' + esc(L(p.cliente)) + '</p></div></div>' +
      '</' + tag + '>';
  }

  // Inicio: los destacados con video; si son menos de 6, se completa con las demás piezas visibles
  function destacados() {
    var list = PROYECTOS.filter(function (p) { return p.destacado; });
    PROYECTOS.forEach(function (p) { if (list.length < 6 && list.indexOf(p) < 0) list.push(p); });
    list = list.slice(0, 6);
    return list.filter(function (p) { return !p.bloqueado; }).concat(list.filter(function (p) { return p.bloqueado; }));
  }

  function renderGrids() {
    document.querySelectorAll("[data-grid]").forEach(function (grid) {
      var mode = grid.getAttribute("data-grid");
      if (mode === "reel") {
        grid.innerHTML = PROYECTOS.map(slideHTML).join("");
        reelCount();
      } else {
        var list = mode === "destacados" ? destacados() : PROYECTOS.filter(function (p) {
          if (filter === "todos") return true;
          return p.categoria === filter;
        });
        grid.innerHTML = list.map(cardHTML).join("");
        watch(grid);
      }
      if (!linkBase) grid.querySelectorAll("a.card, a.slide").forEach(function (a) {
        a.addEventListener("click", function (ev) { ev.preventDefault(); openById(a.dataset.id, true); });
      });
    });
    document.querySelectorAll(".filters button").forEach(function (b) {
      b.textContent = t("f." + b.dataset.filter);
      b.hidden = b.dataset.filter !== "todos" && !PROYECTOS.some(function (p) { return p.categoria === b.dataset.filter; });
      b.setAttribute("aria-pressed", String(b.dataset.filter === filter));
    });
  }
  document.querySelectorAll(".filters button").forEach(function (b) {
    b.addEventListener("click", function () { filter = b.dataset.filter; renderGrids(); });
  });

  /* ---------------- carrusel ---------------- */
  var track = document.querySelector('[data-grid="reel"]');
  function reelIndex() {
    if (!track || !track.children.length) return 0;
    var x = track.scrollLeft, best = 0, dist = Infinity;
    Array.prototype.forEach.call(track.children, function (el, i) {
      var d = Math.abs(el.offsetLeft - track.children[0].offsetLeft - x);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  }
  function reelCount() {
    var c = document.querySelector("[data-reel-count]");
    if (!c || !track) return;
    var n = track.children.length;
    var i = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4 ? n - 1 : reelIndex();
    c.textContent = pad2(i + 1) + " / " + pad2(n);
  }
  function reelGo(dir) {
    var i = Math.max(0, Math.min(track.children.length - 1, reelIndex() + dir));
    track.scrollTo({ left: track.children[i].offsetLeft - track.children[0].offsetLeft, behavior: "smooth" });
  }
  if (track) {
    track.addEventListener("scroll", function () { window.requestAnimationFrame(reelCount); }, { passive: true });
    document.querySelector("[data-reel-prev]").addEventListener("click", function () { reelGo(-1); });
    document.querySelector("[data-reel-next]").addEventListener("click", function () { reelGo(1); });
    window.addEventListener("resize", reelCount);
  }

  /* ---------------- reproductor ---------------- */
  var player = document.getElementById("player");
  var current = null;

  function visibleList() {
    return PROYECTOS.filter(function (p) { return !p.bloqueado && (filter === "todos" || p.categoria === filter); });
  }

  function embed(p) {
    var v = p.video || {};
    if (v.tipo === "vimeo" && v.id) return '<iframe src="https://player.vimeo.com/video/' + encodeURIComponent(v.id) + '?autoplay=1&title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + esc(L(p.titulo)) + '"></iframe>';
    if (v.tipo === "youtube" && v.id) return '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1&rel=0&modestbranding=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + esc(L(p.titulo)) + '"></iframe>';
    if (v.tipo === "wistia" && v.id) return '<iframe src="https://fast.wistia.net/embed/iframe/' + encodeURIComponent(v.id) + '?autoPlay=true&playerColor=B08D57&doNotTrack=true" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + esc(L(p.titulo)) + '"></iframe>';
    if (v.tipo === "mp4" && v.src) return '<video src="' + esc(asset("video/" + v.src)) + '" controls autoplay playsinline></video>';
    return '<div class="player__empty"><i></i><span class="mono">' + esc(t("player.empty")) + '</span></div>';
  }

  function fillPlayer(p) {
    if (!player) return;
    var frame = player.querySelector(".player__frame");
    frame.classList.toggle("is-vertical", !!p.vertical);
    frame.innerHTML = embed(p);
    player.querySelector("[data-p-title]").textContent = L(p.titulo);
    player.querySelector("[data-p-client]").textContent = L(p.cliente);
    player.querySelector("[data-p-text]").textContent = L(p.texto);
  }

  function openById(id, pushHash) {
    var p = CATALOGO.find(function (x) { return x.id === id || (x.alias && x.alias.indexOf(id) > -1); });
    if (!p || p.bloqueado || !player) return;
    current = p;
    fillPlayer(p);
    player.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (pushHash) history.replaceState(null, "", "#" + p.id);
    player.querySelector(".player__close").focus();
  }

  function closePlayer() {
    if (!player || !current) return;
    player.classList.remove("is-open");
    player.querySelector(".player__frame").innerHTML = "";
    document.body.style.overflow = "";
    var card = document.getElementById(current.id);
    history.replaceState(null, "", location.pathname + location.search);
    current = null;
    if (card) card.focus();
  }

  function step(dir) {
    var list = visibleList();
    var i = list.indexOf(current);
    if (i < 0) return;
    openById(list[(i + dir + list.length) % list.length].id, true);
  }

  if (player) {
    player.querySelector(".player__close").addEventListener("click", closePlayer);
    player.querySelector("[data-prev]").addEventListener("click", function () { step(-1); });
    player.querySelector("[data-next]").addEventListener("click", function () { step(1); });
    player.addEventListener("click", function (e) { if (e.target === player) closePlayer(); });
    document.addEventListener("keydown", function (e) {
      if (!current) return;
      if (e.key === "Escape") closePlayer();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* ---------------- arranque ---------------- */
  applyLang(readLang());
  onScroll();
  watch();
  var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();

  // Enlace directo: /portafolio/#campanario-championship abre ese video
  function fromHash() {
    var id = decodeURIComponent(location.hash.replace("#", ""));
    if (!id || !player) return;
    var p = CATALOGO.find(function (x) { return x.id === id || (x.alias && x.alias.indexOf(id) > -1); });
    if (!p) return;
    var card = document.getElementById(p.id);
    if (card) { card.classList.add("is-target"); card.scrollIntoView({ block: "center", inline: "start" }); }
    openById(p.id, false);
  }
  fromHash();
  window.addEventListener("hashchange", fromHash);
})();
