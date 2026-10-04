<script setup>
import BaseButton from '../base/BaseButton.vue'
import BaseModal from '../base/BaseModal.vue'
import { featuredWork as fw, purchase, salesTerms, safety } from '@/data/content.js'

// Buy Now / Sales Terms & Conditions / Safety and suitability popups.
// v-model holds the open one: null | 'buy' | 'terms' | 'safety'
const popup = defineModel({ type: String, default: null })
defineProps({ purchaseHref: { type: String, required: true } })

// Only clear if this popup is still the active one (switching Buy → Terms closes one and opens the other)
const close = (name) => popup.value === name && (popup.value = null)
</script>

<template>
  <!-- Buy Now: PayID or bank transfer only, orders by email -->
  <BaseModal :open="popup === 'buy'" :label="purchase.title" size="sm" @close="close('buy')">
    <div class="pop">
      <p class="pop__eyebrow">{{ purchase.eyebrow }}</p>
      <h3 class="pop__title">{{ purchase.title }}</h3>
      <dl class="buy__facts">
        <div>
          <dt>Price</dt>
          <dd>{{ purchase.price }} <span>({{ purchase.priceNote }})</span></dd>
        </div>
        <div>
          <dt>Payment</dt>
          <dd>{{ purchase.payment }}</dd>
        </div>
        <div>
          <dt>{{ fw.purchaseEmail.label }}</dt>
          <dd><a :href="purchaseHref">{{ fw.purchaseEmail.email }}</a></dd>
        </div>
      </dl>
      <ol class="buy__steps">
        <li v-for="step in purchase.steps" :key="step">{{ step }}</li>
      </ol>
      <div class="pop__actions">
        <BaseButton :href="purchaseHref" variant="primary">{{ purchase.cta }}</BaseButton>
        <button type="button" class="pop__link" @click="popup = 'terms'">{{ purchase.termsLink }}</button>
      </div>
    </div>
  </BaseModal>

  <BaseModal :open="popup === 'terms'" :label="salesTerms.title" size="sm" @close="close('terms')">
    <div class="pop">
      <p class="pop__eyebrow">{{ purchase.eyebrow }}</p>
      <h3 class="pop__title">{{ salesTerms.title }}</h3>
      <dl class="terms">
        <div v-for="item in salesTerms.items" :key="item.heading">
          <dt>{{ item.heading }}</dt>
          <dd>{{ item.body }}</dd>
        </div>
      </dl>
    </div>
  </BaseModal>

  <BaseModal :open="popup === 'safety'" :label="safety.title" size="sm" @close="close('safety')">
    <div class="pop">
      <img class="safety__icon" src="/images/safety-hands.png" alt="" width="120" height="82" />
      <h3 class="pop__title">{{ safety.title }}</h3>
      <p class="safety__intro">{{ safety.intro }}</p>
      <ul class="safety__points">
        <li v-for="point in safety.points" :key="point.heading">
          <strong>{{ point.heading }}:</strong> {{ point.body }}
        </li>
      </ul>
      <p class="safety__promise">
        <strong>{{ safety.promise.heading }}</strong> {{ safety.promise.body }}
      </p>
    </div>
  </BaseModal>
</template>

<style scoped>
.pop {
  text-align: left;
  padding-right: 24px; /* keep clear of the close button */
}
.pop__eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brand-500);
}
.pop__title {
  margin-top: 10px;
  font-size: clamp(1.625rem, 3.6vw, 2.25rem);
  letter-spacing: -0.03em;
  color: var(--brand-700);
}
.pop__actions {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
}
.pop__link {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--brand-600);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.pop__link:hover {
  color: var(--brand-800);
}

.buy__facts {
  margin-top: 20px;
  display: grid;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
}
.buy__facts > div {
  display: grid;
  grid-template-columns: 9.5rem 1fr;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--rule);
}
.buy__facts dt {
  font-weight: 500;
  color: var(--brand-700);
}
.buy__facts dd {
  color: var(--text-body);
  overflow-wrap: anywhere;
}
.buy__facts dd span {
  color: var(--text-muted);
  font-size: 0.8125rem;
}
.buy__facts a {
  color: var(--brand-600);
  font-weight: 500;
}
.buy__steps {
  margin-top: 20px;
  padding-left: 1.25rem;
  display: grid;
  gap: 8px;
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.55;
  color: var(--brand-600);
}

.terms {
  margin-top: 22px;
  display: grid;
  gap: 18px;
}
.terms dt {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 500;
  color: var(--brand-700);
}
.terms dd {
  margin-top: 4px;
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--brand-600);
}

.safety__icon {
  width: 64px;
  height: auto;
}
.safety__intro {
  margin-top: 14px;
  font-family: var(--font-serif);
  font-size: 1.1875rem;
  line-height: 1.55;
  color: var(--brand-600);
}
.safety__points {
  margin-top: 18px;
  padding-left: 1.25rem;
  display: grid;
  gap: 12px;
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--text-body);
}
.safety__points strong {
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--brand-700);
}
.safety__promise {
  margin-top: 22px;
  padding: 16px 18px;
  border-radius: var(--radius-md);
  background: #eef6ef;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.0625rem;
  line-height: 1.55;
  color: #1f6b34;
}
.safety__promise strong {
  font-family: var(--font-display);
  font-style: normal;
  font-weight: 500;
  color: var(--accent-800);
}

@media (max-width: 520px) {
  .buy__facts > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
