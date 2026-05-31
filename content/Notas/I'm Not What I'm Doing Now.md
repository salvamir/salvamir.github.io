---
cssclasses:
  - blog-post
date: 2026-04-03
---
Lately I’ve been meeting new people. I’m working hard with many others to make “Pascua Joven“ happen (a spiritual withdrawal made for agnostic/atheist/barely religious/very religious guys from the latest years of high school). One of the activities we did, was to make two rounds of people taken of its hands and roll in different directions, in front of one another, when some music plays. Then, when it stops, everybody is in front of another so they start a quick talk and meet each other. Every time someone asked me who I am, I said my name and next: “I study Geology, I love music, I go to church, I like drawing, I like technology but at the same time I hate my phone, etc…“ 

This happened some days ago. Now I should be studying, but my head hurts and I just don’t have enough energy. 

It’s time to stop thinking of me like a to-do list.

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

<style>
  .webmention-box {
    margin-top: 3rem;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(168, 158, 149, 0.3);
    border-radius: 12px;
    font-family: system-ui, sans-serif;
  }
  .webmention-title {
    color: #b7966c;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
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
</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("wm-target-url").value = window.location.href.split('#')[0];
  });
</script>