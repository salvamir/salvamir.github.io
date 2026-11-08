---
title: Salvador
description: Acá me gusta coleccionar detalles de mi vida. Es mi cuaderno infinito.
---
<style>
  .mis-botones-inicio {
    display: flex;
    justify-content: center; /* <-- Esto centra los botones */
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
  }
  .boton-pildora {
    padding: 8px 18px !important;
    border: 1px solid var(--tertiary, #ccc) !important;
    border-radius: 25px !important;
    text-decoration: none !important;
    color: var(--dark, #e3dac9) !important;
    font-weight: 600 !important;
    font-size: 15px !important;
    background-color: transparent !important;
    transition: background-color 0.2s !important;
  }
  .boton-pildora:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  /* Oculta íconos externos que Quartz suele agregar */
  .boton-pildora svg, .boton-pildora .external-link-icon {
    display: none !important;
  }
</style>

<div class="mis-botones-inicio">
  <a href="https://salvamir.github.io/mapa" class="boton-pildora">Mapa</a>
  <a href="https://salvamir.github.io/static/ahora.html"
   class="boton-pildora"
   data-router-ignore>Ahora</a>
  <a href="https://salvamir.github.io/libro-de-visitas" class="boton-pildora">Visitas</a>
</div>

Este es mi propio [libro de arena](https://es.wikipedia.org/wiki/El_libro_de_arena). Es mi intento de "inmortalizar" mis ideas. Si tenés unos minutos, empezá explorando esta página por [[El cuadro|acá]]. También está a tu disposición el mapa. Te muestro un poco de lo que vas a encontrarte explorando por mi página web.
![[salvaylaplanta.gif|700]]


# <center>Etapas</center>
<p class="ahora-subtitle">Las etapas que me tocan vivir</p>

> [!cite]"Verano" (Octubre 2026)
> Octubre ya está en la mitad y yo casi que no me di cuenta. Anduve de un lado a otro, cambiando a cada rato de entorno, gente y responsabilidades. Ahora me toca estudiar, y no consigo centrar la cabeza. Estoy disperso y cansado. Con muchas cosas en la mente... El año está siendo intenso. Estamos viviendo El Super Niño y llueve todo el tiempo. Es octubre, pero hace frío. Ahora tengo un buzo abrigado. Es raro, porque no creo que vaya a acordarme de esto nunca. Es raro porque no creo estar reaccionando de manera normal, no debería haberme acostumbrado tan rápido a un verano sin calor. Esto no pasa en Tucumán. Dentro de poco viajo al exterior, es un viaje importante. Y me voy a un lugar donde va a nevar mucho. Quién sabe... quizás este año de verdad no voy a experimentar el verano tal como solía conocerlo. [Continuar Leyendo...](https://salvamir.github.io/Etapas)
# <center>Notas</center>
<p class="ahora-subtitle">Anotaciones de mi cuaderno</p>

> [!cite] Vivir Adaptándose
> ### Cómo adaptar mi vida a las estaciones.
> Hoy leí por segunda vez [esta](https://danielslife.blog/posts/living-with-the-seasons) publicación de Daniel. 
> Es verdad que muchas veces ser productivo pareciera ser que es no dejarse influenciar por las circunstancias. Como que la productividad es igual a la perseverancia ante todo. No creo que sea así.
> Perseverar en nuestros propósitos es bueno y sano. Nos hace bien.
> Pero nunca habia pensado en la productividad como una virtud tan humana y adaptable. Si las estaciones cambian, que cambien nuestras rutinas, nuestras comidas, nuestros propósitos, nuestra forma de encarar las circunstancias que no cambiaron. Me pareció genial verlo así. Asi que, como Daniel, yo también quise hacer una breve descripción de como me gustaría adaptarme a las estaciones. [Continuar Leyendo... ](https://salvamir.github.io/Notas/Vivir-Adapt%C3%A1ndose)<a/>

<style>
 /* =========================================   AHORA — ESTILOS ADAPTADOS DEL ARCHIVO ORIGINAL   ========================================= */.ahora-embed {
  /* Paleta clara: coincide con la paleta clara personalizada de Quartz */
  --ahora-bg: #1a1714;
  --ahora-text: #e3ded6;
  --ahora-gold: #E7C8A0;
  --ahora-muted: #B7966C;
  --ahora-card: rgba(255,255,255,0.03);
  --ahora-border: rgba(183,150,108,0.15);

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 1.5rem 0;
  box-sizing: border-box;
  color: var(--ahora-text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Arial, sans-serif;
}

/* Quartz actualiza saved-theme en <html> al alternar el tema */
html[saved-theme="dark"] .ahora-embed {
  --ahora-bg: #000000;
  --ahora-text: #e0eaf5;
  --ahora-gold: #e0eaf5;
  --ahora-muted: #84add7;
  --ahora-card: rgba(60,60,60,0.2);
  --ahora-border: rgba(224,234,245,0.2);
}

/* Compatibilidad con variantes antiguas */
html[data-theme="dark"] .ahora-embed,
html.dark .ahora-embed,
body.dark-mode .ahora-embed {
  --ahora-bg: #000000;
  --ahora-text: #e0eaf5;
  --ahora-gold: #e0eaf5;
  --ahora-muted: #84add7;
  --ahora-card: rgba(60,60,60,0.2);
  --ahora-border: rgba(224,234,245,0.2);
}.ahora-embed *,.ahora-lightbox * {  box-sizing: border-box;}.ahora-subtitle {  text-align: center;  margin: 0 0 2.5rem;  color: var(--ahora-text);  opacity: .6;  font-size: 1rem;}/* TARJETAS */.ahora-embed .post-card {  background-color: var(--ahora-card);  border: 1px solid var(--ahora-border);  border-radius: 16px;  padding: 1.5rem;  margin-bottom: 2.5rem;  box-sizing: border-box;  box-shadow: 0 4px 20px rgba(0,0,0,.3);}.ahora-embed .post-date {  font-family: "Times New Roman", serif;  color: var(--ahora-muted);  font-size: 1.15rem;  font-weight: bold;  margin-bottom: .75rem;  border-bottom: 1px solid var(--ahora-border);  padding-bottom: .5rem;}.ahora-embed .post-text {  font-size: .95rem;  line-height: 1.6;  margin-bottom: 1.2rem;  color: var(--ahora-text);}.ahora-embed .post-text strong {  color: var(--ahora-gold);  display: block;  margin-bottom: .25rem;  font-size: 1.05rem;}/* GALERÍA: SOLO SE VE LA PRIMERA FOTO */.ahora-embed .post-image-wrapper {  width: 100%;  border-radius: 8px;  overflow: hidden;  border: 1px solid rgba(255,255,255,.05);  display: grid;  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  gap: 6px;  background-color: var(--ahora-bg);}.ahora-embed .img-box {  position: relative;  display: block;  text-decoration: none;  overflow: hidden;  cursor: zoom-in;}.ahora-embed .img-box:not(:first-child) {  display: none;}.ahora-embed .img-box img {  width: 100%;  height: 100%;  max-height: 400px;  object-fit: cover;  display: block;}/* DESCRIPCIÓN AL PASAR EL CURSOR */.ahora-embed .img-box .alt-text {  position: absolute;  bottom: 0;  left: 0;  right: 0;  background: rgba(0,0,0,.82);  color: #fff;  font-size: .8rem;  line-height: 1.35;  padding: 8px 10px;  opacity: 0;  transition: opacity .2s ease;  pointer-events: none;}.ahora-embed .img-box:hover .alt-text {  opacity: 1;}@media (hover: none) {  .ahora-embed .img-box .alt-text {    opacity: 1;  }}/* =========================================   VISOR DE FOTOS   ========================================= */.ahora-lightbox[hidden] {  display: none !important;}.ahora-lightbox {  position: fixed;  inset: 0;  z-index: 999999;  display: flex;  justify-content: center;  align-items: center;  padding: 20px;}.ahora-lightbox-backdrop {  position: absolute;  inset: 0;  background: rgba(0,0,0,.94);}.ahora-lightbox-content {  position: relative;  z-index: 1;  width: 100%;  max-width: 1100px;  display: grid;  grid-template-columns: 48px minmax(0,1fr) 48px;  align-items: center;  gap: 12px;  color: white;}.ahora-lightbox-figure {  grid-column: 2;  grid-row: 1;  min-width: 0;  margin: 0;  text-align: center;}.ahora-lightbox-image {  display: block;  width: auto;  height: auto;  max-width: 100%;  max-height: 78vh;  object-fit: contain;  margin: 0 auto;}.ahora-lightbox-caption {  color: #ddd;  font-size: .9rem;  line-height: 1.4;  padding-top: 12px;}.ahora-lightbox-counter {  color: #aaa;  font-size: .8rem;  padding-top: 6px;}.ahora-lightbox-button {  width: 44px;  height: 44px;  border: 0;  border-radius: 50%;  background: rgba(255,255,255,.15);  color: white;  font-size: 28px;  cursor: pointer;}.ahora-lightbox-button:hover,.ahora-lightbox-close:hover {  background: rgba(255,255,255,.28);}.ahora-lightbox-prev {  grid-column: 1;  grid-row: 1;}.ahora-lightbox-next {  grid-column: 3;  grid-row: 1;}.ahora-lightbox-close {  position: absolute;  z-index: 2;  top: -48px;  right: 0;  width: 40px;  height: 40px;  border: 0;  border-radius: 50%;  background: rgba(255,255,255,.15);  color: white;  font-size: 25px;  cursor: pointer;}@media (max-width: 600px) {  .ahora-lightbox {    padding: 8px;  }  .ahora-lightbox-content {    grid-template-columns: 34px minmax(0,1fr) 34px;    gap: 4px;  }  .ahora-lightbox-button {    width: 32px;    height: 38px;    font-size: 22px;  }  .ahora-lightbox-image {    max-height: 72vh;  }  .ahora-lightbox-caption {    font-size: .8rem;  }}
</style>
<div class="ahora-embed">
 <p class="ahora-subtitle">
  Archivo de lo que voy viviendo.
 </p>
 <!-- PUBLICACIÓN 1 -->
 <div class="post-card">
  <div class="post-date">
   27/07/2026
  </div>
  <div class="post-text">
   <strong>
    Tenemos una abogada en la familia
   </strong>
   La pachi se recibió finalmente. La verdad que tantos años de estudio deben dejarte agotado. Supongo que ella no se olvidará del 27/07/2026 nunca, yo no me olvidaría.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/recibida.webp" rel="noopener" target="_blank">
    <img alt="Todos juntos." src="/Anexos/recibida.webp"/>
    <span class="alt-text">
     Todos juntos.
    </span>
   </a>
  </div>
 </div>
 <!-- PUBLICACIÓN 2 -->
 <div class="post-card">
  <div class="post-date">
   16/07/2026
  </div>
  <div class="post-text">
   <strong>
    Resumen de Junio en casi la mitad de Julio
   </strong>
   Me acordé de muchas fotos de momentos lindos de Junio. Quiero subirlos para acordarme que no fue todo solamente estudiar y sufrir y quejarse.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/lafamiliaylosprimos.webp" rel="noopener" target="_blank">
    <img alt="Vinieron primos a la casa y conversamos y compartimos un rato." src="/Anexos/lafamiliaylosprimos.webp"/>
    <span class="alt-text">
     Vinieron primos a la casa y conversamos y compartimos un rato.
    </span>
   </a>
   <a class="img-box" href="/Anexos/vamosargentina.webp" rel="noopener" target="_blank">
    <img alt="primer indicio que yo humano mortal noté de que estabamos en el mundial" src="/Anexos/vamosargentina.webp"/>
    <span class="alt-text">
     primer indicio que yo humano mortal noté de que estabamos en el mundial
    </span>
   </a>
   <a class="img-box" href="/Anexos/confranylatrini.webp" rel="noopener" target="_blank">
    <img alt="fue el cumple de fran y comimos con su familia. Hace mucho que no los veo les mando un abrazo enorme." src="/Anexos/confranylatrini.webp"/>
    <span class="alt-text">
     fue el cumple de fran y comimos con su familia. Hace mucho que no los veo les mando un abrazo enorme.
    </span>
   </a>
  </div>
 </div>
 <!-- PUBLICACIÓN 3 -->
 <div class="post-card">
  <div class="post-date">
   15/07/2026
  </div>
  <div class="post-text">
   <strong>
    Fuimos a tafí y a la final también.
   </strong>
   Este es de los primeros mundiales que veo activamente porque no soy muy futbolero pero me estoy re divirtiendo. Nos tomamos una semanita en tafí y los invité a los chicos y se sintió como un mes entero de descanso que hermoso.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/camionetabarro.webp" rel="noopener" target="_blank">
    <img alt="fuimos a pescar pero tuvimos un contratiempo..." src="/Anexos/camionetabarro.webp"/>
    <span class="alt-text">
     fuimos a pescar pero tuvimos un contratiempo...
    </span>
   </a>
   <a class="img-box" href="/Anexos/felizcumplemaria.webp" rel="noopener" target="_blank">
    <img alt="feliz cumplee maria espero que lo hayas pasado lindo. Justo cuando somos finalistas que locura" src="/Anexos/felizcumplemaria.webp"/>
    <span class="alt-text">
     feliz cumplee maria espero que lo hayas pasado lindo. Justo cuando somos finalistas que locura
    </span>
   </a>
   <a class="img-box" href="/Anexos/jugando.webp" rel="noopener" target="_blank">
    <img alt="nos copamos con Cube Escape Paradox jajajja" src="/Anexos/jugando.webp"/>
    <span class="alt-text">
     nos copamos con Cube Escape Paradox jajajja
    </span>
   </a>
  </div>
 </div>
 <!-- PUBLICACIÓN 4 -->
 <div class="post-card">
  <div class="post-date">
   ¿?/¿?/2026
  </div>
  <div class="post-text">
   <strong>
    Recordando tiempos oscuros
   </strong>
   Me encantan estas cuatro fotos adjuntas porque demuestran muy bien como me esforcé en ser una persona humana sensible y cansable este cuatrimestre espantoso. Para que yo no me diga a mi mismo después que no hago nada más que estudiar sin razón. Estudié y lo hice con mucho empeño, buena onda y muy buena compañía a pesar de todo.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/salvandopaleo.webp" rel="noopener" target="_blank">
    <img alt="jajajaj juancho y yo probablemente nos habremos quedado hasta tarde. Siempre nos quedamos hasta tarde." src="/Anexos/salvandopaleo.webp"/>
    <span class="alt-text">
     jajajaj juancho y yo probablemente nos habremos quedado hasta tarde. Siempre nos quedamos hasta tarde.
    </span>
   </a>
   <a class="img-box" href="/Anexos/salvandofisica.webp" rel="noopener" target="_blank">
    <img alt="ahora con la emi. Las noches de cowork fueron muchas largas y oscuras. dormí muy poco esos meses. Me da risa ver como fueron cambiando los looks de mi compu, da para charla" src="/Anexos/salvandofisica.webp"/>
    <span class="alt-text">
     ahora con la emi. Las noches de cowork fueron muchas largas y oscuras. dormí muy poco esos meses. Me da risa ver como fueron cambiando los looks de mi compu, da para charla
    </span>
   </a>
   <a class="img-box" href="/Anexos/buenosapuntes.webp" rel="noopener" target="_blank">
    <img alt="Fui aprendiendo a administrar mejor la energía a la hora de tomar nota. Ya voy a hablar mejor sobre eso." src="/Anexos/buenosapuntes.webp"/>
    <span class="alt-text">
     Fui aprendiendo a administrar mejor la energía a la hora de tomar nota. Ya voy a hablar mejor sobre eso.
    </span>
   </a>
   <a class="img-box" href="/Anexos/malosapuntes.webp" rel="noopener" target="_blank">
    <img alt="Por ejemplo, esta vez no supe administrar bien mi energía a la hora de tomar nota jajahfajhsf. Que locura como influye el factor humano en estas cosas. La verdad que lo dí todo. Me encanta comparar estas dos fotos porque se ve con toda claridad lo mucho que me esforcé. Es muy importante descansar, no solo el cuerpo durmiendo bien, sino el alma, dandole lugar a la vida humana." src="/Anexos/malosapuntes.webp"/>
    <span class="alt-text">
     Por ejemplo, esta vez no supe administrar bien mi energía a la hora de tomar nota jajahfajhsf. Que locura como influye el factor humano en estas cosas. La verdad que lo dí todo. Me encanta comparar estas dos fotos porque se ve con toda claridad lo mucho que me esforcé. Es muy importante descansar, no solo el cuerpo durmiendo bien, sino el alma, dandole lugar a la vida humana.
    </span>
   </a>
  </div>
 </div>
 <!-- PUBLICACIÓN 5 -->
 <div class="post-card">
  <div class="post-date">
   11/07/2026
  </div>
  <div class="post-text">
   <strong>
    Por fin un breve descanso.
   </strong>
   Me colgué un poco de subir cosas al blog, pero estuve reflexionando mucho y la nube en la que venía viviendo está de a poquito disipándose.Estoy contento porque el Señor me regaló un respiro. Fue el día de la Patria y lo disfruté mucho. Pasaron varias cosas en esta primer semana de vacaciones, tanto que se siente como si hubiese pasado más tiempo. Empecé folklore. Estoy muy contento porque el invierno/otoño está durando mucho y yo estoy pudiendo disfrutarlo bastante.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/avionfacu.webp" rel="noopener" target="_blank">
    <img alt="Facu sacó esta foto de fran volando. La verdad que me encanta." src="/Anexos/avionfacu.webp"/>
    <span class="alt-text">
     Facu sacó esta foto de fran volando. La verdad que me encanta.
    </span>
   </a>
   <a class="img-box" href="/Anexos/camadepier.webp" rel="noopener" target="_blank">
    <img alt="el padre tomás estuvo en la casa de Pier cuando fue su día, que lujo." src="/Anexos/camadepier.webp"/>
    <span class="alt-text">
     el padre tomás estuvo en la casa de Pier cuando fue su día, que lujo.
    </span>
   </a>
   <a class="img-box" href="/Anexos/cosasdepier.webp" rel="noopener" target="_blank">
    <img alt="se me hace super interesante y entusiasmante pensar en que esa persona verdaderamente existió y vivió muy cerca de Jesús toda su vida, y hacía cosas normales como tener un cuaderno dónde anotaba cosas." src="/Anexos/cosasdepier.webp"/>
    <span class="alt-text">
     se me hace super interesante y entusiasmante pensar en que esa persona verdaderamente existió y vivió muy cerca de Jesús toda su vida, y hacía cosas normales como tener un cuaderno dónde anotaba cosas.
    </span>
   </a>
   <a class="img-box" href="/Anexos/elotoñosigue.webp" rel="noopener" target="_blank">
    <img alt="gracias Señor por este clima tan acogedor. No quiero olvidarmelo nunca." src="/Anexos/elotoñosigue.webp"/>
    <span class="alt-text">
     gracias Señor por este clima tan acogedor. No quiero olvidarmelo nunca.
    </span>
   </a>
   <a class="img-box" href="/Anexos/elsol.webp" rel="noopener" target="_blank">
    <img alt="disfruté mucho del otoño, gracias gracias gracias. miren de linda que me salió la foto yo la siento casi real. Me pone cursi el invierno." src="/Anexos/elsol.webp"/>
    <span class="alt-text">
     disfruté mucho del otoño, gracias gracias gracias. miren de linda que me salió la foto yo la siento casi real. Me pone cursi el invierno.
    </span>
   </a>
   <a class="img-box" href="/Anexos/emilinda.webp" rel="noopener" target="_blank">
    <img alt="con la emi salimos a un bar super lujoso por primera vez y conversamos un montón. Seguro algún día de estos lo documente un poquito." src="/Anexos/emilinda.webp"/>
    <span class="alt-text">
     con la emi salimos a un bar super lujoso por primera vez y conversamos un montón. Seguro algún día de estos lo documente un poquito.
    </span>
   </a>
   <a class="img-box" href="/Anexos/viendoelpartido.webp" rel="noopener" target="_blank">
    <img alt="DETALLE IMPORTANTE: ARRANCO EL MUNDIAL y Argentina viene muy bien." src="/Anexos/viendoelpartido.webp"/>
    <span class="alt-text">
     DETALLE IMPORTANTE: ARRANCO EL MUNDIAL y Argentina viene muy bien.
    </span>
   </a>
   <a class="img-box" href="/Anexos/visitapadres.webp" rel="noopener" target="_blank">
    <img alt="hoy vinieron los oratorianos dsp de tanto tiempo. Los extrañamos, me regaló mi papá ayer una boina y hoy la regalé yo a un seminarista que parecía quererla mucho. Mi papá no sabe, no le digan jeje." src="/Anexos/visitapadres.webp"/>
    <span class="alt-text">
     hoy vinieron los oratorianos dsp de tanto tiempo. Los extrañamos, me regaló mi papá ayer una boina y hoy la regalé yo a un seminarista que parecía quererla mucho. Mi papá no sabe, no le digan jeje.
    </span>
   </a>
  </div>
 </div>
 <!-- PUBLICACIÓN 6 -->
 <div class="post-card">
  <div class="post-date">
   21/06/2026
  </div>
  <div class="post-text">
   <strong>
    Este mes fue infinito. Todos estos meses fueron infinitos. Pero hoy es el día del padre.
   </strong>
   Además de rendir, cursar, rendir, estudiar y rendir, tuve un poco de vida. Aquí están las pruebas. Feliz día pa! Te mereces un descanso.
  </div>
  <div class="post-image-wrapper">
   <a class="img-box" href="/Anexos/diadelpadre.webp" rel="noopener" target="_blank">
    <img alt="gracias pa por tanto te queremos" src="/Anexos/diadelpadre.webp"/>
    <span class="alt-text">
     gracias pa por tanto te queremos
    </span>
   </a>
   <a class="img-box" href="/Anexos/emiii.webp" rel="noopener" target="_blank">
    <img alt="miren que linda" src="/Anexos/emiii.webp"/>
    <span class="alt-text">
     miren que linda
    </span>
   </a>
   <a class="img-box" href="/Anexos/emiyydrac.webp" rel="noopener" target="_blank">
    <img alt="siambonando" src="/Anexos/emiyydrac.webp"/>
    <span class="alt-text">
     siambonando
    </span>
   </a>
   <a class="img-box" href="/Anexos/chorizos.webp" rel="noopener" target="_blank">
    <img alt="chorizos aegeticos" src="/Anexos/chorizos.webp"/>
    <span class="alt-text">
     chorizos aegeticos
    </span>
   </a>
   <a class="img-box" href="/Anexos/cowork.webp" rel="noopener" target="_blank">
    <img alt="esta fotito representa mejor que ninguna como fueron estos meses. Gracias lopes por tu compañía." src="/Anexos/cowork.webp"/>
    <span class="alt-text">
     esta fotito representa mejor que ninguna como fueron estos meses. Gracias lopes por tu compañía.
    </span>
   </a>
   <a class="img-box" href="/Anexos/nuevoorden.webp" rel="noopener" target="_blank">
    <img alt="Cambié un poquito las cosas de lugar" src="/Anexos/nuevoorden.webp"/>
    <span class="alt-text">
     Cambié un poquito las cosas de lugar
    </span>
   </a>
   <a class="img-box" href="/Anexos/juanysalva.webp" rel="noopener" target="_blank">
    <img alt="con poliedro como siempre" src="/Anexos/juanysalva.webp"/>
    <span class="alt-text">
     con poliedro como siempre
    </span>
   </a>
  </div>
 </div>
</div>
<!-- VISOR: UNA SOLA INSTANCIA PARA TODAS LAS PUBLICACIONES -->
<div class="ahora-lightbox" hidden="" id="ahora-lightbox">
 <div class="ahora-lightbox-backdrop" data-ahora-close="">
 </div>
 <div aria-label="Galería de fotos" aria-modal="true" class="ahora-lightbox-content" role="dialog">
  <button aria-label="Cerrar" class="ahora-lightbox-close" data-ahora-close="" type="button">
   ×
  </button>
  <button aria-label="Foto anterior" class="ahora-lightbox-button ahora-lightbox-prev" data-ahora-prev="" type="button">
   ‹
  </button>
  <figure class="ahora-lightbox-figure">
   <img alt="" class="ahora-lightbox-image" id="ahora-lightbox-image" src=""/>
   <figcaption class="ahora-lightbox-caption" id="ahora-lightbox-caption">
   </figcaption>
   <div class="ahora-lightbox-counter" id="ahora-lightbox-counter">
   </div>
  </figure>
  <button aria-label="Foto siguiente" class="ahora-lightbox-button ahora-lightbox-next" data-ahora-next="" type="button">
   ›
  </button>
 </div>
</div>
<p class="ahora-subtitle">
 <a href="/static/ahora.html">
  Seguir viendo...
 </a>
</p>
<script>
 (() => {  if (window.__ahoraViewerInstalled) return;  window.__ahoraViewerInstalled = true;  let photos = [];  let currentIndex = 0;  let lastTrigger = null;  let oldBodyOverflow = "";  let touchStart = 0;  const getViewer = () => document.getElementById("ahora-lightbox");  function renderPhoto() {    const viewer = getViewer();    if (!viewer || !photos.length) return;    const photo = photos[currentIndex];    viewer.querySelector("#ahora-lightbox-image").src = photo.src;    viewer.querySelector("#ahora-lightbox-image").alt = photo.alt;    viewer.querySelector("#ahora-lightbox-caption").textContent = photo.alt;    viewer.querySelector("#ahora-lightbox-counter").textContent =      `${currentIndex + 1} / ${photos.length}`;  }  function openViewer(trigger) {    const gallery = trigger.closest(".post-image-wrapper");    if (!gallery) return;    photos = Array.from(gallery.querySelectorAll("a.img-box")).map(link => ({      src: link.href,      alt: link.querySelector(".alt-text")?.textContent.trim() ||           link.querySelector("img")?.alt || ""    }));    currentIndex = photos.findIndex(photo => photo.src === trigger.href);    if (currentIndex < 0) currentIndex = 0;    lastTrigger = trigger;    oldBodyOverflow = document.body.style.overflow;    renderPhoto();    const viewer = getViewer();    viewer.hidden = false;    document.body.style.overflow = "hidden";    viewer.querySelector(".ahora-lightbox-close").focus();  }  function closeViewer() {    const viewer = getViewer();    if (!viewer || viewer.hidden) return;    viewer.hidden = true;    document.body.style.overflow = oldBodyOverflow;    if (lastTrigger && lastTrigger.isConnected) {      lastTrigger.focus();    }  }  function movePhoto(direction) {    if (photos.length < 2) return;    currentIndex = (currentIndex + direction + photos.length) % photos.length;    renderPhoto();  }  document.addEventListener("click", event => {    const target = event.target;    if (!(target instanceof Element)) return;    const photoLink = target.closest(".ahora-embed .post-image-wrapper a.img-box");    if (photoLink) {      event.preventDefault();      openViewer(photoLink);      return;    }    if (target.closest("[data-ahora-close]")) closeViewer();    if (target.closest("[data-ahora-prev]")) movePhoto(-1);    if (target.closest("[data-ahora-next]")) movePhoto(1);  });  document.addEventListener("keydown", event => {    const viewer = getViewer();    if (!viewer || viewer.hidden) return;    if (event.key === "Escape") closeViewer();    if (event.key === "ArrowLeft") movePhoto(-1);    if (event.key === "ArrowRight") movePhoto(1);  });  document.addEventListener("touchstart", event => {    if (!getViewer() || getViewer().hidden || !event.changedTouches.length) return;    touchStart = event.changedTouches[0].clientX;  }, { passive: true });  document.addEventListener("touchend", event => {    const viewer = getViewer();    if (!viewer || viewer.hidden || !event.changedTouches.length) return;    const difference = event.changedTouches[0].clientX - touchStart;    if (Math.abs(difference) > 45) {      movePhoto(difference > 0 ? -1 : 1);    }  }, { passive: true });  document.addEventListener("nav", closeViewer);})();
</script>
