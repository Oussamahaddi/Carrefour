<template>
    <div class="">
        <div class="flex justify-between items-center bg-primary-500/10 px-6 py-2 border-b-2 border-black/20 shadow-[0_0_5px] shadow-black/20 mb-6">
            <span class="font-bold text-xl text-primary-800">21 Products</span>
            <div class="flex items-center gap-2">
                <span class="font-semibold">Filter</span>
                <div class="bg-white rounded-full p-2 hover:shadow-[0_0_5px] hover:shadow-black/30 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <router-link v-for="product in store.filterProductByCategory" :to="`/productDetail/${product.id}`">
                <SingleProduct 
                    :promo="false" 
                    :productImage="product.product_image" 
                    :productName="product.product_name" 
                    :productOffrePrice="product.prixOffre + 'DH' || null" 
                    :productPrice="product.prixAchat + 'DH' || null" 
                />
            </router-link>
            <div v-if="store.productPending" v-for="i in 4" class="animate-pulse h-80 bg-primary-200 relative p-2 flex flex-col items-center rounded-xl ">
                <div class="h-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import offre from '@/components/home/offre.vue';
import SingleProduct from '../home/singleProduct.vue';
import { outStore } from '@/store/outStore';
import { ref , onMounted } from 'vue';

const store = outStore();

onMounted(() => {
    store.showAllProduct()
})

</script>