<script setup lang="ts">
import { ref } from "vue";

const openToWork = ref(false);
</script>

<template>
  <section id="home" class="">
    <div class="pb-40 pt-20 flex  items-center gap-40 max-lg:flex-col max-md:text-center">
      <div class="relative w-160 h-160 min-w-160 min-h-160 rounded-full overflow-hidden">
        <div class="absolute inset-0 bg-radial-[at_50%_0%] dark:from-highlight  dark:to-border to-75% rounded-full p-4">
          <div class="w-full h-full rounded-full">
            <img class="w-full h-full object-cover rounded-full border-2" src="../assets/IMG_1877.webp" alt="Profile Picture">
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start  gap-28">
        <h1 class="dark:text-text-muted md:relative font-bold max-md:flex max-md:flex-col  max-md:items-center  text-3xl  tracking-tight  font-rubik">
          <span class="text-text">Hey, I'm Felix.</span>
          <span> I'm a Frontend <br> Software Developer.</span>
          <div v-if="openToWork" class="bg-success/20 w-full max-w-[120px] max-md:mt-12 md:mt-8 md:ml-8 md:absolute whitespace-nowrap text-success text-sm px-8 py-4 rounded-full inline-block  font-lato md:text-center">
            <span class="p-4 mb-px mr-2  inline-block bg-success rounded-full"></span>
            Open to work
          </div>
        </h1>
        <div class="w-full flex items-center justify-between max-md:flex-col max-md:gap-12 dark:text-text-muted font-lato">
          <a class="text-nowrap dark:hover:text-text" href="">🏠 Stuttgart, Germany.</a>
          <div class="w-full flex items-center justify-end max-md:justify-center gap-16 text-base dark:text-text-muted">
            <a href="" class="flex gap-8 items-center dark:hover:text-text">
              <i class="devicon-linkedin-plain colored text-lg"></i>
              LinkedIn
            </a>

            <a class="flex gap-8 items-center dark:hover:text-text" href="">

              <i class="devicon-github-original text-lg"></i>

              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
