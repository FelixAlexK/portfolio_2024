<script setup lang="ts">
import { Copy, Loader2 } from "lucide-vue-next";
import { ref, useTemplateRef } from "vue";
import emailjs from "@emailjs/browser";

const copied = ref(false);
const formRef = useTemplateRef("form");
const isLoading = ref(false);

let intervalIdCopying: number | undefined;
let intervalIdEmail: number | undefined;

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

interface FormData {
  name: string;
  email: string;
  message: string;
}

const form = ref<FormData>({
  name: "",
  email: "",
  message: "",
});

const successMessage = ref<string | null>(null);

function sendEmail() {
  isLoading.value = true;
  if (formRef.value) {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.value,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          successMessage.value = "Nachricht wurde erfolgreich versendet";
          isLoading.value = false;

          if (intervalIdEmail) {
            clearInterval(intervalIdEmail);
          }

          intervalIdEmail = setInterval(() => {
            successMessage.value = null;
            clearInterval(intervalIdEmail);
            intervalIdEmail = undefined;
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          clearInterval(intervalIdEmail);
          intervalIdEmail = undefined;
          isLoading.value = false;
        },
      );
  } else {
    console.error("Form reference is null");
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="" ref="contactTarget">
    <div class="w-full rounded-xl bg-gray-100 p-4 md:p-16">
      <h2 class="mb-1 font-lato text-4xl font-bold md:text-6xl">
        Kontaktiere mich
      </h2>
      <p class="mb-8 font-rubik text-base md:text-lg">
        Sende mir eine Nachricht und ich melde mich bei dir.
      </p>
      <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
        <input required name="from_name" type="text" placeholder="Name*"
          class="mb-4 h-16 w-full rounded-3xl px-6 font-rubik text-base focus-visible:shadow-xl focus-visible:outline-none md:text-lg" />
        <input required name="from_email" type="email" placeholder="Email*"
          class="mb-4 h-16 w-full rounded-3xl px-6 font-rubik text-base focus-visible:shadow-xl focus-visible:outline-none md:text-lg" />
        <textarea required name="message" type="text" placeholder="Anfrage*"
          class="mb-16 h-32 w-full rounded-3xl p-6 font-rubik text-base focus-visible:shadow-xl focus-visible:outline-none md:text-lg"></textarea>

        <div class="mb-16 flex flex-col items-start justify-start">
          <button type="submit"
            class="mb-1 rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-base font-medium text-white md:text-lg">
            <Loader2 class="animate-spin" v-if="isLoading"></Loader2>
            <span v-else>Senden</span>
          </button>
          <small v-if="successMessage" class="animate-pulse font-rubik text-green-600">{{ successMessage }}
          </small>
        </div>
      </form>

      <div class="flex flex-row items-center md:gap-4">
        <span class="font-rubik text-xl font-bold md:text-2xl">felixk@iamfelixk.de
        </span>
        <button aria-label="copy email" class="relative hidden rounded px-2 py-1 hover:text-blue-800 md:block"
          @click="copyToClipboard">
          <Copy></Copy>
        </button>
        <div v-if="copied"
          class="relative z-10 rounded bg-green-500 px-4 py-2 font-rubik text-xs text-white shadow-lg transition-transform duration-300 md:text-sm">
          <span>kopiert</span>
        </div>
      </div>
    </div>
  </section>
</template>
