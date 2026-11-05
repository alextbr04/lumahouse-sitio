/* ==========================================================================
   LUMA HOUSE · LISTA DE PROYECTOS
   Este es el único archivo que hay que tocar para agregar o cambiar videos.

   Cada proyecto:
   {
     id:        "slug-unico",            // es el ancla: lumahouse.com.mx/portafolio/#slug-unico
     categoria: "torneos",               // torneos | clubes | documental | contenido | educativo
     titulo:    { es:"…", en:"…" },
     cliente:   { es:"…", en:"…" },
     texto:     { es:"…", en:"…" },
     poster:    "campanario.jpg",       // archivo en assets/posters/ (still 1600×900). Vacío = portada tipográfica
     vertical:  false,                   // true para piezas 9:16 (reels)
     destacado: true,                    // aparece en el inicio
     video:     { tipo:"vimeo",   id:"123456789" }  // vimeo.com/123456789
             o  { tipo:"wistia",  id:"rb4k1pfw4l" }   // lumahouse.wistia.com/medias/rb4k1pfw4l
             o  { tipo:"youtube", id:"dQw4w9WgXcQ" }
             o  { tipo:"mp4",     src:"pieza.mp4" }          // archivo en assets/video/
   }
   Si video.id está vacío, el reproductor muestra "Disponible muy pronto".
   ========================================================================== */

window.LUMA_PROYECTOS = [
  {
    id: "campanario-championship",
    categoria: "torneos",
    titulo: { es: "Campanario Championship", en: "Campanario Championship" },
    cliente: { es: "Torneo de golf", en: "Golf tournament" },
    texto: {
      es: "Siete días de torneo: aftermovie, reels verticales, fotografía y banco de contenido.",
      en: "Seven days of tournament coverage: aftermovie, vertical reels, photography and a content library."
    },
    poster: "campanario-aereo.jpg", vertical: false, destacado: true,
    video: { tipo: "vimeo", id: "" }
  },
  {
    id: "hacienda-cantalagua",
    categoria: "torneos",
    titulo: { es: "Torneo Hacienda Cantalagua", en: "Hacienda Cantalagua Tournament" },
    cliente: { es: "Hacienda Cantalagua · Morelia", en: "Hacienda Cantalagua · Morelia" },
    texto: {
      es: "Aftermovie, reels y fotografía del torneo anual. Quedó filmado el Hole in One.",
      en: "Aftermovie, reels and photography of the annual tournament — including the hole in one, on camera."
    },
    poster: "hacienda-cantalagua.jpg", vertical: false, destacado: true,
    video: { tipo: "wistia", id: "rb4k1pfw4l" }
  },
  {
    id: "copa-zibata",
    categoria: "torneos",
    titulo: { es: "Copa Zibatá", en: "Copa Zibatá" },
    cliente: { es: "Club de Golf Zibatá", en: "Zibatá Golf Club" },
    texto: {
      es: "Cobertura completa del torneo: aftermovie, reels y fotografía.",
      en: "Full tournament coverage: aftermovie, reels and photography."
    },
    poster: "copa-zibata.jpg", vertical: false, destacado: false,
    video: { tipo: "wistia", id: "4gnpqr94se" }
  },
  {
    id: "torneo-hormann",
    categoria: "torneos",
    titulo: { es: "Torneo Anual Hormann", en: "Hormann Annual Tournament" },
    cliente: { es: "Hormann México", en: "Hormann Mexico" },
    texto: {
      es: "Torneo anual de Hormann México: aftermovie, reels y fotografía para la marca y sus invitados.",
      en: "Hormann Mexico's annual golf tournament: aftermovie, reels and photography for the brand and its guests."
    },
    poster: "torneo-hormann.jpg", vertical: false, destacado: false,
    video: { tipo: "wistia", id: "b3g24fy9vv" }
  },
  {
    id: "torneo-maria-goretti",
    categoria: "torneos",
    titulo: { es: "Torneo Casa María Goretti", en: "Casa María Goretti Tournament" },
    cliente: { es: "Casa María Goretti I.A.P.", en: "Casa María Goretti I.A.P." },
    texto: {
      es: "Torneo con causa de Casa María Goretti. Luma House fue patrocinador y produjo el aftermovie, los reels y la fotografía.",
      en: "Charity tournament for Casa María Goretti. Luma House was a sponsor and produced the aftermovie, reels and photography."
    },
    poster: "", vertical: false, destacado: false,
    video: { tipo: "vimeo", id: "" }
  },
  {
    id: "zirandaro-lifestyle",
    alias: ["zibata-lifestyle", "zirandaro-cinematic"],
    categoria: "clubes",
    titulo: { es: "Zirándaro Lifestyle", en: "Zirándaro Lifestyle" },
    cliente: { es: "Club de Golf Zirándaro", en: "Zirándaro Golf Club" },
    texto: {
      es: "Swing, campo, restaurante, cava y terraza. Lujo silencioso y ritmo aspiracional.",
      en: "Swing, course, restaurant, wine cellar and terrace. Quiet luxury, aspirational pace."
    },
    poster: "zirandaro-lifestyle.jpg", vertical: false, destacado: true,
    video: { tipo: "wistia", id: "561dqy8can" }
  },
  {
    id: "maderas-golf-club",
    categoria: "clubes",
    titulo: { es: "Maderas Golf Club", en: "Maderas Golf Club" },
    cliente: { es: "Maderas Golf Club", en: "Maderas Golf Club" },
    texto: {
      es: "Pieza vertical para Maderas Golf Club, con la golfista Debbie Llamas como talento.",
      en: "A vertical piece for Maderas Golf Club, featuring golfer Debbie Llamas."
    },
    poster: "maderas-golf-club.jpg", vertical: true, laterales: true, destacado: false,   // laterales: en escritorio va en 16:9 con el mismo video borroso a los lados
    video: { tipo: "wistia", id: "" }
  },
  {
    id: "el-bosque-country-club",
    categoria: "clubes",
    titulo: { es: "El Bosque Country Club", en: "El Bosque Country Club" },
    cliente: { es: "El Bosque Country Club · León", en: "El Bosque Country Club · León" },
    texto: {
      es: "Recorrido cinematográfico del campo: fairways, lagos y luz natural.",
      en: "A cinematic walk through the course: fairways, lakes and natural light."
    },
    poster: "el-bosque-country-club.jpg", vertical: false, destacado: true,
    video: { tipo: "wistia", id: "" }
  },
  {
    id: "san-gil",
    categoria: "clubes",
    titulo: { es: "San Gil", en: "San Gil" },
    cliente: { es: "Club de golf · Comerciales", en: "Golf club · Commercials" },
    texto: {
      es: "Serie de comerciales verticales para el club: golf, alberca, tenis y pádel, clases y restaurante.",
      en: "A series of vertical commercials for the club: golf, pool, tennis and padel, classes and dining."
    },
    poster: "", vertical: true, destacado: false,
    video: { tipo: "wistia", id: "" }
  },
  {
    id: "documental-mariano",
    categoria: "documental",
    titulo: { es: "Un ladrillo por día", en: "One Brick a Day" },
    cliente: { es: "Documental", en: "Documentary" },
    texto: {
      es: "La preparación de Mariano para un Ironman, contada por él y por su familia. Agua, bici, carrera y dron.",
      en: "Mariano's road to an Ironman, told by him and his family. Swim, bike, run — and the air above it."
    },
    poster: "", vertical: false, destacado: true,
    video: { tipo: "vimeo", id: "" }
  },
  {
    id: "debbie-llamas",
    categoria: "contenido",
    titulo: { es: "Debbie Llamas", en: "Debbie Llamas" },
    cliente: { es: "Contenido para redes", en: "Social content" },
    texto: {
      es: "Contenido continuo para Instagram, TikTok y YouTube de una golfista profesional y entrenadora TPI.",
      en: "Ongoing content for Instagram, TikTok and YouTube for a professional golfer and TPI-certified coach."
    },
    poster: "", vertical: true, destacado: true,
    video: { tipo: "vimeo", id: "" }
  },
  {
    id: "produccion-original",
    categoria: "original",
    bloqueado: true,
    titulo: { es: "Producción original", en: "Original production" },
    cliente: { es: "Golf · En producción", en: "Golf · In production" },
    texto: {
      es: "Un formato propio de golf. Pronto podremos contar más.",
      en: "Our own golf format. More soon."
    },
    poster: "", vertical: false, destacado: true,
    video: null
  }
];

/* Ajustes a piezas que crea el monitor solo (videos.js → "nuevos"): portada propia, etc. */
window.LUMA_AJUSTES = {
  "comercial-luma-vertical-bts": { poster: "comercial-luma-vertical-bts.jpg", laterales: true }   // camarógrafo grabando junto al lago (seg. 24.8)
};

/* Orden del carrusel del inicio (ids). Las verticales van intercaladas, no al final.
   Lo que no esté aquí se agrega al final en el orden del catálogo. */
window.LUMA_ORDEN = [
  "campanario-championship",
  "maderas-golf-club",            // vertical
  "hacienda-cantalagua",
  "el-bosque-country-club",
  "comercial-luma-vertical-bts",  // vertical
  "copa-zibata",
  "zirandaro-lifestyle",
  "torneo-hormann",
  "torneo-maria-goretti",
  "produccion-original"
];
