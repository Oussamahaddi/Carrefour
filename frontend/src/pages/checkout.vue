<template>
    <div
        class="h-screen bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="w-11/12 mx-auto my-12">
            <div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                    
                    <div class="">
                        <button @click="back()" class="mb-12 text-primary-800">
                            <i class="fa-solid fa-chevron-left text-white bg-primary-700 rounded-full p-2 w-8 aspect-square"></i>
                            <span class="font-semibold text-xl ml-2">Back</span>
                        </button>
                        <CartTable :cart-items="store.cartItems" />
                        <div class="font-semibold text-right my-4">
                            Total : {{ store.totalPrice() }}DH
                        </div>
                    </div>
                    <div class="w-5/6 mx-auto">
                        <CartPayment />
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script setup>
import MyHeader from '@/components/header.vue'
import MyFooter from '@/components/footer.vue'
import CartTable from '@/components/home/checkoutTable.vue'
import CartPayment from '@/components/home/checkoutPayement.vue'
import { onMounted, ref } from "vue";
import { userCounterStore } from "@/store/home";
import { outStore } from "@/store/outStore";
import router from '@/router';

const store = userCounterStore();
const counter = ref();

const plus = () => {
    // counter.value >= outSotre.singleProduct.product_quantite ? outSotre.singleProduct.product_quantite : counter.value++;
};
const minus = (counter) => {
    counter--
    counter < 1 ? counter = 1 : counter;
};

const back = () => {
    router.back()
}

onMounted(() => {
    store.getAllCart();
})

</script>