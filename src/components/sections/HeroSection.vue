<script setup>
import BaseButton from '../base/BaseButton.vue'
import StarIcon from '../base/StarIcon.vue'
import DecorField from '../base/DecorField.vue'
import { hero } from '@/data/content.js'
</script>

<template>
  <section id="top" class="hero section section--block">
    <div class="gradient-block hero__block">
      <DecorField />

      <div class="gradient-block__inner hero__inner">
        <p class="hero__eyebrow" v-reveal>
          <StarIcon :size="14" />
          <span>{{ hero.eyebrow }}</span>
          <StarIcon :size="14" />
        </p>

        <h1 class="hero__title" v-reveal="80">{{ hero.heading }}</h1>

        <figure class="hero__portrait" v-reveal="140">
          <span class="hero__wreath" aria-hidden="true">
            <img class="hero__garland hg--t" src="/images/floral-wreath-dark.png" alt="" width="1500" height="1500" />
            <img class="hero__garland hg--b" src="/images/floral-wreath-dark.png" alt="" width="1500" height="1500" />
            <img class="hero__garland hg--l" src="/images/floral-wreath-dark.png" alt="" width="1500" height="1500" />
            <img class="hero__garland hg--r" src="/images/floral-wreath-dark.png" alt="" width="1500" height="1500" />
          </span>
          <span class="hero__frame">
            <img
              src="/images/afsha-hero-portrait.jpg"
              alt="Afsha Hossain, author and storyteller"
              width="936"
              height="1589"
            />
          </span>
        </figure>

        <p class="hero__intro" v-reveal="180">{{ hero.intro }}</p>

        <div class="hero__actions" v-reveal="240">
          <BaseButton
            v-for="a in hero.actions"
            :key="a.label"
            :href="a.href"
            :variant="a.variant"
            size="lg"
          >
            {{ a.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* the fixed navbar overlaps this block, so clear its height inside */
.hero.section--block {
  padding-top: clamp(10px, 2vw, 18px);
}
.hero__block {
  padding-top: clamp(116px, 14vw, 156px);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--brand-500);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero__title {
  margin-top: 18px;
  font-size: clamp(1.3rem, 5.4vw, 3.5rem);
  letter-spacing: -0.045em;
  color: var(--brand-700);
  max-width: 100%;
  white-space: nowrap;
}

.hero__portrait {
  position: relative;
  margin-block: clamp(84px, 12vw, 140px);
  width: clamp(210px, 26vw, 250px);
  aspect-ratio: 168 / 286;
  display: grid;
  place-items: center;
  isolation: isolate;
}
.hero__wreath {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.hero__garland {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 156%;
  max-width: none;
  height: auto;
  opacity: 0.48;
  filter: sepia(0.35) saturate(1.15);
}
.hg--t {
  transform: translate(-50%, -50%) translateY(-40%);
}
.hg--b {
  transform: translate(-50%, -50%) translateY(40%) rotate(180deg);
}
.hg--l {
  transform: translate(-50%, -50%) translateX(-40%) rotate(-90deg);
}
.hg--r {
  transform: translate(-50%, -50%) translateX(40%) rotate(90deg);
}
.hero__frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 1.5px color-mix(in srgb, var(--brand-500) 55%, transparent),
    0 26px 52px -26px rgba(118, 46, 12, 0.5);
}
.hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 20%;
}

.hero__intro {
  max-width: 62ch;
  font-family: var(--font-serif);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--brand-600);
}

.hero__actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
</style>
