<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const CARD_URL = "https://roadmap.sh/card/tall/65bb887a0c5481228374d7ee";

const isDark = ref(document.documentElement.classList.contains("dark"));

const cardUrl = computed(
  () => `${CARD_URL}?variant=${isDark.value ? "dark" : "light"}`,
);

const themeObserver = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});

onMounted(() => {
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onBeforeUnmount(() => {
  themeObserver.disconnect();
});
</script>

<template>
  <section id="learning" v-reveal>
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Learning
    </h2>
    <div class="flex flex-col w-full gap-20">
      <p class="font-lato text-base dark:text-dark-text-muted text-light-text-muted">
        Currently following the machine learning roadmap on roadmap.sh.
      </p>
      <a
        data-s-event="Learning roadmap click"
        target="_blank"
        rel="noopener noreferrer"
        href="https://roadmap.sh/machine-learning"
        class="lift flex w-full flex-col items-center gap-16 rounded-lg border border-light-border border-t-light-border-muted bg-linear-to-b from-light-bg to-light-bg-dark p-20 hover:-translate-y-4 dark:border-dark-border dark:border-t-dark-highlight dark:from-dark-bg dark:to-dark-bg-dark"
      >
        <img
          :src="cardUrl"
          alt="Felix's machine learning roadmap progress on roadmap.sh"
          loading="lazy"
          class="rounded-lg w-full max-w-240 h-auto"
        />
      </a>
    </div>
  </section>
</template>
