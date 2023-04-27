<template>
    <div class="h-screen bg-gradient-to-b from-primary-700/30 overflow-y-auto scrollbar-thumb-primary-700 scrollbar-track-secondary-500 scrollbar-thin">
        <MyHeader />
        <div class="w-5/6 my-20 mx-auto bg-white p-12 shadow-[0_0_10px] shadow-black/10 rounded-xl">
            <div class="flex justify-center">
                <h3 class="text-3xl font-semibold">Your Orders</h3>
            </div>
            <hr class="my-4 border-">
            <div class="grid grid-cols-[2fr_1fr] gap-8 w-5/6 mx-auto">
                <div class="px-12 py-4 rounded-xl shadow-md ">
                    <p class="my-4 text-gray-600">What you ordered: </p>
                    <ul v-if="!load" role="list" class="-my-6 divide-y divide-gray-200">
                        <!-- items  -->
                        <li v-for="order in orders" class="flex py-6">
                            <div class="h-16 w-1h-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="@/assets/image/all.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 justify-between items-center">
                                <div>
                                    <div class="flex flex-col justify-between text-base font-medium text-gray-900">
                                        <h3 class="font-semibold">
                                            {{order.sendingDate || '----/--/--'}}
                                        </h3>
                                        <p class="text-gray-500">Price : {{ order.total_price_order }}DH</p>
                                    </div>
                                </div>
                                <div class="flex items-end justify-between text-sm">
                                    <button @click="deleteOrder(order.id)" v-if="order.status == 'pending'"  type="button" class="font-semibold text-red-500 hover:text-indigo-500">
                                        Annuler
                                    </button>
                                    <div v-else :class="{'bg-green-400' : order.status == 'accepted', 'bg-red-500' : order.status == 'refused' }" class="text-white rounded-full p-2">
                                        {{ order.status }}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul v-else role="list" class="-my-6 divide-y divide-gray-200">
                        <!-- items  -->
                        <li v-for="i in 3" class="animate-pulse flex h-14 my-4 bg-primary-200 rounded-md">
                            
                        </li>
                    </ul>
                </div>
                <div class="bg-primary-300 p-8 h-1/2 rounded-xl">
                    <p class="text-white">Details</p>
                    <div class="text-white">
                        Tota: {{total}}DH
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script setup>

// import components
import MyHeader from '@/components/header.vue';
import MyFooter from '@/components/footer.vue';
import { toast } from "vue3-toastify";
import axios from 'axios';
import { ref, reactive, onMounted} from 'vue';

const orders = ref([]);
const load = ref(false);
const total = ref(0);

async function orderByUserId() {
    try {
        load.value = true;
        const userId = localStorage.getItem('isUser');
        const {data:response} = await axios.get('/api/order/' + userId);
        orders.value = response;
        for(const item of orders.value) {
            // console.log(item.total_price_order);
            total.value += parseInt(item.total_price_order);
        };
        console.log(total.value);
        console.log(orders.value, userId);
    } catch (err) {
        console.log(err.response);
    } finally {
        load.value = false;
    }
}

const deleteOrder = async (id) => {
    try {
        const { data: response } = await axios.delete('/api/order/' + id);
        orderByUserId();
        toast.error('Order deleted');
    } catch (err) {
        console.log(err.response);
    }
}

onMounted(() => {
    orderByUserId();
});

</script>