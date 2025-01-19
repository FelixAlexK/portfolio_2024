<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);



</script>
<template>
    <div class="relative flex items-center transition-transform duration-300" @mouseenter="show = true"
        @mouseleave="show = false">
        <!-- Trigger element -->
        <slot name="trigger"></slot>

        <!-- Tooltip -->
        <div v-if="show"
            class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg z-10 ">
            <slot></slot>
        </div>
    </div>
</template>
