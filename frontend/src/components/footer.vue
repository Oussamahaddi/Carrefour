<template>
    <footer class="bg-zinc-800 grid place-items-center pt-6 mt-16">
        <div class="footer_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 place-items-center items-start text-white w-5/6">
            <div class="adress">
                <div class="img mb-4">
                    <img src="" alt="Electro Maroc">
                </div>
                <p class="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quia molestiae neque vitae facilis, 
                    mollitia id dolore.
                </p>
                <div class="contact mt-4 grid gap-2">
                    <p class="text-gray-500 text-sm">ADRESS: Jnane Illan , Rue 8 N16</p>
                    <p class="text-gray-500 text-sm">E-MAIL: Oussama.Haddi@gmail.com</p>
                    <p class="text-gray-500 text-sm">PHONE: (212) 6-12 34 12 54 99</p>
                </div>
            </div>
            <div class="customer max-sm:justify-self-start max-sm:my-6">
                <h3 class="mb-4">Customer Care</h3>
                <ul class="grid gap-1.5">
                    <li class="text-gray-400"><a href="#"> Monitor</a></li>
                    <li class="text-gray-400"><a href="#"> Cart Mere</a></li>
                    <li class="text-gray-400"><a href="#"> Desktop</a></li>
                    <li class="text-gray-400"><a href="#"> PC</a></li>
                    <li class="text-gray-400"><a href="#"> Mouses</a></li>
                    <li class="text-gray-400"><a href="#"> Phones</a></li>
                </ul>
            </div>
            <div class="information max-sm:justify-self-start max-sm:my-6">
                <h3 class="mb-4">Information</h3>
                <ul class="grid gap-2">
                    <li class="text-gray-400"><a href="#">About Us</a></li>
                    <li class="text-gray-400"><a href="#">Contact Us</a></li>
                    <li class="text-gray-400"><a href="#">My Order</a></li>
                    <li class="text-gray-400"><a href="#">Terms & Conditions</a></li>
                    <li class="text-gray-400"><a href="#"> Return </a></li>
                </ul>
            </div>
            <div class="join_us grid gap-4">
                <h3 class="">Join Our Newsletter Now</h3>
                <p class="text-gray-500">Get E-mail updates about our latest shop and special offres.</p>
                <input type="email" placeholder="Enter your e-mail" class="rounded-md bg-zinc-600 py-1 px-4">

                <div class="social_media flex gap-6 text-xl">
                    <i class="fa-brands fa-facebook text-blue-500"></i>
                    <i class="fa-brands fa-instagram text-pink-600"></i>
                    <i class="fa-brands fa-twitter text-sky-400"></i>
                    <i class="fa-brands fa-pinterest text-red-400"></i>
                    <i class="fa-brands fa-linkedin text-blue-400"></i>
                </div>
            </div>
        </div>
        <hr class="w-5/6 my-4">
        <div class="copyright place-self-start w-5/6 mb-4 mx-auto text-gray-500">&copy; CopyRight 2018 By Oussama Haddi. All Right Reserved</div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
};
</script>
