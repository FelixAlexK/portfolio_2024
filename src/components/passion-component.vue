<script setup lang="ts">
// @ts-expect-error: Importing markdown file as Vue component is not typed
import Content, { frontmatter } from "../components/content/passion.md";
import ButtonComponent from "./gradient-button-component.vue";
</script>

<template>
  <section v-once class="h-auto py-16  ">
    <div class="w-full px-8 md:px-16">
      <div class="flex h-full flex-col-reverse gap-16 md:flex-row">
        <!-- Left Section -->
        <div class="flex flex-col md:w-1/2">
          <span class="mb-2 font-rubik text-sm uppercase tracking-wide text-blue-800 md:text-base">
            {{ frontmatter.sectionTitle }}
          </span>
          <h2 class="mb-6 font-lato text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            {{ frontmatter.title }}
          </h2>
          <p class="font-rubik text-base text-gray-700 md:mb-12 md:max-w-prose md:text-lg">
            <Content />
          </p>
          <ButtonComponent href="#about" text="Das bin ich" />
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center gap-12 md:w-1/2 md:justify-center-safe ">
          <div class="flex flex-col items-start">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-nowrap"
            >
              {{ frontmatter.age }}
            </span>
            <span class="font-lato text-2xl text-gray-800">Alter</span>
          </div>
          <div class="flex flex-col items-start">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent"
            >
              {{ frontmatter.workingStatus }}
            </span>
            <span class="font-lato text-2xl text-gray-800">Berufsstatus</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
