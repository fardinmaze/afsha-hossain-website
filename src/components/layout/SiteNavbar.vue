<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import BaseButton from '../base/BaseButton.vue'
import wordmark from '@/assets/svg/logo-wordmark.svg?raw'
import { site } from '@/data/content.js'

const open = ref(false)
// 'top'   — transparent, overlapping the hero, scrolls away with the page
// 'shown' — pinned + solid (revealed on scroll-up)
// 'hidden'— slid out of view (on scroll-down)
const state = ref('top')
let lastY = 0
let ticking = false

function update() {
  ticking = false
  const y = window.scrollY
  const goingDown = y > lastY
  if (y <= 8) state.value = 'top'
  else if (open.value) state.value = 'shown'
  else if (goingDown && y > 96) state.value = 'hidden'
  else if (!goingDown) state.value = 'shown'
  lastY = y
}
function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}
function close() {
  open.value = false
}

watch(open, (v) => {
  if (v) state.value = window.scrollY <= 8 ? 'top' : 'shown'
})

onMounted(() => {
  lastY = window.scrollY
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="[`nav--${state}`, { 'is-open': open }]">
    <div class="nav__bar">
      <button
        class="nav__toggle"
        :aria-expanded="open"
        aria-controls="nav-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <span class="nav__toggle-box" :class="{ 'is-x': open }">
          <span /><span /><span />
        </span>
      </button>

      <a class="nav__brand" href="#top" @click="close">
        <span class="nav__wordmark" v-html="wordmark" />
        <span class="nav__name">{{ site.name }}</span>
      </a>

      <BaseButton class="nav__cta" :href="site.nav.cta.href" variant="primary" @click="close">
        {{ site.nav.cta.label }}
      </BaseButton>
    </div>

    <transition name="menu">
      <nav v-if="open" id="nav-menu" class="nav__menu">
        <ul>
          <li v-for="link in site.nav.links" :key="link.href">
            <a :href="link.href" @click="close">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  --nav-gap: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition:
    transform 0.35s var(--ease-out),
    background-color 0.3s var(--ease-out),
    box-shadow 0.3s var(--ease-out);
}
/* hero view: float 24px below the top */
.nav--top {
  transform: translateY(var(--nav-gap));
  background: transparent;
  box-shadow: none;
}
/* scrolled: attach to the top of the window */
.nav--shown {
  transform: translateY(0);
  background: color-mix(in srgb, var(--page-bg) 92%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--rule), 0 10px 30px -22px rgba(51, 0, 0, 0.4);
}
.nav--hidden {
  transform: translateY(-100%);
  background: color-mix(in srgb, var(--page-bg) 92%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -22px rgba(51, 0, 0, 0.4);
}
.nav.is-open {
  background: var(--page-bg);
}
@media (prefers-reduced-motion: reduce) {
  .nav {
    transition: background-color 0.2s linear;
  }
  .nav--hidden {
    transform: translateY(0);
  }
}

.nav__bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  max-width: var(--frame-max);
  margin-inline: auto;
  padding: 14px var(--gutter);
  min-height: 72px;
}

.nav__toggle {
  justify-self: start;
  display: inline-flex;
  padding: 10px;
  margin-inline-start: -10px;
  border-radius: 10px;
  color: var(--brand-600);
}
.nav__toggle:hover {
  background: color-mix(in srgb, var(--brand-500) 10%, transparent);
}
.nav__toggle-box {
  position: relative;
  width: 22px;
  height: 14px;
}
.nav__toggle-box span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: transform 0.3s var(--ease-out), opacity 0.2s var(--ease-out);
}
.nav__toggle-box span:nth-child(1) { top: 0; }
.nav__toggle-box span:nth-child(2) { top: 6px; }
.nav__toggle-box span:nth-child(3) { top: 12px; }
.nav__toggle-box.is-x span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav__toggle-box.is-x span:nth-child(2) { opacity: 0; }
.nav__toggle-box.is-x span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

.nav__brand {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: var(--brand-500);
}
.nav__wordmark :deep(svg) {
  width: 72px;
  height: auto;
}
.nav__wordmark :deep(path) {
  fill: currentColor;
}
.nav__name {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nav__cta {
  justify-self: end;
}

.nav__menu {
  border-top: 1px solid var(--rule);
  background: var(--page-bg);
}
.nav__menu ul {
  max-width: var(--frame-max);
  margin-inline: auto;
  padding: 8px var(--gutter) 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;
}
.nav__menu a {
  display: block;
  padding: 12px 0;
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--brand-700);
  text-decoration: none;
}
.nav__menu a:hover {
  color: var(--brand-500);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 560px) {
  .nav__cta :deep(.btn__label) {
    font-size: 0.8125rem;
  }
  .nav__cta {
    padding-inline: 16px;
  }
}
</style>
