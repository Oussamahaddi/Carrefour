<template>
    <div class="">
        <router-link to="/login" class="flex flex-col justify-center gap-4 my-4 h-full text-center group">
            <div class="mx-auto flex items-center justify-center bg-white w-fit rounded-full p-4">
                <img :src="image" alt="" class="w-16">
            </div>
            <h3 class="text-xl font-bold text-primary-900 group-hover:text-secondary-500">{{ title }}</h3>
            <p class="text-sm text-gray-500">{{ paragraph }}</p>
        </router-link>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        paragraph: { 
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required : true,
        }
    });

</script>