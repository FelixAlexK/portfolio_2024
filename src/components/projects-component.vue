<script setup lang="ts">
import { Github, Globe } from "lucide-vue-next";
</script>

<template>
  <section class="mt-100">
    <h2 class="font-bold text-lg tracking-widest font-rubik uppercase mb-40">
      Projects
    </h2>
    <div class="flex flex-col w-full">
      <div class="flex items-start gap-16">
        <div class="rounded-lg w-full border dark:border-border shadow dark:border-t-highlight bg-gradient-to-b dark:from-bg dark:to-bg-dark p-20 flex flex-col gap-16">
          <a href="">
            <img class="rounded-lg object-cover w-full" src="https://dummyimage.com/600x400/ffffff/0000" alt="">
          </a>
          <div class="flex flex-col">
            <h3 class="font-semibold text-lg tracking-widest font-rubik uppercase mb-20">
              abc
            </h3>
            <p class="dark:text-text-muted ">
              <span class="dark:text-text uppercase">Lorem</span>
              ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil nulla non ut, nostrum inventore, corporis vel enim maxime molestias ipsa perspiciatis sit nobis quasi corrupti veritatis. Architecto, maxime maiores.s
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-8 mt-28 w-full">
              <div class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full bg-[#3178c6]/20 ">
                <i class="devicon-typescript-plain colored" title="TypeScript"></i>
                <p class="text-xs whitespace-nowrap">
                  TypeScript
                </p>
              </div>
              <div class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full bg-[#3178c6]/20 ">
                <i class="devicon-typescript-plain colored" title="TypeScript"></i>
                <p class="text-xs whitespace-nowrap">
                  TypeScript
                </p>
              </div>
              <div class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full bg-[#3178c6]/20 ">
                <i class="devicon-typescript-plain colored" title="TypeScript"></i>
                <p class="text-xs whitespace-nowrap">
                  TypeScript
                </p>
              </div>
              <div class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full bg-[#3178c6]/20 ">
                <i class="devicon-typescript-plain colored" title="TypeScript"></i>
                <p class="text-xs whitespace-nowrap">
                  TypeScript
                </p>
              </div>
              <div class="flex items-center justify-center gap-12 w-full px-16 h-28 rounded-full bg-[#3178c6]/20 ">
                <i class="devicon-typescript-plain colored" title="TypeScript"></i>
                <p class="text-xs whitespace-nowrap">
                  TypeScript
                </p>
              </div>
            </div>
            <div class="flex items-center gap-8 w-full mt-28 max-md:flex-col">
              <a href="" class="w-full dark:bg-bg-light uppercase text-xs transition-all rounded-full font-bold dark:text-text flex items-center justify-center px-8 py-12 gap-8 ">
                <Globe class="size-20" />
                Live Demo
              </a>
              <a href="" class="w-full dark:bg-bg-light uppercase text-xs transition-all rounded-full font-bold dark:text-text flex items-center justify-center px-8 py-12 gap-8 ">
                <Github class="size-20" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
