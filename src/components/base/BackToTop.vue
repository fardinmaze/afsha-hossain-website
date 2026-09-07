<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ChevronIcon from './ChevronIcon.vue'

const visible = ref(false)
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    visible.value = window.scrollY > window.innerHeight * 1.4
    ticking = false
  })
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <transition name="fab">
    <button
      v-show="visible"
      class="fab"
      type="button"
      aria-label="Back to top"
      @click="toTop"
    >
      <ChevronIcon dir="up" :size="22" />
    </button>
  </transition>
</template>

<style scoped>
.fab {
  position: fixed;
  right: clamp(16px, 3vw, 32px);
  bottom: clamp(16px, 3vw, 32px);
  z-index: 60;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--white);
  background: var(--accent-800);
  box-shadow: 0 12px 28px -10px rgba(51, 0, 0, 0.55);
  transition:
    transform 0.25s var(--ease-out),
    background-color 0.25s var(--ease-out);
}
.fab:hover {
  transform: translateY(-3px);
  background: var(--brand-900);
}
.fab:active {
  transform: translateY(0);
}

.fab-enter-active,
.fab-leave-active {
  transition:
    opacity 0.25s var(--ease-out),
    transform 0.25s var(--ease-out);
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
