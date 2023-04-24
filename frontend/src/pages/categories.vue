
<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center my-24">
            <div v-for="category in categories" :key="category.id">
                <router-link to="" :title="category.categorie_name">
                    <img :src="category.categorie_image" :alt="category.categorie_name" class="shadow-[0_0_12px] shadow-gray-500 rounded-xl hover:shadow-primary-700 transition-all duraiton-500 ease-in-out">
                </router-link>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script setup>
import axios from 'axios';
import MyHeader from '@/components/header.vue';
import MyFooter from '@/components/footer.vue';
import { ref, reactive, onMounted } from 'vue';

let categories = ref('');

const allCategories = async () => {
    try {
        await axios.get('/api/category').then(response => {
            categories.value = response.data.allCategory;
            console.log(response.data.allCategory);
            console.log(categories.value);
        })
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    allCategories();
});



</script>