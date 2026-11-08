const chapters = [
  'Facade', 'Awakening', 'Inception', 'Resonance', 'Pressure', 'Allies',
  'Together', 'Expansion', 'Unseen', 'Crisis', 'Escape', 'Unity',
  'Renewal', 'Dichotomy', 'Horizon', 'Purpose'
];
const chapterList = document.querySelector('#chapter-list');
if (chapterList) {
  chapterList.innerHTML = chapters.map((title, index) => {
    const n = index + 1;
    return `<li><a href="https://secondrealm.net/the-society-chapter-${n}" target="_blank" rel="noopener noreferrer" aria-label="Read Chapter ${n}: ${title}"><span class="chapter-no">${String(n).padStart(2, '0')}</span><span>${title}</span><span aria-hidden="true">↗</span></a></li>`;
  }).join('');
}
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
const sections = ['top', 'the-society', 'the-last-stand', 'process', 'about'].map(id => document.getElementById(id)).filter(Boolean);
const navLinks = [...document.querySelectorAll('.nav-link')];
function setActive(id) {
  navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) setActive(visible[0].target.id);
  }, { rootMargin: '-15% 0px -60% 0px', threshold: [0, 0.15, 0.4, 0.7] });
  sections.forEach(section => observer.observe(section));
}
