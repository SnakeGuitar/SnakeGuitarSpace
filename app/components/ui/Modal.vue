<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click.self="close">
            <div class="modal-content neu"
                style="max-width: 1000px; width: 95%; max-height: 100vh; overflow-y: auto; display: flex; flex-direction: column; gap: 2rem;">
                <button class="modal-close" @click="close">&times;</button>

                <div :class="['modal-grid', isPortrait ? 'is-portrait' : 'is-landscape']">
                    <div class="modal-left">
                        <div v-if="project?.images && project.images.length" class="carousel-container">
                            <div class="carousel-image-wrapper">
                                <img :src="project.images[currentImageIndex].src"
                                    :alt="project.images[currentImageIndex].title" @load="onImageLoad"
                                    class="carousel-image" />
                                <button v-if="project.images.length > 1" @click="prevImage"
                                    class="carousel-btn prev">&lsaquo;</button>
                                <button v-if="project.images.length > 1" @click="nextImage"
                                    class="carousel-btn next">&rsaquo;</button>
                            </div>

                            <div class="image-title"
                                style="text-align: center; margin-top: 1.5rem; font-weight: 600; font-size: 1.15rem; color: var(--text-primary);">
                                {{ project.images[currentImageIndex].title }}
                            </div>

                            <div class="carousel-indicators"
                                style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem;">
                                <span v-for="(_, index) in project.images" :key="index" class="indicator"
                                    :class="{ active: index === currentImageIndex }"
                                    @click="currentImageIndex = index"></span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-right">
                        <h2 class="project-title" style="margin-bottom: 1rem">{{ project?.name }}</h2>
                        <p class="project-desc" style="margin-bottom: 1.5rem">{{ project?.description }}</p>

                        <div class="tech-stacks" style="margin-bottom: 1.5rem;">
                            <template v-if="project?.layla1TechStack && project?.layla2TechStack">
                                <div style="margin-bottom: 1rem;">
                                    <h4 style="margin-bottom: 0.5rem; color: var(--accent);">V1 Tech Stack (Academic)
                                    </h4>
                                    <div class="project-chips">
                                        <span v-for="tech in project.layla1TechStack" :key="tech" class="chip">{{ tech
                                        }}</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 style="margin-bottom: 0.5rem; color: var(--accent);">V2 Tech Stack (Commercial)
                                    </h4>
                                    <div class="project-chips">
                                        <span v-for="tech in project.layla2TechStack" :key="tech" class="chip">{{ tech
                                        }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="project?.techStack">
                                <h4 style="margin-bottom: 0.5rem; color: var(--accent);">Tech Stack</h4>
                                <div class="project-chips">
                                    <span v-for="tech in project.techStack" :key="tech" class="chip">{{ tech }}</span>
                                </div>
                            </template>
                        </div>

                        <div style="margin-top: auto; padding-top: 2rem;">
                            <a :href="project?.link" target="_blank" class="neu btn-primary"
                                style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1.5rem; text-decoration: none;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    project: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['update:isOpen']);

const currentImageIndex = ref(0);
const isPortrait = ref(false);

const onImageLoad = (e: Event) => {
    const target = e.target as HTMLImageElement;
    isPortrait.value = target.naturalHeight > target.naturalWidth;
};

watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        currentImageIndex.value = 0;
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

watch(() => props.project, () => {
    currentImageIndex.value = 0;
});

const close = () => {
    emit('update:isOpen', false);
};

const nextImage = () => {
    if (props.project && props.project.images) {
        currentImageIndex.value = (currentImageIndex.value + 1) % props.project.images.length;
    }
};

const prevImage = () => {
    if (props.project && props.project.images) {
        currentImageIndex.value = (currentImageIndex.value - 1 + props.project.images.length) % props.project.images.length;
    }
};
</script>

<style scoped>
/* Modal Transition Styles */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.4s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--modal-overlay);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
}

.modal-content {
    background: var(--surface);
    padding: 2rem;
    border-radius: 12px;
    position: relative;
    border: 1px solid var(--border);
    box-shadow: 0 10px 30px var(--modal-shadow);
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    z-index: 10;
}

.modal-close:hover {
    color: var(--accent);
}

/* Dynamic Grid Layout based on image aspect ratio */
.modal-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    transition: all 0.3s ease;
}

@media (min-width: 768px) {
    .modal-grid {
        grid-template-columns: 1.5fr 1fr;
    }

    .modal-grid.is-landscape {
        grid-template-columns: 1.5fr 1fr;
    }

    .modal-grid.is-portrait {
        grid-template-columns: 1fr 1fr;
    }
}

.carousel-image-wrapper {
    position: relative;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.carousel-image {
    max-width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: 8px;
    transition: opacity 0.3s ease;
}

.modal-left {
    display: flex;
    flex-direction: column;
}

.modal-right {
    display: flex;
    flex-direction: column;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--modal-btn-bg);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
    z-index: 5;
}

.carousel-btn:hover {
    background: var(--accent);
}

.carousel-btn.prev {
    left: 10px;
}

.carousel-btn.next {
    right: 10px;
}



.indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--border);
    cursor: pointer;
    transition: background 0.2s;
}

.indicator.active {
    background: var(--accent);
}

.btn-primary {
    background-color: var(--accent);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--modal-btn-active);
}

/* Custom scrollbar for modal content */
.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-track {
    background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 4px;
}
</style>