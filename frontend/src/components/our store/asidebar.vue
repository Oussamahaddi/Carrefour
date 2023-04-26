
<template>
    <div class="w-fit md:w-60 bg-white shadow-[0_0_8px] shadow-black/30 h-full">
        <div class="bg-primary-700 p-4 text-white font-semibold text-xl flex"><i class="fa-solid fa-layer-group"></i><span class="hidden md:block">Categorie</span></div>
        <div class="bg-gray-300 px-4 py-2 relative after:content-[''] after:absolute after:bottom-1 after:translate-y-full after:left-1/2 after:-translate-x-1/2 after:w-10 after:aspect-square after:bg-transparent after:border-t-[20px] after:border-l-[20px] after:border-b-[20px] after:border-r-[20px] after:border-transparent after:border-t-gray-300">Marche</div>
        <div class="mt-4">
            <ul class="">
                <li v-for="category in store.categories" @click="store.getProductByCategory(category.id)" class="p-2 cursor-pointer border-b border-black/20 hover:bg-gray-200 flex items-center gap-2">
                    <img :src="category.categorie_image" alt="" class="w-12 aspect-square"><span class=" hidden md:block"> {{ category.categorie_name }} </span>
                </li>
                <li v-for="i in 8" v-if="store.catPending" class="animate-pulse h-20 p-2 cursor-pointer border-b bg-primary-200">
                    <div class="h-full"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import { outStore } from '@/store/outStore';

const store = outStore();


onMounted(() => {
    store.allCategories();
});

</script>