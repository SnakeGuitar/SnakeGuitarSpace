<template>
  <section>
    <div id="projects" class="section-inner">
      <UiSectionTitle label="Work" titleStart="Featured" titleEmphasis="projects" />

      <div class="projects-grid">
        <UiProjectCard 
          v-for="project in projectList" 
          :key="project.name" 
          :project="project"
          @view="openModal"
        />
      </div>

      <UiModal v-model:isOpen="isModalOpen" :project="selectedProject" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/utils/portfolio'

const projectList = projects;
const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project: any) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};
</script>
