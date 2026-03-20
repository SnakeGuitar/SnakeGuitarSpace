<template>
  <nav>
    <a href="#hero" class="nav-logo" @click.prevent="scrollToSection('#hero')">Snake<span>Guitar</span></a>
    <div class="nav-actions">
      <ul class="nav-links">
        <li><a href="#about" @click.prevent="scrollToSection('#about')">{{ $t('nav.about') }}</a></li>
        <li><a href="#stack" @click.prevent="scrollToSection('#stack')">{{ $t('nav.stack') }}</a></li>
        <li><a href="#projects" @click.prevent="scrollToSection('#projects')">{{ $t('nav.projects') }}</a></li>
        <li><a href="#art" @click.prevent="scrollToSection('#art')">{{ $t('nav.art') }}</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('#contact')">{{ $t('nav.contact') }}</a></li>
      </ul>
      <div class="header-controls">
        <UiLanguageSwitcher />
        <UiThemeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll';
const { scrollToSection } = useSmoothScroll();
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--nav-border);
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

.nav-actions {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.header-controls {
  display: flex;
  gap: 0.75rem;
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

.nav-links a:hover {
  color: var(--text);
}

@media (max-width: 768px) {
  nav {
    padding: 1rem 1.5rem;
  }

  .nav-actions {
    gap: 1.5rem;
  }

  .nav-links {
    display: none;
    /* Hide links on mobile for now, or adapt as needed */
  }
}
</style>
