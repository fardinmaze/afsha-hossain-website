<script setup>
/* Gradient backdrop for the block sections, rebuilt from the Figma
   decoration group ("Frame 427319468"): a pale-yellow wash, two sets of
   low-opacity chevron "wave" ribbons (shipped as the original SVGs), and
   four pastel corner blobs (Group 3) — peach TL, mint TR, green BL,
   pink BR. Blurred just enough to read as a soft mesh. */
</script>

<template>
  <div class="decor" aria-hidden="true">
    <span class="decor__wash" />
    <span class="decor__waves decor__waves--warm" />
    <span class="decor__waves decor__waves--cool" />
    <span class="decor__blobs" />
  </div>
</template>

<style scoped>
.decor {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  isolation: isolate;
  background: var(--page-bg);
}
.decor > span {
  position: absolute;
  inset: 0;
}

/* Rectangle 1 — #F5E793 @ 16% */
.decor__wash {
  background: rgba(245, 231, 147, 0.16);
}

/* Group 1 / Group 2 — chevron ribbon bands from Figma, blurred into a
   soft drift of colour. */
.decor__waves {
  inset: auto 0 auto 50%;
  translate: -50% 0;
  width: min(1360px, 128%);
  height: 620px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  filter: blur(64px);
  opacity: 0.5;
}
.decor__waves--cool {
  top: 36%;
  background-image: url('/assets/svg/bg-waves-cool.svg');
}
.decor__waves--warm {
  top: 0%;
  background-image: url('/assets/svg/bg-waves-warm.svg');
}

/* Group 3 — four pastel corner blobs. Colours + alpha from the export. */
.decor__blobs {
  inset: -8%;
  background-image:
    radial-gradient(44% 44% at 12% 14%, rgba(249, 204, 185, 0.62), transparent 66%),
    radial-gradient(40% 40% at 88% 9%, rgba(185, 249, 241, 0.56), transparent 66%),
    radial-gradient(48% 48% at 7% 92%, rgba(185, 249, 189, 0.5), transparent 66%),
    radial-gradient(44% 44% at 93% 90%, rgba(249, 185, 242, 0.44), transparent 66%);
  filter: blur(34px);
}

@media (max-width: 640px) {
  .decor__waves {
    height: 440px;
  }
  .decor__blobs {
    filter: blur(26px);
  }
}
</style>
