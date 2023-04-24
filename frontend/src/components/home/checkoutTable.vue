<template>
    <div>
        <table class="shadow-md bg-white w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-400 border-b border-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Quantite
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in cartItems" class="bg-transparent">
                    <td class="flex gap-4 items-center font-semibold">
                        <img :src="cart.product_image" alt="" class="w-14 ml-2 aspect-square object-contain">
                        <p class="hidden lg:block">{{ cart.product_name }} </p>
                    </td>
                    <td class="px-6 font-semibold">
                        <div class="flex items-center">
                            <button @click="minus(cart.product_qte)"
                                class="bg-white shadow-[0_2px_4px] shadow-black/30 rounded-xl px-2 text-xl font-bold">-</button>
                            <input type="number" v-model="cart.product_qte"
                                class="bg-transparent text-center w-14 border-none focus:ring-0 appearance-none"
                                style="-moz-appearance: textfield; -webkit-appearance: textfield;">
                            <button @click="plus(cart.product_qte)"
                                class="bg-black shadow-[0_2px_4px] shadow-black/30 text-white px-2  text-xl font-bold rounded-xl">+</button>
                        </div>
                    </td>
                    <td class="date px-6 font-semibold">
                        {{ cart.prixAchat * cart.product_qte }}DH
                    </td>
                    <td class="date px-6 font-semibold">
                        <button @click="store.deleteItemCart(cart.id)"
                            class="font-semibold text-red-500 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

    const props = defineProps({
        cartItems : {
            type : Array,
            required : true,
        }
    });
</script>