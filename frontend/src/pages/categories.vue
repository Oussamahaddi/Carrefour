
<template>
    <div class="bg-gradient-to-b from-primary-700/30 overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center my-24">
            <div v-for="categorie in obj.categories" :key="categorie.id">
                <router-link to="" :title="categorie.name">
                    <img :src="`src/assets/image/categorie/IMAGE-${categorie.id}.png`" :alt="categorie.name" class="shadow-[0_0_12px] shadow-gray-500 rounded-xl hover:shadow-primary-700 transition-all duraiton-500 ease-in-out">
                </router-link>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script setup>
import MyHeader from '@/components/header.vue';
import MyFooter from '@/components/footer.vue';
import { ref, reactive } from 'vue';

const obj = reactive({
    categories : [
        {id : 1, name : 'boulangerie & patesserie'},
        {id : 2, name : 'bio & sante'},
        {id : 3, name : 'produits laitiers, fromagerie & cremier'},
        {id : 4, name : 'epircie'},
        {id : 5, name : 'petit dejeuner'},
        {id : 6, name : 'biscuits & snacking'},
        {id : 7, name : 'eau & boissons'},
        {id : 8, name : 'charcutrie & traiteur de la mer'},
        {id : 9, name : 'le monde de bebe'},
        {id : 10, name : 'hygiene beaute & soin'},
        {id : 11, name : 'entretien & nettoyage'},
        {id : 12, name : 'accessoires utiles'},
        {id : 12, name : 'textile'},
        {id : 14, name : 'petit electromenager'},
        {id : 15, name : 'fornitures scolaires, de bureau'},
        {id : 16, name : 'epicerie fine'},
        {id : 17, name : 'animaux'},
        {id : 18, name : 'marche'},
    ]
});


</script>