<script setup>
import wordmark from '@/assets/svg/logo-wordmark.svg?raw'
import { site, footer } from '@/data/content.js'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__row">
        <div class="footer__brand">
          <img
            class="footer__portrait"
            src="/images/afsha-hero-portrait.jpg"
            alt="Portrait of Afsha Hossain"
            width="46"
            height="78"
            loading="lazy"
          />
          <span class="footer__id">
            <span class="footer__wordmark" v-html="wordmark" />
            <span class="footer__name">{{ site.name }}</span>
          </span>
        </div>

        <div class="footer__contact">
          <h2 class="footer__heading">{{ footer.contactLabel }}</h2>
          <a class="footer__email" :href="`mailto:${footer.email}`">{{ footer.email }}</a>
        </div>
      </div>

      <span class="footer__rule" aria-hidden="true" />

      <p class="footer__colophon">
        All Rights Reserved |
        Developed by
        <a :href="footer.developer.href" target="_blank" rel="noopener noreferrer">{{
          footer.developer.label
        }}</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer-bg);
  color: var(--brand-100);
  padding-block: clamp(48px, 7vw, 64px);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}
.footer__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(28px, 8vw, 84px);
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer__portrait {
  width: 46px;
  height: 78px;
  object-fit: cover;
  border-radius: 50%;
  filter: saturate(0.92);
}
.footer__id {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.footer__wordmark :deep(svg) {
  width: 92px;
  height: auto;
}
.footer__wordmark :deep(path) {
  fill: var(--brand-50);
}
.footer__name {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  color: var(--brand-100);
}

.footer__contact {
  text-align: center;
}
.footer__heading {
  font-family: var(--font-playfair);
  font-weight: 500;
  font-size: clamp(1.375rem, 3.4vw, 1.75rem);
  color: var(--brand-50);
  margin-bottom: 8px;
}
.footer__email {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  color: var(--brand-100);
  text-decoration: none;
}
.footer__email:hover {
  color: var(--brand-50);
  text-decoration: underline;
}

.footer__rule {
  width: min(100%, 1076px);
  height: 1px;
  background: var(--brand-100);
  opacity: 0.5;
  position: relative;
}
.footer__rule::before,
.footer__rule::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  background: var(--brand-100);
  transform: translateY(-50%) rotate(45deg);
}
.footer__rule::before { left: 0; }
.footer__rule::after { right: 0; }

.footer__colophon {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  color: color-mix(in srgb, var(--brand-100) 82%, transparent);
}
.footer__colophon a {
  color: var(--brand-50);
  font-weight: 500;
}
</style>
