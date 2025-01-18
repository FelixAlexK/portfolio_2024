<script setup lang="ts">
import { useIntersectionObserver, type MaybeElement, useWindowScroll } from '@vueuse/core'

import { computed, ref, type Ref } from 'vue'

const homeTarget = ref(null)
const aboutTarget = ref(null)
const contactTarget = ref(null)
const homeTargetIsVisible = ref(false)
const aboutTargetIsVisible = ref(false)
const contactTargetIsVisible = ref(false)
const windowScrolledTop = ref(true)

function setupIntersectionObserver(target: Ref<MaybeElement, MaybeElement>, visibilityFlag: Ref<boolean, boolean>) {
  useIntersectionObserver(
    target,
    ([entry]) => {
      visibilityFlag.value = entry?.isIntersecting || false
    },
    { threshold: 0.5 }
  )
}

function copyToClipboard() {
  navigator.clipboard.writeText('felixk.dev@proton.me').then(() => {
    alert('Text wurde kopiert!');
  }).catch(err => {
    console.error('Fehler beim Kopieren: ', err);
  });
}

const { y } = useWindowScroll()





setupIntersectionObserver(homeTarget, homeTargetIsVisible)
setupIntersectionObserver(aboutTarget, aboutTargetIsVisible)
setupIntersectionObserver(contactTarget, contactTargetIsVisible)


</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed top-0 w-full ">
      <div :class="{ 'bg-transparent text-gray-950': y <= 0, 'bg-gray-950 text-white': y > 5 }"
        class="w-full h-24 flex items-center justify-between px-24 border-b-2 border-blue-500 transition-colors duration-300">
        <h1 class=" text-4xl font-bold px-6 cursor-pointer">Felix</h1>
        <div class="flex items-center   text-lg font-semibold  text-center h-full">
          <a :class="{ 'text-blue-500': homeTargetIsVisible }" class="hover:text-blue-500 px-6" href="#home">Home</a>
          <a :class="{ 'text-blue-500': aboutTargetIsVisible }" class="hover:text-blue-500 px-6" href="#about">Ich</a>
          <a :class="{ 'text-blue-500': contactTargetIsVisible }" class="hover:text-blue-500 px-6"
            href="#contact">Kontakt</a>
        </div>
      </div>
    </header>
    <main>
      <div class="mt-36 mb-12">
        <div id="home"></div>
        <section class="py-20 px-12 " ref="homeTarget">
          <div class="w-full mb-8">
            <div class=" h-full flex flex-row gap-24">
              <div class="flex flex-col w-1/2">
                <span class="text-sm text-blue-500">My Passion</span>
                <h2 class="text-6xl font-semibold mb-4">Ich bin Technik interesiert</h2>
                <span class="text-lg max-w-prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto
                  consequuntur
                  ullam numquam
                  ipsum. Eos, inventore tempore odio quibusdam fugit explicabo. Laudantium, non enim temporibus
                  recusandae
                  eius sequi quibusdam dolorum.</span>

              </div>
              <div class="flex flex-col gap-16 w-1/2">
                <div class="flex flex-col gap-8">
                  <span class="text-7xl font-extrabold">22 Jahre</span>
                  <span class="text-2xl">Alter</span>
                </div>
                <div class="flex flex-col gap-8">
                  <span class="text-7xl font-extrabold">Student</span>
                  <span class="text-2xl">Berufsstatus</span>
                </div>
              </div>

            </div>
          </div>
          <a href="#about" class="bg-gray-950 py-4 px-16 rounded-2xl text-lg font-medium  text-white">Das bin ich</a>
        </section>
        <div class="h-8" id="about"></div>
        <section class="h-full pt-20 px-12" ref="aboutTarget">
          <div class="w-full h-fit flex flex-row gap-12 mb-8">
            <div class="flex flex-col w-1/3">

              <h2 class="text-6xl font-semibold mb-4 w-72 ">Hi, ich bin Felix</h2>
              <img src="./assets/vue.svg" alt="" class="w-80 rounded-3xl">

            </div>
            <div class="w-2/3">
              <span class="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore
                tenetur iure ad voluptatum
                officia cumque incidunt, praesentium architecto autem sapiente omnis mollitia eius, itaque quidem
                molestias, repellat sunt? Sunt?</span>
            </div>

          </div>
          <div class="w-full flex justify-center items-center">

            <a href="#contact" class="bg-gray-950 py-4 px-16 rounded-2xl text-lg font-medium  text-white">Kontakt</a>
          </div>
        </section>
        <div class="h-8" id="contact"></div>
        <section class="h-full pt-20 px-12" ref="contactTarget">
          <div class="w-full bg-gray-100 rounded-xl p-16">
            <form action="" class="mb-16">
              <h2 class="text-6xl font-bold mb-4">Kontaktiere mich</h2>
              <p class="text-lg">Sende mir eine Nachricht und ich melde mich bei dir.</p>

              <div class="flex flex-col gap-4 mt-8">
                <input type="text" placeholder="Name*"
                  class="w-full px-6 rounded-3xl text-lg h-16 focus-visible:shadow-xl focus-visible:outline-none">
                <input type="email" placeholder="Email*"
                  class="w-full px-6 rounded-3xl text-lg h-16 focus-visible:shadow-xl focus-visible:outline-none">
                <textarea type="text" placeholder="Anfrage*"
                  class="w-full p-6 rounded-3xl text-lg h-32 focus-visible:shadow-xl focus-visible:outline-none"></textarea>

              </div>
              <button class="bg-gray-950 py-4 px-16 rounded-2xl text-lg font-medium  text-white">Senden</button>
            </form>
            <div class="flex flex-row gap-4 items-center">
              <span class="text-3xl font-bold">felixk.dev@proton.me</span>
              <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="copyToClipboard">
                Kopieren
              </button>
            </div>
          </div>
        </section>


      </div>

    </main>

    <footer class="bg-gray-950 text-white">
      <div class="flex justify-center items-center py-16">
        <p>Felix</p>
      </div>

    </footer>
  </div>


</template>
