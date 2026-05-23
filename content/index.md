---
title: Salva Más De Cerca
---
Soy Salvador, vivo en Argentina, hago música cuando puedo, estudio Geología y tengo 5 hermanos. Creo en Dios y persevero en algunos grupos de la Iglesia. 
En esta página tengo archivados momentos, ideas, pensamientos, fotos, cuentos, etc. Es como una caja de recuerdos enorme. Por eso es medio un lío desplazarse por este espacio, pero intenté hacerlo intuitivo.
## Sobre este lugar:<div style="width: 100%; height: 60vh; border-radius: 8px; overflow: hidden; background-color: transparent; margin: 20px 0;">
  <object id="mapa-interactivo" data="/mapa-principal.svg" type="image/svg+xml" style="width: 100%; height: 100%; border: none; background: transparent;"></object>
</div>

<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>

<script>
  function inicializarMapa() {
    const mapa = document.getElementById('mapa-interactivo');
    if (!mapa) return;

    const activarZoom = () => {
      try {
        svgPanZoom(mapa, {
          zoomEnabled: true,
          controlIconsEnabled: false, 
          fit: true,
          center: true,
          minZoom: 0.2,
          maxZoom: 6,
          mouseWheelZoomEnabled: true,
          panEnabled: true
        });
      } catch (e) {
        console.error("Error al cargar svg-pan-zoom:", e);
      }
    };

    if (mapa.contentDocument && mapa.contentDocument.documentElement) {
      activarZoom();
    } else {
      mapa.addEventListener('load', activarZoom);
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    inicializarMapa();
  } else {
    document.addEventListener('DOMContentLoaded', inicializarMapa);
  }
</script>
Esta página es muy amplia y tiene muchos espacios explorables. Para que no se pierdan, acá les dejo escrito más o menos como pueden moverse. Para conocer lo que me gusta [[librería|leer]], o [[Música/index|escuchar]], o mis [[galería|fotos]] favoritas, visitá esas páginas. Si preferis leerme en otro lado, acá tenés el [RSS](https://salvamir.github.io/index.xml). Y por si buscabas [[algo-mas|algo más]].... 
![[casadelvecino.jpg]]
## P<font color="#eeece1">ara </font><font color="#eeece1">Curiosear</font>:
Acá te dejo una lista de ensayos/artículos que anduve leyendo por internet. Algunos son bien sencillos. Si tenés ganas de conocer otros espacios interesantes, podés visitar mi página de [[links|enlaces]], ahí los colecciono.
- ["Living With The Seasons", de Daniel ](https://danielslife.blog/posts/living-with-the-seasons)
- ["Biking Is Fun", de Nolan.](https://nolancaudill.com/2026/03/16/biking-is-fun/)
- ["Simplicity and Less", de Rafael.](https://rafaelkuebler.github.io/posts/20251207-simplicity-and-less/) 
- ["Secret Garden", de Tanner.](https://t0.vc/secret-garden)
