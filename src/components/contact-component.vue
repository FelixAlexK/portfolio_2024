<script setup lang="ts">
import { Copy, Github, Instagram } from "lucide-vue-next";
import { ref } from "vue";

// @ts-expect-error: Importing markdown file as Vue component is not typed
import { frontmatter } from "../components/content/contact.md";
import TooltipComponent from "./tooltip-component.vue";

const copied = ref(false);
const email = ref<string | undefined>(import.meta.env.VITE_EMAIL as string);
let intervalIdCopying: ReturnType<typeof setInterval> | undefined;

function copyToClipboard() {
  navigator.clipboard
    .writeText(email.value!)
    .then(() => {
      copied.value = true;
    })
    .catch((err) => {
      console.error("Fehler beim Kopieren: ", err);
      copied.value = false;
    });

  if (intervalIdCopying) {
    clearInterval(intervalIdCopying);
  }

  intervalIdCopying = setInterval(() => {
    copied.value = false;
    clearInterval(intervalIdCopying);
    intervalIdCopying = undefined;
  }, 3000);
}
</script>

<template>
  <section v-if="email" class="py-16">
    <div class="w-full p-8 md:p-16 border border-blue-800 rounded-3xl shadow-lg bg-white">
      <h2 class="mb-4 font-lato text-4xl font-bold text-gray-900 md:text-6xl">
        {{ frontmatter.title }}
      </h2>
      <p class="mb-12 font-rubik text-base text-gray-700 md:text-lg">
        {{ frontmatter.subtitle }}
      </p>
      <div class="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-center">
        <span class="font-rubik text-xl font-bold text-gray-800 md:text-2xl">{{ email }}</span>
        <button
          aria-label="copy email"
          class="relative flex items-center gap-2 rounded bg-blue-800 px-4 py-2 text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          @click="copyToClipboard"
        >
          <Copy />
          <span>Kopieren</span>
        </button>
        <Transition :duration="550" name="nested">
          <div
            v-if="copied"
            class="relative z-10 rounded bg-green-500 px-4 py-1 font-rubik text-xs text-white shadow-lg md:text-sm"
          >
            <span>kopiert</span>
          </div>
        </Transition>
      </div>
      <div class="flex justify-center gap-16">
        <TooltipComponent>
          <template #trigger>
            <a
              aria-label="Link to Instagram"
              class="transition-transform duration-300 hover:scale-110 hover:text-blue-800"
              href="https://www.instagram.com/felix.k.02"
              target="_blank"
            >
              <Instagram />
            </a>
          </template>
          <span>Instagram</span>
        </TooltipComponent>

        <TooltipComponent>
          <template #trigger>
            <a
              aria-label="Link to Github"
              class="transition-transform duration-300 hover:scale-110 hover:text-blue-800"
              href="https://github.com/FelixAlexK"
              target="_blank"
            >
              <Github />
            </a>
          </template>
          <span>Github</span>
        </TooltipComponent>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translatex(30px);
  opacity: 0;
}

.nested-enter-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
