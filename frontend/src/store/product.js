import axios from "axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


export const adminProduct = defineStore("adminProduct",{
    state: () => {
        return {
            addProductFormVisibility : false,
            editProductFormVisibility : false,
            allProduct : [],
            allCategories : [],
            imageChanger : false,
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
                product_quantite : null,
            },
            dataEdit : {},
        };
    },
    getters: {},
    actions: {
        showForm() {
            this.addProductFormVisibility = !this.addProductFormVisibility;
        },
        showEditForm(productInfo) {
            this.dataEdit = productInfo;
            this.editProductFormVisibility = !this.editProductFormVisibility;
        },
        hideForm() {
            this.addProductFormVisibility = false;
            this.editProductFormVisibility = false;
        },
        handleFileUpload(e) {

            this.imageChanger = true;

            const file = e.target.files[0];
            const formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', 'fcjizv8v');
            this.data.product_image = formData;
        },
        async showAllProduct() {
            try {
                // ghir bach lcode yt9ra mzn
                // hadi kat extracti data mn response w katsmiha product
                const {data:products}= await axios.get('/api/products')
                this.allProduct = products

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

        },
        async editProduct() {

            if (this.imageChanger) {
                axios.defaults.withCredentials = false;
                const responseImg = await axios.post('https://api.cloudinary.com/v1_1/dujpquv4d/upload', this.data.product_image)
                .catch(err => console.error(err.response));
                this.dataEdit.product_image = responseImg.data.secure_url; 
                axios.defaults.withCredentials = true;
            }

            try {
                const response = await axios.put(`/api/products/${this.dataEdit.id}`, this.dataEdit);
                console.log(response);
                this.showAllProduct();
                this.editProductFormVisibility = false;
                toast.success('Product has been Updated successfully!');

                this.imageChanger = false;
            } catch (error) {
                console.log(error.response);
            }

        },
        deleteProduct(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You wont to Delete this Product ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/api/products/${id}`);
                    this.showAllProduct();
                    toast.success('Product deleted successfully!');
                }
            })
        }
    },
    mutations: {},
});



