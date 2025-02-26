<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from "vue";
import { getUserPublicRepos } from "../services/api";


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
  <div class="hidden h-96 w-full flex-col items-center rounded-3xl bg-gray-100 p-8 md:flex">
    <span class="mb-1 flex w-full justify-start font-rubik text-sm text-blue-800">Öffentliche Repositories</span>
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-full flex-row items-center justify-between">
        <button aria-label="scroll left" class="" @click="() => scrollLeftOrRight('left')">
          <ChevronLeft />
        </button>
        <div v-if="isReady" class="w-2/3">
          <div v-if="state[currentScrollIndex]" class="flex flex-col">
            <h3 class="mb-8 font-lato text-6xl font-bold">
              {{ state[currentScrollIndex].name }}
            </h3>
            <p class="mb-16 max-h-20 overflow-hidden whitespace-normal font-rubik text-lg">
              {{ state[currentScrollIndex].description || "" }}
            </p>
            <div>
              <a
                class="rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-lg font-medium text-white"
                :href="state[currentScrollIndex].html_url"
                target="_blank"
                >Repository ansehen</a
              >
            </div>
          </div>
          <div v-else class="flex flex-col gap-8">
            <h3 class="font-lato text-6xl font-bold">Loading...</h3>
          </div>
        </div>
        <v-skeleton-loader
          v-if="isLoading"
          type="heading, paragraph, button"
          class="w-2/3"
          style="background-color: transparent"
        />
        <button aria-label="scroll right" @click="() => scrollLeftOrRight('right')">
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
</template>
