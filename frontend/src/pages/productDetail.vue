<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="w-5/6 mx-auto my-24 shadow-[0_0px_4px] shadow-black/30 bg-primary-400/10 rounded-xl py-8 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6 h-fit">
            <div class="w-5/6 h-full grid grid-cols-1 grid-rows-[1fr_auto] gap-4">
                <div class="col flex justify-center shadow-[0_0_4px] shadow-black/20 rounded-xl items-center border border-gray-300 product bg-white overflow-hidden relative after:content-['_'] after:absolute after:bg-secondary-500 after:w-1/3 after:h-1/3 after:left-[-5%] after:top-1/2 after:-translate-y-[-50%] after:rotate-45 after:rounded-lg after:opacity-20 before:absolute before:bg-secondary-500 before:w-2/4 before:h-2/4 before:rounded-lg before:right-[-10%] before:top-1/3 before:translate-y-[-50%] before:rotate-45 before:opacity-20 cursor-pointer">
                    <img :src="store.singleProduct.product_image" alt="big img" class="w-5/6 relative z-10">
                </div>
                <div class="flex justify-between gap-8">
                    <div class="p-2 bg-white shadow-[0_0_4px] shadow-black/10 border border-gray-300 cursor-pointer rounded-xl"><img :src="store.singleProduct.product_image" alt="img1" class="w-full"></div>
                    <div class="p-2 bg-white shadow-[0_0_4px] shadow-black/10 border border-gray-300 cursor-pointer rounded-xl"><img :src="store.singleProduct.product_image" alt="img2" class="w-full"></div>
                    <div class="p-2 bg-white shadow-[0_0_4px] shadow-black/10 border border-gray-300 cursor-pointer rounded-xl"><img :src="store.singleProduct.product_image" alt="img3" class="w-full"></div>
                </div>
            </div>
            <div class="w-5/6 h-full flex flex-col gap-8 justify-center">
                <div>
                    <h1 class="text-2xl font-bold">{{ store.singleProduct.product_name }}</h1>
                </div>
                <div class="text-red-500 text-lg font-semibold"><span class="mr-4 text-md text-gray-500 line-through">{{ store.singleProduct.prixAchat }}DH</span><span class="text-xl">{{ store.singleProduct.prixOffre }}DH</span></div>
                <div>
                    <p class="text-gray-500 text-sm">
                        {{ store.singleProduct.description }}
                    </p>
                </div>
                <div>
                    <div class="flex items-center">
                        <button @click="minus" :class="counter == 1 ? 'bg-gray-200 cursor-not-allowed' : ''" class="bg-white shadow-[0_2px_4px] shadow-black/30 rounded-xl px-3 flex items-center justify-center text-xl py-1 font-bold">-</button>
                        <input type="number" v-model="counter" name="" id="" class="bg-transparent text-center w-14 border-none focus:ring-0 appearance-none" style="-moz-appearance: textfield; -webkit-appearance: textfield;">
                        <button @click="plus" :class="counter == store.singleProduct.product_quantite ? 'bg-gray-600 cursor-not-allowed' : '' " class="bg-black shadow-[0_2px_4px] shadow-black/30 text-white px-3 flex items-center justify-center text-xl py-1 font-bold rounded-xl">+</button>
                    </div>
                </div>

                <div class="flex gap-4 items-center">
                    <div>
                        <button @click="store.addToCart" type="submit" class="bg-white rounded-xl text-black font-semibold shadow-[0_2px_4px] shadow-black/30 border-none py-2 px-4 flex gap-4 items-center transition-all duration-500 hover:bg-gray-100">ADD TO CART</button>
                    </div>
                    <div>
                        <button type="button" class="bg-blue-700 py-2 px-4 rounded-xl font-semibold shadow-[0_2px_4px] shadow-black/30 flex gap-4 items-center border-none transition-all duration-500 text-white hover:bg-blue-800">Buy Now</button>
                    </div>
                </div>

                <div class="text-sm grid gap-2">
                    <div> <strong>Categorie :</strong> {{ store.singleProduct.category }}</div>
                    <div> <strong>Available :</strong> {{ store.singleProduct.product_quantite }} Product in stock </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script setup>
import axios from 'axios';
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue'

import { outStore } from '@/store/outStore';

const store = outStore();

const counter = ref(1);

const id = useRoute().params.id;

const plus = () => {
    counter.value >= store.singleProduct.product_quantite ? store.singleProduct.product_quantite : counter.value++ ;
};
const minus = () => {
    counter.value--
    counter.value < 1 ? counter.value = 1 : counter.value;
};


onMounted(() => {
    store.getProductId(id);
});

</script>