<template>
  <section>
    <div id="about" class="section-inner">
      <UiSectionTitle label="About me" titleStart="A little of" titleEmphasis="my story" />

      <div class="about-grid">
        <div class="about-card neu">
          <p>
            My journey in technology and art are not separate worlds for me — both require
            patience, aesthetic judgment, and the will to iterate until arriving at something that feels right.
          </p>
          <p>
            When I am not programming, I work with traditional painting: oil, acrylic, and mixed media
            that allow me to explore texture and color in ways that code still cannot fully imitate.
          </p>
        </div>

        <div class="about-stats">
          <div class="stat-card neu-sm">
            <span class="stat-num">3+</span>
            <div class="stat-label">Years of Experience</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">12</span>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">∞</span>
            <div class="stat-label">Cups of Coffee</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">20+</span>
            <div class="stat-label">Art Pieces</div>
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
