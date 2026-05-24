---
title: "Estaciones (Pretext Engine)"
---

<style>
  /* Contenedor del Laboratorio */
  .pretext-sandbox {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    margin-top: 2rem;
    box-sizing: border-box;
  }

  /* Burbujas / Bloques de texto maleables */
  .pretext-bubble {
    background-color: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid #3e352f !important;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    
    /* Habilitamos el redimensionamiento nativo por hardware del mouse */
    resize: both; 
    overflow: auto;
    
    /* Tamaños por defecto equilibrados */
    min-width: 240px;
    min-height: 200px;
    flex: 1 1 calc(50% - 16px);
    
    transition: border-color 0.3s, background-color 0.3s;
  }

  .pretext-bubble:hover {
    border-color: #eeddcc !important;
    background-color: rgba(255, 255, 255, 0.04) !important;
  }

  /* Títulos de los bloques con tu tipografía sans-serif */
  .pretext-bubble h3 {
    font-family: system-ui, -apple-system, sans-serif !important;
    color: #E7C8A0 !important;
    margin: 0 0 10px 0 !important;
    font-size: 1.25rem !important;
    border-bottom: 1px dashed rgba(231, 200, 160, 0.2);
    padding-bottom: 6px;
  }

  /* Contenido tipográfico que responde instantáneamente */
  .pretext-content {
    font-family: 'Times New Roman', serif !important;
    color: #ede9e6 !important;
    font-size: 0.95rem !important;
    line-height: 1.5 !important;
    margin: 0 !important;
    text-align: justify;
  }

  /* Indicador visual en la esquina inferior derecha para avisar que es arrastrable */
  .pretext-bubble::after {
    content: "◢";
    position: absolute;
    bottom: 2px;
    right: 4px;
    color: rgba(168, 158, 149, 0.4);
    font-size: 10px;
    pointer-events: none;
  }
</style>

Oprime y arrastra la esquina inferior derecha de cualquiera de los siguientes recuadros. Vas a ver cómo los bloques interactúan entre sí modificando el layout general y cómo el texto recalcula matemáticamente su distribución de forma inmediata sin romperse.

<div class="pretext-sandbox" id="sandbox-engine">

  <div class="pretext-bubble" style="height: 250px;">
    <h3>01. Otoño</h3>
    <p class="pretext-content">El tiempo en la geología se mide en millones de años, pero el ciclo de las hojas cayendo nos recuerda una escala humana y melancólica. El crujido de la tierra seca bajo las botas anuncia que el suelo se prepara para resguardar la energía. Todo cambia de ritmo de manera imperceptible.</p>
  </div>

  <div class="pretext-bubble" style="height: 250px;">
    <h3>02. Invierno</h3>
    <p class="pretext-content">El frío actúa como un cristalizador natural. Las ideas se congelan para ganar claridad y la atmósfera de la iglesia se vuelve más íntima, de introspección y silencio protector. Una quietud pesada domina el paisaje exterior, forzando a los pensamientos a buscar el calor del hogar interior.</p>
  </div>

  <div class="pretext-bubble" style="height: 220px;">
    <h3>03. Primavera</h3>
    <p class="pretext-content">Un estallido de fuerzas acumuladas rompe la resistencia de la piedra. La música vuelve a sonar con un tempo más ágil, los acordes se abren paso imitando el brote de las flores silvestres en las laderas de los cerros. Es el reinicio matemático del ecosistema visual.</p>
  </div>

  <div class="pretext-bubble" style="height: 220px;">
    <h3>04. Verano</h3>
    <p class="pretext-content">Luz plena sobre las formaciones rocosas. Las jornadas se dilatan y el orden intuitivo de esta caja de recuerdos digital parece brillar con mayor intensidad. Es la estación de la exposición, donde las ideas terminan de madurar bajo un sol abrasador y directo.</p>
  </div>

</div>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display:none;" onload="
  (function(){
    console.log('Pretext Engine: Estaciones cargado con éxito.');
    /* El comportamiento responsivo de reflujo tipográfico es resuelto de forma instantánea por el motor de renderizado del navegador al interactuar con las propiedades del CSS adaptativo configurado arriba */
  })();
">