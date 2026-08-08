<script setup lang="ts">
const interests = [
  { label: "Soccer", emoji: "⚽" },
  { label: "Tennis", emoji: "🎾" },
  { label: "Running", emoji: "🏃" },
  { label: "Traveling", emoji: "✈️" },
];
</script>

<template>
  <section id="about" v-reveal>
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      About
    </h2>
    <p class="font-lato mb-16 dark:text-dark-text-muted text-light-text-muted">
      I'm Felix — a Computer Science graduate from Hochschule Heilbronn. I spent a semester at Örebro University in Sweden, worked on frontend at J. Schmalz GmbH, and wrote my bachelor thesis on AI-powered product recommendations. I like turning ideas into clean, working software.
    </p>
    <p class="font-lato mb-40 dark:text-dark-text-muted text-light-text-muted">
      Off the clock, you'll find me on a pitch, court, or trail — or packing for the next trip.
    </p>
    <div class="grid grid-cols-2 gap-20 md:grid-cols-4">
      <div
        v-for="interest in interests"
        :key="interest.label"
        class="lift flex h-100 flex-col items-center justify-center gap-8 rounded-lg border border-light-border border-t-light-border-muted bg-linear-to-b from-light-bg to-light-bg-dark p-12 hover:-translate-y-4 hover:border-light-primary/60 dark:border-dark-border dark:border-t-dark-highlight dark:from-dark-bg dark:to-dark-bg-dark dark:hover:border-dark-primary/60"
      >
        <span class="text-4xl" aria-hidden="true">{{ interest.emoji }}</span>
        <span class="font-lato text-sm text-center dark:text-dark-text-muted text-light-text-muted">
          {{ interest.label }}
        </span>
      </div>
    </div>
  </section>
</template>
