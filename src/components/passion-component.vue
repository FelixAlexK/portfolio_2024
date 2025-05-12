<script setup lang="ts">
import ButtonComponent from "./gradient-button-component.vue";
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
            Kreativität. Bewegung. Entdeckung.
          </h2>
          <p class="font-rubik text-base text-gray-700 md:mb-12 md:max-w-prose md:text-lg">
            Ich bin Informatikstudent mit einer Leidenschaft für Technik, Sport und das Erkunden neuer Orte. Besonders begeistert mich die Webentwicklung, da sie Kreativität und technisches Denken perfekt vereint.

            Neben dem Studium habe ich den Laufsport für mich entdeckt und trainiere mit dem Ziel, bald an Wettkämpfen teilzunehmen. Tennis und Fußball gehören ebenfalls zu meinen langjährigen Hobbys – der sportliche Ausgleich hält mich fokussiert und motiviert.

            Reisen inspiriert mich, neue Kulturen, Menschen und Perspektiven kennenzulernen. Es erweitert nicht nur meinen Horizont, sondern bereichert auch meine Denkweise – ein wichtiger Aspekt, der mir im Berufsleben zugutekommt.
          </p>
          <ButtonComponent href="#about" text="Das bin ich" />
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center gap-12 md:w-1/2 md:justify-center-safe ">
          <div class="flex flex-col items-start">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-nowrap"
            >
              22 Jahre
            </span>
            <span class="font-lato text-2xl text-gray-800">Alter</span>
          </div>
          <div class="flex flex-col items-start">
            <span
              class="mb-2 bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent"
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
