<template>
    <div class="w-11/12 mx-auto">
        <div class="bg-gradient-to-b from-[#003772] to-[#0057B4] p-4 shadow-[0_4px_10px] shadow-black/30">
            <h3 class="text-white text-4xl font-semibold my-4">Payment Info.</h3>
            <hr class="my-4 border-gray-400">
            <div class="my-2">
                <h4 class="text-white font-semibold text-xl my-2">Payement methods</h4>
                <div class="flex justify-around ">
                    <div @click="selectMethod(method.id)" v-for="method in methods" class="border border-gray-300 rounded-md px-2 cursor-pointer relative" :class="{ 'after:content-[\'\'] after:absolute after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 after:w-5 after:aspect-square after:bg-white after:rounded-full': defaultMethod == method.id }" :title="method.id">
                        <img :id="method.id" :src="method.img" alt="" class="w-10 aspect-square object-contain " >
                    </div>
                </div>
            </div>
            <hr class="my-4 border-gray-400">
            <div>
                <div :class="defaultMethod != 'paypal' ? 'block' : 'hidden'">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cart holder</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cart number</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date experiration</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CVV</label>
                        </div>
                    </div>
                    <div class="flex justify-center w-full">
                        <button type="submit" @click="store.orderNow" class="text-white bg-blue-700 hover:bg-blue-800 shadow-[0_4px_10px] shadow-black/20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Pay Now</button>
                    </div>
                </div>

                <div :class="defaultMethod == 'paypal' ? 'block' : 'hidden'">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" v-model="email"  id="floating_email" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="password" v-model="password"  name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" "  />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div class="flex justify-center w-full">
                        <button type="submit" @click="store.orderNow" class="text-white bg-blue-700 hover:bg-blue-800 shadow-[0_4px_10px] shadow-black/20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Pay Now</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { userCounterStore } from '@/store/home';

const store = userCounterStore();

const methods = reactive([
    {id: 'mastercard', img : 'src/assets/image/payment1.png'},
    {id: 'visa', img : 'src/assets/image/payment2.png'},
    {id: 'paypal', img : 'src/assets/image/payment3.png'},
])

const email = ref('');
const password = ref('');

const defaultMethod = ref('mastercard');

function selectMethod(method) {
    defaultMethod.value = method;
    switch (method) {
        case 'visa':
            defaultMethod.value = 'visa';
            break;
        case 'paypal':
            defaultMethod.value = 'paypal';
            break;
        default:
            defaultMethod.value = 'mastercard';
            break;
    }
}

</script>