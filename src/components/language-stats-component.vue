<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { ChevronDown, ChevronUp, Code } from "lucide-vue-next";
import { computed, ref, watchEffect } from "vue";

import { getUserUsedLanguagesFromRepos } from "../services/api";

const isExpanded = ref(false);

const { state, isReady, isLoading } = useAsyncState(
  getUserUsedLanguagesFromRepos().then(data => data),
  [], // Provide an initial state (empty object)
);

const totalBytes = computed(() =>
  state.value.reduce((sum, lang) => sum + lang.bytes, 0),
);

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div class="hidden language-stats-container w-full rounded-3xl bg-gradient-to-r from-gray-100 to-gray-200 p-8 shadow-lg md:block">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 font-rubik text-lg font-medium text-gray-800">
        <Code class="text-blue-800" />
        <span>Am häufigsten verwendete Sprachen</span>
      </div>
      <button
        class="rounded-full hover:bg-blue-800 bg-gray-300 p-3 text-white shadow-md transition-transform duration-300 hover:scale-110"
        :aria-expanded="isExpanded"
        aria-label="Toggle language statistics"
        @click="toggleExpand"
      >
        <ChevronDown v-if="!isExpanded" />
        <ChevronUp v-else />
      </button>
    </div>

    <transition
      name="expand"
      @enter="el => {
        const element = el as HTMLElement;
        const height = element.scrollHeight;
        element.style.height = '0px';
        element.offsetHeight; // Force reflow
        element.style.height = `${height}px`;
      }"
      @leave="el => {
        (el as HTMLElement).style.height = '0px';
      }"
    >
      <div v-if="isExpanded" class="language-stats-content overflow-hidden transition-all duration-300" style="height: auto;">
        <div v-if="isLoading" class="flex h-32 items-center justify-center">
          <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-800" />
        </div>

        <div v-else-if="isReady && state.length > 0" class="mt-4 space-y-3">
          <div v-for="(lang, index) in state" :key="index" class="language-item">
            <div class="flex justify-between text-sm">
              <span class="font-rubik text-sm font-medium text-gray-700">{{ lang.lang }}</span>
              <span class="font-rubik">{{ ((lang.bytes / totalBytes) * 100).toFixed(1) }}%</span>
            </div>
            <div class="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                class="h-full transition-all duration-500"
                :style="{
                  width: `${(lang.bytes / totalBytes) * 100}%`,
                  backgroundColor: typeof lang.color === 'string' ? lang.color : '#cccccc',
                }"
              />
            </div>
          </div>
        </div>

        <div v-else-if="isReady && state.length === 0" class="mt-4 text-center font-rubik text-gray-500">
          No language data available
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

@keyframes growBar {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
