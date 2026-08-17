<script setup lang="ts">
import { Mail } from "lucide-vue-next";

import AboutComponent from "./components/about-component.vue";
import EducationComponent from "./components/education-component.vue";
import HomeComponent from "./components/home-component.vue";
import NavComponent from "./components/nav-component.vue";
import TechStackComponent from "./components/personal-tech-stack-component.vue";
import WorkExperienceComponent from "./components/work-experience-component.vue";
</script>

<template>
  <div class="h-full  w-full mx-auto  p-28 max-sm:p-20 bg-linear-to-b from-light-bg-light to-light-bg-light dark:from-dark-bg-light dark:to-dark-bg-dark dark:text-dark-text text-light-text">
    <header class="max-w-3xl mx-auto">
      <NavComponent />
    </header>
    <main class="w-full h-full max-w-3xl mx-auto min-h-screen flex flex-col pb-20 space-y-100">
      <HomeComponent />
      <AboutComponent />
      <TechStackComponent />
      <WorkExperienceComponent />
      <EducationComponent />
    </main>

    <footer id="contact" v-reveal class="w-full flex items-center pt-20 border-t border-light-border-muted dark:border-dark-border-muted pb-4 mt-60 max-w-3xl mx-auto">
      <div class="flex flex-wrap items-center gap-8 text-light-text-muted dark:text-dark-text-muted dark:hover:text-dark-text hover:text-light-text">
        <Mail aria-label="mail-icon" class="size-20 " />
        <a data-s-event="Email click" href="mailto:felix.kuhbier@gmx.de" class="link-underline">felix.kuhbier@gmx.de</a>
      </div>
    </footer>
  </div>
</template>
