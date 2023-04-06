
<template>
    <div class="h-screeen bg-white">

        <img src="@/assets/image/logo/IMAGE.png" @click="$router.back()" alt="" class="absolute left-4 top-4 w-44 z-50">
        <img src="@/assets/image/login/Vector 2.png" alt="login background" class="h-full w-4/6 absolute right-0 top-0 z-10 ">

        <div class="grid grid-cols-1 place-items-center h-screen relative z-10 md:grid-cols-2">
            <!-- sticker img -->
            <div class="hidden w-full items-center justify-end md:flex">
                <img src="@/assets/image/login/stickerlogin.jpg" alt="" class="w-10/12">
            </div>
            <!-- form -->
            <div class="bg-white/60 border-2 border-gray-500/30 mix-blend-difference w-[24rem] h-[22rem] rounded-xl flex flex-col items-center py-8 justify-evenly">
                <div class="mb-4">
                    <h2 class="text-3xl font-bold text-primary-700 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Sign in</h2>
                </div>
                <form action="" @submit.prevent="store.login()" class="flex items-center justify-center w-full">
                    <div class="flex flex-col gap-4 items-center w-5/6">
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" name="email" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                        </div>
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <div @click="store.showPwd()" class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" :class="store.hidePwd ? 'hidden' : 'flex'">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                            <div @click="store.showPwd()" class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" :class="store.hidePwd ? 'flex' : 'hidden'">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <input :type="store.hidePwd ? 'text' : 'password'" name="pwd" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password">
                        </div>
                        <button class="text-white bg-blue-700 hover:bg-primary-800 font-semibold rounded-lg shadow-[0px_3px_5px] shadow-black/30 px-8 py-2.5 mr-2 mb-2">Sign in</button>
                        <div>
                            <p class="text-[#5F5F5F] text-sm">D'ont have an account ? <router-link to="/register" class="text-primary-700 font-semibold">Register</router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
// instance an object from store index that has all methodes "state management"
import { userCounterStore } from '@/store/home'
// access the `store` variable anywhere in the component
const store = userCounterStore();

</script>