<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-hidden scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="relative overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
            <MyHeader class="w-11/12 mx-auto" />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-14">
                <!-- items -->
                <div id="music" class="allMusics relative bg-white shadow-md flex flex-col gap-3 rounded-md ">
                    <div @click="deleteCategorie()" class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full cursor-pointer text-primary-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div class="overflow-hidden h-full ">
                        <img id="musicImg" class="w-full object-fill group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" src="@/assets/image/categorie/IMAGE-1.png" alt=""/>
                    </div>
                    <div class="p-4 flex justify-between items-center gap-2 -mt-4">
                        <div class="flex flex-col w-1/2">
                            <h2 title="" class="text-primary-900 font-bold text-xl truncate">Boulangerie & Patesserie</h2>
                            <p class="text-gray-400">Category</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Asidebar from '@/components/dashboard/asidebar.vue';
    import MyHeader from '@/components/dashboard/header.vue';

    function deleteCategorie() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                console.log('deleted')
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

</script>