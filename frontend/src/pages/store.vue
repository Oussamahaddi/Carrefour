<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />

    </div>
</template>

<script setup>
    // import hooks
    import { ref, onMounted } from 'vue';
    // import components
    import MyHeader from '@/components/header.vue'
    import MyFooter from '@/components/footer.vue'
</script>