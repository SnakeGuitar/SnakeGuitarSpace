<template>
  <div>
    <div class="section-label" v-if="label">{{ label }}</div>
    <h2 class="section-title">
      {{ titleStart }} <em>{{ titleEmphasis }}</em>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: false },
  titleStart: { type: String, required: true },
  titleEmphasis: { type: String, required: true }
});
</script>
