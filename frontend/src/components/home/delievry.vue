<template>
    <div class="flex flex-col items-center gap-4 mb-8">
        <div class="text-center">
            <span class="font-semibold text-sm text-secondary-500">What we Serve</span>
            <h2 class="font-bold text-3xl">Your favourite Product <br> Delivery Partner</h2>
        </div>
        <div class="grid grid-cols-1 place-items-center gap-8 py-6 my-4 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
            <miniDelievry image="src/assets/lottiefile/order.json" title="Easy To Order" paragraph="You Only Need a few Steps in ordering Product" />
            <miniDelievry image="https://assets9.lottiefiles.com/packages/lf20_oeo3imyf.json" title="Fastest Delivery" paragraph="Delivery that is always ontime even faster." />
            <miniDelievry image="src/assets/lottiefile/delivryDone.json" title="Best Quality" paragraph="N  ot Only fast for us quality is also number one." />
        </div>
    </div>
</template>

<script setup>
import miniDelievry from '@/components/home/miniDelievry.vue';

</script>