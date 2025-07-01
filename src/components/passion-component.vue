<script setup lang="ts">
// @ts-expect-error: Importing markdown file as Vue component is not typed
import Content, { frontmatter } from "../components/content/passion.md";
import ButtonComponent from "./gradient-button-component.vue";
</script>

<template>
  <section v-once class="relative h-auto py-24">
    <!-- Background Gradient - Full Width -->
    <div class="absolute inset-0 w-screen left-1/2 -translate-x-1/2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-50" />

    <!-- Grid Pattern Background - Full Width -->
    <div class="absolute inset-0 w-screen left-1/2 -translate-x-1/2 opacity-10">
      <div class="h-full w-full bg-grid-pattern bg-[length:40px_40px] bg-blue-900/20 " />
    </div>

    <!-- Gradient Fade to White -->
    <div class="absolute bottom-0 w-screen left-1/2 -translate-x-1/2 h-32 bg-gradient-to-t from-white to-transparent" />

    <div class="relative -z-10 w-full px-8 md:px-16">
      <div class="flex h-full flex-col-reverse gap-16 md:flex-row">
        <!-- Left Section -->
        <div class="flex flex-col md:w-1/2 backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/30">
          <span class="mb-2 font-rubik text-sm uppercase tracking-wide text-blue-800 md:text-base animate-fade-in">
            {{ frontmatter.sectionTitle }}
          </span>
          <h2 class="mb-6 font-lato text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl animate-slide-up">
            {{ frontmatter.title }}
          </h2>
          <p class="font-rubik text-base text-gray-700 md:mb-12 md:max-w-prose md:text-lg animate-fade-in-delay">
            <Content />
          </p>
          <div class="animate-bounce-subtle">
            <ButtonComponent href="#about" text="Das bin ich" />
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col md:items-center items-start gap-12 md:w-1/2 md:justify-center-safe">
          <div class="group flex flex-col items-start backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-nowrap group-hover:scale-110 transition-transform duration-300"
            >
              {{ frontmatter.age }}
            </span>
            <span class="font-lato text-2xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Alter</span>
          </div>
          <div class="group flex flex-col items-start backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-nowrap group-hover:scale-110 transition-transform duration-300"
            >
              {{ frontmatter.workingStatus }}
            </span>
            <span class="font-lato text-2xl text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Berufsstatus</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid pattern background */
.bg-grid-pattern {
  background-image:
    linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px);
}
</style>
