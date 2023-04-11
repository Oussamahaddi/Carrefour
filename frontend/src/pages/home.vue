<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="">
            <div class="grid grid-cols-1 place-items-center w-5/6 mx-auto h-5/6 md:grid-cols-2">
                <div class="flex flex-col justify-center gap-8 h-full md:w-5/6">
                    <h1 class="font-bold text-2xl md:text-4xl"> <span class="text-secondary-500" ref="typedRef"></span> <br> Be The Fastest In Delivering Your Product In <span class="text-secondary-500"> <br> Carrefour</span> </h1>
                    <p class="text-gray-500 text-sm"> Our job is to filling your satisfaction without do any effort and with fast and free delivery </p>
                    <div class="flex gap-4 items-center">
                        <router-link to="/register" class="font-semibold text-white border-2 border-primary-700 bg-primary-700 hover:bg-primary-800 rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 " >Get Started</router-link>
                        <router-link to="/login" class="font-semibold text-primary-700 border-2 border-primary-700 dark:text-white hover:bg-primary-700 hover:text-white rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 ">STORE</router-link>
                    </div>
                </div>
                <div class="hidden h-full relative items-center md:flex">
                    <img src="@/assets/image/slide2.png" alt="" class="absolute z-10">
                    <lottie-player src="src/assets/lottiefile/delivryman.json"  background=""  speed="1" class=""  style=""  loop autoplay></lottie-player>
                </div>
            </div>
        </div>
        <div v-motion-slide-visible-once-bottom  > 
            <Delievry />
        </div>
        <div v-motion-slide-visible-once-bottom > 
            <Categorie />
        </div>
        <div v-motion-slide-visible-once-bottom > 
            <Offre />
        </div>
        <div v-motion-slide-visible-once-bottom > 
            <services />
        </div>
        <MyFooter />
    </div>
</template>

<script setup>

    // import library of lottifile
    import "@lottiefiles/lottie-player";
    // import typed js library that write text
    import Typed from 'typed.js';

    // import components
    import MyHeader from '@/components/header.vue'
    import MyFooter from '@/components/footer.vue'
    import Delievry from '@/components/home/delievry.vue'
    import Categorie from '@/components/home/categorie.vue'
    import Offre from '@/components/home/offre.vue'
    import services from '@/components/home/services.vue'
    // import hooks
    import { ref, onMounted } from 'vue';

    // ref is reference
    const typedRef = ref(null);

    // write text when rendring component
    onMounted(() => {
        new Typed(typedRef.value, {
            strings: ['Hello, Customer!', 'Welcome to My Store.'],
            typeSpeed: 50,
            backSpeed: 30,
            cursorChar: '|',
            loop: true
        });
    });

</script>