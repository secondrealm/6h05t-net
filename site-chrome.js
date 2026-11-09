const siteNavItems = [
  { id: 'home', label: 'Home', href: '/#top' },
  { id: 'society', label: 'The Society', href: '/society/' },
  { id: 'last-stand', label: 'The Last Stand', href: '/last-stand/' },
  { id: 'worldbuilding', label: 'Worldbuilding', href: '/worldbuilding/' },
  { id: 'process', label: 'Process', href: '/worldbuilding/process/' },
  { id: 'about', label: 'About', href: '/#about' }
];

if (!document.querySelector('link[data-site-typography]')) {
  const typographyStylesheet = document.createElement('link');
  typographyStylesheet.rel = 'stylesheet';
  typographyStylesheet.href = '/site-typography.css';
  typographyStylesheet.dataset.siteTypography = '';
  document.head.append(typographyStylesheet);
}

function getCurrentSection() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/index.html' || path.endsWith('/index-old.html')) return 'home';
  if (path.startsWith('/society')) return 'society';
  if (path.startsWith('/last-stand')) return 'last-stand';
  if (path.startsWith('/worldbuilding/process')) return 'process';
  if (path.startsWith('/worldbuilding')) return 'worldbuilding';
  return '';
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;

    const current = this.getAttribute('current') || getCurrentSection();
    const links = siteNavItems.map(item => {
      const active = item.id === current ? ' aria-current="page" class="nav-link is-active"' : ' class="nav-link"';
      return `<a href="${item.href}" data-nav-id="${item.id}"${active}>${item.label}</a>`;
    }).join('');

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist+Pixel&display=swap');
        :host{display:block;position:relative;z-index:8;color:#f0f0ed;font:15px/1.65 'IBM Plex Mono',monospace}
        *{box-sizing:border-box}
        header{height:74px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(22px,4.2vw,68px);border-bottom:1px solid #292c30;position:relative;z-index:8;background:rgba(9,11,14,.92)}
        a{color:inherit}
        .brand{display:inline-flex;align-items:center;gap:17px;text-decoration:none;font:700 clamp(18px,2vw,26px)/1 'Geist Pixel',monospace;letter-spacing:.13em;white-space:nowrap}
        .brand-mark{width:26px;height:26px;display:grid;grid-template-columns:repeat(2,1fr);gap:3px;flex:none}
        .brand-mark span{background:#bec4d2}
        nav{display:flex;align-items:center;gap:clamp(17px,3.4vw,53px)}
        .nav-link{text-decoration:none;font:13px/1.65 'Geist Pixel',monospace;padding:25px 0;position:relative}
        .nav-link::after{position:absolute;content:'';left:0;right:0;bottom:17px;height:1px;transform:scaleX(0);transform-origin:left;background:#f0f0ed;transition:transform .2s}
        .nav-link:hover::after,.nav-link.is-active::after{transform:scaleX(1)}
        .menu-toggle{display:none}
        a:focus-visible,button:focus-visible{outline:2px solid white;outline-offset:4px}
        @media(max-width:950px){nav{gap:20px}}
        @media(max-width:900px){header{height:68px}.menu-toggle{display:flex;width:42px;height:42px;background:none;border:1px solid #45484b;flex-direction:column;align-items:center;justify-content:center;gap:5px;cursor:pointer;color:#f0f0ed}.menu-toggle span{width:19px;height:1px;background:#eee}nav{display:none;position:absolute;left:0;right:0;top:68px;padding:12px 23px 23px;background:#0d1013;border-bottom:1px solid #292c30;flex-direction:column;align-items:stretch;gap:0;z-index:10}nav.is-open{display:flex}.nav-link{padding:13px 0}.nav-link::after{bottom:9px;right:auto;width:45px}}
        @media(max-width:390px){.brand{font-size:17px;gap:12px}.brand-mark{width:21px;height:21px}}
        @media(prefers-reduced-motion:reduce){.nav-link::after{transition:none}}
      </style>
      <header>
        <a class="brand" href="/#top" aria-label="6h05t.net home"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span><span></span></span><span>6h05t.net</span></a>
        <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
        <nav id="site-nav" aria-label="Main navigation">${links}</nav>
      </header>`;

    const button = this.shadowRoot.querySelector('.menu-toggle');
    const nav = this.shadowRoot.querySelector('nav');
    const closeMenu = () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    };
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    this.shadowRoot.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        button.focus();
      }
    });

    if (current === 'home' && 'IntersectionObserver' in window) {
      const sectionNavIds = {
        top: 'home',
        'the-society': 'society',
        'the-last-stand': 'last-stand',
        process: 'process',
        about: 'about'
      };
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const activeId = sectionNavIds[visible[0].target.id];
        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
          const active = link.dataset.navId === activeId;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-15% 0px -60% 0px', threshold: [0, 0.15, 0.4, 0.7] });
      ['top', 'the-society', 'the-last-stand', 'process', 'about'].forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        :host{display:block;max-width:1360px;margin:0 auto;padding:0 clamp(22px,4.2vw,68px);color:#adafb2;font:15px/1.65 'IBM Plex Mono',monospace}
        *{box-sizing:border-box}
        footer{border-top:1px solid #292c30;min-height:94px;display:flex;justify-content:space-between;gap:25px;align-items:center}
        p{margin:0;font-size:12px;color:#b5b8ba}
        footer div{display:flex;gap:30px;flex-wrap:wrap}
        a{color:inherit;text-decoration:none;text-underline-offset:4px;font-size:12px}
        a:hover{color:#fff}
        a:focus-visible{outline:2px solid white;outline-offset:4px}
        @media(max-width:950px){footer{align-items:flex-start;flex-direction:column;padding-top:23px;padding-bottom:23px}}
      </style>
      <footer>
        <p>6h05t.net — Edited by <a href="https://secondrealm.net" target="_blank" rel="noopener noreferrer">Second Realm / Eric Rhodes</a> <span aria-hidden="true">|</span> <a href="https://unofficialpunks.com" target="_blank" rel="noopener noreferrer">Unofficial Punks</a></p>
        <div><a href="https://x.com/secondrealm" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">𝕏</span> @secondrealm</a><a href="#top" data-back-to-top>Back to top ↑</a></div>
      </footer>`;
    this.shadowRoot.querySelector('[data-back-to-top]').addEventListener('click', event => {
      const top = document.getElementById('top');
      if (!top) return;
      event.preventDefault();
      top.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

function replaceLegacyChrome() {
  document.querySelectorAll('a[href]').forEach(link => {
    const destination = new URL(link.getAttribute('href'), location.href);
    if (destination.origin !== location.origin) return;
    const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const textNode = walker.currentNode;
      if (textNode.textContent.includes('↗')) {
        textNode.textContent = textNode.textContent.replaceAll('↗', '→');
      }
    }
  });

  const legacyHeader = document.querySelector('header.site-header, header.reader-header, header.header');
  if (legacyHeader) {
    const sharedHeader = document.createElement('site-header');
    sharedHeader.id = 'top';
    legacyHeader.replaceWith(sharedHeader);
  }

  const legacyFooter = document.querySelector('footer.site-footer, footer.reader-footer, footer.footer');
  if (legacyFooter) legacyFooter.replaceWith(document.createElement('site-footer'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', replaceLegacyChrome, { once: true });
} else {
  replaceLegacyChrome();
}
