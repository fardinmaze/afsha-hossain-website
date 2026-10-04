<script setup>
import SectionLabel from '../base/SectionLabel.vue'
import { guardian as g } from '@/data/content.js'
</script>

<template>
  <section id="guardian" class="guardian section">
    <div class="container">
      <SectionLabel :text="g.label" v-reveal />

      <div class="guardian__card" v-reveal="80">
        <img class="guardian__icon" src="/images/safety-hands.png" alt="" width="120" height="82" />

        <div class="guardian__body">
          <h2 class="guardian__heading">{{ g.heading }}</h2>
          <p class="guardian__text">{{ g.body }}</p>
          <ul class="guardian__points">
            <li v-for="point in g.points" :key="point">{{ point }}</li>
          </ul>
          <p class="guardian__contact">
            {{ g.contact.label }}
            <a :href="`mailto:${g.contact.email}`">{{ g.contact.email }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guardian__card {
  margin-top: clamp(32px, 4vw, 48px);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(20px, 4vw, 40px);
  align-items: start;
  padding: clamp(24px, 4vw, 44px);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: inset 0 0 0 1px var(--brand-100);
}
.guardian__icon {
  width: clamp(64px, 8vw, 88px);
  height: auto;
}
.guardian__heading {
  font-size: clamp(1.5rem, 3.4vw, 2.125rem);
  letter-spacing: -0.03em;
  color: var(--brand-700);
}
.guardian__text {
  margin-top: 12px;
  max-width: 62ch;
  font-family: var(--font-serif);
  font-size: clamp(1.0625rem, 1.9vw, 1.25rem);
  line-height: 1.55;
  color: var(--brand-600);
}
.guardian__points {
  margin-top: 18px;
  padding-left: 1.25rem;
  display: grid;
  gap: 8px;
  max-width: 68ch;
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-body);
}
.guardian__points li::marker {
  color: var(--brand-400);
}
.guardian__contact {
  margin-top: 20px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--text-muted);
}
.guardian__contact a {
  margin-left: 4px;
  color: var(--brand-600);
  font-weight: 500;
  overflow-wrap: anywhere;
}
.guardian__contact a:hover {
  color: var(--brand-800);
}

@media (max-width: 640px) {
  .guardian__card {
    grid-template-columns: 1fr;
  }
}
</style>
