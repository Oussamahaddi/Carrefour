<template>
    <footer class="grid place-items-center border-2 border-t-gray-400 pt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 place-items-center items-start text-white w-5/6">
            <div class="">
                <div class="img mb-4">
                    <img src="@/assets/image/logo/IMAGE.png" alt="Carrefour logo" class="w-48">
                </div>
                <p class="text-gray-600 text-sm">
                    Découvrez nos catalogues Carrefour pour profiter de nos promotions, retrouvez également des milliers de produits au meilleur prix dans vos magasins. 
                </p>
                <div class="contact mt-4 grid gap-2">
                    <p class="text-gray-500 text-sm"><span class="font-semibold text-gray-800"> ADRESS :</span>  Safi Carrefour , Rue 8 N16</p>
                    <p class="text-gray-500 text-sm"><span class="font-semibold text-gray-800"> E-MAIL :</span>  Oussama.Haddi@gmail.com</p>
                    <p class="text-gray-500 text-sm"><span class="font-semibold text-gray-800"> PHONE : </span> (+212) 6-12 34 12 54 99</p>
                </div>
            </div>
            <div class="customer max-sm:justify-self-start max-sm:my-6">
                <h3 class="mb-4 font-semibold text-gray-800">Customer Care</h3>
                <ul class="grid gap-4 text-gray-600">
                    <li class=""><router-link to=""> Mes promotions</router-link></li>
                    <li class=""><router-link to=""> Mes produits Carrefour</router-link></li>
                    <li class=""><router-link to=""> Mes avantages</router-link></li>
                    <li class=""><router-link to=""> Nos magasins</router-link></li>
                </ul>
            </div>
            <div class="information max-sm:justify-self-start max-sm:my-6">
                <h3 class="mb-4 font-semibold text-gray-800">Information</h3>
                <ul class="grid gap-4 text-gray-600">
                    <li><router-link to="">About Us</router-link></li>
                    <li><router-link to="">Contact Us</router-link></li>
                    <li><router-link to="">My Order</router-link></li>
                    <li><router-link to="">Terms & Conditions</router-link></li>
                </ul>
            </div>
            <div class="join_us grid gap-4">
                <h3 class="font-semibold text-gray-800">Join Our Newsletter Now</h3>
                <p class="text-gray-500">Get E-mail updates about our latest shop and special offres.</p>
                <input type="email" placeholder="Enter your e-mail" class="rounded-md bg-zinc-600 py-1 px-4">
            </div>
        </div>
        <hr class="w-5/6 my-4">
        <div class="copyright place-self-start w-5/6 mb-4 mx-auto text-gray-800">&copy; CopyRight {{date}} By Oussama Haddi. All Right Reserved</div>
    </footer>
</template>
<script setup>
    const date = new Date().getFullYear();
</script>
