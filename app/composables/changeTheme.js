import { useState } from '#app'

export const useChangeTheme = () => {
  const theme = useState('theme', () => 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    
    // Quick demonstration of theme toggling using standard CSS variables manipulation
    if (import.meta.client) {
      const root = document.documentElement;
      if (theme.value === 'dark') {
        root.style.setProperty('--bg', '#1c1b1a');
        root.style.setProperty('--bg2', '#22201e');
        root.style.setProperty('--surface', '#2a2725');
        root.style.setProperty('--shadow-light', '#35322f');
        root.style.setProperty('--shadow-dark', '#1e1b1a');
        root.style.setProperty('--text', '#e8e4df');
        root.style.setProperty('--text-muted', '#a8a29e');
      } else {
        root.style.removeProperty('--bg');
        root.style.removeProperty('--bg2');
        root.style.removeProperty('--surface');
        root.style.removeProperty('--shadow-light');
        root.style.removeProperty('--shadow-dark');
        root.style.removeProperty('--text');
        root.style.removeProperty('--text-muted');
      }
    }
  }

  return {
    theme,
    toggleTheme
  }
}
