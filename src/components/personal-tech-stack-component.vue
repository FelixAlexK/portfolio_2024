<script setup lang="ts">
const techGroups = [
  {
    label: "Frontend",
    items: ["Vue.js", "React", "Astro", "Tailwind CSS", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "AWS", "TypeScript"],
  },
];
</script>

<template>
  <section id="tech-stack" v-reveal>
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Tech Stack
    </h2>
    <div class="flex flex-col w-full gap-20">
      <p v-for="group in techGroups" :key="group.label" class="font-lato text-base dark:text-dark-text-muted text-light-text-muted">
        <span class="font-rubik font-bold uppercase tracking-widest dark:text-dark-text text-light-text">
          {{ group.label }}
        </span>
        — {{ group.items.join(" · ") }}
      </p>
    </div>
  </section>
</template>
