<div class="guestbook-container">
<h1 class="guestbook-main-title">Sign the guestbook</h1>
<div class="guestbook-tabs">
<button type="button" id="tab-draw" class="tab-btn active" onclick="switchTab('draw')">Draw something</button>
<button type="button" id="tab-write" class="tab-btn" onclick="switchTab('write')">Write a message</button>
</div>
<form id="guestbook-form" onsubmit="handleFormSubmit(event)">
<div id="section-draw" class="guestbook-section active">
<div class="canvas-toolbar">
<button type="button" id="tool-pencil" class="tool-btn active" onclick="setTool('pencil')">✏️</button>
<button type="button" id="tool-eraser" class="tool-btn" onclick="setTool('eraser')">🧽</button>
<span class="divider">|</span>
<button type="button" class="size-btn small active" onclick="setBrushSize(2, this)">•</button>
<button type="button" class="size-btn medium" onclick="setBrushSize(6, this)">●</button>
<button type="button" class="size-btn large" onclick="setBrushSize(12, this)">⬤</button>
<span class="divider">|</span>
<button type="button" class="action-btn" onclick="clearCanvas()">🗑️ Clear</button>
</div>
<canvas id="paint-canvas" width="400" height="300"></canvas>
</div>
<div id="section-write" class="guestbook-section">
<div class="form-group">
<label for="input-words">Your words</label>
<textarea id="input-words" rows="4" placeholder="Write something nice..."></textarea>
</div>
</div>
<div class="form-group">
<label for="input-name">Your name</label>
<input type="text" id="input-name" required placeholder="Anónimo">
</div>
<div class="form-group">
<label for="input-website">Your website (optional)</label>
<input type="url" id="input-website" placeholder="https://example.com">
</div>
<button type="submit" id="btn-submit" class="submit-btn">Submit entry</button>
</form>
<h2 class="entries-title">Recent entries</h2>
<div id="guestbook-entries" class="guestbook-grid">
<p class="loading-status">Loading entries...</p>
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
.guestbook-container {
  max-width: 600px;
  margin: 0 auto;
  font-family: "New York", "Palatino Linotype", Georgia, serif;
  color: var(--text-main);
  padding: 20px;
}
.guestbook-main-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.guestbook-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}
.tab-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
}
.tab-btn.active, .tab-btn:hover {
  background: var(--accent);
  color: #111;
  border-color: var(--accent);
}
.guestbook-section {
  display: none;
}
.guestbook-section.active {
  display: block;
}
#paint-canvas {
  background: var(--bg-canvas);
  border-radius: 8px;
  display: block;
  margin: 0 auto 20px auto;
  cursor: crosshair;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
  touch-action: none;
}
.canvas-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid var(--border-color);
}
.canvas-toolbar button {
  background: transparent;
  border: none;
  color: var(--text-main);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.canvas-toolbar button.active {
  background: rgba(255,255,255,0.1);
  outline: 1px solid var(--accent);
}
.divider {
  color: var(--border-color);
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  opacity: 0.8;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-main);
  font-family: sans-serif;
  box-sizing: border-box;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: var(--accent);
  border: none;
  border-radius: 8px;
  color: #111;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}
.entries-title {
  margin-top: 40px;
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
}
.guestbook-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
  margin-top: 20px;
}
.guestbook-entry {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.entry-content img {
  width: 100%;
  background: var(--bg-canvas);
  border-radius: 4px;
  display: block;
}
.entry-text {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
  word-break: break-word;
}
.entry-meta {
  margin-top: 10px;
  font-size: 0.8rem;
  opacity: 0.6;
  font-family: sans-serif;
}
.entry-meta a {
  color: var(--accent);
  text-decoration: none;
}
</style>

<script>
  const SUPABASE_URL = "https://etmweqntizkvburtnyro.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bXdlcW50aXprdmJ1cnRueXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MTQ0ODQsImV4cCI6MjA5NTA5MDQ4NH0.Oe2bQl9hybfKg5i7meSL-3y8y85PN7L8psS9rH-sKR0";

  let currentTab = 'draw';
  let currentTool = 'pencil';
  let brushSize = 2;
  
  const canvas = document.getElementById('paint-canvas');
  const ctx = canvas.getContext('2d');
  let isPainting = false;

  ctx.strokeStyle = '#000000';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = brushSize;

  canvas.addEventListener('mousedown', (e) => { isPainting = true; draw(e); });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => { ctx.beginPath(); isPainting = false; });
  canvas.addEventListener('mouseleave', () => { ctx.beginPath(); isPainting = false; });

  canvas.addEventListener('touchstart', (e) => { isPainting = true; draw(e.touches[0]); e.preventDefault(); });
  canvas.addEventListener('touchmove', (e) => { draw(e.touches[0]); e.preventDefault(); });
  canvas.addEventListener('touchend', () => { ctx.beginPath(); isPainting = false; });

  function draw(e) {
    if (!isPainting || currentTab !== 'draw') return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    if (currentTool === 'eraser') {
      ctx.strokeStyle = '#faf7f2';
    } else {
      ctx.strokeStyle = '#000000';
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  window.setTool = function(tool) {
    currentTool = tool;
    document.getElementById('tool-pencil').classList.toggle('active', tool === 'pencil');
    document.getElementById('tool-eraser').classList.toggle('active', tool === 'eraser');
  }

  window.setBrushSize = function(size, btn) {
    brushSize = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  window.clearCanvas = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  window.switchTab = function(tab) {
    currentTab = tab;
    document.getElementById('tab-draw').classList.toggle('active', tab === 'draw');
    document.getElementById('tab-write').classList.toggle('active', tab === 'write');
    document.getElementById('section-draw').classList.toggle('active', tab === 'draw');
    document.getElementById('section-write').classList.toggle('active', tab === 'write');
    
    const wordsInput = document.getElementById('input-words');
    if (tab === 'draw') {
      wordsInput.removeAttribute('required');
    } else {
      wordsInput.setAttribute('required', 'required');
    }
  }

  async function fetchEntries() {
    const container = document.getElementById('guestbook-entries');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/guestbook?select=*&order=id.desc`, {
        headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
      });
      const data = await res.json();
      
      if (!data || data.length === 0) {
        container.innerHTML = '<p class="loading-status">No entries yet. Be the first!</p>';
        return;
      }

      container.innerHTML = data.map(entry => {
        let contentHtml = '';
        if (entry.type === 'image' || entry.type === 'draw') {
          contentHtml = `<img src="${entry.content}" alt="Drawing by ${entry.name}">`;
        } else {
          contentHtml = `<p class="entry-text">"${entry.content}"</p>`;
        }

        let nameHtml = entry.website 
          ? `<a href="${entry.website}" target="_blank" rel="noopener">${entry.name}</a>`
          : entry.name;

        return `
          <div class="guestbook-entry">
            <div class="entry-content">${contentHtml}</div>
            <div class="entry-meta">By ${nameHtml}</div>
          </div>
        `;
      }).join('');

    } catch (err) {
      container.innerHTML = '<p class="loading-status">Error loading entries.</p>';
      console.error(err);
    }
  }

  window.handleFormSubmit = async function(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-submit');
    btn.disabled = true;
    btn.innerText = "Sending...";

    const name = document.getElementById('input-name').value || 'Anónimo';
    const website = document.getElementById('input-website').value || null;
    let type = currentTab; 
    let content = '';

    if (currentTab === 'draw') {
      const buffer = document.createElement('canvas');
      buffer.width = canvas.width;
      buffer.height = canvas.height;
      if (canvas.toDataURL() === buffer.toDataURL()) {
        alert("Please draw something before submitting!");
        btn.disabled = false;
        btn.innerText = "Submit entry";
        return;
      }
      content = canvas.toDataURL('image/png');
    } else {
      content = document.getElementById('input-words').value;
    }

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/guestbook`, {
        method: 'POST',
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({ name, website, type, content })
      });

      if (res.ok) {
        document.getElementById('input-words').value = '';
        clearCanvas();
        await fetchEntries();
      } else {
        alert("Error saving entry. Check RLS configuration.");
      }
    } catch (err) {
      alert("Network error sending signature.");
      console.error(err);
    } finally {
      btn.disabled = false;
      btn.innerText = "Submit entry";
    }
  }

  document.addEventListener('DOMContentLoaded', fetchEntries);
  setTimeout(fetchEntries, 500);
</script>