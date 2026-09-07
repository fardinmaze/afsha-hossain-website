<script setup>
import StarIcon from './StarIcon.vue'

defineProps({
  text: { type: String, required: true },
  rules: { type: Boolean, default: true },
})
</script>

<template>
  <div class="section-label" :class="{ 'has-rules': rules }">
    <span v-if="rules" class="section-label__rule" aria-hidden="true" />
    <span class="section-label__inner">
      <StarIcon :size="15" />
      <span class="section-label__text">{{ text }}</span>
      <StarIcon :size="15" />
    </span>
    <span v-if="rules" class="section-label__rule" aria-hidden="true" />
  </div>
</template>

<style scoped>
.section-label {
  display: flex;
  align-items: center;
  gap: clamp(12px, 3vw, 24px);
  color: var(--brand-500);
}
.section-label__rule {
  flex: 1 1 0;
  height: 1px;
  background: currentColor;
  opacity: 0.5;
}
.section-label:not(.has-rules) {
  justify-content: center;
}
.section-label__inner {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: none;
}
.section-label__text {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
}
@media (max-width: 640px) {
  .section-label {
    display: block;
    text-align: center;
  }
  .section-label__rule {
    display: none;
  }
  .section-label__inner {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .section-label__text {
    white-space: normal;
    text-align: center;
    flex: 1 1 auto;
    min-width: 0;
  }
}
</style>
