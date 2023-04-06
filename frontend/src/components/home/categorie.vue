<template>
    <div class="flex flex-col gap-8 my-8">
        <div class="w-5/6 mx-auto">
            <span class="font-semibold text-sm text-secondary-500">OUR CATEGORIES</span>
            <h2 class="font-bold text-2xl md:text-3xl">Category That Always <br> Make You Fall In Love</h2>
        </div>
        <div class="relative ">
            <div class=" gap-4 absolute right-6 -top-1/2 hidden md:flex">
                <div class="bg-gray-400 rounded-full p-2 text-white cursor-pointer hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="bg-secondary-500 rounded-full p-2 text-white cursor-pointer hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <router-link to="" class="flex gap-4 overflow-x-scroll py-4 scrollbar-thumb-primary-700 scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded-md">
                <img v-for="i in 18" :src="`src/assets/image/categorie/circle/IMAGE-${i}.png`" alt="" class="w-20 rounded-full border-2 hover:border-primary-700 hover:scale-110 transition-all duration-500">
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>
