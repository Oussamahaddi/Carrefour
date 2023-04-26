import { useStorage } from "@vueuse/core";
import axios from "axios";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


export const outStore = defineStore("outStore",{
    state: () => {
        return {
            
            allProduct : [],
            categories : [],
            category_id : '',
            searchByName : '',
            singleProduct : '',
            productPending : false,
            catPending : false,
        };
    },
    getters: {
        filterProductByCategory() {
            if (!this.category_id && !this.searchByName) {
                return this.allProduct;
            }
            // return this.allProduct.filter(products => products.category_id == this.category_id);
            return this.allProduct.filter(product => {
                let matchCategory = true;
                let matchName = true;
                if (this.category_id) {
                    matchCategory = product.category_id == this.category_id;
                }
                if (this.searchByName) {
                    matchName = product.product_name.toLowerCase().includes(this.searchByName.toLowerCase());
                }
                return matchCategory && matchName;
            });
        },
        searchProductByName() {
            return this.allProduct.filter(products => products.product_name.includes(this.searchByName));
        },
    },
    actions: {
        async allCategories() {
            try {
                this.catPending = true;
                await axios.get('/api/category').then(response => {
                    this.categories = response.data.allCategory;
                })
            } catch (error) {
                console.log(error);
            }  finally {
                this.catPending = false
            }
        },
        getProductByCategory(id) {
            this.category_id = id;
        },
        async showAllProduct() {
            try {
                this.productPending = true;
                // ghir bach lcode yt9ra mzn
                // hadi kat extracti data mn response w katsmiha product
                const {data:products}= await axios.get('/api/products')
                this.allProduct = products
                console.log(this.allProduct);

            } catch(error) {
                console.log(error);
            } finally {
                this.productPending = false;
            }
        },
        async getProductId(id) {
            try {
                this.productPending = true;
                const {data:response} = await axios.get(`/api/products/${id}`)
                this.singleProduct = response;
                // console.log(this.singleProduct.category.categorie_name);
            } catch(error) {
                console.log(error);
            } finally {
                this.productPending = false;
            }
        },
    },
    mutations: {},
});



