<template>
  <section>
    <div id="art" class="section-inner">
      <UiSectionTitle label="Art" titleStart="Traditional" titleEmphasis="drawings" />

      <p class="art-intro">
        A parallel practice to development, but equally serious. I craft my works with patience and love. Sometimes I
        draw in digital too :3
      </p>

      <div class="art-grid">
        <div v-for="(drawing, index) in artList" :key="index" class="art-piece" @contextmenu.prevent>
          <img v-if="drawing.image" :src="drawing.image" :alt="drawing.name" class="art-img"
            style="pointer-events: none;" />
          <div class="art-overlay"></div>
          <div class="art-meta">
            <div class="art-meta-title">{{ drawing.name }}</div>
            <div class="art-medium">{{ drawing.description }}</div>
          </div>
          <div class="art-watermark"> {{ drawing.description }} © {{ drawing.year }} Luis Donaldo Ortiz G.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { drawings } from '~/utils/portfolio'
const artList = drawings;
</script>
