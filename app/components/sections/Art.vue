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
          <img v-if="drawing.image" :src="drawing.image" :alt="drawing.name" class="art-img" style="pointer-events: none;" />
          <div v-else :class="['art-placeholder', 'art-p' + ((index % 5) + 1)]"></div>
          
          <div class="art-overlay"></div>
          <div class="art-meta">
            <div class="art-meta-title">{{ drawing.name }}</div>
            <div class="art-medium">{{ drawing.description }}</div>
          </div>
          <div class="art-watermark">© {{ new Date().getFullYear() }} Luis Donaldo Ortiz G.</div>
        </div>

        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p2">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Study of Light</div>
              <div class="art-medium">Digital · 2024</div>
            </div>
          </div>
        </div>
        <div v-if="artList.length < 5" class="art-piece">
          <div class="art-placeholder art-p3">
            <div class="art-overlay"></div>
            <div class="art-meta">
              <div class="art-meta-title">Inner Landscape</div>
              <div class="art-medium">D</div>
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
