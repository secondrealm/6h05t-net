const chapters = [
  'Facade', 'Awakening', 'Inception', 'Resonance', 'Pressure', 'Allies',
  'Together', 'Expansion', 'Unseen', 'Crisis', 'Escape', 'Unity',
  'Renewal', 'Dichotomy', 'Horizon', 'Purpose'
];
const chapterList = document.querySelector('#chapter-list');
if (chapterList) {
  chapterList.innerHTML = chapters.map((title, index) => {
    const n = index + 1;
    return `<li><a href="society/${String(n).padStart(2, '0')}/" aria-label="Read Chapter ${n}: ${title}"><span class="chapter-no">${String(n).padStart(2, '0')}</span><span>${title}</span><span aria-hidden="true">→</span></a></li>`;
  }).join('');
}

