---
title: Salva Más De Cerca
description: Acá me gusta coleccionar detalles de mi vida.
---
<style>
  /* 1. ESTADO BASE: Mostramos el mapa, escondemos los botones */
  .mapa-escritorio {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .menu-celular {
    display: none; /* Oculto por defecto */
  }
  /* 2. DISEÑO PARA CELULARES (Se activa en pantallas chicas) */
  @media (max-width: 768px) {
    .mapa-escritorio {
      display: none; /* Chau imagen en el celu */
    }
    .menu-celular {
      display: flex; /* Hola botones */
      flex-wrap: wrap; /* Si no entran, bajan de renglón */
      gap: 12px;
      justify-content: center;
      padding: 10px 0;
    }
    .boton-pildora {
      /* Estilo minimalista tipo "etiqueta" */
      padding: 10px 20px !important;
      border: 1px solid var(--tertiary, #ccc) !important;
      border-radius: 25px !important;
      text-decoration: none !important;
      color: var(--dark, #333) !important;
      font-weight: 600 !important;
      font-size: 15px !important;
      background-color: transparent !important; /* Forzamos que no tenga fondo distinto */
      transition: background-color 0.2s !important;
    }
    /* Ocultamos cualquier ícono de link que inyecte Quartz para que queden limpias */
    .boton-pildora svg, .boton-pildora .external-link-icon {
      display: none !important;
    }
  }
</style>

<div class="mapa-escritorio">
  <img src="mapa-principal.png" usemap="#image-map">
  <map name="image-map">
    <area target="" alt="Colección de fotos." title="Galería" href="/static/galeria.html" coords="176,218,17,167" shape="rect">
    <area target="" alt="Me sirve para saber que estuviste acá." title="Visitas" href="https://salvamir.github.io/libro-de-visitas" coords="124,205,259,312" shape="rect">
    <area target="" alt="Analisis de canciones, discos y más. Es una colección también." title="Música" href="/static/musica.html" coords="156,85,289,141" shape="rect">
    <area target="" alt="Todos somos una historia que merece ser contada y vivida. - Nico (un amigo mío)" title="Inicio" href="https://salvamir.github.io" coords="229,140,362,218" shape="rect">
    <area target="" alt="Otros lugares interesantes para visitar" title="Links" href="https://salvamir.github.io/links" coords="405,281,237,246" shape="rect">
    <area target="" alt="Acá guardo todos los libros que me acuerdo de haber leído. Solía ser bastante lector antes." title="Libros" href="https://salvamir.github.io/librería" coords="449,154,585,207" shape="rect">
    <area target="" alt="Una especie de feed de instagram pero más casual" title="Ahora" href="https://salvamir.github.io/static/ahora.html" coords="316,13,412,112" shape="rect">
    <area target="" alt="Un intento de inmortalizar mi cuadernito. Estoy implementando cosas interesantes." title="Notas" href="https://salvamir.github.io/Notas" coords="347,94,485,180" shape="rect">
    <area target="" alt="Se puso muy de moda, estoy tratando de implementarlo" title="Jardin Digital" href="https://salvamir.github.io/El-Jardín" coords="394,49,578,116" shape="rect">
    <area target="" alt="Solo para curiosos, si no te alcanzó con leer mis notas acá hay cosas más puntuales y aleatorias." title="Algo Más" href="https://salvamir.github.io/algo-mas" coords="513,308,373,267" shape="rect">
  </map>
</div>

<div class="menu-celular">
  <a href="https://salvamir.github.io" class="boton-pildora">Inicio</a>
  <a href="https://salvamir.github.io/static/musica.html" class="boton-pildora">Música</a>
  <a href="https://salvamir.github.io/static/galeria.html" class="boton-pildora">Galería</a>
  <a href="https://salvamir.github.io/El-Jardín" class="boton-pildora">Jardín Digital</a>
  <a href="https://salvamir.github.io/Notas" class="boton-pildora">Notas</a>
  <a href="https://salvamir.github.io/librería" class="boton-pildora">Libros</a>
  <a href="https://salvamir.github.io/static/ahora.html" class="boton-pildora">Ahora</a>
  <a href="https://salvamir.github.io/links" class="boton-pildora">Links</a>
  <a href="https://salvamir.github.io/libro-de-visitas" class="boton-pildora">Visitas</a>
  <a href="https://salvamir.github.io/algo-mas" class="boton-pildora">Algo Más</a>
</div>

Soy Salvador, vivo en Argentina, hago música cuando puedo, estudio Geología y tengo 5 hermanos. Creo en Dios y persevero en algunos grupos de la Iglesia. En esta página tengo archivados momentos, ideas, pensamientos, fotos, cuentos, etc. Es como una caja de recuerdos enorme. Por eso es medio un lío desplazarse por este espacio, pero intenté hacerlo intuitivo. 
## Para Curiosear:
Acá te dejo una lista de ensayos/artículos que anduve leyendo por internet. 
- ["Living With The Seasons", de Daniel ](https://danielslife.blog/posts/living-with-the-seasons) 
- ["Biking Is Fun", de Nolan.](https://nolancaudill.com/2026/03/16/biking-is-fun/) 
- ["Simplicity and Less", de Rafael.](https://rafaelkuebler.github.io/posts/20251207-simplicity-and-less/) 
- ["Secret Garden", de Tanner.](https://t0.vc/secret-garden) ![[salvaylaplanta.png]]