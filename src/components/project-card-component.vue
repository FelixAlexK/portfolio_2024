<script setup lang="ts">
import { Github, Globe } from "lucide-vue-next";
import { computed } from "vue";

const { imgHref, title, description } = defineProps<{
  imgHref?: string;
  title: string;
  description: string;
  liveDemoHref?: string;
  sourceCodeHref?: string;
}>();

const highlightDescription = computed(() => {
  const firstWord = description.match(title)?.[0] || "";

  if (firstWord !== title) {
    return description;
  }
  return description.replace(firstWord, `<span class="dark:text-dark-text text-light-text uppercase">${firstWord}</span>`);
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex items-start gap-16">
      <div class="rounded-lg w-full border dark:border-dark-border border-light-border  shadow dark:border-t-dark-highlight border-t-light-border-muted bg-gradient-to-b dark:from-dark-bg from-light-bg dark:to-dark-bg-dark to-light-bg-dark p-20 flex flex-col gap-16">
        <a :href="imgHref">
          <slot name="img"></slot>
        </a>
        <div class="flex flex-col">
          <h3 class="font-semibold text-lg tracking-widest font-rubik uppercase mb-20">
            {{ title }}
          </h3>
          <p class="dark:text-dark-text-muted text-light-text-muted">
            <span v-html="highlightDescription"></span>
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-8 mt-28 w-full">
            <slot name="tech-stack"></slot>
          </div>
          <div class="flex items-center gap-8 w-full mt-28 max-md:flex-col">
            <a :href="liveDemoHref" class="w-full dark:bg-dark-bg-light bg-light-bg-light uppercase text-xs transition-all rounded-full font-bold dark:text-dark-text dark:hover:text-dark-text-muted hover:text-light-text-muted text-light-text flex items-center justify-center px-8 py-12 gap-8 ">
              <Globe class="size-20" />
              Live Demo
            </a>
            <a :href="sourceCodeHref" class="w-full dark:bg-dark-bg-light bg-light-bg-light uppercase text-xs transition-all rounded-full font-bold dark:text-dark-text dark:hover:text-dark-text-muted flex items-center justify-center px-8 py-12 gap-8 ">
              <Github class="size-20" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
