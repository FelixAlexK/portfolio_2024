<script setup lang="ts">
import type { MaybeElement } from "@vueuse/core";
import type { Ref } from "vue";

import { useIntersectionObserver } from "@vueuse/core";
import { Github, Instagram } from "lucide-vue-next";
import { ref, useTemplateRef } from "vue";

import AboutComponent from "./components/about-component.vue";
import ContactMeComponent from "./components/contact-component.vue";
import LanguageStatsComponent from "./components/language-stats-component.vue";
import NavComponent from "./components/nav-component.vue";
import MyPassionComponent from "./components/passion-component.vue";
import RepoScroller from "./components/repository-carousel-component.vue";
import TooltipComponent from "./components/tooltip-component.vue";

function setupIntersectionObserver(target: Ref<MaybeElement, MaybeElement>, visibilityFlag: Ref<boolean, boolean>) {
  useIntersectionObserver(
    target,
    ([entry]) => {
      visibilityFlag.value = entry?.isIntersecting || false;
    },
    { threshold: 0.5 },
  );
}

const homeTargetIsVisible = ref(false);
const aboutTargetIsVisible = ref(false);
const contactTargetIsVisible = ref(false);

const homeTarget = useTemplateRef<MaybeElement>("homeTarget");
const aboutTarget = useTemplateRef<MaybeElement>("aboutTarget");
const contactTarget = useTemplateRef<MaybeElement>("contactTarget");

setupIntersectionObserver(homeTarget, homeTargetIsVisible);
setupIntersectionObserver(aboutTarget, aboutTargetIsVisible);
setupIntersectionObserver(contactTarget, contactTargetIsVisible);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="fixed top-0 w-full">
      <NavComponent
        :home-target="homeTargetIsVisible"
        :about-target="aboutTargetIsVisible"
        :contact-target="contactTargetIsVisible"
      />
    </header>
    <main>
      <div class="h-full p-8 md:container md:mx-auto">
        <MyPassionComponent ref="homeTarget" class="mb-32   md:mb-64 mt-12  " />
        <RepoScroller class="mb-8 md:mb-16" />
        <LanguageStatsComponent class="mb-32 md:mb-64" />
        <div id="about" class="invisible relative -top-32 block" />
        <AboutComponent ref="aboutTarget" class="mb-32 md:mb-64" />
        <div id="contact" class="invisible relative -top-32 block" />
        <ContactMeComponent ref="contactTarget" class="mb-32 md:mb-64" />
      </div>
    </main>

    <footer class="border-t-2 border-blue-800 bg-gray-950 p-8 text-white md:p-16">
      <div>
        <div class="flex font-rubik max-md:flex-col md:items-center md:justify-between">
          <img class="aspect-auto h-auto w-28 max-md:mb-8" src="./assets/logo_light.png" alt="logo">

          <div class="flex gap-16">
            <TooltipComponent>
              <template #trigger>
                <a
                  aria-label="Link to Instagram"
                  class="transition-colors duration-300 hover:text-blue-800"
                  href="https://www.instagram.com/felix.k.02"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </template>
              <span>Instagram</span>
            </TooltipComponent>

            <TooltipComponent>
              <template #trigger>
                <a
                  aria-label="Link to Github"
                  class="transition-colors duration-300 hover:text-blue-800"
                  href="https://github.com/FelixAlexK"
                  target="_blank"
                >
                  <Github />
                </a>
              </template>
              <span>Github</span>
            </TooltipComponent>
          </div>
        </div>
      </div>
      <span class="font-lato ">© 2025 Felix Kuhbier</span>
    </footer>
  </div>
</template>

<style scoped>
/* Grid pattern background */
.bg-grid-pattern {
  background-image:
    linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px);

  z-index: -100;
}
</style>
