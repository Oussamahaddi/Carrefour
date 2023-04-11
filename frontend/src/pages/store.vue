<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <!-- slider -->
        <Slider />
        <div class="bg-primary-700/10 flex items-center gap-4 mt-24 border-t-2 border-black/20">
            <div class="bg-gray-400 rounded-full p-2 text-white cursor-pointer hover:bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                </svg>
            </div>
            <router-link to="" class="flex gap-4 overflow-x-scroll py-4 scrollbar-hide">
                <img v-for="i in 18" :src="`src/assets/image/categorie/circle/IMAGE-${i}.png`" alt="" class="w-16 rounded-full border-2 hover:border-primary-700 hover:scale-110 transition-all duration-500">
            </router-link>
            <div class="bg-secondary-500 rounded-full p-2 text-white cursor-pointer hover:bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <Search />
        <div class="grid grid-cols-[auto_1fr] gap-6 w-11/12 mx-auto mb-24">
            <Asidebar />
            <Products />
        </div>
        <MyFooter />
    </div>
</template>

<script setup>
    // import hooks
    import { ref, onMounted } from 'vue';
    // import components
    import MyHeader from '@/components/header.vue'
    import MyFooter from '@/components/footer.vue'
    import Search from '@/components/our store/search.vue';
    import Asidebar from '@/components/our store/asidebar.vue';
    import Products from '@/components/our store/products.vue';
    import Slider from '@/components/our store/slider.vue';
</script>