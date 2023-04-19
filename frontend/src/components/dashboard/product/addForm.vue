<template>
    <div class="">
        <slot></slot>
        <div class="w-5/6 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            
            <form action="" @submit.prevent="store.addProduct()" class="">
                <div class="h-80 grid md:grid-cols-1 lg:grid-cols-2 gric-rows-[1fr_auto] gap-8 mx-auto overflow-hidden overflow-y-auto scrollbar-hide">

                    <div>
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Product Name
                                </label>
                                <input v-model="store.data.product_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="product name">
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Reference
                                </label>
                                <input v-model="store.data.reference" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Reference">
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Libelle
                                </label>
                                <input v-model="store.data.libelle" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Libelle">
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Code Bare
                                </label>
                                <input v-model="store.data.codeBare" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="code bare">
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Description
                                </label>
                                <textarea v-model="store.data.description" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" placeholder="Description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="-mx-3 md:flex mb-2 ">
                            <div class="md:w-1/2 px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    Selling Price
                                </label>
                                <input v-model="store.data.prixAchat" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" placeholder="Selling Price">
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                    Offre Price
                                </label>
                                <input v-model="store.data.prixOffre" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"  type="text" placeholder="Offre Price">
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                    Final Price
                                </label>
                                <input v-model="store.data.prixFinal" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"  type="text" placeholder="Final Price">
                            </div>
                        </div>
                        <div class="mb-2 w-full mx-auto">
                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                Select Category
                            </label>
                            <select v-model="store.data.category_id" class="block w-full appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
                                <optgroup label="Select Category">
                                    <option v-for="category in categories" :value="category.id">{{ category.categorie_name }}</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="-mx-3 md:flex ">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                                    Product Image
                                </label>
                                <input @change="store.handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" type="file">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <button class="text-white bg-blue-700 hover:bg-blue-800 mt-6 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Add Product</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { adminProduct } from '@/store/product';
import { ref , onMounted } from 'vue';

const categories = ref();

const store = adminProduct();

onMounted(() => {
    store.allCategory()
});

</script>