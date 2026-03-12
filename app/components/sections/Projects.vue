<template>
  <section>
    <div id="projects" class="section-inner">
      <UiSectionTitle label="Work" titleStart="Featured" titleEmphasis="projects" />

      <div class="projects-grid">
        <UiProjectCard 
          v-for="project in projectList" 
          :key="project.name" 
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/utils/portfolio'
const projectList = projects;
</script>
