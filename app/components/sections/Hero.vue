<template>
  <section id="hero">
    <div class="hero-bg-blob blob1"></div>
    <div class="hero-bg-blob blob2"></div>
    <div class="hero-bg-blob blob3"></div>

    <div class="hero-content">
      <div class="hero-tag neu-sm" style="padding:0.4rem 1rem;">{{ $t(info.title) }}</div>

      <h1 class="hero-name">
        {{ info.name }}<br /><em>{{ info.lastName }}</em>
      </h1>

      <p class="hero-handle">
        <span>@</span>{{ info.handle }} &nbsp;·&nbsp; {{ info.location }} &nbsp;·&nbsp {{info.school }}
      </p>

      <p class="hero-desc">
        {{ $t(info.description) }}
      </p>

      <div class="hero-ctas">
        <UiButton as="a" href="#projects" @click.prevent="scrollToSection('#projects')">{{ $t('hero.btn_work') }}</UiButton>
        <UiButton as="a" href="#art" variant="secondary" @click.prevent="scrollToSection('#art')">{{ $t('hero.btn_contact') }}</UiButton>
      </div>
    </div>

    <div class="hero-scroll">{{ $t('hero.scroll') }}</div>
  </section>
</template>

<script setup lang="ts">
import { personalInfo } from '~/utils/portfolio'
import { useSmoothScroll } from '~/composables/useSmoothScroll';

const info = personalInfo;
const { scrollToSection } = useSmoothScroll();
</script>
