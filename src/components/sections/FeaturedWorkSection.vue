<script setup>
import { ref } from 'vue'
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import BookPopups from './BookPopups.vue'
import { featuredWork as fw, purchase } from '@/data/content.js'

// Which popup is open: null | 'buy' | 'terms' | 'safety'
const popup = ref(null)

const purchaseHref = `mailto:${fw.purchaseEmail.email}?subject=${encodeURIComponent(purchase.subject)}`
</script>

<template>
  <section id="featured-work" class="fw section">
    <div class="container">
      <SectionLabel :text="fw.label" v-reveal />

      <div class="fw__grid">
        <figure class="fw__cover" v-reveal="80">
          <img
            src="/images/book-cover-flow-turner.jpg"
            :alt="`Cover of ${fw.title} by Afsha Hossain`"
            width="760"
            height="1024"
          />
        </figure>

        <div class="fw__body" v-reveal="140">
          <span class="fw__tag">{{ fw.tag }}</span>
          <h2 class="fw__title">{{ fw.title }}</h2>
          <p class="fw__subtitle">{{ fw.subtitle }}</p>
          <p class="fw__desc">{{ fw.description }}</p>

          <div class="fw__details">
            <img
              class="fw__pub"
              src="/assets/svg/creative-dhaka-logo.svg"
              alt="Creative Dhaka Publications"
              width="56"
              height="56"
            />
            <dl>
              <div v-for="[k, v] in fw.details" :key="k">
                <dt>{{ k }}</dt>
                <dd>{{ v }}</dd>
              </div>
            </dl>
          </div>

          <p class="fw__legal">
            <a v-for="(l, i) in fw.legal" :key="l" href="#">
              {{ l }}<span v-if="i < fw.legal.length - 1"> · </span>
            </a>
          </p>

          <div class="fw__actions">
            <template v-for="a in fw.actions" :key="a.label">
              <BaseButton v-if="a.modal" as="button" :variant="a.variant" @click="popup = a.modal">
                {{ a.label }}
              </BaseButton>
              <BaseButton v-else :href="a.href" :variant="a.variant">
                {{ a.label }}
              </BaseButton>
            </template>
          </div>

          <p class="fw__purchase">
            {{ fw.purchaseEmail.label }}:
            <a :href="purchaseHref">{{ fw.purchaseEmail.email }}</a>
          </p>

          <div class="fw__boxes">
            <button
              v-for="box in fw.infoBoxes"
              :key="box.id"
              type="button"
              class="fw__box"
              :class="`fw__box--${box.id}`"
              aria-haspopup="dialog"
              @click="popup = box.id"
            >
              <span class="fw__box-icon" aria-hidden="true">
                <img v-if="box.id === 'safety'" src="/images/safety-hands.png" alt="" width="120" height="82" />
                <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                  <path d="M14 3.5V8h4M9.5 12h6M9.5 15.5h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
                </svg>
              </span>
              <span class="fw__box-text">
                <span class="fw__box-title">{{ box.title }}</span>
                <span class="fw__box-sub">{{ box.text }}</span>
              </span>
              <svg class="fw__box-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <BookPopups v-model="popup" :purchase-href="purchaseHref" />
  </section>
</template>

<style scoped>
.fw__grid {
  margin-top: clamp(36px, 5vw, 56px);
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.4fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.fw__cover {
  position: sticky;
  top: 100px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 30px 60px -28px rgba(51, 0, 0, 0.55);
  aspect-ratio: 760 / 1024;
}
.fw__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fw__tag {
  display: inline-block;
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  background: var(--yellow-50);
  color: var(--yellow-700);
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.fw__title {
  margin-top: 18px;
  font-size: clamp(2rem, 4.6vw, 3rem);
  letter-spacing: -0.04em;
}
.fw__subtitle {
  margin-top: 14px;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.125rem, 2.4vw, 1.5rem);
  line-height: 1.45;
  letter-spacing: -0.02em;
  color: var(--accent-500);
  max-width: 34ch;
}
.fw__desc {
  margin-top: 20px;
  font-family: var(--font-serif);
  font-size: clamp(1rem, 1.9vw, 1.25rem);
  line-height: 1.6;
  color: var(--brand-600);
  max-width: 56ch;
}

.fw__details {
  margin-top: 28px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
}
.fw__pub {
  flex: none;
  width: 52px;
  height: 52px;
  object-fit: contain;
  opacity: 0.9;
}
.fw__details dl {
  display: grid;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--brand-600);
}
.fw__details dl > div {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.fw__details dt {
  font-weight: 500;
}
.fw__details dt::after {
  content: ':';
}
.fw__details dd {
  color: var(--text-muted);
}

.fw__legal {
  margin-top: 14px;
  font-family: var(--font-body);
  font-size: 0.8125rem;
}
.fw__legal a {
  color: var(--text-muted);
  text-decoration: none;
}
.fw__legal a:hover {
  color: var(--brand-500);
  text-decoration: underline;
}

.fw__actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.fw__purchase {
  margin-top: 16px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
}
.fw__purchase a {
  color: var(--brand-600);
  font-weight: 500;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}
.fw__purchase a:hover {
  color: var(--brand-800);
}

/* Two info boxes that open popups */
.fw__boxes {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  max-width: 560px;
}
.fw__box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  background: var(--surface);
  box-shadow: inset 0 0 0 1px var(--brand-100);
  color: var(--brand-700);
  text-align: left;
  cursor: pointer;
  transition:
    box-shadow 0.25s var(--ease-out),
    transform 0.25s var(--ease-out),
    background-color 0.25s var(--ease-out);
}
.fw__box:hover {
  background: var(--brand-50);
  box-shadow: inset 0 0 0 1px var(--brand-300);
  transform: translateY(-2px);
}
.fw__box:focus-visible {
  outline: 2px solid var(--brand-500);
  outline-offset: 3px;
}
.fw__box-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--brand-50);
  color: var(--brand-600);
}
.fw__box--safety .fw__box-icon {
  background: #e6f2e8;
}
.fw__box-icon img {
  width: 28px;
  height: auto;
}
.fw__box-text {
  flex: 1;
  display: grid;
  gap: 2px;
}
.fw__box-title {
  font-family: var(--font-display);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.25;
}
.fw__box-sub {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--text-muted);
}
.fw__box-plus {
  flex: none;
  color: var(--brand-500);
}

@media (max-width: 520px) {
  .fw__boxes {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .fw__boxes {
    margin-inline: auto;
  }
  .fw__grid {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
  .fw__cover {
    position: static;
    max-width: 280px;
  }
  .fw__subtitle,
  .fw__desc {
    max-width: 60ch;
  }
  .fw__details {
    justify-content: center;
    text-align: left;
  }
  .fw__actions {
    justify-content: center;
  }
}
</style>
