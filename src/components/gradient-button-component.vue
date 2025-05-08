<script setup lang="ts">
const { text = "Button" } = defineProps<{
  text?: string;
  href?: string;
}>();

defineEmits(["click"]);
</script>

<template>
  <div class="hidden md:block">
    <template v-if="href">
      <!-- Render as an anchor link if `href` is provided -->
      <a
        :href="href"
        class="rounded-2xl bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-500 px-16 py-4 font-rubik text-lg font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {{ text }}
      </a>
    </template>
    <template v-else>
      <button
        class="rounded-2xl bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 px-16 py-4 font-rubik text-lg font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg "
        @click="$emit('click')"
      >
        {{ text }}
      </button>
    </template>
  </div>
</template>
