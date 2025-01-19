<script setup lang="ts"></script>

<template>
  <section class="my-64 h-1/3" ref="homeTarget">
    <div class="w-full">
      <div class="flex h-full flex-row gap-24">
        <div class="flex w-1/2 flex-col">
          <span class="mb-1 font-rubik text-sm text-blue-500">My Passion</span>
          <h2 class="mb-8 font-lato text-6xl font-semibold">
            Ich bin Technik interesiert
          </h2>
          <span class="mb-16 max-w-prose font-rubik text-lg"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            iusto consequuntur ullam numquam ipsum. Eos, inventore tempore odio
            quibusdam fugit explicabo. Laudantium, non enim temporibus
            recusandae eius sequi quibusdam dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet fugiat maiores libero
            similique autem sunt vero blanditiis cupiditate, ea voluptatum
            asperiores fugit eos debitis recusandae, quae provident aspernatur
            corrupti ipsam!</span
          >
        </div>
        <div class="flex w-1/2 flex-col justify-between">
          <div class="flex flex-col">
            <span class="mb-1 font-lato text-7xl font-extrabold text-blue-500"
              >22 Jahre</span
            >
            <span class="font-lato text-2xl">Alter</span>
          </div>
          <div class="flex flex-col">
            <span class="mb-1 font-lato text-7xl font-extrabold text-blue-500"
              >Student</span
            >
            <span class="font-lato text-2xl">Berufsstatus</span>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <a
        href="#about"
        class="rounded-2xl bg-gray-950 px-16 py-4 font-rubik text-lg font-medium text-white"
        >Das bin ich</a
      >
    </div>
  </section>
</template>
