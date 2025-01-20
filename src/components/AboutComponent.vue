<script setup lang="ts"></script>

<template>
  <section class="mb-32 mt-32" ref="aboutTarget">
    <div class="flex w-full flex-col md:flex-row md:gap-24 gap-12">
      <div class="flex md:w-1/3 flex-col w-full">
        <h2 class="mb-8  font-lato md:text-6xl text-4xl  font-semibold">
          Hi, ich bin Felix
        </h2>
        <img src="../assets/AF7U4467b.jpg" alt=""
          class="md:mb-16 aspect-square w-80 rounded-3xl object-cover object-center  " />
        <div class="hidden md:block">
          <a href="#contact" class="rounded-2xl bg-gray-950 px-16 py-4 text-lg font-medium text-white">Kontakt</a>
        </div>
      </div>
      <div class="md:w-2/3 w-full flex flex-col md:gap-16 gap-8 md:mt-8">
        <span class="font-rubik md:text-2xl text-xl  leading-8">Ich bin ein vielseitig interessierter Student mit einer
          großen
          Begeisterung für Technik, Sport und Musik. Schon früh hat mich die Faszination für Technologie gepackt – ich
          liebe es, innovative Lösungen zu entwickeln und neue Projekte anzupacken. Mein Angewandte
          Informatik Studium ist
          die perfekte Grundlage, um meine Leidenschaft für technologische Herausforderungen mit kreativem Denken zu
          verbinden.</span>

        <div class="flex flex-col md:flex-row gap-8">
          <span class="font-rubik md:text-lg text-base">
            Neben meinem Studium spielt Sport eine zentrale Rolle in meinem Leben. Vor allem Tennis und Fußball
            begeistern
            mich, denn sie vereinen Wettbewerb, Teamgeist und körperliche Fitness auf einzigartige Weise. Die Energie
            und
            der Fokus, die ich auf dem Spielfeld erlebe, motivieren mich auch in anderen Bereichen meines Lebens, mein
            Bestes zu geben.
          </span>

          <span class="font-rubik md:text-lg text-base"> Ein weiteres Herzstück meines Lebens ist die Musik. Ich liebe
            den warmen,
            unvergleichlichen Klang von
            Schallplatten, die für mich mehr als nur Musik transportieren – sie erzählen Geschichten. Egal ob Klassiker
            oder neue Künstler, ich finde Inspiration und Ruhe in diesen Klängen, die mich immer wieder begleiten.
          </span>
        </div>



      </div>
    </div>
  </section>
</template>
