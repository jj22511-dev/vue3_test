<script setup lang="ts">
    import { cartStore } from '../stores/cartStore';
    const cart = cartStore();
</script>

<template>
    <header class="bg-zinc-900 0 p-5 shadow text-base text-orange-400 font-bold">
        <div class="flex justify-between items-center mx-10">
            <div class="flex gap-2">
                <div class="w-7">
                    <svg class="fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    
                </div>
                <span class="text-xl">FakeShop</span>
            </div>
            <ul class="flex gap-4 text-lg">
                <router-link to="/">
                    <li class="px-1 py-2 cursor-pointer">About</li>
                </router-link>
                <router-link to="/products">
                    <li class="px-1 py-2 cursor-pointer border-b-2 border-white">Products</li>
                </router-link>
                <router-link to="/cart">
                    <li class="px-1 py-2 cursor-pointer">Cart ({{ cart.getItemsLength }})</li>
                </router-link>  
            </ul>
        </div>
    </header>
</template>