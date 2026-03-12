<template>
  <section id="stack">
    <div class="stack-inner section-inner">
      <UiSectionTitle label="Technology" titleStart="My" titleEmphasis="tech stack" />

      <div class="stack-categories">
        <div v-for="(category, index) in stack" :key="index" class="stack-cat neu">
          <div class="stack-cat-title">{{ category.category }}</div>
          <div class="tech-list">
            <span v-for="item in category.items" :key="item" class="tech-pill">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { techStack } from '~/utils/portfolio'
const stack = techStack;
</script>
