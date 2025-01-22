<script setup lang="ts"></script>

<template>
  <section class="h-1/3" ref="homeTarget">
    <div class="w-full">
      <div class="flex h-full flex-col-reverse gap-24 md:flex-row">
        <div class="flex flex-col md:w-1/2">
          <span class="mb-1 font-rubik text-xs text-blue-800 md:text-sm">Meine Leidenschaft</span>
          <h2 class="mb-8 font-lato text-4xl font-semibold md:text-6xl">
            Technik. Sport. Musik.
          </h2>
          <span class="font-rubik text-base md:mb-16 md:max-w-prose md:text-lg">Ich liebe es, meine Leidenschaften zu
            verbinden und Menschen durch
            Technologie, Sport und Musik zu inspirieren. Als technikbegeisterter
            Student kombiniere ich Kreativität und Innovation, während ich in
            meiner Freizeit beim Tennis oder Fußball Energie tanke. Mit meiner
            Vorliebe für den warmen Klang von Schallplatten entdecke ich immer
            wieder neue musikalische Welten, die mich berühren und
            inspirieren.</span>
        </div>
        <div class="flex flex-col max-md:gap-16 md:w-1/2 md:justify-around">
          <div class="flex flex-col">
            <span class="mb-2 font-lato text-6xl font-extrabold text-blue-800">22 Jahre</span>
            <span class="font-lato text-2xl">Alter</span>
          </div>
          <div class="flex flex-col">
            <span class="mb-2 font-lato text-6xl font-extrabold text-blue-800">Student</span>
            <span class="font-lato text-2xl">Berufsstatus</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block">
      <a href="#about" class="rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-lg font-medium text-white">Das bin
        ich</a>
    </div>
  </section>
</template>
