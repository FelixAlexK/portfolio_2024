<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { Menu, X } from "lucide-vue-next";
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
    'bg-white text-gray-950': y <= 0,
    'bg-gray-950 text-white': y > 5,
  }"
    class="flex h-24 w-full items-center justify-between border-b-2 border-blue-800 px-12 transition-colors duration-300 md:px-24">
    <a href="#">
      <img v-if="y <= 0" class="aspect-auto h-auto w-28" src="../assets/logo.png" alt="logo" />
      <img v-else-if="y > 5" class="aspect-auto h-auto w-28" src="../assets/logo_light.png" alt="logo" />
    </a>

    <nav class="hidden md:flex">
      <ul class="flex items-center gap-12 font-rubik text-lg font-semibold">
        <li>
          <a :class="{ 'text-blue-800': homeTarget }" class="px-6 hover:text-blue-800" href="#">Home</a>
        </li>
        <li>
          <a :class="{ 'text-blue-800': aboutTarget }" class="px-6 hover:text-blue-800" href="#about">Ich</a>
        </li>
        <li>
          <a :class="{ 'text-blue-800': contactTarget }" class="px-6 hover:text-blue-800" href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
    <div class="relative z-50 md:hidden">
      <!-- Burger Icon -->
      <button @click="toggleMenu"
        class="flex h-10 w-10 items-center justify-center rounded-md text-white focus:outline-none"
        aria-label="Toggle Menu">
        <Menu :class="{ 'text-gray-950': y <= 0, 'text-white': y > 5 }"></Menu>
      </button>

      <!-- Menu Items -->
      <transition name="fade-slide">
        <div v-if="isOpen"
          class="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-start justify-center bg-gray-950 p-8 text-white">
          <!-- Close Button -->
          <button @click="closeMenu" class="absolute right-4 top-4 rounded-md text-2xl text-white focus:outline-none"
            aria-label="Toggle Menu">
            <X class="h-10 w-10"> </X>
          </button>

          <!-- Menu Items -->
          <ul class="mt-16 flex flex-col gap-8 font-rubik text-2xl">
            <li>
              <a class="p-6 hover:text-blue-800" @click="closeMenu" href="#">Home</a>
            </li>
            <li>
              <a class="p-6 hover:text-blue-800" @click="closeMenu" href="#about">Ich</a>
            </li>
            <li>
              <a class="m-6 hover:text-blue-800" @click="closeMenu" href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
