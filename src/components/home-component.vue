<script setup lang="ts">
import { ref } from "vue";

const openToWork = ref(true);
</script>

<template>
  <section id="home" v-reveal class="sm:mt-100">
    <div class="flex flex-col items-start gap-28">
      <h1 class="font-rubik font-bold text-3xl tracking-tight dark:text-dark-text-muted text-light-text-muted">
        <span class="flex flex-wrap items-center gap-12 md:gap-16">
          <span class="dark:text-dark-text text-light-text">Hey, I'm Felix 👋</span>
          <span v-if="openToWork" role="status" class="inline-flex items-center gap-8 whitespace-nowrap rounded-full border border-light-success/30 bg-light-success/10 px-12 py-4 font-lato text-xs font-semibold uppercase tracking-widest dark:border-dark-success/30 dark:bg-dark-success/10 dark:text-dark-success text-light-success">
            <span aria-hidden="true" class="size-8 animate-pulse rounded-full bg-light-success dark:bg-dark-success"></span>
            Open to work
          </span>
        </span>
        <br>
        <span>I recently graduated with a B.Sc. in Computer Science.</span>
      </h1>
      <div class="w-full flex items-center justify-between max-md:flex-col max-md:gap-12 md:gap-16 font-lato dark:text-dark-text-muted text-light-text-muted">
        <a aria-label="Blackforest, Germany (opens in a new window)" class="link-underline p-8 -m-8 max-md:self-start text-nowrap dark:hover:text-dark-text hover:text-light-text" target="_blank" href="https://www.google.com/maps/place/72285+Pfalzgrafenweiler/@48.5275418,8.5086229,13z/data=!3m1!4b1!4m6!3m5!1s0x479748e15ffc16f5:0x853c11fe22df5093!8m2!3d48.5253322!4d8.5648435!16s%2Fm%2F02p_mh8?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D">🏠 Blackforest, Germany.</a>
        <div class="w-full flex items-center justify-start gap-16 text-base dark:text-dark-text-muted text-light-text-muted">
          <a data-s-event="LinkedIn click" aria-label="LinkedIn Profile (opens in a new window)" target="_blank" href="https://www.linkedin.com/in/felix-kuhbier-0331b61aa?utm_source=linkedin&utm_medium=social" class="link-underline flex items-center gap-8 p-8 -m-8 dark:hover:text-dark-text hover:text-light-text">
            <i class="devicon-linkedin-plain colored text-lg"></i>
            LinkedIn
          </a>
          <a data-s-event="GitHub click" aria-label="GitHub Profile (opens in a new window)" target="_blank" href="https://github.com/FelixAlexK?utm_source=github&utm_medium=social" class="link-underline flex items-center gap-8 p-8 -m-8 dark:hover:text-dark-text hover:text-light-text">
            <i class="devicon-github-original text-lg"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
