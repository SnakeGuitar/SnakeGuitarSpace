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
            When I am not programming, I enjoy drawing and building worlds that allow me to explore realms that code
            still cannot fully imitate.
          </p>
        </div>

        <div class="about-stats">
          <div class="stat-card neu-sm">
            <span class="stat-num">6th</span>
            <div class="stat-label">Semester Student</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">15+</span>
            <div class="stat-label">Tech Projects</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">300+</span>
            <div class="stat-label">Git Commits</div>
          </div>
          <div class="stat-card neu-sm">
            <span class="stat-num">+5</span>
            <div class="stat-label">Years In Art</div>
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
