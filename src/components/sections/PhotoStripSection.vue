<script setup>
import StarIcon from '../base/StarIcon.vue'
import { gallery } from '@/data/content.js'

// Duplicate the set so the marquee can loop seamlessly.
const loop = [...gallery.photos, ...gallery.photos]
</script>

<template>
  <section class="strip" aria-label="Afsha reading — moments">
    <div class="strip__track" role="presentation">
      <template v-for="(src, i) in loop" :key="i">
        <span class="strip__star"><StarIcon :size="34" /></span>
        <figure class="strip__item">
          <img
            :src="`/images/gallery/${src}`"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="240"
            height="300"
          />
        </figure>
      </template>
      <span class="strip__star"><StarIcon :size="34" /></span>
    </div>
  </section>
</template>

<style scoped>
.strip {
  position: relative;
  z-index: 2;
  /* overlap the bottom of the About gradient block, per Figma */
  margin-top: clamp(-96px, -7vw, -56px);
  background: var(--brand-300);
  padding-block: clamp(26px, 3vw, 36px);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}
.strip__track {
  display: flex;
  align-items: center;
  gap: clamp(20px, 4vw, 44px);
  width: max-content;
  animation: strip-scroll 60s linear infinite;
}
.strip:hover .strip__track {
  animation-play-state: paused;
}

.strip__star {
  color: var(--brand-500);
  opacity: 0.75;
  flex: none;
}
.strip__item {
  flex: none;
  width: clamp(94px, 11vw, 122px);
  aspect-ratio: 3 / 4;
  border-radius: 50%; /* ellipse */
  overflow: hidden;
  box-shadow: 0 14px 26px -16px rgba(85, 18, 0, 0.5);
}
.strip__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes strip-scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* half the track = one full copy of the set (incl. its leading star+gap) */
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .strip {
    -webkit-mask-image: none;
    mask-image: none;
  }
  .strip__track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
}
</style>
