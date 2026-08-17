---
cssclasses:
  - blog-post
date: 2026-07-16
tags:
  - conversaciones
---
This post is a reply to [this](https://finest.day/posts/friction-as-a-form-of-appreciation) Sebastian's entry. He talked about how guestbooks are a great way to share with others you care about them in this artificial and digitalized community we made. 
My guestbook here is also a demonstration that many people around the world cared about t**his avatar that I'm here.** That drives me crazy... 

Did you noticed that I said that Seba "**talked**" on his entry and not "*wrote*"? I spent a lot of time thinking about this: Tech has overcome the boundaries of being a work/study/learning tool and now is, not only part of our lives, but **a way of making community**. Or at least a try to imitate it. 

Right now, at this point of the post, maybe you don't understand what I'm trying to say or what's the point of these paragraphs. That's the way a conversation unfolds, so don't rush. Enjoy it. I thought a lot about it to: How our brains work and why we should let them work. Pay attention to which words I've made bold. Those mean something interesting to me. 

> [!note]+ Sebastian's thought about personal lives.
> All I know is that they, too, have their own daily lives, with their own limited number of minutes available, and by signing my guestbook, they’ve carved out a few minutes from their finite amount of time to leave a message there. And that’s what matters. That’s what’s precious.

## We all are avatar's here. Does it make this digital interaction artificial or "fake"?

I'm not sure, because nor Sebastian or me know each other and doesn't know if the other is lying or not. In other context, Borges said that "the deal of a conversation is about believing and trusting the interlocutor even tho they might be lying to you". That's awesome. 

In real life is easy to know if someone is not interested in what you're saying to them. Is easy to know if they're lying to you. But here, in this digital version of a real conversation, is hard to know. I think that's the point of blogging: If you're willing to actually know other's strange people thoughts about life and trascendental stuff, come here and met them in their small personal internet's corner. Most blogs I read felt sincere and transparent. Because here no-one listen to you. Better said: not everybody sees/listens you. Only those who **really** want to know you and what do you think, write, live, etc actually pay attention to your words and **take their time to receive your message.**  I think that's what Sebastian called in his entry as "friction". 

I picture this phenomena like a big "artisanal fair" where each person has their own space to share whatever they want. People walking around those spaces (me around Sebastian's blog recently, you right now, and every person who had read something personal on this small "virtual city") are aware of what kind of content they're offered to be fed up with, and consciously decide which one collect and **ruminate**. 

![[feriaartesanal.jpg|405]]

Parts of my *own real life* are shown here. I'm being open to you, the reader. I trust you. And I think that's what me and Sebastian (correct me if I'm wrong) amaze the most. Both of us are  trusting that the other is sharing a real part of their lives, even tho this digital medium is not quite "real". 

> [!note]+ Jorge Drexler, Nuestro Trabajo.
> (...) "Brindemos por las clarividentes
> Mentes abiertas, despiertas, viajeras
> De la enredadera humana
> Que crece que trepa y que va
> Agrietando los muros
> 
> Dejando que rayo a rayo, 
> Entre la luz en lo oscuro " (...)

If you don't know Spanish, sorry. You won't appreciate completely those verses of that great candomblé song. But a brief translation would be this:

"Cheers for those open minds, awaken and travelers. 
From the big human-climber,
which grows and is cracking the walls
Letting lighting by lighting 
Enter the light through the dark"

Hope this brief talk encourages you to share you life with others. Not only those who are near to you. Share it sincerely with strangers, trust them. Here for you, I'm just an avatar, but trust me, I'm not AI. I'm a real human sharing his own real life with you right now. Take care of it and appreciate it too. That leads us to the next point in this conversational net.
## Everything that matters takes effort. We all know that. 

And the Internet, believe it or not, have so much things that matters. You'll find them only if you're a great researcher/reader/listener. The Internet have all of those spaces where many people are being sincere and open to every walker that passes next to them, in this "great-big human fair".

I agree with you on this topic, Sebastian: Having a guestbook signed by avatars of real people, is a prove of care of others about parts of my own personal life. The list of websites you published in your entry is fun. I'm willing to start signing those guestbooks too. 

I'm happy to know that not only my family and friends care about what I think. Feels great knowing that other people around the world found their own path through this huge (recently called by me) "digitalized human fair". Thanks for reading till this word. You made an effort and I appreciate it. Hope you have something to think about now... I'm waiting to read your thoughts!
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

    function setupLyket() {
      const rawPath = window.location.pathname.replace(/^\/|\/$/g, "");
      const pageId = (rawPath || "home").replace(/[^a-zA-Z0-9_-]/g, "_");

      const btn = document.getElementById("like-btn");
      const countEl = document.getElementById("like-count");
      if (!btn || !countEl) return;

      const storageKey = `lyket_liked_${pageId}`;
      if (localStorage.getItem(storageKey)) {
        btn.classList.add("upvoted");
      }

      // Obtener me gustas desde Lyket
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

      // Registrar nuevo me gusta
      btn.onclick = () => {
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

    document.addEventListener("nav", setupLyket);
    setupLyket();
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
<h3 class="webmention-title">Send me your response</h3>
<p class="webmention-desc">if you answered me on your own website, link that post here below.</p>
<form action="https://webmention.io/salvamir.github.io/webmention" method="POST" class="webmention-form">
<input type="hidden" name="target" id="wm-target-url" value="">
<div class="wm-input-group">
<label for="wm-source">URL of your amazing post:</label>
<input type="url" name="source" id="wm-source" placeholder="https://tu-sitio.com/mi-respuesta" required>
<button type="submit" class="wm-submit">Send</button>
</div>
</form>
</div>

<div class="webmentions-container">
<h3 class="webmentions-title">Answers of other people:</h3>
<div id="webmentions-list">
<p class="wm-loading">Searching for answers...


Well, there's none for now. Why don't you be the firstone?</p>
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