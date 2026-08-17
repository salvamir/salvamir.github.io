---
cssclasses:
  - blog-post
date: 2026-06-01
tags:
  - conversaciones
---
This post is a reply to Daniel's and Rafa's thoughts on [simplicity](https://rafaelkuebler.github.io/posts/20251207-simplicity-and-less/), [overwhelming "needs" of professional growth](https://danielslife.blog/posts/letting-others-be-better), rush and routines.
Those posts resonated with me. Here I just connected the nodes between them all. #conversaciones 

---

Since 2026 started, [my life is a blur too](https://danielslife.blog/posts/when-routine-fills-the-day). The constant movement, the routine, and the overwhelming rhythm of university are some of the causes of it. My head is over-saturated of tasks, schedules to be organized, full to-do lists and much more. At the end of the day, everything passes by. But on the way I lost all my energy. And my beloved ones suffer the consequences: I stop smiling, I do not listen to them, I do not spend time with them anymore.

In general, we all live in a rush. We don't know why but is like you should always be growing. And I agree with Rafa on this: most of the time is just self-imposed, or imposed by our environment. For me, it is just "not self-controlled", or is unconscious. I'm trying to say that, rather than focusing on what external factors are making us feel (we can't do nothing for it), why not focus on what we actually can change?

---

Wait. Before you continue reading, take a deep breath.
(...)
Now you can keep going.

---

Let the environment be rushed if they want. Let others keep growing, but you don't need all of it. You can live more simply if you want. You just need to be brave.
![[rush.png]]
What I'm trying to say is: If we focus on being conscious of our hustle, then its easy to pause. And pause is the solution. Is that simple: When you know you're walking too fast, just stop, pause and wait for a little. You don't need to rush. And you can keep waiting for life. Look at the trees, listen to people and your environment, close your eyes, take a breath.

I practice this, and helps me calm down. Living slowly and stopping by the details, is the way I found of making everyday feel memorable.

Being always busy make us less human. What is the point of all those activities, if we miss the really important things? People says that doing nothing with others is an unproductive activity. I miss being unproductive with friends. I don't have time for my family now. I "don't have" time for praying either.

The solution to this hustle culture is doing nothing. But we don't have the braveness for stepping aside of our "extra busy and important life". Spending time in other's life is the most unproductive thing someone can do, that's what the world says.

I encourage you to assume the protagonism of your life, and rest for a little, without worrying about nothing. Probably, nothing will happen. I'm sure that important task can wait some hours. Put down your phone and let yourself bore for a little. Focus on simple things again. Be with others outside, drink something with a friend, pray or look at the trees.

And if you already feel rested, then go and keep up with your responsibilities. But this time, do everything slowly. Do it with all of yourself: Read slowly, walk slowly, talk slowly. You don't need to rush. Speed is the most un-human thing we ever had. Cars go at 60km/hr, we don't.
## Further reading:
More people commented on this topic, like [Kev](https://kevquirk.com/i-didnt-fail), or [Rihshab](https://blog.rishabhps.com/posts/2026-02-03-content-consumption-productivity-and-lost-art-of-boredom/). Read them, publish something, and keep the conversation alive!
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
<div style="margin-top: 3rem;">
  <div id="cusdis_thread"
    data-host="https://cusdis.com"
    data-app-id="eefceffe-c1b3-4c45-bcd8-c1d0327e4d83"
    data-page-id=""
    data-page-url=""
    data-page-title=""
    data-theme="dark"
  ></div>
</div>

<script>
  (function() {
    function initCusdis() {
      const thread = document.getElementById("cusdis_thread");
      if (!thread) return;

      // Inyectar datos dinámicos de la nota actual
      const rawPath = window.location.pathname.replace(/^\/|\/$/g, "");
      thread.dataset.pageId = rawPath || "home";
      thread.dataset.pageUrl = window.location.href;
      thread.dataset.pageTitle = document.title;

      // Re-renderizar si ya existe en la navegación SPA de Quartz
      if (window.CUSDIS && typeof window.CUSDIS.initial === 'function') {
        window.CUSDIS.initial();
      } else if (!document.getElementById("cusdis-script")) {
        const script = document.createElement("script");
        script.id = "cusdis-script";
        script.src = "https://cusdis.com/js/cusdis.es.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }

    document.addEventListener("nav", initCusdis);
    initCusdis();
  })();
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
