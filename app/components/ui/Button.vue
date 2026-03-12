<template>
  <button v-if="as === 'button'" :class="buttonClass">
    <slot />
  </button>
  <a v-else :href="href" :class="buttonClass" :target="target">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val: string) => ['primary', 'secondary', 'send'].includes(val)
  },
  as: {
    type: String,
    default: 'button',
    validator: (val: string) => ['button', 'a'].includes(val)
  },
  href: {
    type: String,
    default: '#'
  },
  target: {
    type: String,
    default: '_self'
  }
});

const buttonClass = computed(() => {
  if (props.variant === 'secondary') return 'btn-secondary';
  if (props.variant === 'send') return 'btn-send';
  return 'btn-primary';
});
</script>
