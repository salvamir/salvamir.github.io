---
title: '" "'
---
<div class="guestbook-container">
<h1 class="guestbook-main-title">Dejá tu huella</h1>
<div class="guestbook-tabs">
<button type="button" id="tab-draw" class="tab-btn active">Dibujá algo</button>
<button type="button" id="tab-write" class="tab-btn">Escribí un mensaje</button>
</div>
<form id="guestbook-form" onsubmit="return false;">
<div id="section-draw" class="guestbook-section active">
<div class="canvas-toolbar">
<button type="button" id="tool-pencil" class="tool-btn active">✏️</button>
<button type="button" id="tool-eraser" class="tool-btn">🧽</button>
<span class="divider">|</span>
<button type="button" id="size-small" class="size-btn small active">•</button>
<button type="button" id="size-medium" class="size-btn medium">●</button>
<button type="button" id="size-large" class="size-btn large">⬤</button>
<span class="divider">|</span>
<button type="button" id="btn-clear" class="action-btn">🗑️ Limpiar</button>
</div>
<canvas id="paint-canvas" width="400" height="300"></canvas>
</div>
<div id="section-write" class="guestbook-section">
<div class="form-group">
<label for="input-words">Tus palabras</label>
<textarea id="input-words" rows="4" placeholder="Escribí algo lindo..."></textarea>
</div>
</div>
<div class="form-group">
<label for="input-name">Tu nombre</label>
<input type="text" id="input-name" required placeholder="Anónimo">
</div>
<div class="form-group">
<label for="input-website">Tu página web (opcional)</label>
<input type="url" id="input-website" placeholder="https://ejemplo.com">
</div>
<button type="submit" id="btn-submit" class="submit-btn">Enviar</button>
</form>
<h2 class="entries-title">Entradas Recientes</h2>
<div id="guestbook-entries" class="guestbook-grid">
<p class="loading-status">Esperando a que aparezcan los últimos mensajes...</p>
</div>
</div>

<style>
:root {
  --bg-card: #1a1714;
  --bg-canvas: #faf7f2;
  --text-main: #e3ded6;
  --accent: #b7966c;
  --border-color: rgba(168, 158, 149, 0.3);
}
.guestbook-container { max-width: 600px; margin: 0 auto; font-family: "New York", Georgia, serif; color: var(--text-main); padding: 20px; }
.guestbook-main-title { text-align: center; font-size: 2.5rem; margin-bottom: 1.5rem; }
.guestbook-tabs { display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; }
.tab-btn { background: transparent; border: 1px solid var(--border-color); color: var(--text-main); padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 1rem; }
.tab-btn.active, .tab-btn:hover { background: var(--accent); color: #111; border-color: var(--accent); }
.guestbook-section { display: none; }
.guestbook-section.active { display: block; }
#paint-canvas { background: var(--bg-canvas); border-radius: 8px; display: block; margin: 0 auto 20px auto; cursor: crosshair; touch-action: none; }
.canvas-toolbar { display: flex; gap: 8px; align-items: center; justify-content: center; background: var(--bg-card); padding: 8px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--border-color); }
.canvas-toolbar button { background: transparent; border: none; color: var(--text-main); padding: 4px 8px; border-radius: 4px; cursor: pointer; }
.canvas-toolbar button.active { background: rgba(255,255,255,0.1); outline: 1px solid var(--accent); }
.divider { color: var(--border-color); }
.form-group { margin-bottom: 15px; }
.form-group label { display: block; margin-bottom: 5px; font-size: 0.9rem; opacity: 0.8; }
.form-group input, .form-group textarea { width: 100%; padding: 10px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-main); box-sizing: border-box; }
.submit-btn { width: 100%; padding: 12px; background: var(--accent); border: none; border-radius: 8px; color: #111; font-weight: bold; font-size: 1rem; cursor: pointer; margin-top: 10px; }
.entries-title { margin-top: 40px; border-top: 1px solid var(--border-color); padding-top: 20px; }
.guestbook-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; margin-top: 20px; }
.guestbook-entry { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; }
.entry-content img { width: 100%; background: var(--bg-canvas); border-radius: 4px; display: block; }
.entry-text { font-size: 0.95rem; line-height: 1.4; margin: 0; word-break: break-word; }
.entry-meta { margin-top: 10px; font-size: 0.8rem; opacity: 0.6; }
.entry-meta a { color: var(--accent); text-decoration: none; }
</style>

<script>
  (function() {
    const SUPABASE_URL = "https://etmweqntizkvburtnyro.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bXdlcW50aXprdmJ1cnRueXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MTQ0ODQsImV4cCI6MjA5NTA5MDQ4NH0.Oe2bQl9hybfKg5i7meSL-3y8y85PN7L8psS9rH-sKR0";

    function inicializarLibro() {
      const canvas = document.getElementById('paint-canvas');
      if (!canvas) return; // Si no estamos en la página del libro, no hace nada

      let currentTab = 'draw';
      let currentTool = 'pencil';
      let brushSize = 2;
      let isPainting = false;

      const ctx = canvas.getContext('2d');
      const form = document.getElementById('guestbook-form');
      const tabDraw = document.getElementById('tab-draw');
      const tabWrite = document.getElementById('tab-write');
      const sectionDraw = document.getElementById('section-draw');
      const sectionWrite = document.getElementById('section-write');
      const wordsInput = document.getElementById('input-words');
      const btnPencil = document.getElementById('tool-pencil');
      const btnEraser = document.getElementById('tool-eraser');
      const btnSmall = document.getElementById('size-small');
      const btnMedium = document.getElementById('size-medium');
      const btnLarge = document.getElementById('size-large');
      const btnClear = document.getElementById('btn-clear');

      ctx.strokeStyle = '#000000';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = brushSize;

      function draw(e) {
        if (!isPainting || currentTab !== 'draw') return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentTool === 'eraser' ? '#faf7f2' : '#000000';
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      canvas.addEventListener('mousedown', (e) => { isPainting = true; draw(e); });
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', () => { ctx.beginPath(); isPainting = false; });
      canvas.addEventListener('mouseleave', () => { ctx.beginPath(); isPainting = false; });

      canvas.addEventListener('touchstart', (e) => { isPainting = true; draw(e); }, { passive: true });
      canvas.addEventListener('touchmove', (e) => { draw(e); }, { passive: true });
      canvas.addEventListener('touchend', () => { ctx.beginPath(); isPainting = false; });

      tabDraw.addEventListener('click', () => {
        currentTab = 'draw';
        tabDraw.classList.add('active'); tabWrite.classList.remove('active');
        sectionDraw.classList.add('active'); sectionWrite.classList.remove('active');
        wordsInput.removeAttribute('required');
      });

      tabWrite.addEventListener('click', () => {
        currentTab = 'write';
        tabWrite.classList.add('active'); tabDraw.classList.remove('active');
        sectionWrite.classList.add('active'); sectionDraw.classList.remove('active');
        wordsInput.setAttribute('required', 'required');
      });

      btnPencil.addEventListener('click', () => { currentTool = 'pencil'; btnPencil.classList.add('active'); btnEraser.classList.remove('active'); });
      btnEraser.addEventListener('click', () => { currentTool = 'eraser'; btnEraser.classList.add('active'); btnPencil.classList.remove('active'); });

      btnSmall.addEventListener('click', () => { brushSize = 2; [btnSmall, btnMedium, btnLarge].forEach(b => b.classList.remove('active')); btnSmall.classList.add('active'); });
      btnMedium.addEventListener('click', () => { brushSize = 6; [btnSmall, btnMedium, btnLarge].forEach(b => b.classList.remove('active')); btnMedium.classList.add('active'); });
      btnLarge.addEventListener('click', () => { brushSize = 12; [btnSmall, btnMedium, btnLarge].forEach(b => b.classList.remove('active')); btnLarge.classList.add('active'); });
      btnClear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

      async function fetchEntries() {
        const container = document.getElementById('guestbook-entries');
        if (!container) return;
        try {
          const res = await fetch(`${SUPABASE_URL}/rest/v1/guestbook?select=*&order=id.desc`, {
            headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
          });
          const data = await res.json();
          if (!data || data.length === 0) {
            container.innerHTML = '<p class="loading-status">Todavía no hay mensajes. ¡Sé el primero!</p>';
            return;
          }
          container.innerHTML = data.map(entry => {
            let contentHtml = entry.type === 'draw' || entry.type === 'image' 
              ? `<img src="${entry.content}" alt="Dibujo">` 
              : `<p class="entry-text">"${entry.content}"</p>`;
            let nameHtml = entry.website ? `<a href="${entry.website}" target="_blank" rel="noopener">${entry.name}</a>` : entry.name;
            return `<div class="guestbook-entry"><div class="entry-content">${contentHtml}</div><div class="entry-meta">Por ${nameHtml}</div></div>`;
          }).join('');
        } catch (err) {
          container.innerHTML = '<p class="loading-status">Error al cargar mensajes.</p>';
        }
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-submit');
        btn.disabled = true; btn.innerText = "Enviando...";

        const name = document.getElementById('input-name').value || 'Anónimo';
        const website = document.getElementById('input-website').value || null;
        let content = '';

        if (currentTab === 'draw') {
          const buffer = document.createElement('canvas');
          buffer.width = canvas.width; buffer.height = canvas.height;
          if (canvas.toDataURL() === buffer.toDataURL()) {
            alert("¡Por favor dibujá algo antes de enviar!");
            btn.disabled = false; btn.innerText = "Enviar";
            return;
          }
          content = canvas.toDataURL('image/png');
        } else {
          content = wordsInput.value;
        }

        try {
          const res = await fetch(`${SUPABASE_URL}/rest/v1/guestbook`, {
            method: 'POST',
            headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", "Prefer": "return=minimal" },
            body: JSON.stringify({ name, website, type: currentTab, content })
          });
          if (res.ok) {
            wordsInput.value = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            await fetchEntries();
          } else {
            alert("Error guardando el mensaje.");
          }
        } catch (err) {
          alert("Error de red.");
        } finally {
          btn.disabled = false; btn.innerText = "Enviar";
        }
      });

      fetchEntries();
    }

    // ¡ESTA ES LA MAGIA PARA QUARTZ!
    // Escucha el evento 'nav' de Quartz cada vez que se cambia de pestaña en la web
    document.addEventListener("nav", inicializarLibro);
    // Por si acaso se entra directo a la url:
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", inicializarLibro);
    } else {
      inicializarLibro();
    }
  })();
</script>