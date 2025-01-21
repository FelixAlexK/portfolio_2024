<script setup lang="ts">
import NavComponent from "./components/NavComponent.vue";
import MyPassionComponent from "./components/MyPassionComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import { Instagram, Linkedin, Github } from "lucide-vue-next";
import { ref, useTemplateRef, type Ref } from "vue";
import RepoScroller from "./components/RepoScroller.vue";
import TooltipComponent from "./components/TooltipComponent.vue";
import { useIntersectionObserver, type MaybeElement } from "@vueuse/core";

function setupIntersectionObserver(
  target: Ref<MaybeElement, MaybeElement>,
  visibilityFlag: Ref<boolean, boolean>,
) {
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
      >
      </NavComponent>
    </header>
    <main>
      <div class="h-full p-8 md:container md:mx-auto">
        <MyPassionComponent
          class="my-32 md:my-64"
          ref="homeTarget"
        ></MyPassionComponent>
        <RepoScroller class="mb-32 md:mb-64"></RepoScroller>
        <div class="invisible relative -top-32 block" id="about"></div>
        <AboutComponent
          class="mb-32 md:mb-64"
          ref="aboutTarget"
        ></AboutComponent>
        <div class="invisible relative -top-32 block" id="contact"></div>
        <ContactComponent
          class="mb-32 md:mb-64"
          ref="contactTarget"
        ></ContactComponent>
      </div>
    </main>

    <footer
      class="border-t-2 border-blue-500 bg-gray-950 p-8 text-white md:p-16"
    >
      <div
        class="flex font-rubik max-md:flex-col md:items-center md:justify-between"
      >
        <p class="font-lato text-4xl font-bold">FELIX</p>
        <small class="font-rubik text-gray-100 max-md:mb-8 md:hidden"
          >2025</small
        >
        <div class="flex gap-16">
          <TooltipComponent>
            <template #trigger>
              <a
                class="transition-colors duration-300 hover:text-blue-500"
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
                class="transition-colors duration-300 hover:text-blue-500"
                href=""
              >
                <Linkedin />
              </a>
            </template>
            <span>Linkedin</span>
          </TooltipComponent>
          <TooltipComponent>
            <template #trigger>
              <a
                class="transition-colors duration-300 hover:text-blue-500"
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
      <small class="hidden font-rubik text-gray-100 md:block">2025</small>
    </footer>
  </div>
</template>
