
<template>

    <div :class="store.cartVisibility ? 'block' : 'hidden'">
        <div class="relative z-50 ">

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">

                    <div @click="store.closeCart()" class="w-full bg-black/40 h-full"></div>

                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                        <div class="pointer-events-auto w-screen max-w-md">

                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl scrollbar-hide">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 h-screen scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                                            Shopping cart
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="store.closeCart()" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <!-- close cart -->
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                <!-- items  -->
                                                <li v-for="item in store.cartItems" class="flex py-6">
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img :src="item.product_image" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col justify-around">
                                                        <div>
                                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                                <h3 class="font-semibold">
                                                                    {{ item.product_name }}
                                                                </h3>
                                                                <p class="ml-4 font-semibold">{{ item.prixAchat * item.product_qte }}DH</p>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-end justify-between text-sm">
                                                            <p class="text-gray-500">{{ item.product_qte }}</p>

                                                            <div class="flex">
                                                                <button @click="store.deleteItemCart(item.id)" type="button" class="font-semibold text-red-500 hover:text-indigo-500">
                                                                    Remove {{ item.id }}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <!-- More products... -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>{{ store.totalPrice() }}DH</p>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at checkout.
                                    </p>
                                    <div class="mt-6">
                                        <router-link to="/checkout" @click="store.closeCart()" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from "vue";
import { userCounterStore } from "@/store/home";

const store = userCounterStore();

onMounted(() => {
    store.getAllCart();
})

</script>
