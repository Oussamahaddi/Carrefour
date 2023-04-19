import axios from "axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";


export const adminProduct = defineStore("adminProduct",{
    state: () => {
        return {
            addProductFormVisibility : false,
            data : {
                product_name : '',
                reference : '',
                codeBare : '',
                prixAchat : '',
                prixFinal : '',
                prixOffre : '',
                description : '',
                product_image : '',
                category_id : '',
                allProduct : null,
                allCategories : null,
            }
        };
    },
    getters: {},
    actions: {
        showForm() {
            this.addProductFormVisibility = !this.addProductFormVisibility;
        },
        hideForm() {
            this.addProductFormVisibility = false;
        },
        handleFileUpload(e) {

            const file = e.target.files[0];
            const formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', 'fcjizv8v');
            this.data.product_image = formData;
        },
        async showAllProduct() {
            try {
                await axios.get('/api/products').then(response => {
                    this.allProduct = response.data;
                    console.log(this.allProduct);
                })
            } catch(error) {
                console.log(error);
            }
        },
        async allCategory() {
            try {
                await axios.get('/api/category').then(response => {
                    this.allCategories = response.data.allCategory;
                })
            } catch (error) {
                console.log(error);
            }
        },
        async addProduct() {

            axios.defaults.withCredentials = false;
            const responseImg = await axios.post('https://api.cloudinary.com/v1_1/dujpquv4d/upload', this.data.product_image)
            .catch(err => console.error(err.response));
            this.data.product_image = responseImg.data.secure_url; 
            axios.defaults.withCredentials = true;

            try {
                const response = await axios.post("/api/products", this.data);
                // console.log(response);
                this.showAllProduct();
                this.addProductFormVisibility = false;
                toast.success('Product Created successfuly');

            } catch(error) {
                console.log(error.response.data);
            }

        }
    },
    mutations: {},
});



