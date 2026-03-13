<template>
  <div class="project-card neu">
    <div class="project-tag" v-if="tag">{{ tag }}</div>
    <h3 class="project-title">{{ project.name }}</h3>
    <p class="project-desc">{{ project.description }}</p>
    <div class="project-footer">
      <div class="project-chips">
        <span v-for="tech in techList" :key="tech" class="chip">
          {{ tech }}
        </span>
      </div>
      <button @click="$emit('view', project)" class="project-link project-link-btn">View &rarr;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  tag: {
    type: String,
    default: 'Software Portfolio'
  }
});

defineEmits(['view']);

const techList = computed(() => {
  const p = props.project;
  return p.techStack ? p.techStack.slice(0, 10) : (p.layla2TechStack ? p.layla2TechStack.slice(0, 10) : []);
});
</script>

<style scoped>
.project-link-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: var(--accent);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.project-link-btn:hover {
  text-decoration: underline;
}
</style>
