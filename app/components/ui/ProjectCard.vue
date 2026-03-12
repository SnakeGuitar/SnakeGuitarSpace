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
      <a :href="project.link" target="_blank" class="project-link">View &rarr;</a>
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

const techList = computed(() => {
  const p = props.project;
  return p.techStack ? p.techStack.slice(0, 10) : (p.layla2TechStack ? p.layla2TechStack.slice(0, 10) : []);
});
</script>
