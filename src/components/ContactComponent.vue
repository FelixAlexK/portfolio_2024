<script setup lang="ts">

import { Copy } from "lucide-vue-next";
import { ref } from "vue";

const copied = ref(false);
let intervalId: number | undefined;
function copyToClipboard() {
    navigator.clipboard.writeText('felixk.dev@proton.me').then(() => {
        copied.value = true;
    }).catch(err => {
        console.error('Fehler beim Kopieren: ', err);
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
                <h2 class=" font-lato text-6xl font-bold mb-1">Kontaktiere mich</h2>
                <p class="font-rubik text-lg mb-8">
                    Sende mir eine Nachricht und ich melde mich bei dir.
                </p>

                <div class=" flex flex-col ">
                    <input type="text" placeholder="Name*"
                        class="h-16 w-full rounded-3xl px-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none mb-4" />
                    <input type="email" placeholder="Email*"
                        class="h-16 w-full rounded-3xl px-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none mb-4" />
                    <textarea type="text" placeholder="Anfrage*"
                        class="h-32 w-full rounded-3xl p-6 font-rubik text-lg focus-visible:shadow-xl focus-visible:outline-none mb-16"></textarea>
                </div>
                <button class="rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-lg font-medium text-white mb-16">
                    Senden
                </button>
            </form>
            <div class="flex flex-row items-center gap-4 absolute">
                <span class="font-rubik text-3xl font-bold">felixk.dev@proton.me</span>
                <button class="relative rounded px-4 py-2 hover:text-blue-500" @click="copyToClipboard">
                    <Copy></Copy>
                </button>
                <div v-if="copied"
                    class="relative left-2 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg z-10 transition-transform duration-300 font-rubik">
                    <span>kopiert</span>
                </div>
            </div>
        </div>
    </section>
</template>
