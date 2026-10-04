<script setup>
import SiteNavbar from './components/layout/SiteNavbar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import FeaturedWorkSection from './components/sections/FeaturedWorkSection.vue'
import GuardianSection from './components/sections/GuardianSection.vue'
import MeetAfshaSection from './components/sections/MeetAfshaSection.vue'
import PhotoStripSection from './components/sections/PhotoStripSection.vue'
import WritersCentreSection from './components/sections/WritersCentreSection.vue'
import ParentsJourneySection from './components/sections/ParentsJourneySection.vue'
import BeyondWritingSection from './components/sections/BeyondWritingSection.vue'
import FlowTurnerCtaSection from './components/sections/FlowTurnerCtaSection.vue'
import BackToTop from './components/base/BackToTop.vue'
</script>

<template>
  <SiteNavbar />
  <main>
    <HeroSection />
    <FeaturedWorkSection />
    <GuardianSection />
    <MeetAfshaSection />
    <PhotoStripSection />
    <WritersCentreSection />
    <ParentsJourneySection />
    <BeyondWritingSection />
    <FlowTurnerCtaSection />
  </main>
  <SiteFooter />
  <BackToTop />
</template>

<style>
main > .section:nth-of-type(even) {
  background: linear-gradient(
    180deg,
    transparent,
    color-mix(in srgb, var(--brand-100) 26%, transparent) 50%,
    transparent
  );
}
</style>
