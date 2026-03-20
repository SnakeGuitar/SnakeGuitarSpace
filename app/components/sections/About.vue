<template>
  <section id="about">
    <div class="section-inner">
      <UiSectionTitle :label="$t('about.title_label')" :titleStart="$t('about.title_start')" :titleEmphasis="$t('about.title_emphasis')" />

      <div class="about-grid">
        <div class="about-card neu">
          <p>{{ $t('about.p1') }}</p>
          <p>{{ $t('about.p2') }}</p>
        </div>

        <div class="about-stats">
          <div class="stat-card neu-sm">
            <span class="stat-num">6th</span>
            <div class="stat-label">{{ $t('about.stats.s1_label') }}</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">15+</span>
            <div class="stat-label">{{ $t('about.stats.s2_label') }}</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">300+</span>
            <div class="stat-label">{{ $t('about.stats.s3_label') }}</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">+5</span>
            <div class="stat-label">{{ $t('about.stats.s4_label') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { personalInfo } from '~/utils/portfolio'
const info = personalInfo;
</script>
