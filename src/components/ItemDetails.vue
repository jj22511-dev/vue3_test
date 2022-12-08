<script setup lang="ts">
import { FakeStoreService } from '../services/fakeStoreService'
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
import { cartStore } from '../stores/cartStore';
import { useRoute, useRouter } from 'vue-router'

const cart = cartStore()
const route = useRoute()
const router = useRouter()

/**
 * States
 */
const itemDetails:any = ref({})
const quantity = ref(1)

/**
 * Computed
 */
const roundedRating = computed(() => Math.round(itemDetails.value.rating?.rate || 0))

/**
 * Component Lifecycle Hooks
 */
onBeforeMount(async() => {
    const productID:any = route?.params?.productID;
    itemDetails.value = await FakeStoreService.getItemDetails(productID)
})

/**
 * Functions
 */

const add = () => {
    const isAdded = cart.addToCart({ ...itemDetails.value, qty: quantity });
    if (isAdded) alert('Successfully Added to Cart')
}
const goBack = () => router.push('/products')

</script>

<template>
    <div class="p-5">
        <button class="absolute bg-black text-white px-5 py-2 rounded-sm" @click="goBack">Back</button>
        <div class="grid lg:grid-flow-col p-20">
            <div>
                <img class="p-10 border-2 border-gray-200" :src="itemDetails['image']" alt="">
            </div>
            <div class="flex flex-col p-10 space-y-2 bg-gray-200">
                <span class="text-2xl font-bold">{{ itemDetails['title'] }}</span>
                <span class="capitalize">{{ itemDetails['category'] }}</span>
                <div class="flex items-center space-x-2">
                    <div class="flex">
                        <svg v-for="n in 5" :key="n"
                            :class="[roundedRating >= n ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500', 'w-5 h-5']"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <span class="text-sm font-bold">({{ itemDetails['rating']?.count }})</span>
                </div>

                <p>{{ itemDetails['description']}}</p>
                <p>{{ itemDetails['price'] }}</p>
                
                <div class="group">
                    <input class="group-hover:border-zinc-800 pl-8 w-20 h-10 border-2 border-orange-400 rounded-l-lg" type="number" v-model="quantity">
                    <button class="group-hover:bg-zinc-800 group-hover:text-orange-400 bg-orange-400 text-zinc-800 py-2 px-8 font-bold rounded-r-lg" @click="add">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>