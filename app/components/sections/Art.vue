<template>
  <section>
    <div id="art" class="section-inner">
      <UiSectionTitle label="Art" titleStart="Traditional" titleEmphasis="painting" />

      <p class="art-intro">
        A parallel practice to development, but equally serious. I work mainly with oil
        and acrylic — materials that demand presence and patience, qualities I also apply to code.
      </p>

      <div class="art-grid">
        <div v-for="(drawing, index) in artList" :key="index" class="art-piece">
          <div :class="['art-placeholder', 'art-p' + ((index % 5) + 1)]">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">{{ drawing.name }}</div>
              <div class="art-medium">{{ drawing.description }}</div>
            </div>
          </div>
        </div>

        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p2">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Study of Light</div>
              <div class="art-medium">Acrylic · 2024</div>
            </div>
          </div>
        </div>
        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p3">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Inner Landscape</div>
              <div class="art-medium">Mixed Media · 2023</div>
            </div>
          </div>
        </div>
        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p4">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Composition III</div>
              <div class="art-medium">Oil · 2023</div>
            </div>
          </div>
        </div>
        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p5">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Untitled</div>
              <div class="art-medium">Acrylic · 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { drawings } from '~/utils/portfolio'
const artList = drawings;
</script>
