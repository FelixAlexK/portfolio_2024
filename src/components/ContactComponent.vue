<script setup lang="ts">
import { Copy } from "lucide-vue-next";
import { ref } from "vue";

const copied = ref(false);
let intervalId: number | undefined;
function copyToClipboard() {
  navigator.clipboard
    .writeText("felixk.dev@proton.me")
    .then(() => {
      copied.value = true;
    })
    .catch((err) => {
      console.error("Fehler beim Kopieren: ", err);
      copied.value = false;
    });

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    copied.value = false;
    clearInterval(intervalId);
    intervalId = undefined;
  }, 3000);
}
</script>

<template>
  <section class="mb-32 mt-32" ref="contactTarget">
    <div class="w-full rounded-xl bg-gray-100 p-16">
      <form action="" class="">
        <h2 class="mb-1 font-lato text-6xl font-bold">Kontaktiere mich</h2>
        <p class="mb-8 font-rubik text-lg">
          Sende mir eine Nachricht und ich melde mich bei dir.
        </p>

        <div class="flex flex-col">
          <input
            type="text"
            placeholder="Name*"
            class="mb-4 h-16 w-full rounded-3xl px-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            class="mb-4 h-16 w-full rounded-3xl px-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none"
          />
          <textarea
            type="text"
            placeholder="Anfrage*"
            class="mb-16 h-32 w-full rounded-3xl p-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none"
          ></textarea>
        </div>
        <button
          class="mb-16 rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-lg font-medium text-white"
        >
          Senden
        </button>
      </form>
      <div class="absolute flex flex-row items-center gap-4">
        <span class="font-rubik text-3xl font-bold">felixk.dev@proton.me</span>
        <button
          class="relative rounded px-4 py-2 hover:text-blue-500"
          @click="copyToClipboard"
        >
          <Copy></Copy>
        </button>
        <div
          v-if="copied"
          class="relative left-2 z-10 rounded bg-green-500 px-4 py-2 font-rubik text-sm text-white shadow-lg transition-transform duration-300"
        >
          <span>kopiert</span>
        </div>
      </div>
    </div>
  </section>
</template>
