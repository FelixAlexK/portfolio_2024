<script setup lang="ts"></script>

<template>
  <section class="" ref="aboutTarget">
    <div class="flex w-full flex-col gap-12 md:flex-row md:gap-24">
      <div class="flex w-full flex-col md:w-1/3">
        <h2 class="mb-8 font-lato text-4xl font-semibold md:text-6xl">
          Hi, ich bin Felix
        </h2>
        <img
          src="../assets/AF7U4467b.jpg"
          alt=""
          class="aspect-square w-80 rounded-3xl object-cover object-center md:mb-16"
        />
        <div class="hidden md:block">
          <a
            href="#contact"
            class="rounded-2xl bg-gray-950 px-16 py-4 text-lg font-medium text-white"
            >Kontakt</a
          >
        </div>
      </div>
      <div class="flex w-full flex-col gap-8 md:mt-8 md:w-2/3 md:gap-16">
        <span class="font-rubik text-xl leading-8 md:text-2xl"
          >Ich bin ein vielseitig interessierter Student mit einer großen
          Begeisterung für Technik, Sport und Musik. Schon früh hat mich die
          Faszination für Technologie gepackt – ich liebe es, innovative
          Lösungen zu entwickeln und neue Projekte anzupacken. Mein Angewandte
          Informatik Studium ist die perfekte Grundlage, um meine Leidenschaft
          für technologische Herausforderungen mit kreativem Denken zu
          verbinden.</span
        >

        <div class="flex flex-col gap-8 md:flex-row">
          <span class="font-rubik text-base md:text-lg">
            Neben meinem Studium spielt Sport eine zentrale Rolle in meinem
            Leben. Vor allem Tennis und Fußball begeistern mich, denn sie
            vereinen Wettbewerb, Teamgeist und körperliche Fitness auf
            einzigartige Weise. Die Energie und der Fokus, die ich auf dem
            Spielfeld erlebe, motivieren mich auch in anderen Bereichen meines
            Lebens, mein Bestes zu geben.
          </span>

          <span class="font-rubik text-base md:text-lg">
            Ein weiteres Herzstück meines Lebens ist die Musik. Ich liebe den
            warmen, unvergleichlichen Klang von Schallplatten, die für mich mehr
            als nur Musik transportieren – sie erzählen Geschichten. Egal ob
            Klassiker oder neue Künstler, ich finde Inspiration und Ruhe in
            diesen Klängen, die mich immer wieder begleiten.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
