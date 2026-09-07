<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import SectionLabel from '../base/SectionLabel.vue'
import ChevronIcon from '../base/ChevronIcon.vue'
import { parentsJourney as p } from '@/data/content.js'

const cards = p.cards
const total = cards.length

// Three back-to-back copies so the carousel can loop endlessly in both
// directions. We live in the middle copy and silently jump back to it
// whenever a move (or a swipe) drifts into an outer copy.
const loop = [...cards, ...cards, ...cards]
const MID = total

const viewport = ref(null)
const rawPos = ref(0) // signed offset from the middle copy's first card
const idx = computed(() => ((rawPos.value % total) + total) % total)

let programmatic = false
let programmaticTimer = 0
let settleTimer = 0

function stepWidth() {
  const vp = viewport.value
  if (!vp) return 0
  const first = vp.querySelector('.pj__card')
  const track = vp.querySelector('.pj__track')
  if (!first || !track) return vp.clientWidth
  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0')
  return first.offsetWidth + gap
}

function scrollTo(absIndex, smooth) {
  const vp = viewport.value
  if (!vp) return
  programmatic = true
  clearTimeout(programmaticTimer)
  vp.scrollTo({ left: absIndex * stepWidth(), behavior: smooth ? 'smooth' : 'auto' })
  programmaticTimer = setTimeout(() => {
    normalize()
    programmatic = false
  }, smooth ? 520 : 60)
}

// snap rawPos back into the middle copy without a visible jump
function normalize() {
  if (rawPos.value < 0 || rawPos.value >= total) {
    rawPos.value = idx.value
    viewport.value?.scrollTo({ left: (MID + rawPos.value) * stepWidth(), behavior: 'auto' })
  }
}

function go(delta) {
  rawPos.value += delta
  scrollTo(MID + rawPos.value, true)
}

// keep in sync when the viewer swipes / scrolls the strip themselves
function onScroll() {
  if (programmatic) return
  clearTimeout(settleTimer)
  settleTimer = setTimeout(() => {
    const step = stepWidth()
    if (!step) return
    rawPos.value = Math.round(viewport.value.scrollLeft / step) - MID
    normalize()
  }, 90)
}

function onKey(e) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    go(-1)
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    go(1)
  }
}

function recentre() {
  rawPos.value = idx.value
  scrollTo(MID + rawPos.value, false)
}

onMounted(async () => {
  await nextTick()
  // wait for layout so stepWidth() is real
  requestAnimationFrame(() => scrollTo(MID, false))
  window.addEventListener('resize', recentre, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', recentre)
  clearTimeout(programmaticTimer)
  clearTimeout(settleTimer)
})
</script>

<template>
  <section id="parents-journey" class="pj section">
    <div class="container">
      <SectionLabel :text="p.label" v-reveal />
      <p class="pj__intro" v-reveal="80">{{ p.intro }}</p>
    </div>

    <div
      class="pj__carousel"
      role="group"
      aria-roledescription="carousel"
      :aria-label="p.label"
      v-reveal="120"
    >
      <div
        ref="viewport"
        class="pj__viewport"
        tabindex="0"
        @scroll.passive="onScroll"
        @keydown="onKey"
      >
        <ol class="pj__track">
          <li
            v-for="(card, i) in loop"
            :key="i"
            class="pj__card"
            :style="{ background: card.bg, color: card.fg }"
            :aria-label="`${(i % total) + 1} of ${total}`"
          >
            <div class="pj__card-inner">
              <p class="pj__card-text">{{ card.text }}</p>
              <figure class="pj__card-media">
                <img
                  :src="`/images/${card.image}`"
                  :alt="card.alt"
                  loading="lazy"
                  width="900"
                  height="900"
                />
              </figure>
            </div>
          </li>
        </ol>
      </div>

      <div class="pj__nav">
          <button
            type="button"
            class="pj__btn"
            aria-label="Previous chapter"
            @click="go(-1)"
          >
            <ChevronIcon dir="left" :size="20" />
          </button>

          <span class="pj__count" aria-live="polite">
            <span class="pj__count-now">{{ idx + 1 }}</span>
            <span class="pj__count-sep">/</span>
            {{ total }}
          </span>

          <button
            type="button"
            class="pj__btn"
            aria-label="Next chapter"
            @click="go(1)"
          >
            <ChevronIcon dir="right" :size="20" />
          </button>
        </div>
    </div>
  </section>
</template>

<style scoped>
.pj__intro {
  margin: clamp(24px, 4vw, 40px) auto 0;
  max-width: 34ch;
  text-align: center;
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.375rem, 3.4vw, 2.25rem);
  line-height: 1.34;
  color: var(--brand-700);
  text-wrap: balance;
}

/* near full-bleed, to match the gradient block sections */
.pj__carousel {
  margin-top: clamp(32px, 5vw, 52px);
  margin-inline: 24px;
}

.pj__viewport {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-radius: clamp(20px, 3vw, 36px);
}
.pj__viewport::-webkit-scrollbar {
  display: none;
}
.pj__viewport:focus-visible {
  outline: 2px solid var(--brand-500);
  outline-offset: 3px;
}

.pj__track {
  display: flex;
  gap: clamp(16px, 3vw, 40px);
  list-style: none;
  margin: 0;
  padding: 0;
}

.pj__card {
  flex: 0 0 100%;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  padding-block: clamp(28px, 4vw, 60px);
  border-radius: clamp(20px, 3vw, 36px);
  min-height: clamp(360px, 38vw, 520px);
}
.pj__card-inner {
  width: 100%;
  max-width: var(--content-max);
  margin-inline: auto;
  padding-inline: clamp(24px, 5vw, 76px);
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(20px, 3.5vw, 56px);
  align-items: center;
}
.pj__card-text {
  font-family: var(--font-serif);
  font-size: clamp(1.1875rem, 0.9rem + 1.35vw, 1.75rem);
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: inherit;
  text-wrap: pretty;
}
.pj__card-media {
  align-self: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 24px 46px -30px rgba(51, 0, 0, 0.4);
}
.pj__card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pj__nav {
  margin-top: clamp(22px, 3vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.pj__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: var(--brand-600);
  background: var(--surface);
  box-shadow: inset 0 0 0 1px var(--brand-200), 0 10px 22px -14px rgba(118, 46, 12, 0.5);
  transition:
    transform 0.2s var(--ease-out),
    color 0.2s var(--ease-out),
    background-color 0.2s var(--ease-out);
}
.pj__btn:hover:not(:disabled) {
  transform: translateY(-2px);
  color: var(--brand-700);
  background: var(--brand-50);
}
.pj__btn:active:not(:disabled) {
  transform: translateY(0);
}
.pj__btn:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.pj__count {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
  min-width: 4ch;
  text-align: center;
}
.pj__count-now {
  color: var(--brand-600);
  font-weight: 600;
}
.pj__count-sep {
  margin-inline: 4px;
}

@media (max-width: 760px) {
  .pj__card {
    min-height: 0;
  }
  .pj__card-inner {
    grid-template-columns: 1fr;
  }
  .pj__card-media {
    order: -1;
    aspect-ratio: 16 / 10;
    min-height: 0;
  }
}
@media (max-width: 420px) {
  .pj__carousel {
    margin-inline: 14px;
  }
}
</style>
