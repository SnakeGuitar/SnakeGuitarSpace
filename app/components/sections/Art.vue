<template>
  <section>
    <div id="art" class="section-inner">
      <UiSectionTitle :label="$t('art.title_label')" :titleStart="$t('art.title_start')" :titleEmphasis="$t('art.title_emphasis')" />

      <p class="art-intro">
        {{ $t('art.intro') }}
      </p>

      <div class="art-grid">
        <div v-for="(drawing, index) in artList" :key="index" class="art-piece" @contextmenu.prevent @click="openModal(drawing)">
          <img v-if="drawing.image" :src="drawing.image" :alt="drawing.name" class="art-img" />
          <div class="art-overlay"></div>
          <div class="art-meta">
            <div class="art-meta-title">{{ drawing.name }}</div>
            <div class="art-medium">{{ $t(drawing.description) }}</div>
          </div>
          <div class="art-watermark"> {{ $t(drawing.description) }} © {{ drawing.year }} Luis Donaldo Ortiz G.</div>
        </div>
      </div>
    </div>

    <!-- Zoom Modal -->
    <UiArtModal v-if="selectedDrawing" :is-open="isModalOpen" :drawing="selectedDrawing" @update:is-open="isModalOpen = $event" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { drawings } from '~/utils/portfolio'

const artList = drawings;
const isModalOpen = ref(false);
const selectedDrawing = ref<any>(null);

const openModal = (drawing: any) => {
  selectedDrawing.value = drawing;
  isModalOpen.value = true;
};
</script>
