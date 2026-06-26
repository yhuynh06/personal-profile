// ── STARS ──
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  s.style.cssText = `
    width:${size}px; height:${size}px;
    top:${Math.random() * 100}%;
    left:${Math.random() * 100}%;
    --d:${2 + Math.random() * 5}s;
    animation-delay:${Math.random() * 5}s;
  `;
  starsEl.appendChild(s);
}

// ── FIREFLIES ──
const hero = document.querySelector('.hero');
for (let i = 0; i < 28; i++) {
  const f = document.createElement('div');
  f.className = 'firefly';
  const size = Math.random() * 3 + 2;
  f.style.cssText = `
    width:${size}px; height:${size}px;
    top:${30 + Math.random() * 65}%;
    left:${Math.random() * 90}%;
    --fd:${5 + Math.random() * 8}s;
    --ft:${1.5 + Math.random() * 3}s;
    --fx:${(Math.random() - 0.5) * 80}px;
    --fy:${(Math.random() - 0.5) * 60}px;
    animation-delay:${Math.random() * 6}s;
    opacity:${0.4 + Math.random() * 0.6};
  `;
  hero.appendChild(f);
}

// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
