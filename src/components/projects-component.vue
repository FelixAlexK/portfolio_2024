<script setup lang="ts">
import { Github, Globe } from "lucide-vue-next";

import ProjectCardComponent from "./project-card-component.vue";
import ProjectTechStackComponent from "./project-tech-stack-component.vue";
</script>

<template>
  <section id="projects" class="mt-100">
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Projects
    </h2>
    <ProjectCardComponent title="Mood Tracker" description="Mood Tracker is a web application that helps users log, track, and analyze their moods over time. It provides insights into emotional patterns and trends to promote self-awareness and mental well-being.">
      <template #img>
        <img class="rounded-lg object-cover w-full" src="../assets//Screenshot 2025-09-05 142822.png" alt="">
      </template>
      <template #tech-stack>
        <ProjectTechStackComponent tech-name="TypeScript" bg-color="#3178C6"></ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="Vue" simple-icon-name="vuedotjs" bg-color="#4FC08D"></ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="TailwindCSS" bg-color="#06B6D4"></ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="TanStack Query" bg-color="#fb2c36">
          <template #icon>
            <img class="size-16" src="https://tanstack.com/images/logos/logo-color-600.png" alt="">
          </template>
        </ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="Hono" bg-color="#E36002">
        </ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="Drizzle ORM" simple-icon-name="drizzle" bg-color="#C5F74F">
        </ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="PostgreSQL" bg-color="#4169E1"></ProjectTechStackComponent>
        <ProjectTechStackComponent tech-name="Bun" simple-icon-name="bun" bg-color="#fbf0df"></ProjectTechStackComponent>
      </template>
    </ProjectCardComponent>
  </section>
</template>
#182e4b
