<script setup lang="ts">
import { ref } from "vue";

const openToWork = ref(false);
</script>

<template>
  <section id="home" class="sm:mt-100">
    <div class="flex  items-center gap-40 max-lg:flex-col max-md:text-center">
      <div class="relative w-160 h-160 min-w-160 min-h-160 rounded-full overflow-hidden">
        <div class="absolute inset-0 bg-radial-[at_50%_0%] from-light-border-muted to-light-border dark:from-dark-highlight  dark:to-dark-border to-75% rounded-full p-4">
          <div class="w-full h-full rounded-full">
            <img fetchpriority="high" class="w-full h-full object-cover rounded-full border-2" src="../assets/IMG_3208.webp" alt="Profile Picture">
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start  gap-28">
        <h1 class="dark:text-dark-text-muted text-light-text-muted md:relative font-bold max-md:flex max-md:flex-col  max-md:items-center  text-3xl  tracking-tight  font-rubik">
          <span class="dark:text-dark-text text-light-text">Hey, I'm Felix.</span>
          <br>
          <span>I'm a Web Developer.</span>
          <div v-if="openToWork" class="dark:bg-dark-success/20 bg-light-success/20 w-full max-w-[120px] max-md:mt-12 md:mt-8 md:ml-8 md:absolute whitespace-nowrap dark:text-dark-success text-light-success text-sm px-8 py-4 rounded-full inline-block  font-lato md:text-center">
            <span class="p-4 mb-px mr-2  inline-block dark:bg-dark-success bg-light-success rounded-full"></span>
            Open to work
          </div>
        </h1>
        <div class="w-full flex items-center justify-between max-md:flex-col max-md:gap-12 md:gap-16 dark:text-dark-text-muted text-light-text-muted font-lato">
          <a aria-label="Blackforest, Germany (opens in a new window)" class="text-nowrap dark:hover:text-dark-text hover:text-light-text" target="_blank" href="https://www.google.com/maps/place/72285+Pfalzgrafenweiler/@48.5275418,8.5086229,13z/data=!3m1!4b1!4m6!3m5!1s0x479748e15ffc16f5:0x853c11fe22df5093!8m2!3d48.5253322!4d8.5648435!16s%2Fm%2F02p_mh8?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D">🏠 Blackforest, Germany.</a>
          <div class="w-full flex items-center justify-end max-md:justify-center gap-16 text-base dark:text-dark-text-muted text-light-text-muted">
            <a aria-label="LinkedIn Profile (opens in a new window)" target="_blank" href="https://www.linkedin.com/in/felix-kuhbier-0331b61aa" class="flex gap-8 items-center dark:hover:text-dark-text hover:text-light-text">
              <i class="devicon-linkedin-plain colored text-lg"></i>
              LinkedIn
            </a>

            <a aria-label="GitHub Profile (opens in a new window)" target="_blank" class="flex gap-8 items-center dark:hover:text-dark-text hover:text-light-text" href="https://github.com/FelixAlexK">
              <i class="devicon-github-original text-lg"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
