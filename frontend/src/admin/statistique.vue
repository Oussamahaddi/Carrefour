<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="w-11/12 mx-auto">
            <MyHeader />
            <div class="mx-auto grid grid-cols-4 place-items-center shadow-[0_0_15px] shadow-gray-500/20 bg-white/80 rounded-xl h-36 my-8">

                <div class="flex gap-4">
                    <div class="p-4 rounded-xl bg-orange-300/30 text-orange-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-2 ">
                        <p class="text-gray-500 text-sm">Orders Completed</p>
                        <p class="text-orange-500 font-bold">$50,77k</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="p-4 rounded-xl bg-primary-300/30 text-primary-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-2 ">
                        <p class="text-gray-500 text-sm">Total revenue made</p>
                        <p class="text-primary-700 font-bold">$168k</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="p-4 rounded-xl bg-cyan-300/30 text-cyan-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-2 ">
                        <p class="text-gray-500 text-sm">Total store visits</p>
                        <p class="text-cyan-400 font-bold">2.5m</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="p-4 rounded-xl bg-rose-300/30 text-rose-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col gap-2 ">
                        <p class="text-gray-500 text-sm">Total sales made</p>
                        <p class="text-rose-500 font-bold">57.712</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import Asidebar from '@/components/dashboard/asidebar.vue'; 
import MyHeader from '@/components/dashboard/header.vue';
import {ref} from 'vue';

const orange = ref('')

</script>
