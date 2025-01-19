<script setup lang="ts">
import NavComponent from "./components/NavComponent.vue";
import MyPassionComponent from "./components/MyPassionComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import { Instagram, Linkedin } from 'lucide-vue-next'
import { ref } from "vue";
import RepoScroller from "./components/RepoScroller.vue";
import TooltipComponent from "./components/TooltipComponent.vue";

const homeTarget = ref();
const aboutTarget = ref();
const contactTarget = ref();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="fixed top-0 w-full">
      <NavComponent :home-target="homeTarget" :about-target="aboutTarget" :contact-target="contactTarget">
      </NavComponent>
    </header>
    <main>
      <div class="container mx-auto mt-36 h-full">
        <MyPassionComponent ref="homeTarget"></MyPassionComponent>
        <RepoScroller></RepoScroller>
        <div class="block relative -top-32 invisible" id="about"></div>
        <AboutComponent ref="aboutTarget"></AboutComponent>
        <div class="block relative -top-32 invisible" id="contact"></div>
        <ContactComponent ref="contactTarget"></ContactComponent>
      </div>
    </main>

    <footer class="bg-gray-950 text-white p-16 border-t-2 border-blue-500">
      <div class="flex items-center justify-between  font-rubik">
        <p class="font-lato text-4xl font-bold">Felix</p>
        <div class="flex gap-16 ">
          <TooltipComponent>
            <template #trigger>
              <a class="hover:text-blue-500 transition-colors duration-300" href="">
                <Instagram />
              </a>
            </template>
            <span>Instagram</span>
          </TooltipComponent>


          <TooltipComponent>
            <template #trigger>
              <a class="hover:text-blue-500 transition-colors duration-300" href="">
                <Linkedin />
              </a>
            </template>
            <span>Linkedin</span>
          </TooltipComponent>

        </div>
      </div>
    </footer>
  </div>
</template>
