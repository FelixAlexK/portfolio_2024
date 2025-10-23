<script setup lang="ts">
import { ref } from "vue";

const { techName } = defineProps<{
  techName: string;
}>();

type Tech = {
  techName: string;
  bgColor: string;
  simpleIconName?: string;
  iconUrl?: string;
};

const techStacks: Tech[] = [
  { techName: "TypeScript", bgColor: "#3178C6" },
  { techName: "Vue", bgColor: "#4FC08D", simpleIconName: "vuedotjs" },
  { techName: "TailwindCSS", bgColor: "#06B6D4" },
  { techName: "TanStack Query", bgColor: "#fb2c36", iconUrl: "https://tanstack.com/images/logos/logo-color-600.png" },
  { techName: "Hono", bgColor: "#E36002" },
  { techName: "Drizzle ORM", bgColor: "#C5F74F", simpleIconName: "drizzle" },
  { techName: "PostgreSQL", bgColor: "#4169E1" },
  { techName: "Bun", bgColor: "#fbf0df", simpleIconName: "bun" },
  { techName: "Vite", bgColor: "#646CFF", simpleIconName: "vite" },
  { techName: "Turso", bgColor: "#4FF8D2", simpleIconName: "turso" },
  { techName: "React", bgColor: "#61DAFB", simpleIconName: "react" },
  { techName: "BetterAuth", bgColor: "#FFFFFF", simpleIconName: "betterauth" },
  { techName: "Turborepo", bgColor: "#FF1E56", simpleIconName: "turborepo" },
];

const techStackMap = new Map(
  techStacks.map(item => [item.techName.toLowerCase(), item]),
);

const lookupKey = techName ? techName.toLowerCase() : "";
const techStackItem = ref<Tech>(
  techStackMap.get(lookupKey) ?? {
    techName,
    bgColor: "#CCCCCC",
  },
);
</script>

<template>
  <div
    class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full "
    :style="{ backgroundColor: `${techStackItem.bgColor}33` }"
  >
    <img v-if="techStackItem.iconUrl" fetchpriority="auto" class="size-16" :src="techStackItem.iconUrl" :alt="`${techStackItem.techName} logo`">
    <img v-else :aria-label="techStackItem.techName" :alt="`${techStackItem.techName}-icon`" class="size-16" :src="`https://cdn.simpleicons.org/${techStackItem.simpleIconName ? techStackItem.simpleIconName : techStackItem.techName.toLowerCase()}`" />
    <p class="text-xs whitespace-nowrap">
      {{ techStackItem.techName }}
    </p>
  </div>
</template>
