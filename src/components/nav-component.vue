<script setup lang="ts">
import { Menu, Moon, Sun, X } from "lucide-vue-next";
import { onBeforeUnmount, ref, watch } from "vue";

const menuIsOpen = ref(false);
const isDark = ref(document.documentElement.classList.contains("dark"));

watch(menuIsOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Contact", href: "#contact" },
];

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
}

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<template>
  <nav class="pt-20 pb-40 w-full">
    <div class="flex items-center justify-between">
      <a href="#home" class="text-lg font-bold font-rubik uppercase tracking-widest dark:text-dark-text-muted text-light-text-muted transition-colors dark:hover:text-dark-text hover:text-light-text">
        Felix
      </a>
      <div class="hidden md:flex items-center gap-40 text-lg font-lato dark:text-dark-text-muted text-light-text-muted">
        <a v-for="link in navLinks" :key="link.href" :data-s-event="`Nav: ${link.label}`" class="link-underline transition-colors dark:hover:text-dark-text hover:text-light-text" :href="link.href">
          {{ link.label }}
        </a>
        <button aria-label="Toggle dark mode" class="transition-colors dark:hover:text-dark-text hover:text-light-text" @click="toggleTheme">
          <Sun v-if="isDark" class="size-20" />
          <Moon v-else class="size-20" />
        </button>
      </div>
      <div class="flex items-center gap-16 md:hidden">
        <button aria-label="Toggle dark mode" class="p-8 -m-8 dark:text-dark-text-muted text-light-text-muted" @click="toggleTheme">
          <Sun v-if="isDark" class="size-28" />
          <Moon v-else class="size-28" />
        </button>
        <Menu class="size-28 dark:text-dark-text-muted text-light-text-muted" @click="toggleMenu" />
      </div>
    </div>
  </nav>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="menuIsOpen" class="fixed z-50 top-0 left-0 w-full h-dvh flex dark:bg-dark-bg-dark bg-light-bg-dark dark:text-dark-text text-light-text">
        <div class="w-full h-dvh m-auto p-40 bg-linear-to-b dark:from-dark-bg-light dark:to-dark-bg from-light-bg-light to-light-bg">
          <div class="flex items-center justify-between w-full">
            <a href="#home" class="text-lg font-bold font-rubik uppercase tracking-widest dark:text-dark-text-muted text-light-text-muted" @click="menuIsOpen = false">
              Felix
            </a>
            <button aria-label="Close menu" class="flex items-start" @click="toggleMenu">
              <X class="size-28 mb-20" />
            </button>
          </div>
          <ul class="flex flex-col items-center space-y-60 text-3xl font-semibold text-center font-lato mt-40">
            <li v-for="link in navLinks" :key="link.href">
              <a :data-s-event="`Nav: ${link.label}`" class="link-underline transition-colors dark:hover:text-dark-text hover:text-light-text" :href="link.href" @click="menuIsOpen = false">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
