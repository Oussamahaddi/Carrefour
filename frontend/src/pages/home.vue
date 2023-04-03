<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 to-white">
        <MyHeader />
            <div class="grid grid-cols-1 place-items-center w-5/6 mx-auto h-5/6 md:grid-cols-2">
                <div class="flex flex-col justify-center gap-8 h-full md:w-5/6">
                    <h1 class="font-bold text-2xl md:text-4xl"> <span class="text-secondary-500" ref="typedRef"></span> <br> Be The Fastest In Delivering Your Product In <span class="text-secondary-500"> <br> Carrefour</span> </h1>
                    <p class="text-gray-500 text-sm">Our job is to filling your satisfaction without do any effort and with fast and free delivery </p>
                </div>
                <div class="h-full flex items-center">
                    <img src="@/assets/image/slider.png" alt="" class="md:block">
                </div>
            </div>
    </div>
</template>

<script setup>
    // import the header component
    import MyHeader from '@/components/header.vue' 
    // import hooks
    import { ref, onMounted } from 'vue';
    // 
    import Typed from 'typed.js';

    const typedRef = ref(null);

    // write text when rendring component
    onMounted(() => {
        new Typed(typedRef.value, {
            strings: ['Hello, Customer!', 'Welcome to My Store.'],
            typeSpeed: 50,
            backSpeed: 30,
            cursorChar: '|',
        });
    });

</script>