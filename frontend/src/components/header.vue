<template>
  <div class="">
    <nav class="flex sticky top-0 z-30 w-full border-gray-200 px-4 lg:px-6 py-2.5">
      <div class="flex md:flex-wrap justify-between items-center w-full">
        <router-link to="/">
          <img src="@/assets/image/logo/IMAGE.png" class="mr-3 w-44" alt="carrefour logo" />
        </router-link>
        <div class="flex items-center lg:order-2">
          <!-- cart -->
          <div @click="store.handleCart()" class="p-2 rounded mr-4 text-white cursor-pointer bg-primary-700 hover:bg-primary-800 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
          <router-link to="/login" class="hidden font-semibold text-primary-700 border-2 border-primary-700 dark:text-white hover:bg-primary-700 hover:text-white focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 lg:block">Log in</router-link>
          <router-link to="/register" class="hidden font-semibold text-white border-2 border-primary-700 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 lg:block">Register</router-link>
          <!-- burger btn that show dropdown menu -->
          <button @click="store.showNavbar()" type="button" class="bg-blue-700 inline-flex items-center p-2 ml-1 text-md text-gray-500 rounded lg:hidden hover:bg-primary-800 " aria-controls="mobile-menu-2" aria-expanded="false">
            <svg :class="store.navVisibility ? 'hidden' : 'block'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg :class="store.navVisibility ? 'block' : 'hidden'" class=" w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- drop down -->
        <div :class="store.navVisibility ? 'block' : 'hidden'" class="justify-between items-center p-4 w-full lg:flex lg:w-auto lg:order-1 max-lg:absolute max-lg:top-16 max-lg:right-1/2 max-lg:translate-x-1/2 z-10" id="mobile-menu-2">
          <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 max-lg:bg-white max-lg:rounded p-2">
            <li v-for="link in store.links" :key="link.id" :class="{'text-secondary-500 max-lg:text-white max-lg:bg-primary-700 relative lg:after:content-[\'\'] after:absolute md:after:bg-red-500 after:rounded-full after:w-[7px] after:aspect-square after:left-1/2 after:-bottom-4' : isActive(link.url) }">
              <router-link :to="link.url" @click="store.currentLink = link.id"  class="block py-2 pr-4 pl-3 font-semibold rounded lg:p-0">{{ link.text }}</router-link>
            </li>
            <hr>
            <li class="lg:hidden">
              <router-link to="/login" class="block py-2 pr-4 pl-3 font-semibold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Login</router-link>
            </li>
            <li class="lg:hidden">
              <router-link to="/register" class="block py-2 pr-4 pl-3 font-semibold text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Cart />
  </div>
</template>

<script setup>
import { Modal } from "flowbite";
import { userCounterStore } from "@/store/home";
import Cart from "./cart.vue";
import { useRoute } from "vue-router";

const store = userCounterStore();

// useRoute function that has current route information
const route = useRoute() 

// this check the path of url return true or false
function isActive(path) {
  return route.path === path
}

</script>
