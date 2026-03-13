<template>
  <div class="lang-switcher">
    <button class="switcher-btn neu-sm" @click="toggleMenu" aria-label="Toggle Language Menu">
      <span class="lang-icon">{{ locale }}</span>
    </button>

    <transition name="menu">
      <ul v-if="isMenuOpen" class="switcher-menu neu">
        <li v-for="l in availableLocales" :key="l.code">
          <button @click="setLanguage(l.code)" :class="{ active: locale === l.code }">
            {{ l.name }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useI18n } from '#imports';

const { locale, locales, setLocale } = useI18n();
const isMenuOpen = ref(false);

const availableLocales = computed(() => {
  return (locales.value as unknown) as Array<{ code: string, name: string }>;
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setLanguage = (code: string) => {
  setLocale(code as any);
  isMenuOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-switcher')) {
      isMenuOpen.value = false;
    }
  });
});
</script>

<style scoped>
.lang-switcher {
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
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
}

.switcher-btn:hover {
  color: var(--accent);
  transform: translateY(-1px);
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
