<script setup lang="ts">
const { techName, bgColor, simpleIconName } = defineProps<{
  techName: string;
  bgColor: string;
  simpleIconName?: string;
}>();
</script>

<template>
  <div
    class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full "
    :style="{ backgroundColor: `${bgColor}33` }"
  >
    <slot v-if="$slots.icon" name="icon">
    </slot>
    <img v-else :aria-label="techName" :alt="`${techName}-icon`" class="size-16" :src="`https://cdn.simpleicons.org/${simpleIconName ? simpleIconName : techName.toLowerCase()}`" />
    <p class="text-xs whitespace-nowrap">
      {{ techName }}
    </p>
  </div>
</template>
