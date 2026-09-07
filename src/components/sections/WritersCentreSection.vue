<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import { writersCentre as w } from '@/data/content.js'
</script>

<template>
  <section id="writers-centre" class="wc section">
    <div class="container">
      <SectionLabel :text="w.label" v-reveal />

      <div class="wc__grid" v-reveal="80">
        <img
          class="wc__logo"
          src="/assets/svg/qwc-logo.svg"
          alt="Queensland Writers Centre"
          width="134"
          height="120"
        />

        <div class="wc__body">
          <p class="wc__lead">{{ w.paragraphs[0] }}</p>
          <p class="wc__text">{{ w.paragraphs[1] }}</p>
          <p class="wc__text">
            {{ w.encourage }}
            <a :href="w.link.href" target="_blank" rel="noopener noreferrer">{{
              w.link.label
            }}</a>
          </p>
          <BaseButton :href="w.action.href" :variant="w.action.variant">
            {{ w.action.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wc__grid {
  margin-top: clamp(32px, 4vw, 48px);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(20px, 4vw, 40px);
  align-items: start;
}
.wc__logo {
  width: clamp(96px, 12vw, 134px);
  height: auto;
  flex: none;
}
.wc__lead {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 500;
  color: var(--brand-700);
}
.wc__text {
  margin-top: 14px;
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-body);
  max-width: 72ch;
}
.wc__text a {
  color: var(--brand-500);
  font-weight: 500;
  word-break: break-word;
}
.wc__body :deep(.btn) {
  margin-top: 24px;
}

@media (max-width: 640px) {
  .wc__grid {
    grid-template-columns: 1fr;
    justify-items: start;
  }
}
</style>
