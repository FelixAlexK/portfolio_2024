<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { Menu, X } from 'lucide-vue-next'
import { onUnmounted, ref } from "vue";


const isOpen = ref(false);


const { homeTarget, aboutTarget, contactTarget } = defineProps<{
  homeTarget: boolean;
  aboutTarget: boolean;
  contactTarget: boolean;
}>();

const { y } = useWindowScroll();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  toggleScrollLock();
};

// Function to close menu
const closeMenu = () => {
  isOpen.value = false;
  toggleScrollLock();
};

const toggleScrollLock = () => {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

onUnmounted(() => {
  document.body.style.overflow = ""; // Ensure scrolling is restored
});
</script>

<template>
  <div :class="{
    'bg-transparent text-gray-950': y <= 0,
    'bg-gray-950 text-white': y > 5,
  }"
    class="flex h-24 w-full items-center justify-between border-b-2 border-blue-500 px-12 md:px-24 transition-colors duration-300">
    <h1 class="cursor-pointer px-6 font-lato text-4xl font-bold ">
      <a href="#">FELIX</a>
    </h1>

    <nav class="hidden md:flex">
      <ul class="flex items-center gap-12 font-rubik text-lg font-semibold">
        <li>
          <a :class="{ 'text-blue-500': homeTarget }" class="px-6 hover:text-blue-500" href="#">Home</a>
        </li>
        <li>
          <a :class="{ 'text-blue-500': aboutTarget }" class="px-6 hover:text-blue-500" href="#about">Ich</a>
        </li>
        <li>
          <a :class="{ 'text-blue-500': contactTarget }" class="px-6 hover:text-blue-500" href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
    <div class="relative md:hidden z-50">
      <!-- Burger Icon -->
      <button @click="toggleMenu"
        class="flex items-center justify-center w-10 h-10  text-white rounded-md focus:outline-none"
        aria-label="Toggle Menu">
        <Menu :class="{ 'text-gray-950': y <= 0, 'text-white': y > 5 }"></Menu>
      </button>

      <!-- Menu Items -->
      <transition name="fade-slide">

        <div v-if="isOpen"
          class="h-screen w-screen fixed top-0 left-0 bg-gray-950 text-white flex flex-col items-start justify-center z-40 p-8">
          <!-- Close Button -->
          <button @click="closeMenu" class="absolute top-4 right-4  text-2xl rounded-md focus:outline-none text-white"
            aria-label="Toggle Menu">
            <X class="w-10 h-10 ">
            </X>
          </button>

          <!-- Menu Items -->
          <ul class="text-2xl mt-16 flex flex-col gap-8 font-rubik ">
            <li>
              <a class="p-6 hover:text-blue-500" @click="closeMenu" href="#">Home</a>
            </li>
            <li>
              <a class="p-6 hover:text-blue-500" @click="closeMenu" href="#about">Ich</a>
            </li>
            <li>
              <a class="m-6 hover:text-blue-500" @click="closeMenu" href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
