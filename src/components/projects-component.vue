<script setup lang="ts">
import ProjectCardComponent from "./project-card-component.vue";
import ProjectTechStackComponent from "./project-tech-stack-component.vue";

const techStacksMoodTracker = ["TypeScript", "vue", "TailwindCSS", "TanStack Query", "Hono", "Drizzle ORM", "PostgreSQL", "Bun", "Vite"];
const techStacksBuyWise = ["TypeScript", "TailwindCSS", "TanStack Query", "Hono", "Drizzle ORM", "Turso", "Bun", "Vite", "React", "BetterAuth", "Turborepo"];
</script>

<template>
  <section id="projects">
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Projects
    </h2>
    <div class="flex flex-col space-y-20">
      <ProjectCardComponent source-code-href="https://github.com/FelixAlexK/mood_tracker" live-demo-href="https://mood-tracker.fly.dev/" title="Mood Tracker" description="Mood Tracker is a web application that helps users log, track, and analyze their moods over time. It provides insights into emotional patterns and trends to promote self-awareness and mental well-being.">
        <template #img>
          <img aria-label="Mood Tracker Screenshot" fetchpriority="low" class="rounded-lg object-cover w-full" src="../assets/Screenshot 2025-09-05 142822.png" alt="Mood Tracker Screenshot">
        </template>
        <template #tech-stack>
          <ProjectTechStackComponent v-for="item in techStacksMoodTracker" :key="item" :tech-name="item"></ProjectTechStackComponent>
        </template>
      </ProjectCardComponent>
      <ProjectCardComponent source-code-href="https://github.com/FelixAlexK/buy-wise" title="BuyWise" description="BuyWise is a web application that helps users make informed purchase decisions by calculating how much time they need to work to afford an item. It promotes mindful spending by visualizing the time cost of purchases relative to your salary.">
        <template #img>
          <img aria-label="BuyWise Screenshot" fetchpriority="low" class="rounded-lg object-cover w-full" src="../assets/image.png" alt="BuyWise Screenshot">
        </template>
        <template #tech-stack>
          <ProjectTechStackComponent v-for="item in techStacksBuyWise" :key="item" :tech-name="item"></ProjectTechStackComponent>
        </template>
      </ProjectCardComponent>
    </div>
  </section>
</template>
