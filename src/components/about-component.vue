<script setup lang="ts">
// @ts-expect-error: Importing markdown file as Vue component is not typed
import { frontmatter } from "../components/content/about.md";
import ButtonComponent from "./gradient-button-component.vue";
</script>

<template>
  <section v-once class="py-16">
    <div class="flex w-full flex-col gap-12 px-8 md:flex-row md:gap-24 md:px-16">
      <!-- Left Section -->
      <div class="flex w-full flex-col items-center md:w-1/3 md:items-start">
        <h2 class="mb-8 font-lato text-4xl font-semibold text-gray-900 md:text-6xl">
          {{ frontmatter.title }}
        </h2>
        <picture>
          <!-- Modern format (WebP) -->
          <source
            srcset="../assets/IMG_1877.webp"
            type="image/webp"
            class="aspect-square w-80 rounded-3xl object-cover object-center shadow-lg md:mb-16"
            loading="lazy"
          >

          <!-- Fallback format (JPEG/PNG) -->
          <source
            srcset="../assets/IMG_1877.JPEG"
            type="image/jpeg"
            class="aspect-square w-80 rounded-3xl object-cover object-center shadow-lg md:mb-16"
            loading="lazy"
          >

          <!-- Default fallback for unsupported browsers -->
          <img
            src="../assets/IMG_1877.JPEG"
            alt="Picture of Felix"
            class="aspect-square w-80 rounded-3xl object-cover object-center shadow-lg md:mb-16"
            loading="lazy"
          >
        </picture>
        <ButtonComponent
          href="#contact"
          text="Kontakt"
          class="mt-8 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white shadow-md hover:scale-105 hover:shadow-lg"
        />
      </div>

      <!-- Right Section -->
      <div class="flex w-full flex-col gap-8 md:mt-8 md:w-2/3 md:gap-16">
        <span class="font-rubik text-xl leading-8 text-gray-800 md:text-2xl">
          {{ frontmatter.mainText }}        </span>

        <div class="flex flex-col gap-8 md:flex-row">
          <span class="font-rubik text-base text-gray-700 md:text-lg">
            {{ frontmatter.paragraphOne }}          </span>

          <span class="font-rubik text-base text-gray-700 md:text-lg">
            {{ frontmatter.paragraphTwo }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
