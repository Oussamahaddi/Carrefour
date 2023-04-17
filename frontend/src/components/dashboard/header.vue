<template>
    <div class="mt-4 mb-8 ">
        <header class="flex justify-between">
            <div class="flex flex-col gap-2">
                <h3 class="text-3xl font-semibold text-primary-900">Dahsboard</h3>
                <p class="text-gray-600 text-sm">Detailed infromation about your store</p>
            </div>
            <div class="w-1/2 flex items-center justify-around">
                <div class="relative w-3/6 flex items-center h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-primary-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input class="h-full w-full outline-none focus:ring-0 text-sm text-gray-700 pr-2 border-none" type="text" id="search" placeholder="Search something.." /> 
                </div>
                <div class="flex gap-4">
                    <img class="w-10 h-10 rounded-full" src="@/assets/image/avatar/avatar.png" alt="Rounded avatar">
                    <div>
                        <strong class="hidden  md:block">OussamaHaddi</strong>
                        <p class="hidden text-gray-500 text-sm md:block">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>


</script>