<template>
    <div class="h-screen grid grid-cols-[auto_1fr] bg-gradient-to-b from-primary-700/30 to-white overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <Asidebar />
        <div class="w-11/12 mx-auto">
            <MyHeader />
        </div>
    </div>
</template>

<script setup>
    import Asidebar from '@/components/dashboard/asidebar.vue';
    import MyHeader from '@/components/dashboard/header.vue';
</script>