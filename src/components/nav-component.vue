<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { ref } from "vue";

const menuIsOpen = ref(false);

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
  console.log(menuIsOpen.value);
}
</script>

<template>
  <nav class="pt-20 pb-40 w-full">
    <div class="flex items-center justify-between">
      <a href="/" class="text-lg dark:hover:text-dark-text hover:text-light-text  uppercase dark:text-dark-text-muted text-light-text-muted tracking-widest font-bold font-rubik">
        Felix
      </a>
      <div class="space-x-40 text-lg font-lato  hidden md:block dark:text-dark-text-muted text-light-text-muted">
        <a class="dark:hover:text-dark-text hover:text-light-text" href="#work-experience">Work Experience</a>
        <a class="dark:hover:text-dark-text hover:text-light-text" href="#projects">Projects</a>
        <a class="dark:hover:text-dark-text hover:text-light-text" href="#contact">Contact</a>
      </div>
      <Menu class="size-28 md:hidden dark:text-dark-text-muted text-light-text-muted" @click="toggleMenu" />
    </div>
  </nav>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="menuIsOpen" class="fixed z-50 top-0 left-0 w-full h-full dark:bg-dark-bg-dark bg-light-bg-dark flex transition-opacity  dark:text-dark-text text-light-text">
        <div class="w-full h-full m-auto p-40 bg-gradient-to-b dark:from-bg-dark-light from-bg-light-light dark:to-dark-bg to-light-bg transition-all ">
          <div class="justify-end w-full flex">
            <X class="size-28 mb-20" @click="toggleMenu" />
          </div>
          <ul class="flex flex-col items-center space-y-60 text-3xl font-semibold text-center font-lato mt-40">
            <li>
              <a class="hover:text-text-muted" href="#work-experience" @click="menuIsOpen = false">Work Experience</a>
            </li>
            <li>
              <a class="hover:text-text-muted" href="#projects" @click="menuIsOpen = false">Projects</a>
            </li>
            <li>
              <a class="hover:text-text-muted" href="#contact" @click="menuIsOpen = false">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
