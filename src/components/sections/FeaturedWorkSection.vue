<script setup>
import BaseButton from '../base/BaseButton.vue'
import SectionLabel from '../base/SectionLabel.vue'
import { featuredWork as fw } from '@/data/content.js'
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
            <BaseButton
              v-for="a in fw.actions"
              :key="a.label"
              :href="a.href"
              :variant="a.variant"
            >
              {{ a.label }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
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

@media (max-width: 860px) {
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
