---
title: Salva Más De Cerca
---
Soy Salvador, vivo en Argentina, hago música cuando puedo, estudio Geología y tengo 5 hermanos. Creo en Dios y persevero en algunos grupos de la Iglesia. 
En esta página tengo archivados momentos, ideas, pensamientos, fotos, cuentos, etc. Es como una caja de recuerdos enorme. Por eso es medio un lío desplazarse por este espacio, pero intenté hacerlo intuitivo.
## Sobre este lugar:
<div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
  <object id="mapa-interactivo" data="/mapa-principal.svg" type="image/svg+xml" style="width: 100%; max-width: 800px; height: auto; border: none;"></object>
</div>
<script>
  function liberarLinksDelMapa() {
    const mapa = document.getElementById('mapa-interactivo');
    if (!mapa) return;

    const aplicarTargetParent = () => {
      try {
        // Entramos al documento interno del SVG
        const svgDoc = mapa.contentDocument;
        if (!svgDoc) return;
        
        // Buscamos todos los links que creaste en Excalidraw
        const enlaces = svgDoc.querySelectorAll('a');
        
        enlaces.forEach(enlace => {
          // El truco mágico: obligarlos a abrirse en la ventana principal
          enlace.setAttribute('target', '_parent');
        });
      } catch (e) {
        console.error("Error al redirigir los enlaces del SVG:", e);
      }
    };

    // Si el SVG ya se cargó en pantalla, aplica el truco. Si no, espera a que cargue.
    if (mapa.contentDocument && mapa.contentDocument.readyState === 'complete') {
      aplicarTargetParent();
    } else {
      mapa.addEventListener('load', aplicarTargetParent);
    }
  }

  // Escuchamos el evento de Quartz para cuando cambias de página
  document.addEventListener("nav", liberarLinksDelMapa);
  
  // Por si entran directo a la página principal por primera vez
  if (document.readyState === 'complete') {
    liberarLinksDelMapa();
  } else {
    window.addEventListener('load', liberarLinksDelMapa);
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
