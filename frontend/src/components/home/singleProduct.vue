
<template>
    <div class="group bg-white relative p-2 flex flex-col items-center h-full rounded-xl border-2 border-gray-200 shadow-[0_3px_5px] shadow-secondary-500/30  hover:bg-gray-100 hover:border-secondary-500/30 overflow-hidden after:content-['_'] after:absolute after:bg-primary-300 after:w-1/3 after:h-1/3 after:left-[-5%] after:top-1/2 after:translate-y-[-50%] after:rotate-45 after:rounded-lg after:opacity-20 before:absolute before:bg-primary-300 before:w-2/4 before:h-2/4 before:rounded-lg before:right-[-10%] before:top-1/3 before:translate-y-[-50%] before:rotate-45 before:opacity-20 cursor-pointer hover:after:translate-y-[-80%] hover:after:transition-all hover:after:duration-500 hover:before:translate-y-[-20%] hover:before:transition-all hover:before:duration-500 ease-in-out">
        <div :class="promo ? 'block' : 'hidden'" class="absolute top-2 left-2 bg-primary-700 px-3 py-1.5 text-white rounded-full">
            Promo
        </div>
        <div class="flex items-center justify-center h-64 py-4">
            <img :src="productImage" alt="" class="relative z-10 group-hover:scale-110 group-hover:transition-all group-hover:duration-500 w-5/6 ">
        </div>
        <div class="bg-gray-700 py-2 rounded-xl text-white text-center w-full relative z-10">
            <h4 class="text-md font-semibold">{{productName}}</h4>
            <p class="text-secondary-500 font-semibold flex justify-center gap-6 items-center"><span class="text-sm text-gray-300 line-through">{{ productPrice }}</span> {{ productOffrePrice }}</p>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        promo : {
            type : Boolean,
            required : false,
        },
        productName : {
            type: String,
            required: true,
        },
        productImage : {
            type: String,
            required: true,
        },
        productOffrePrice: {
            type: String,
            required: true,
        },
        productPrice: {
            type: String,
            required: true,
        }
    });
</script>