---
cssclasses:
  - blog-post
date: 2026-05-30
tags:
  - geología
---
#geología 
## Contexto.
Amaicha es un pueblito de Tucumán, una provincia de Argentina. Con la facultad fuimos a estudiar unas salinas muy interesantes de ahí. Nunca había ido tan activamente a Amaicha y me encantó conocer el pueblo. La gente era muy tranquila. Este fue el segundo viaje de estudios del año que hicimos con la facultad. El primero lo hicimos a San Pedro de Colalao, pero me olvidé de documentarlo.
![[ubicacion_amaicha.mp4]]
## Cómo fue.
El objetivo era ir a hacer análisis de sales, pero nos distrajimos y aprovechamos para ver un poco de geología. El primer día fuimos a hacer los estudios en el río de Amaicha, y bajamos primero por la ruta. Ahí nos encontramos con un afloramiento que ya conocíamos de antes, que habíamos visto ya en otro viaje.

![Primer afloramiento del grupo Santa María. Lo encontramos al costado de la ruta.](santamariatransicion.png)

Corresponde a un contacto transicional entre tres formaciones del grupo Santa María, que da para las Sierras de Aconquija (oeste/suroeste desde el punto en el que fue tomada la foto). No me acuerdo ni la composición general del grupo, ni tampoco las composiciones de cada formación. Lo que si, si mal no recuerdo, el profe nos habia comentado en su momento que el orden de aparición era en primer lugar, el material que se ve a la derecha de la imagen, que corresponde al complejo volcánico portezuelo de las ánimas (¿Y eso? ¿De dónde es? --> No sé).

Más tarde, entramos a la cascada de Amaicha. En la entrada del sendero nos encontramos con este afloramiento:  un contacto casi neto entre dos materiales distintos, el superior correspondía a un estrato conglomerádico, y el inferior a lo que parecía ser caliza. 

![[afloramientoentrada.png|697]]

Sin embargo, pensándolo mejor ahora, eso no tiene mucho sentido. Probablemente haya sido nada más que basamento metamórfico de la formación Puncoviscana (es el basamento genérico de Tucumán), que en todo caso, habrá tenido una pátina (recubrimiento) de arenas finas. No hicimos ensayos con HCl como para corroborar la presencia de Carbonatos en este afloramiento, pero la misma morfología rocosa y la presencia de un plano de falla tan neto, nos demuestra que es casi 100% seguro que se trataba simplemente de basamento metamórfico.

Seguimos avanzando, y el mismo afloramiento se veía más completo a la izquierda. En esta imagen queda corroborado que el material que vimos en la anterior, sin duda era basamento. Que en algunos sectores se observaba plegado y con intrusiones ígneas. Vimos muchos clastos de pegmatita en el camino, probablemente se desprendieron por erosión.

![[afloramientolacascadaizquierda.png]]

En esta foto estas viendo un montón de basamento plegado y fallado (pliegues en violeta, falla en celeste). A lo largo de la falla se extiende un dique ígneo, quién sabrá de qué composición. Por lo pronto, la intrusión de más arriba, tenía toda la pinta de una pegmatita.

Ese día tomamos todas las muestras super rápido, comimos allá en el campo y a las 17.15hs ya estabamos libres en la plaza, y me compré un heladito. A la noche tocamos la guitarra, la gente fumaba y tomaba cerveza. Yo con una coquita ya estaba bien. Cociné las hamburguesas a la parrilla y salieron re ricas.

![[heladito.jpg|225]]![[entornoynosotros.jpg|301]]![[cardon.jpg|224]]![[escrituralocal.jpg|223]]
## Segundo día.
Este día fue más largo, porque caminamos desde la mañana a la tarde, basicamente. Esteban (el chofer) nos arcercó un poco, pero tampoco tanto. Fue genial, porque encontramos un entorno geológicamente muy interesante.

![[pliegue.png]]

Esta reconstrucción la hicieron Justo y Franco para su tesis. Justo fue muy paciente explicándomela para que pueda verla. No conseguía ver el pliegue.

![[sinclinal.png]]

Este es otro pliegue que me mostró Cesar. La verdad me encantó.
Vimos muchas otras estructuras más, como laminaciones convolutas, basaltos ventifactos y vesiculares, hogbacks, crestas, ondulas, etc. Fue muy completo. Si bien en esta publicación no estoy diciendo nada de la quimica que estudiamos, fue tremenda esa parte también.

Quiero empezar a publicar más en detalle como vivo las campañas, porque después me olvido. Me sirvió mucho dibujar sobre las fotos también.
<div class="upvote-container">
  <button id="like-btn" class="upvote-button" aria-label="Like">
    <span class="upvote-icon">♥</span>
    <span id="like-count" class="upvote-count">...</span>
  </button>
</div>

<script>
  (function() {
    const PUBLIC_TOKEN = "pt_0f23483825f44e5cba6914e14bc023";
    const NAMESPACE = "blog";

    function initLyket() {
      const btn = document.getElementById("like-btn");
      const countEl = document.getElementById("like-count");
      if (!btn || !countEl) return;

      const rawPath = window.location.pathname.replace(/^\/|\/$/g, "");
      const pageId = (rawPath || "home").replace(/[^a-zA-Z0-9_-]/g, "_");
      const storageKey = `lyket_${pageId}`;

      if (localStorage.getItem(storageKey)) {
        btn.classList.add("upvoted");
      }

      // 1. Obtener likes desde Lyket
      fetch(`https://api.lyket.dev/v1/like-buttons/${NAMESPACE}/${pageId}`, {
        headers: { "x-api-key": PUBLIC_TOKEN }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.data && data.data.attributes) {
          countEl.textContent = data.data.attributes.total_likes;
        } else {
          countEl.textContent = "0";
        }
      })
      .catch(() => { countEl.textContent = "0"; });

      // 2. Registrar clic
      btn.onclick = (e) => {
        e.preventDefault();
        if (localStorage.getItem(storageKey)) return;

        btn.disabled = true;
        fetch(`https://api.lyket.dev/v1/like-buttons/${NAMESPACE}/${pageId}/press`, {
          method: "PUT",
          headers: { "x-api-key": PUBLIC_TOKEN }
        })
        .then(res => res.json())
        .then(data => {
          if (data && data.data && data.data.attributes) {
            countEl.textContent = data.data.attributes.total_likes;
            localStorage.setItem(storageKey, "true");
            btn.classList.add("upvoted");
          }
        })
        .catch(err => console.error(err))
        .finally(() => { btn.disabled = false; });
      };
    }

    // Reactivar en cada cambio de página en Quartz
    document.addEventListener("nav", initLyket);
    initLyket();
  })();
</script>
<script src="https://giscus.app/client.js"
        data-repo="salvamir/salvamir.github.io"
        data-repo-id="R_kgDOR__zrQ"
        data-category="General"
        data-category-id="DIC_kwDOR__zrc4DDmDq"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="transparent_dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
<div class="webmention-box">
<h3 class="webmention-title">Enviar una respuesta</h3>
<p class="webmention-desc">Si respondiste a esta nota en tu blog, pegá el enlace acá abajo para vincularlo. Así yo me entero, y podemos seguir conversando.</p>
<form action="https://webmention.io/salvamir.github.io/webmention" method="POST" class="webmention-form">
<input type="hidden" name="target" id="wm-target-url" value="">
<div class="wm-input-group">
<label for="wm-source">URL de tu post:</label>
<input type="url" name="source" id="wm-source" placeholder="https://tu-sitio.com/mi-respuesta" required>
<button type="submit" class="wm-submit">Enviar</button>
</div>
</form>
</div>

<div class="webmentions-container">
<h3 class="webmentions-title">Respuestas de la comunidad</h3>
<div id="webmentions-list">
<p class="wm-loading">Buscando respuestas...</p>
</div>
</div>

<style>
.webmention-box, .webmentions-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(168, 158, 149, 0.2);
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}
.webmention-title, .webmentions-title {
  color: #b7966c;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
.webmentions-title {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(168, 158, 149, 0.2);
  padding-bottom: 0.5rem;
}
.webmention-desc {
  color: #e3ded6;
  opacity: 0.8;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}
.wm-input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.wm-input-group label {
  display: none; 
}
.wm-input-group input[type="url"] {
  flex-grow: 1;
  padding: 10px 12px;
  background: #1a1714;
  border: 1px solid rgba(168, 158, 149, 0.5);
  border-radius: 8px;
  color: #e3ded6;
  font-family: monospace;
}
.wm-input-group input[type="url"]:focus {
  outline: none;
  border-color: #b7966c;
}
.wm-submit {
  background: #b7966c;
  color: #1a1714;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}
.wm-submit:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}
.wm-loading, .wm-no-mentions {
  font-size: 0.9rem;
  color: #e3ded6;
  opacity: 0.6;
  font-style: italic;
}
.wm-comment {
  display: flex;
  gap: 14px;
  margin-bottom: 1.5rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(168, 158, 149, 0.15);
}
.wm-comment:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.wm-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #1a1714;
  border: 1px solid rgba(183, 150, 108, 0.4);
  object-fit: cover;
}
.wm-content {
  flex-grow: 1;
}
.wm-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}
.wm-author {
  font-weight: 600;
  color: #b7966c;
  text-decoration: none;
  font-size: 0.95rem;
}
.wm-author:hover {
  text-decoration: underline;
}
.wm-meta {
  font-size: 0.75rem;
  color: #e3ded6;
  opacity: 0.5;
}
.wm-text {
  color: #e3ded6;
  font-size: 0.9rem;
  line-height: 1.45;
}
.wm-text p {
  margin: 0;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.href.split('#')[0];
  const targetInput = document.getElementById("wm-target-url");
  if (targetInput) targetInput.value = currentUrl;

  const listContainer = document.getElementById("webmentions-list");
  if (!listContainer) return;
  
  const apiUrl = `https://webmention.io/api/mentions.jf2?target=${encodeURIComponent(currentUrl)}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (!data.children || data.children.length === 0) {
        listContainer.innerHTML = '<p class="wm-no-mentions">Todavía no hay respuestas para esta nota. ¡Sé el primero en comentar desde tu sitio!</p>';
        return;
      }
      
      listContainer.innerHTML = "";
      
      data.children.forEach(mention => {
        const authorName = mention.author?.name || "Lector Anónimo";
        const authorUrl = mention.author?.url || "#";
        const defaultAvatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23b7966c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path><circle cx='12' cy='7' r='4'></circle></svg>`;
        const authorPhoto = mention.author?.photo || defaultAvatar;
        const pubDate = mention.published ? new Date(mention.published).toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'}) : "Reciente";
        
        let mentionText = "";
        if (mention.content?.html) {
          mentionText = mention.content.html;
        } else if (mention.content?.text) {
          mentionText = `<p>${mention.content.text}</p>`;
        } else if (mention['wm-property'] === 'like-of') {
          mentionText = `<p style="font-style: italic; opacity: 0.7;">Le dio "Me gusta" a esta nota desde su plataforma.</p>`;
        } else if (mention['wm-property'] === 'repost-of') {
          mentionText = `<p style="font-style: italic; opacity: 0.7;">Reposteó este artículo en su blog.</p>`;
        } else {
          mentionText = `<p style="font-style: italic; opacity: 0.7;">Mencionó esta publicación desde su web.</p>`;
        }
        
        const commentStructure = `
          <div class="wm-comment">
            <img src="${authorPhoto}" class="wm-avatar" alt="${authorName}" onerror="this.src='${defaultAvatar}'">
            <div class="wm-content">
              <div class="wm-header">
                <a href="${authorUrl}" target="_blank" rel="noopener noreferrer" class="wm-author">${authorName}</a>
                <span class="wm-meta">${pubDate}</span>
              </div>
              <div class="wm-text">${mentionText}</div>
            </div>
          </div>
        `;
        listContainer.insertAdjacentHTML("beforeend", commentStructure);
      });
    })
    .catch(err => {
      console.error("Error al cargar Webmentions:", err);
      listContainer.innerHTML = '<p class="wm-no-mentions">Hubo un problema al cargar los comentarios del servidor.</p>';
    });
});
</script>