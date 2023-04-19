<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-hidden scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="relative overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
            <MyHeader class="w-11/12 mx-auto" />

            <div class="w-11/12 mx-auto bg-white shadow-[0_0_10px] shadow-black/20 rounded-md text-primary-900 mt-8 py-4 px-4">
                <h3 class="font-semibold">Categories /</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-8 bg-white p-8 shadow-md rounded-xl">
                <!-- add categorie btn -->
                <div @click="store.showForm()" class="relative flex items-center justify-center h-48 bg-white text-primary-700 shadow-[0_0_10px] shadow-black/20 rounded-md cursor-pointer hover:text-white hover:bg-primary-700 transition-all duration-500">
                    <i class="fa-solid fa-plus text-4xl "></i>
                </div>
                <div v-for="category in allCategory" id="music" class="relative bg-white shadow-[0_0_10px] shadow-black/20 rounded-md cursor-pointer">
                    <!-- delete category btn -->
                    <div @click="deleteCategorie(category.id)" class="shadow-md absolute  top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20 w-8 aspect-square flex items-center justify-center bg-white rounded-full cursor-pointer text-red-500 hover:text-white hover:bg-primary-700 transition-all duration-500">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div @click="showEditForm(category)" class="flex flex-col gap-3">
                        <!-- category items -->
                        <div class="overflow-hidden h-full ">
                            <img id="musicImg" class="w-full h-full group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" :src="category.categorie_image" alt=""/>
                        </div>
                        <div class="p-4 flex justify-between items-center gap-2 -mt-4">
                            <div class="flex flex-col w-1/2">
                                <h2 :title="category.categorie_name" class="text-primary-900 font-bold text-xl truncate">{{ category.categorie_name }}</h2>
                                <p class="text-gray-400">Category</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- add form component -->
                <addForm :class="store.addProductFormVisibility ? 'block' : 'hidden'" :showAllCategory="showAllCategory" >
                    <div @click="store.hideForm()" class="fixed top-0 left-0 z-20 w-full h-full bg-black/40"></div>
                </addForm>
                
                <!-- edit form component -->
                <EditCategoryForm :class="editCategoryFormVisibility ? 'block' : 'hidden'" :formData="formData" :showAllCategory="showAllCategory" :hideEditForm="hideEditForm">
                    <div @click="hideEditForm()" class="fixed top-0 left-0 z-20 w-full h-full bg-black/40"></div>
                </EditCategoryForm>

            </div>
            <div class="w-11/12 mx-auto bg-white rounded-md mb-12 mt-4 p-2 shadow-[0_0_10px] shadow-black/20 flex justify-end">
                <v-pagination class="w-fit py-2"
                    v-model="currentPage"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#DCEDFF"
                    @update:modelValue="showAllCategory"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
// import components
import Asidebar from '@/components/dashboard/asidebar.vue';
import MyHeader from '@/components/dashboard/header.vue';
import addForm from '@/components/dashboard/category/addForm.vue';
import EditCategoryForm from '@/components/dashboard/category/editForm.vue';
import { userCounterStore } from '@/store/home';
import { onMounted , ref } from 'vue';
// import pagination
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

const store = userCounterStore();

const allCategory = ref(null);
const currentPage = ref(1);
const pageCount = ref(null);

const editCategoryFormVisibility = ref(false);

// get all categories from database
const showAllCategory = async () => {
    try {
        await axios.get('/api/category?page=' + currentPage.value).then(response => {
            pageCount.value = response.data.page_count
            allCategory.value = response.data.categories.data;
        })
    } catch(error) {
        console.log(error);
    }
}

// edit category

const formData = ref({
    id : null,
    category_name : '',
    category_description : '',
    category_image : '',
});

// show edit form
function showEditForm(category) {
    formData.value.category_name = category.categorie_name;
    formData.value.category_description = category.description;
    formData.value.category_image = category.categorie_image;
    formData.value.id = category.id;
    editCategoryFormVisibility.value = !editCategoryFormVisibility.value;
}

function hideEditForm() {
    editCategoryFormVisibility.value = false;
}

// delete category with specifique id
function deleteCategorie(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You wont to Delete this Categorie ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/api/category/${id}`);
            showAllCategory();
            toast.success('Category deleted successfully!');
        }
    })
}

onMounted(() => {
    showAllCategory();
});



</script>