<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="w-11/12 mx-auto">
            <MyHeader />
            <div class="relative w-11/12 mx-auto mt-12 p-4 shadow-md bg-white rounded-md  overflow-x-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
                <div class=" text-primary-900 mt-8 py-4 px-4">
                    <h3 class="font-semibold">Table Froma / User Data</h3>
                </div>
                <table class="shadow-md bg-white rounded-md w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-400 border-b border-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Creation date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Sending date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in store.allOrders" class="h-14 bg-transparent hover:bg-gray-200/20">
                            
                            <td class="px-6 font-semibold">
                                {{index + 1}}
                            </td>
                            <td class="px-6 font-semibold">
                                {{ order.created_at.slice(0, 10) }}
                            </td>
                            <td class="px-6 font-semibold">
                                {{ order.sendingDate || 'xxxx-xx-xx' }}
                            </td>
                            <td class="px-6 font-semibold">
                                {{ order.order_product.length }} Product
                            </td>
                            <td class="px-6 font-semibold">
                                {{ order.total_price_order }}DH
                            </td>
                            <td class="px-6 font-semibold" >
                                <span class="text-white rounded-full p-2" :class="{'bg-orange-400' : order.status == 'pending', 'bg-green-400' : order.status == 'accepted', 'bg-red-500' : order.status == 'refused' }">{{ order.status }}</span>
                            </td>
                            <td class="px-6" v-if="order.status === 'pending'">
                                <button @click="store.acceptOrder(order.id)" class="font-semibold mr-6 text-green-500 text-center">
                                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                                    Accept
                                </button>
                                <button @click="store.refuseOrder(order.id)" class="font-semibold text-red-500 text-center">
                                    <i class="fa-solid fa-xmark"></i>
                                    Refuse
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import Asidebar from '@/components/dashboard/asidebar.vue';
import MyHeader from '@/components/dashboard/header.vue';

import { ref, onBeforeMount } from 'vue';

import { adminProduct } from '@/store/product';

const store = adminProduct();

onBeforeMount(async () => {
    await store.showAllOrders()
});
</script>