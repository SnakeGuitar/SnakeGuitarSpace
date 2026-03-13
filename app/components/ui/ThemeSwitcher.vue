<template>
  <div class="theme-switcher">
    <button class="switcher-btn neu-sm" @click="toggleMenu" aria-label="Toggle Theme Menu">
      <svg class="icon" v-if="currentTheme === 'light'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      <svg class="icon" v-else-if="currentTheme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </button>
    
    <transition name="menu">
      <ul v-if="isMenuOpen" class="switcher-menu neu">
        <li v-for="theme in themes" :key="theme.value">
          <button 
            @click="setTheme(theme.value)" 
            :class="{ active: currentTheme === theme.value }">
            {{ theme.label }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const themes = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const currentTheme = ref('light');
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setTheme = (theme: string) => {
  currentTheme.value = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('sg-theme', theme);
  isMenuOpen.value = false;
};

// Close menu when clicking outside
onMounted(() => {
  const storedTheme = localStorage.getItem('sg-theme');
  if (storedTheme) {
    currentTheme.value = storedTheme;
  }
  
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.theme-switcher')) {
      isMenuOpen.value = false;
    }
  });
});
</script>

<style scoped>
.theme-switcher {
  position: relative;
}

.switcher-btn {
  background: var(--surface);
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: color 0.2s, transform 0.2s;
}

.switcher-btn:hover {
  color: var(--accent);
  transform: translateY(-1px);
}

.icon {
  width: 18px;
  height: 18px;
}

.switcher-menu {
  position: absolute;
  top: 120%;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  min-width: 120px;
  z-index: 50;
  background: var(--surface);
}

.switcher-menu button {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-family: var(--font-body);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.switcher-menu button:hover {
  background: var(--bg);
  color: var(--text);
}

.switcher-menu button.active {
  color: var(--accent);
  font-weight: 500;
}

/* Transitions */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: top right;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-5px);
}
</style>
