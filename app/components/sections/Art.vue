<template>
  <section>
    <div id="art" class="section-inner">
      <UiSectionTitle :label="$t('art.title_label')" :titleStart="$t('art.title_start')" :titleEmphasis="$t('art.title_emphasis')" />

      <p class="art-intro">
        {{ $t('art.intro') }}
      </p>

      <div class="art-grid">
        <div v-for="(drawing, index) in artList" :key="index" class="art-piece" @contextmenu.prevent>
          <img v-if="drawing.image" :src="drawing.image" :alt="drawing.name" class="art-img"
            style="pointer-events: none;" />
          <div class="art-overlay"></div>
          <div class="art-meta">
            <div class="art-meta-title">{{ drawing.name }}</div>
            <div class="art-medium">{{ $t(drawing.description) }}</div>
          </div>
          <div class="art-watermark"> {{ $t(drawing.description) }} © {{ drawing.year }} Luis Donaldo Ortiz G.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { drawings } from '~/utils/portfolio'
const artList = drawings;
</script>
