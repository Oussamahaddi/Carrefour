<template>
    <div class=" flex justify-center items-center">
        <div class="container mx-auto rounded-lg p-14">
            <form class="flex flex-col items-center gap-4">
                <h1 class="text-center font-bold text-primary-900 text-4xl">Find the perfect Product </h1>
                <div class="relative flex items-center w-5/6 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input class="peer h-full w-full outline-none focus:ring-0 text-sm text-gray-700 pr-2 border-none" type="text" id="search" placeholder="Search something.." /> 
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>