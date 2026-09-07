<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import DecorField from '../base/DecorField.vue'
import { meetAfsha as m } from '@/data/content.js'
</script>

<template>
  <section id="meet-afsha" class="meet section section--block">
    <div class="gradient-block">
      <DecorField />

      <div class="gradient-block__inner">
        <SectionLabel :text="m.label" v-reveal />

        <div class="meet__grid">
          <div class="meet__body" v-reveal="80">
            <p class="meet__greeting">{{ m.greeting }}</p>
            <h2 class="meet__name">{{ m.name }}</h2>
            <p class="meet__lead" v-html="m.lead" />
            <p class="meet__text">{{ m.body }}</p>
            <BaseButton :href="m.action.href" :variant="m.action.variant">
              {{ m.action.label }}
            </BaseButton>
          </div>

          <figure class="meet__portrait" v-reveal="160">
            <img
              src="/images/afsha-portrait-tablet.jpg"
              alt="Afsha Hossain relaxing with a tablet at home"
              width="1000"
              height="1333"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.meet__grid {
  margin-top: clamp(32px, 5vw, 52px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: clamp(28px, 6vw, 72px);
  align-items: center;
}
.meet__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.meet__greeting {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2.2vw, 1.5rem);
  color: var(--accent-500);
}
.meet__name {
  margin-top: 4px;
  font-size: clamp(2.25rem, 4.8vw, 3.25rem);
  letter-spacing: -0.04em;
}
.meet__lead {
  margin-top: 18px;
  font-family: var(--font-display);
  font-size: clamp(1.0625rem, 2vw, 1.375rem);
  line-height: 1.5;
  color: var(--accent-600);
  max-width: 30ch;
}
.meet__lead :deep(em) {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--brand-600);
}
.meet__text {
  margin-top: 18px;
  font-family: var(--font-serif);
  font-size: clamp(1rem, 1.7vw, 1.125rem);
  line-height: 1.6;
  color: var(--brand-600);
  max-width: 44ch;
  margin-bottom: 26px;
}

.meet__portrait {
  justify-self: end;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 486 / 648;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 1.5px color-mix(in srgb, var(--brand-500) 42%, transparent),
    0 34px 66px -32px rgba(118, 46, 12, 0.5);
}
.meet__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 860px) {
  .meet__grid {
    grid-template-columns: 1fr;
  }
  .meet__portrait {
    order: -1;
    justify-self: center;
    max-width: 300px;
  }
}
</style>
