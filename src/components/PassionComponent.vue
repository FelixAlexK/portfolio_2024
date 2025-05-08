<script setup lang="ts">
import ButtonComponent from './GradientButtonComponent.vue';
</script>

<script setup lang="ts">
</script>

<template>
  <section v-once class="h-auto py-16  ">
    <div class="w-full px-8 md:px-16">
      <div class="flex h-full flex-col-reverse gap-16 md:flex-row">
        <!-- Left Section -->
        <div class="flex flex-col md:w-1/2">
          <span class="mb-2 font-rubik text-sm uppercase tracking-wide text-blue-800 md:text-base">
            Meine Leidenschaft
          </span>
          <h2 class="mb-6 font-lato text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            Technik. Sport. Musik.
          </h2>
          <p class="font-rubik text-base text-gray-700 md:mb-12 md:max-w-prose md:text-lg">
            Ich liebe es, meine Leidenschaften zu verbinden und Menschen durch Technologie, Sport und Musik zu
            inspirieren. Als technikbegeisterter Student kombiniere ich Kreativität und Innovation, während ich in
            meiner Freizeit beim Tennis oder Fußball Energie tanke. Mit meiner Vorliebe für den warmen Klang von
            Schallplatten entdecke ich immer wieder neue musikalische Welten, die mich berühren und inspirieren.
          </p>
          <ButtonComponent href="#about" text="Das bin ich" />
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center gap-12 md:w-1/2 md:justify-around">
          <div class="flex flex-col items-center">
            <span
              class="mb-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent"
            >
              22 Jahre
            </span>
            <span class="font-lato text-2xl text-gray-800">Alter</span>
          </div>
          <div class="flex flex-col items-center">
            <span
              class="mb-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent"
            >
              Student
            </span>
            <span class="font-lato text-2xl text-gray-800">Berufsstatus</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
