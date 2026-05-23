---
title: Salva Más De Cerca
---
Soy Salvador, vivo en Argentina, hago música cuando puedo, estudio Geología y tengo 5 hermanos. Creo en Dios y persevero en algunos grupos de la Iglesia. 
En esta página tengo archivados momentos, ideas, pensamientos, fotos, cuentos, etc. Es como una caja de recuerdos enorme. Por eso es medio un lío desplazarse por este espacio, pero intenté hacerlo intuitivo.
## Sobre este lugar:
<div style="width: 100%; height: 60vh; border-radius: 8px; overflow: hidden; background-color: transparent; margin: 20px 0;">
  <iframe id="mapa-interactivo" src="mapa-principal.svg" style="width: 100%; height: 100%; border: none; background: transparent;"></iframe>
</div>

<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>

<script>
  function inicializarMapa() {
    const iframe = document.getElementById('mapa-interactivo');
    if (!iframe) return;

    const activarZoom = () => {
      try {
        // Inicializamos el zoom directo sobre el iframe
        svgPanZoom(iframe, {
          zoomEnabled: true,
          controlIconsEnabled: false, // Manejo limpio con mouse o dedos
          fit: true,
          center: true,
          minZoom: 0.1,
          maxZoom: 7,
          mouseWheelZoomEnabled: true,
          panEnabled: true
        });
      } catch (e) {
        console.error("Error al aplicar svg-pan-zoom:", e);
      }
    };

    // Si el iframe ya cargó el archivo, activa el zoom; si no, espera a que termine
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      activarZoom();
    } else {
      iframe.addEventListener('load', activarZoom);
    }
  }

  // EL SECRETO PARA QUARTZ: Escuchar su propio evento de navegación interna
  document.addEventListener("nav", inicializarMapa);

  // Por las dudas, si entrás directo por primera vez, también lo ejecutamos
  if (document.readyState === 'complete') {
    inicializarMapa();
  } else {
    window.addEventListener('load', inicializarMapa);
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
