<template>
    <div class="my-20 w-5/6 mx-auto bg-white px-8 py-12 rounded-xl shadow-[0_0_10px] shadow-black/20">
        <div class="w-5/6 h-full relative hidden lg:block">
            <img src="@/assets/image/service/bg.png" alt="" class="absolute right-4 top-4 md:w-1/2">
        </div>
        <div class="mb-4 relative z-10">
            <h3 class="font-bold text-2xl md:text-3xl">Get Started With Our Services</h3>
        </div>
        <div class="grid grid-cols-1 place-items-center gap-4 my-8 relative z-10 md:grid-cols-2 lg:grid-cols-3 ">
            <miniservice v-for="service in obj.services" :image="service.img" :title="service.title" :paragraph="service.description" />
        </div>
    </div>
</template>

<script setup>
import miniservice from './miniservice.vue';
import { ref, reactive } from 'vue';

const obj = reactive({
    services : [
        {img : "src/assets/image/service/Question Mark.png", title : "Vous avez des questions", description : "Nous avons déjà la réponse que vous cherchez"},
        {img : "src/assets/image/service/Headset.png", title : "Aidez nous à mieux vous servir", description : "Nos collaborateurs à votre disponibilité"},
        {img : "src/assets/image/service/Male User.png", title : "Recevez toutes les nouveautés", description : "Inscrivez-vous pour recevoir toute l'actualité"},
    ]
});
</script>