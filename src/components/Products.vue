<script setup lang="ts">
import { FakeStoreService } from '../services/fakeStoreService'
import { onBeforeMount, ref } from 'vue'

// https://markus.oberlehner.net/blog/vue-3-composition-api-ref-vs-reactive/
let isLoaded = ref(false)
let products = ref([])

// Component Lifecycle Hooks
onBeforeMount(async() => {
    products.value = await FakeStoreService.fetchItems()
    isLoaded.value = true

    scrollTo(0,0)
})
</script>

<template class="h-screen">
    <div v-show="!products.length" class="text-lg flex justify-center text-red-700 uppercase p-10" >
        {{ !isLoaded ? 'Loading...' : 'No Items Available...' }}
    </div>

    <main class="p-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center">
        <div v-show="products.length" class="relative group cursor-pointer flex flex-col" v-for="(item, index) in products" :key="index">
            <div class="w-60 h-auto  grayscale group-hover:filter-none ease-in duration-150 group-hover:scale-110">
                <img :src="item['image']" :alt="item['title']" />
            </div>
            <div class="absolute inset-0 flex opacity-0 group-hover:opacity-100">
                <span class="m-auto w-full text-center p-2 text-zinc-900  bg-orange-400 rounded font-semibold hover:scale-110">
                    <router-link :to="`/product/${item['id']}`">View Details</router-link>
                </span>
            </div>
        </div>
    </main>
</template>