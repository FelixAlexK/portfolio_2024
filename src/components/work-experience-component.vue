<script setup lang="ts">
const experiences = [
  { role: "Intern", dates: "Sept. 2023 - Feb. 2024" },
  { role: "Working Student", dates: "Mar. 2024 - Mar. 2026" },
  { role: "Bachelor Thesis", dates: "Apr. 2026 - Jul. 2026" },
  { role: "Intern", dates: "Apr. 2026 - Aug. 2026" },
];
</script>

<template>
  <section id="work-experience" v-reveal>
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Work Experience
    </h2>
    <div class="lift flex w-full flex-col gap-16 rounded-lg border border-light-border border-t-light-border-muted bg-linear-to-b from-light-bg to-light-bg-dark p-20 hover:-translate-y-4 dark:border-dark-border dark:border-t-dark-highlight dark:from-dark-bg dark:to-dark-bg-dark">
      <p class="font-lato dark:text-dark-text-muted text-light-text-muted">
        <a target="_blank" class="link-underline dark:hover:text-dark-text hover:text-light-text" href="https://www.schmalz.com/de-de">J. Schmalz GmbH</a>
      </p>
      <div class="divide-y divide-light-border dark:divide-dark-border">
        <div v-for="experience in experiences" :key="experience.role + experience.dates" class="flex items-baseline justify-between gap-8 py-8 first:pt-0 last:pb-0 max-sm:flex-col max-sm:items-start">
          <p class="text-base font-semibold font-lato dark:text-dark-text text-light-text">
            {{ experience.role }}
          </p>
          <p class="font-lato text-sm whitespace-nowrap dark:text-dark-text-muted text-light-text-muted">
            {{ experience.dates }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
