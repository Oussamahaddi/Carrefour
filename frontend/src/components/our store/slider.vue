<template>
    <div class="mt-8 flex w-full relative shadow-[0_0_10px] shadow-black/20">
        <div @click="previousLide" title="previous slide" class="bg-black/20 cursor-pointer w-12 aspect-square absolute top-1/2 left-4 -translate-y-1/2 rounded-full"></div>
        <img :src="currentSlide.image" :alt="currentSlide.title" class="w-full">
        <div @click="nextSlide" title="next slide" class="bg-black/20 cursor-pointer w-12 aspect-square absolute top-1/2 right-4 -translate-y-1/2 rounded-full"></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const sliders = [
    {title : 'slider 1' , image : 'src/assets/image/slider/slider1.jpg'},
    {title : 'slider 2' , image : 'src/assets/image/slider/slider2.jpg'},
    {title : 'slider 3' , image : 'src/assets/image/slider/slider3.jpg'},
];

const currentSlideIndex = ref(0);
const currentSlide = computed(() => sliders[currentSlideIndex.value]);

onMounted(() => {
    setInterval(() => {
        nextSlide();
    }, 4000);
})

const nextSlide = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % sliders.length;
}
const previousLide = () => {
    currentSlideIndex.value = (currentSlideIndex.value - 1 + sliders.length) % sliders.length;
}




</script>