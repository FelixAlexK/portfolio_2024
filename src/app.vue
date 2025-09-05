<script setup lang="ts">
import { Mail } from "lucide-vue-next";

import HomeComponent from "./components/home-component.vue";
import NavComponent from "./components/nav-component.vue";
import ProjectsComponent from "./components/projects-component.vue";
import TechStackComponent from "./components/tech-stack-component.vue";
import WorkExperienceComponent from "./components/work-experience-component.vue";
</script>

<template>
  <div class="h-full w-full mx-auto  p-28 bg-gradient-to-b dark:from-bg-light dark:to-bg-dark dark:text-text">
    <header class="max-w-3xl mx-auto">
      <NavComponent />
    </header>
    <main class="w-full h-full max-w-3xl mx-auto min-h-screen flex flex-col  pb-20">
      <HomeComponent />
      <TechStackComponent />
      <WorkExperienceComponent />
      <ProjectsComponent />
    </main>

    <footer class="w-full flex items-center pt-20 border-t dark:border-border-muted pb-4 mt-60 max-w-3xl mx-auto">
      <div class="flex items-center gap-8 dark:text-text-muted dark:hover:text-text">
        <Mail class="size-20 " />
        <a href="mailto:felix.kuhbier@gmx.de">felix.kuhbier@gmx.de</a>
      </div>
    </footer>
  </div>
</template>
