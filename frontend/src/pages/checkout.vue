<template>
    <div
        class="h-screen bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="w-11/12 mx-auto my-12">
            <div>
                <div v-if="store.checkCartItemLength" class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    
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
                <div v-else>
                    <div class="flex justify-center mt-6">
                        <div class="text-primary-900 flex flex-col items-center gap-8">
                            <img src="" alt="" class="w-24">
                            <h3 class="text-3xl font-bold">Start Shop your first product now</h3>
                            <p class="text-gray-500">It easy to do that , we will help you</p>
                            <router-link to="/store"><button class="text-white bg-primary-500 font-semibold hover:scale-110 rounded-full text-sm px-5 py-3 mr-2 mb-2 ">Create a Playlist</button></router-link>
                        </div>
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

const back = () => {
    router.back()
}

onMounted(() => {
    store.getAllCart();
})

</script>