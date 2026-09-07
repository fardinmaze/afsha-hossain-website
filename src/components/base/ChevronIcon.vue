<script setup>
defineProps({
  dir: { type: String, default: 'right' }, // 'left' | 'right' | 'up' | 'down'
  size: { type: [Number, String], default: 20 },
})
</script>

<template>
  <svg
    class="chevron"
    :class="`chevron--${dir}`"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 5l7 7-7 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.chevron {
  display: block;
}
.chevron--left {
  transform: scaleX(-1);
}
.chevron--up {
  transform: rotate(-90deg);
}
.chevron--down {
  transform: rotate(90deg);
}
</style>
