<script setup lang="ts">
import { Copy, Github, Instagram, Linkedin } from "lucide-vue-next";
import { ref } from "vue";
import TooltipComponent from "../components/TooltipComponent.vue";

const copied = ref(false);

let intervalIdCopying: number | undefined;

function copyToClipboard() {
  navigator.clipboard
    .writeText(import.meta.env.VITE_EMAIL)
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
  <section class="">
    <div class="w-full rounded-xl bg-gray-100 p-4 md:p-16">
      <h2 class="mb-1 font-lato text-4xl font-bold md:text-6xl">Kontaktiere mich</h2>
      <p class="mb-16 font-rubik text-base md:text-lg">
        Schreibe mir eine E-Mail oder schau auf meinen Social-Media-Kanälen vorbei.
      </p>
      <div class="mb-8 flex flex-row items-center md:gap-4">
        <span class="font-rubik text-xl font-bold md:text-2xl">felixk.dev@proton.me</span>
        <button
          aria-label="copy email"
          class="relative hidden rounded px-2 py-1 hover:text-blue-800 md:block"
          @click="copyToClipboard"
        >
          <Copy />
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
      <div class="flex gap-16">
        <TooltipComponent>
          <template #trigger>
            <a
              aria-label="Link to Instagram"
              class="transition-colors duration-300 hover:text-blue-800"
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
            <a aria-label="Link to Linkedin" class="transition-colors duration-300 hover:text-blue-800" href="">
              <Linkedin />
            </a>
          </template>
          <span>Linkedin</span>
        </TooltipComponent>
        <TooltipComponent>
          <template #trigger>
            <a
              aria-label="Link to Github"
              class="transition-colors duration-300 hover:text-blue-800"
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
nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translatex(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
