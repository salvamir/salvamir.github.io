function scaleTags() {
  if (!window.location.pathname.includes("/tags")) return;

  const tagElements = document.querySelectorAll("a.tag-link, a.internal[href*='/tags/']");
  if (!tagElements.length) return;

  const tagData: { el: Element; count: number }[] = [];

  tagElements.forEach(el => {
    const text = el.textContent || "";
    const match = text.match(/\((\d+)\)/);
    const count = match ? parseInt(match[1], 10) : 1;
    tagData.push({ el, count });
  });

  if (!tagData.length) return;

  const counts = tagData.map(item => item.count);
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);

  tagData.forEach(({ el, count }) => {
    const minSize = 0.85;
    const maxSize = 2.2;
    
    let fontSize = minSize;
    if (maxCount > minCount) {
      const scale = (count - minCount) / (maxCount - minCount);
      fontSize = minSize + scale * (maxSize - minSize);
    }

    (el as HTMLElement).style.fontSize = `${fontSize.toFixed(2)}rem`;
    (el as HTMLElement).style.fontWeight = count > (maxCount / 2) ? "700" : "400";
  });
}

document.addEventListener("nav", scaleTags);
scaleTags();