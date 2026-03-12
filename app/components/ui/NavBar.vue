<template>
  <nav>
    <a href="#hero" class="nav-logo">Snake<span>Guitar</span></a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#stack">Stack</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#art">Art</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(232, 228, 223, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(200,194,187,0.4);
}

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text);
  text-decoration: none;
}

.nav-logo span {
  color: var(--accent2);
  font-style: italic;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover { color: var(--text); }

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { gap: 1.5rem; }
}
</style>
