<template>
    <div class="">
        <slot></slot>
        <div class="max-sm:w-11/12 w-4/6 lg:w-3/6 absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            
            <form action="" class="">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Category Name
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="product name">
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="-mx-3 md:flex ">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Product Image
                        </label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" type="file">
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


</script>