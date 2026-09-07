<script setup>
import { ref } from 'vue'
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import BaseModal from '../base/BaseModal.vue'
import { flowTurnerCta as c } from '@/data/content.js'

const showForeword = ref(false)
</script>

<template>
  <section id="flow-turner" class="cta section">
    <div class="container cta__inner">
      <SectionLabel :text="c.label" v-reveal />

      <h2 class="cta__heading" v-reveal="80">{{ c.heading }}</h2>

      <figure class="cta__cover" v-reveal="130">
        <img
          src="/images/book-cover-flow-turner.jpg"
          alt="The Life of Flow Turner — book cover"
          width="760"
          height="1024"
        />
      </figure>

      <p class="cta__lines" v-reveal="170">
        <span v-for="line in c.lines" :key="line">{{ line }}</span>
      </p>

      <p class="cta__body" v-reveal="200">{{ c.body }}</p>

      <div class="cta__actions" v-reveal="240">
        <template v-for="a in c.actions" :key="a.label">
          <BaseButton
            v-if="a.modal === 'foreword'"
            as="button"
            :variant="a.variant"
            size="lg"
            @click="showForeword = true"
          >
            {{ a.label }}
          </BaseButton>
          <BaseButton
            v-else
            :href="a.href"
            :variant="a.variant"
            :external="a.external"
            size="lg"
          >
            {{ a.label }}
          </BaseButton>
        </template>
      </div>
    </div>

    <BaseModal :open="showForeword" label="Foreword" @close="showForeword = false">
      <div class="foreword">
        <div class="foreword__body">
          <p class="foreword__eyebrow">The Life of Flow Turner</p>
          <h3 class="foreword__title">{{ c.foreword.title }}</h3>
          <p class="foreword__text">{{ c.foreword.body }}</p>
          <p class="foreword__sign">
            <span v-for="line in c.foreword.signature" :key="line">{{ line }}</span>
            <a :href="`mailto:${c.foreword.email}`">{{ c.foreword.email }}</a>
          </p>
        </div>
        <figure class="foreword__cover">
          <img
            src="/images/book-cover-flow-turner.jpg"
            alt="The Life of Flow Turner — book cover"
            width="760"
            height="1024"
          />
        </figure>
      </div>
    </BaseModal>
  </section>
</template>

<style scoped>
.cta__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.cta__heading {
  margin-top: clamp(24px, 4vw, 40px);
  font-size: clamp(1.875rem, 5.4vw, 3.25rem);
  letter-spacing: -0.045em;
  max-width: 18ch;
}
.cta__cover {
  margin-top: clamp(28px, 4vw, 40px);
  width: clamp(150px, 20vw, 190px);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 26px 52px -22px rgba(51, 0, 0, 0.55);
  aspect-ratio: 760 / 1024;
}
.cta__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cta__lines {
  margin-top: clamp(26px, 4vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-display);
  font-size: clamp(1.0625rem, 2.2vw, 1.25rem);
  color: var(--brand-700);
}
.cta__body {
  margin-top: 18px;
  max-width: 64ch;
  font-family: var(--font-serif);
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  line-height: 1.62;
  color: var(--brand-600);
}
.cta__actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

/* ---- Foreword modal (Featured Work layout: text left, cover right) ---- */
.foreword {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 52px);
  align-items: start;
  text-align: left;
}
.foreword__eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brand-500);
}
.foreword__title {
  margin-top: 10px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  letter-spacing: -0.03em;
  color: var(--brand-700);
}
.foreword__text {
  margin-top: 18px;
  font-family: var(--font-serif);
  font-size: clamp(1rem, 1.6vw, 1.1875rem);
  line-height: 1.62;
  color: var(--brand-600);
}
.foreword__sign {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
}
.foreword__sign span:first-child {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--brand-700);
}
.foreword__sign a {
  color: var(--brand-500);
  text-decoration: none;
}
.foreword__sign a:hover {
  text-decoration: underline;
}
.foreword__cover {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 26px 52px -24px rgba(51, 0, 0, 0.55);
  aspect-ratio: 760 / 1024;
}
.foreword__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 640px) {
  .foreword {
    grid-template-columns: 1fr;
  }
  .foreword__cover {
    order: -1;
    max-width: 220px;
    justify-self: center;
  }
}
</style>
