<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>

<template>
  <div
    class="relative flex items-center transition-transform duration-300"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <!-- Trigger element -->
    <slot name="trigger" />

    <!-- Tooltip -->
    <div
      v-if="show"
      class="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white shadow-lg"
    >
      <slot />
    </div>
  </div>
</template>
