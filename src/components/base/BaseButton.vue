<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: String, default: 'a' }, // 'a' | 'button'
  href: { type: String, default: '#' },
  variant: { type: String, default: 'primary' }, // 'primary' | 'secondary' | 'ghost'
  external: { type: Boolean, default: false },
  size: { type: String, default: 'md' }, // 'md' | 'lg'
})

const tag = computed(() => (props.as === 'button' ? 'button' : 'a'))
const bind = computed(() =>
  props.as === 'button'
    ? { type: 'button' }
    : {
        href: props.href,
        ...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      },
)
</script>

<template>
  <component
    :is="tag"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
    v-bind="bind"
  >
    <span class="btn__label"><slot /></span>
    <svg
      v-if="external"
      class="btn__arrow"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </component>
</template>

<style scoped>
.btn {
  --btn-h: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: var(--btn-h);
  padding-inline: 22px;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  transition:
    transform 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out),
    background-color 0.25s var(--ease-out),
    color 0.25s var(--ease-out);
}
.btn--lg {
  --btn-h: 48px;
  padding-inline: 26px;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn:active {
  transform: translateY(0);
}

.btn--primary {
  background: var(--accent-800);
  color: var(--white);
  box-shadow: 0 6px 18px -8px rgba(38, 38, 39, 0.55);
}
.btn--primary:hover {
  background: var(--brand-900);
  box-shadow: 0 12px 26px -10px rgba(51, 0, 0, 0.5);
}

.btn--secondary {
  background: var(--brand-50);
  color: var(--brand-500);
  box-shadow: inset 0 0 0 1px var(--brand-100);
}
.btn--secondary:hover {
  background: var(--brand-100);
  color: var(--brand-600);
}

.btn--ghost {
  background: transparent;
  color: var(--brand-500);
  box-shadow: inset 0 0 0 1px currentColor;
}
.btn--ghost:hover {
  background: color-mix(in srgb, var(--brand-500) 8%, transparent);
}

.btn__arrow {
  flex: none;
  margin-inline-end: -2px;
}
</style>
