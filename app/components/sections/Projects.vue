<template>
  <section id="projects">
    <div class="section-inner">
      <UiSectionTitle :label="$t('projects.title_label')" :titleStart="$t('projects.title_start')" :titleEmphasis="$t('projects.title_emphasis')" />

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
const selectedProject = ref<any>(undefined);

const openModal = (project: any) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};
</script>
