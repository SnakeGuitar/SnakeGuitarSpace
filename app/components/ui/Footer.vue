<template>
  <footer>
    <span class="footer-copy">© {{ year }} {{ info.name }} {{ info.lastName }}</span>
    <span class="footer-note">I'm a part-time furry btw</span>
  </footer>
</template>

<script setup lang="ts">
import { personalInfo } from '~/utils/portfolio'

const info = personalInfo;
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(160,136,120,0.2);
}

.footer-copy {
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.footer-note {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.5rem;
  }
}
</style>
