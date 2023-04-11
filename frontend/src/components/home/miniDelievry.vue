<template>
    <div class="flex flex-col gap-4 w-4/6 h-full text-center sm:w-3/6">
        <div class="w-fit flex items-center justify-center">
            <lottie-player :src="image"  background="transparent"  speed="1" class=""  style="width: 200px; height: 200px;"  loop autoplay></lottie-player>
        </div>
        <h3 class="text-xl font-bold text-primary-900">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ paragraph }}</p>
    </div>
</template>

<script setup>

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