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
      <h3 class="text-2xl font-bold font-rubik">
        Felix
      </h3>
      <div class="space-x-40 text-base font-lato hidden md:block">
        <a class="hover:text-text-muted" href="">Home</a>
        <a class="hover:text-text-muted" href="">About</a>
        <a class="hover:text-text-muted" href="">Projects</a>
        <a class="hover:text-text-muted" href="">Contact</a>
      </div>
      <Menu class="size-28 md:hidden" @click="toggleMenu" />
    </div>
  </nav>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="menuIsOpen" class="fixed z-50 top-0 left-0 w-full h-full dark:bg-bg-dark/50 flex transition-opacity  dark:text-text">
        <div class="w-full h-full m-auto p-40 bg-gradient-to-b dark:from-bg-light dark:to-bg transition-all ">
          <div class="justify-end w-full flex">
            <X class="size-28 mb-20" @click="toggleMenu" />
          </div>
          <div class="flex flex-col items-center space-y-60 text-2xl font-lato mt-40">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
