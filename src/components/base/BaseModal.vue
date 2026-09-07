<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  label: { type: String, default: 'Dialog' },
})
const emit = defineEmits(['close'])

const dlg = ref(null)

watch(
  () => props.open,
  (v) => {
    const d = dlg.value
    if (!d) return
    if (v && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!v && d.open) {
      d.close()
    }
  },
)

function restore() {
  document.body.style.overflow = ''
}
function onClose() {
  restore()
  emit('close')
}
function onBackdrop(e) {
  if (e.target === dlg.value) emit('close')
}

onBeforeUnmount(restore)
</script>

<template>
  <dialog
    ref="dlg"
    class="modal"
    :aria-label="label"
    @close="onClose"
    @cancel.prevent="emit('close')"
    @click="onBackdrop"
  >
    <div class="modal__panel">
      <button class="modal__x" type="button" aria-label="Close" @click="emit('close')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(920px, calc(100vw - 32px));
  height: fit-content;
  max-height: calc(100dvh - 48px);
  padding: 0;
  border: 0;
  border-radius: clamp(18px, 3vw, 28px);
  background: transparent;
  overflow: visible;
}
.modal::backdrop {
  background: rgba(51, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.modal__panel {
  position: relative;
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  padding: clamp(28px, 4vw, 52px);
  border-radius: inherit;
  background: var(--surface);
  box-shadow: 0 40px 90px -30px rgba(51, 0, 0, 0.6);
}

.modal__x {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: var(--brand-600);
  background: color-mix(in srgb, var(--brand-100) 55%, transparent);
  transition:
    background-color 0.2s var(--ease-out),
    transform 0.2s var(--ease-out);
}
.modal__x:hover {
  background: var(--brand-100);
  transform: rotate(90deg);
}

/* entrance */
.modal[open] {
  animation: modal-in 0.28s var(--ease-out);
}
.modal[open]::backdrop {
  animation: backdrop-in 0.28s var(--ease-out);
}
@keyframes modal-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
}
@keyframes backdrop-in {
  from {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .modal[open],
  .modal[open]::backdrop {
    animation: none;
  }
}
</style>
