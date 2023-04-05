<template>
    <div class="h-screeen bg-white">

        <img src="@/assets/image/logo/IMAGE.png" @click="$router.back()" alt="" class="w-44 z-50 absolute left-[50%] top-[5%] -translate-x-[50%] lg:left-[2%] lg:top-[2%] lg:-translate-x-[0%]">
        <img src="@/assets/image/login/Vector 3.png" alt="login background" class="h-full w-full absolute right-0 top-0 z-10 ">

        <div class="grid grid-cols-1 place-items-center items-end px-6 py-8 h-screen relative z-10 lg:grid-cols-2 md:px-12">
            <div class="hidden w-full items-center justify-center lg:flex">
                <img src="@/assets/image/livraison_2-removebg-preview.png" alt="" class="w-3/6">
            </div>
            <!-- form -->
            <div class="bg-white/60 border-2 border-gray-500/30 mix-blend-difference w-5/6 rounded-xl flex flex-col items-center py-4 justify-evenly max-sm:w-full lg:w-full lg:py-8">
                <div class="mb-4">
                    <h2 class="text-3xl font-bold text-primary-700 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">Sign Up</h2>
                </div>
                <form action="" @submit.prevent="store.login()" class="flex items-center justify-center w-full">
                    <div class="flex flex-col gap-4 items-center w-5/6">
                        <!-- user name input -->
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <div class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" name="username" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username">
                        </div>
                        <!-- email input -->
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <input type="email" name="email" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                        </div>
                        <!-- phone number -->
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="tel" name="phone" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+212">
                        </div>
                        <!-- city and adress -->
                        <div class="flex gap-4 w-full">
                            <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-4/6">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" name="city" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City">
                            </div>
                            <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                </div>
                                <input type="text" name="adress" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adress">
                            </div>
                        </div>
                        <!-- password input with icons -->
                        <div class="relative shadow-[0_1px_3px] shadow-black/40 rounded-lg w-full">
                            <!-- show -->
                            <div @click="store.showPwd()" class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" :class="store.hidePwd ? 'hidden' : 'flex'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                </svg>
                            </div>
                            <!-- hide -->
                            <div @click="store.showPwd()" class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3" :class="store.hidePwd ? 'flex' : 'hidden'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input :type="store.hidePwd ? 'text' : 'password'" name="pwd" id="email-address-icon" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password">
                        </div>
                        <button class="text-white bg-blue-700 hover:bg-primary-800 font-semibold rounded-lg shadow-[0px_3px_5px] shadow-black/30 px-8 py-2.5 mr-2 mb-2">Sign up</button>
                        <div>
                            <p class="text-[#5F5F5F] text-sm">Already has account ? <router-link to="/login" class="text-primary-700 font-semibold">Sign in</router-link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
// instance an object from store index that has all methodes "state management"
import { userCounterStore } from '@/store/index'
// access the `store` variable anywhere in the component
const store = userCounterStore();
</script>