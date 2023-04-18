<template>
    <div class="">
        <slot></slot>
        <div class="max-sm:w-11/12 w-4/6 lg:w-3/6 fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            
            <form @submit.prevent="addCategorie" action="" method="POST" class="">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Category Name
                        </label>
                        <input  v-model="data.categoryName" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="product name">
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea  v-model="data.categoryDescription" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="-mx-3 md:flex ">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Product Image
                        </label>
                        <input @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" type="file">
                    </div>
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const data = ref({
    categoryName : '',
    categoryDescription : '',
    categoryImg : null,
})

const handleFileUpload = (e) => {

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'fcjizv8v');
    data.value.categoryImg = formData;
}

async function addCategorie() {

    await axios.get('/sanctum/csrf-cookie');

    axios.defaults.withCredentials = false;

    const responseImg = await axios.post('https://api.cloudinary.com/v1_1/dujpquv4d/upload', data.value.categoryImg)
    .catch(err => console.error(err.response));

    axios.defaults.withCredentials = true;

    try {

        const response = await axios.post('/api/category', {
            categorie_name : data.value.categoryName,
            description : data.value.categoryDescription,
            categorie_image : responseImg.data.secure_url,
        })
        if (response.statusText === 'Created') {
            toast.success('Category deleted successfully!');
        }

    } catch(error) {
        console.log(error);
    }

}



</script>