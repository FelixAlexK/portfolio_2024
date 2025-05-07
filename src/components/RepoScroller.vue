<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from "vue";
import { getUserPublicRepos } from "../services/api";
import ButtonComponent from "./ButtonComponent.vue";


const currentScrollIndex = ref(0);
;


const { state, isReady, isLoading } = useAsyncState(
  getUserPublicRepos("FelixAlexK").then((data) => data),
  [],
);

function scrollLeftOrRight(direction: "left" | "right") {
  const scrollLimit = state.value.length - 1;

  if (direction === "left") {
    if (currentScrollIndex.value === 0) {
      currentScrollIndex.value = scrollLimit;
    } else {
      currentScrollIndex.value -= 1;
    }
  } else {
    if (currentScrollIndex.value === scrollLimit) {
      currentScrollIndex.value = 0;
    } else {
      currentScrollIndex.value += 1;
    }
  }
}
</script>

<template>
  <div class="hidden h-96 w-full flex-col items-center rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 p-8 shadow-lg md:flex">
    <span class="mb-4 flex w-full justify-start font-rubik text-sm text-blue-800 uppercase tracking-wide">
      Öffentliche Repositories
    </span>
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-full flex-row items-center justify-between">
        <!-- Left Scroll Button -->
        <button
          aria-label="scroll left"
          class="rounded-full hover:bg-blue-800 bg-gray-300 p-3 text-white shadow-md transition-transform duration-300 hover:scale-110"
          @click="() => scrollLeftOrRight('left')"
        >
          <ChevronLeft />
        </button>

        <!-- Repository Content -->
        <div v-if="isReady" class="w-2/3">
          <div v-if="state[currentScrollIndex]" class="flex flex-col items-center text-center">
            <h3 class="mb-4 font-lato text-4xl font-bold text-gray-900">
              {{ state[currentScrollIndex].name }}
            </h3>
            <p class="mb-8 max-h-20 overflow-hidden whitespace-normal font-rubik text-lg text-gray-700">
              {{ state[currentScrollIndex].description || "Keine Beschreibung verfügbar." }}
            </p>
            
            <ButtonComponent :href="state[currentScrollIndex].html_url" text="Repository ansehen"></ButtonComponent>
          </div>
          <div v-else class="flex flex-col items-center gap-8">
            <h3 class="font-lato text-4xl font-bold text-gray-900">Loading...</h3>
          </div>
        </div>

        <!-- Skeleton Loader -->
        <v-skeleton-loader
          v-if="isLoading"
          type="heading, paragraph, button"
          class="w-2/3"
          style="background-color: transparent"
        />

        <!-- Right Scroll Button -->
        <button
          aria-label="scroll right"
          class="rounded-full hover:bg-blue-800 bg-gray-300 p-3 text-white shadow-md transition-transform duration-300 hover:scale-110"
          @click="() => scrollLeftOrRight('right')"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
</template>
