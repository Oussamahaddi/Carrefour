
<template>
    <div class="my-20 w-5/6 mx-auto">
        <div class="flex gap-4 items-center mb-8">
            <h2 class="font-bold text-2xl md:text-3xl">Our Offre For Now</h2>
            <div class="flex">
                <svg v-for="i in 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-500">
                    <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            <singleProduct v-for="product in obj.products" :promo="true" :product-name="product.name" :product-image="product.img" :product-price="product.sellingPrice" :product-offre-price="product.offrePrice" class="" />
        </div>
    </div>
</template>

<script setup>

import singleProduct from './singleProduct.vue';
import { ref, reactive } from 'vue';

const obj = reactive({
    products : [
        { name: "Purée de piment Carrefour", img : "src/assets/image/product/p1.png", sellingPrice : "18.99DH", offrePrice : "15.66DH" },
        { name: "Purée de kinmo Carrefour", img : "src/assets/image/product/p2.png", sellingPrice : "20.99DH", offrePrice : "12.50DH" },
        { name: "Purée de Kaido Carrefour", img : "src/assets/image/product/p3.png", sellingPrice : "55.99DH", offrePrice : "30.80DH" }
    ],
});

</script>