<template>
  <Transition name="art-modal">
    <div v-if="isOpen" class="art-modal-overlay" @click.self="close" @keydown.esc="close" tabindex="0">
      <div class="art-modal-container">
        <button class="art-modal-close" @click="close" aria-label="Close">
          &times;
        </button>

        <div class="art-modal-content">
          <div class="art-modal-image-wrapper">
            <img :src="drawing.image" :alt="drawing.name" class="art-modal-img" />
          </div>

          <div class="art-modal-info">
            <h2 class="art-modal-title">{{ drawing.name }}</h2>
            <div class="art-modal-meta">
              <span class="art-modal-medium">{{ $t(drawing.description) }}</span>
              <span class="art-modal-separator">•</span>
              <span class="art-modal-year">{{ drawing.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  drawing: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:isOpen']);

const close = () => {
  emit('update:isOpen', false);
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
  } else {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleKeyDown);
  }
});

onMounted(() => {
  if (props.isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.art-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--modal-overlay);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  outline: none;
}

.art-modal-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.art-modal-close {
  position: absolute;
  top: -3rem;
  right: -1rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 2.5rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
  z-index: 2001;
}

.art-modal-close:hover {
  transform: scale(1.1);
  color: var(--accent);
}

.art-modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.art-modal-image-wrapper {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
  background: var(--surface);
  line-height: 0;
}

.art-modal-img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  display: block;
}

.art-modal-title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  margin: 0;
  color: var(--accent);
}

.art-modal-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  font-family: var(--font-body);
}

.art-modal-separator {
  opacity: 0.5;
}

/* Transitions */
.art-modal-enter-active,
.art-modal-leave-active {
  transition: opacity 0.6s ease;
}

.art-modal-enter-active .art-modal-container,
.art-modal-leave-active .art-modal-container {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
}

.art-modal-enter-from,
.art-modal-leave-to {
  opacity: 0;
}

.art-modal-enter-from .art-modal-container,
.art-modal-leave-to .art-modal-container {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

@media (max-width: 768px) {
  .art-modal-overlay {
    padding: 1rem;
  }

  .art-modal-close {
    top: -2.5rem;
    right: 0;
  }

  .art-modal-title {
    font-size: 1.25rem;
  }
}
</style>
