<template>
    <div class="">
        <slot></slot>
        <div class="max-sm:w-11/12 w-4/6 lg:w-3/6 fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div class="mb-6 text-xl font-semibold ">Edit Form</div>
            <form @submit.prevent="editCategorie" action="" method="POST" class="">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name"> Category Name
                        </label>
                        <input v-model="formData.category_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="product name">
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password"> Description
                        </label>
                        <textarea v-model="formData.category_description" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" placeholder="Description">{{ formData.category_description }}</textarea>
                    </div>
                </div>
                <div class="-mx-3 md:flex ">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password"> Product Image
                        </label>
                        <input @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" type="file">
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <button class="text-white bg-blue-700 hover:bg-blue-800 mt-6 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Default</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, defineProps, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import { userCounterStore } from '@/store/home';

const store = userCounterStore();

// const catName = ref(props.formData.category_name);
// const catDes = ref(props.formData.category_description);
const catImage = ref(null);

const handleFileUpload = (e) => {

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'fcjizv8v');
    catImage.value = formData;

}

async function editCategorie() {

    if (catImage.value != null) {
        axios.defaults.withCredentials = false;
        const responseImg = await axios.post('https://api.cloudinary.com/v1_1/dujpquv4d/upload', catImage.value)
            .catch(err => console.error(err.response));
        axios.defaults.withCredentials = true;
        sendEdit(responseImg.data.secure_url);
    } else {
        sendEdit(props.formData.categorie_image);
    }
}

async function sendEdit(img) {
    try {
        const response = await axios.put(`/api/category/${props.formData.id}`, {
            categorie_name: props.formData.category_name,
            description: props.formData.category_description,
            categorie_image: img,
        });

        if (response.status === 200) {
            props.showAllCategory();
            props.hideEditForm();
            toast.success('Category has been Updated successfully!');
        }
    } catch (error) {
        console.log(error);
    }
}

const props = defineProps({
    formData : {
        type : Object,
        required : true,
    },
    showAllCategory : {
        type : Function,
        required : true,
    },
    hideEditForm : {
        type : Function,
        required : true,
    }
});


</script>