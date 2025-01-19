<script setup lang="ts">
import {

    useWindowScroll,
    
} from "@vueuse/core";


const { homeTarget, aboutTarget, contactTarget } = defineProps<{
    homeTarget: boolean;
    aboutTarget: boolean;
    contactTarget: boolean;
}>();

const { y } = useWindowScroll();


</script>

<template>

    <div :class="{
        'bg-transparent text-gray-950': y <= 0,
        'bg-gray-950 text-white': y > 5,
    }"
        class="flex h-24 w-full items-center justify-between border-b-2 border-blue-500 px-24 transition-colors duration-300">
        <h1 class="cursor-pointer px-6 font-lato text-4xl font-bold">
            <a href="#">Felix</a>
        </h1>
        <nav>
            <ul class="flex items-center gap-12 font-rubik text-lg font-semibold">
                <li>
                    <a :class="{ 'text-blue-500': homeTarget }" class="px-6 hover:text-blue-500" href="#">Home</a>
                </li>
                <li>
                    <a :class="{ 'text-blue-500': aboutTarget }" class="px-6 hover:text-blue-500" href="#about">Ich</a>
                </li>
                <li>
                    <a :class="{ 'text-blue-500': contactTarget }" class="px-6 hover:text-blue-500"
                        href="#contact">Kontakt</a>
                </li>
            </ul>
        </nav>
    </div>

</template>
