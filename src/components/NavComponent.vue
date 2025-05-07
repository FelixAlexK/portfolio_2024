<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { Menu, X } from "lucide-vue-next";
import { onUnmounted, ref } from "vue";

const { homeTarget, aboutTarget, contactTarget } = defineProps<{
  homeTarget: boolean;
  aboutTarget: boolean;
  contactTarget: boolean;
}>();

const isOpen = ref(false);

const { y } = useWindowScroll();

function toggleMenu() {
  isOpen.value = !isOpen.value;
  toggleScrollLock();
}

// Function to close menu
function closeMenu() {
  isOpen.value = false;
  toggleScrollLock();
}

function toggleScrollLock() {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

onUnmounted(() => {
  document.body.style.overflow = ""; // Ensure scrolling is restored
});
</script>

<template>
  <div
    :class="{
      'bg-white text-gray-950 shadow-md': y <= 0,
      'bg-gray-950 text-white shadow-lg': y > 5,
    }"
    class="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-blue-800 px-8 transition-all duration-300 md:px-16"
  >
    <!-- Logo -->
    <a href="#">
      <img
        v-if="y <= 0"
        class="aspect-auto h-auto w-24 transition-transform duration-300 hover:scale-105"
        src="../assets/logo.png"
        alt="logo"
      />
      <img
        v-else-if="y > 5"
        class="aspect-auto h-auto w-24 transition-transform duration-300 hover:scale-105"
        src="../assets/logo_light.png"
        alt="logo"
      />
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex">
      <ul class="flex items-center gap-8 font-rubik text-lg font-medium">
        <li>
          <a
            :class="{ 'text-blue-800': homeTarget }"
            class="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            :class="{ 'text-blue-800': aboutTarget }"
            class="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
            href="#about"
          >
            Ich
          </a>
        </li>
        <li>
          <a
            :class="{ 'text-blue-800': contactTarget }"
            class="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
            href="#contact"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Navigation -->
    <div class="relative z-50 md:hidden">
      <!-- Burger Icon -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-md focus:outline-none"
        aria-label="Toggle Menu"
        @click="toggleMenu"
      >
        <Menu :class="{ 'text-gray-950': y <= 0, 'text-white': y > 5 }" />
      </button>

      <!-- Mobile Menu Items -->
      <transition name="fade-slide">
        <div
          v-if="isOpen"
          class="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-start justify-center bg-gray-950 p-8 text-white"
        >
          <!-- Close Button -->
          <button
            class="absolute right-4 top-4 rounded-md text-2xl focus:outline-none"
            aria-label="Toggle Menu"
            @click="closeMenu"
          >
            <X class="h-10 w-10" />
          </button>

          <!-- Menu Items -->
          <ul class="mt-16 flex flex-col gap-8 font-rubik text-2xl">
            <li>
              <a
                class="p-6 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
                href="#"
                @click="closeMenu"
              >
                Home
              </a>
            </li>
            <li>
              <a
                class="p-6 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
                href="#about"
                @click="closeMenu"
              >
                Ich
              </a>
            </li>
            <li>
              <a
                class="p-6 rounded-lg transition-colors duration-300 hover:bg-blue-800 hover:text-white"
                href="#contact"
                @click="closeMenu"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
