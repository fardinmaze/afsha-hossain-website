<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import DecorField from '../base/DecorField.vue'
import { beyondWriting as b } from '@/data/content.js'
</script>

<template>
  <section id="beyond-writing" class="bw section section--block">
    <div class="gradient-block">
      <DecorField />

      <div class="gradient-block__inner">
        <SectionLabel :text="b.label" v-reveal />

        <div class="bw__grid">
          <div class="bw__body" v-reveal="80">
            <h2 class="bw__heading">{{ b.heading }}</h2>
            <p class="bw__text">{{ b.body }}</p>
            <p class="bw__caption">{{ b.caption }}</p>
            <div class="bw__actions">
              <BaseButton
                v-for="a in b.actions"
                :key="a.label"
                :href="a.href"
                :variant="a.variant"
                :external="a.external"
              >
                {{ a.label }}
              </BaseButton>
            </div>
          </div>

          <figure class="bw__art" v-reveal="150">
            <img
              src="/images/piano-illustration.svg"
              alt="Line drawing of a grand piano"
              width="506"
              height="506"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bw__grid {
  margin-top: clamp(28px, 4vw, 44px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 56px);
  align-items: center;
}
.bw__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bw__heading {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  letter-spacing: -0.04em;
  max-width: 14ch;
}
.bw__text {
  margin-top: 18px;
  font-family: var(--font-sans);
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  line-height: 1.62;
  color: var(--text-body);
  max-width: 44ch;
}
.bw__caption {
  margin-top: 18px;
  margin-bottom: 26px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
}
.bw__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.bw__art {
  justify-self: center;
  width: 100%;
  max-width: 420px;
}
.bw__art img {
  width: 100%;
  height: auto;
}

@media (max-width: 860px) {
  .bw__grid {
    grid-template-columns: 1fr;
  }
  .bw__art {
    order: -1;
    max-width: 300px;
  }
}
</style>
