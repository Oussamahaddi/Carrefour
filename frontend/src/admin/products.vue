<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-hidden scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="relative overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
            <MyHeader class="w-11/12 mx-auto" />
            <div class="relative w-11/12 mx-auto mt-12 p-4 shadow-md bg-white rounded-md  overflow-x-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
                <div class=" text-primary-900 mt-8 py-4 px-4">
                    <h3 class="font-semibold">Table Froma / User Data</h3>
                </div>
                <table class="shadow-md bg-white rounded-md w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-400 border-b border-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reference
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Selling Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Offre Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Final Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Qunatite
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @dblclick="store.showEditForm(product)" v-for="product in store.allProduct" class="music bg-transparent hover:bg-gray-200/20 cursor-pointer">
                            <td class="flex gap-4 items-center  font-bold pl-2">
                                <img :src="product.product_image" alt="" class="musicImg w-14 aspect-square object-contain">
                                <p>{{ product.product_name }} </p>
                            </td>
                            <td class="album px-6 font-semibold">
                                {{ product.reference }}
                            </td>
                            <td class="date px-6 font-semibold">
                                {{ product.prixAchat }}
                            </td>
                            <td class="date px-6 font-semibold">
                                {{ product.prixOffre }}
                            </td>
                            <td class="date px-6 font-semibold">
                                {{ product.prixFinal }}
                            </td><td class="date px-6 font-semibold">
                                {{ product.product_quantite }}
                            </td><td class="date px-6 font-semibold">
                                {{ product.category.categorie_name }}
                            </td>
                            <td class="duration px-6 flex">
                                <button @click="store.deleteProduct(product.id)" class="font-semibold text-red-500 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    Delet
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div @click="store.showForm()" class="absolute bottom-4 right-4 z-20 cursor-pointer text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                </svg>
            </div>

            <addForm :class="store.addProductFormVisibility ? 'block' : 'hidden'" >
                <div @click="store.hideForm()" class="fixed top-0 left-0 w-full h-full bg-black/40"></div>
            </addForm>
            
            <editForm :class="store.editProductFormVisibility ? 'block' : 'hidden'" >
                <div @click="store.hideForm()" class="fixed top-0 left-0 w-full h-full bg-black/40"></div>
            </editForm>

        </div>
    </div>
</template>

<script setup>

import Asidebar from '@/components/dashboard/asidebar.vue';
import MyHeader from '@/components/dashboard/header.vue';
import addForm from '@/components/dashboard/product/addForm.vue';
import editForm from '@/components/dashboard/product/editForm.vue';

import { ref, onBeforeMount } from 'vue';

import { adminProduct } from '@/store/product';

const store = adminProduct();

onBeforeMount(async ()=>{
    await store.showAllProduct()
});

</script>