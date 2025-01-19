<script setup lang="ts">
import {
    useIntersectionObserver,
    useWindowScroll,
    type MaybeElement,
} from "@vueuse/core";
import { ref, type Ref } from "vue";

const { homeTarget, aboutTarget, contactTarget } = defineProps<{
    homeTarget: Ref<MaybeElement>;
    aboutTarget: Ref<MaybeElement>;
    contactTarget: Ref<MaybeElement>;
}>();


const homeTargetIsVisible = ref(false);
const aboutTargetIsVisible = ref(false);
const contactTargetIsVisible = ref(false);

function setupIntersectionObserver(
    target: Ref<MaybeElement, MaybeElement>,
    visibilityFlag: Ref<boolean, boolean>,
) {
    useIntersectionObserver(
        target,
        ([entry]) => {
            visibilityFlag.value = entry?.isIntersecting || false;
        },
        { threshold: 0.5 },
    );
}

const { y } = useWindowScroll();

setupIntersectionObserver(homeTarget, homeTargetIsVisible);
setupIntersectionObserver(aboutTarget, aboutTargetIsVisible);
setupIntersectionObserver(contactTarget, contactTargetIsVisible);
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
                    <a :class="{ 'text-blue-500': homeTargetIsVisible }" class="px-6 hover:text-blue-500"
                        href="#home">Home</a>
                </li>
                <li>
                    <a :class="{ 'text-blue-500': aboutTargetIsVisible }" class="px-6 hover:text-blue-500"
                        href="#about">Ich</a>
                </li>
                <li>
                    <a :class="{ 'text-blue-500': contactTargetIsVisible }" class="px-6 hover:text-blue-500"
                        href="#contact">Kontakt</a>
                </li>
            </ul>
        </nav>
    </div>

</template>
