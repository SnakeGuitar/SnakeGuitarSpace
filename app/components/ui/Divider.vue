<template>
  <div class="dual-divider">
    <div class="divider-line"></div>
    <div class="divider-text">{{ text }}</div>
    <div class="divider-line"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped>
.dual-divider {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
}

.divider-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.8rem;
  font-style: italic;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .dual-divider { padding: 0 1.5rem; }
}
</style>
