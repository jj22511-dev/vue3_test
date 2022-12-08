import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const cartStore = defineStore('cart', ()=> {
    /**
     * States
     */
    const items:any = ref([]);

    /**
     * Getters
     */
    const getItemsLength = computed(() => items.value.length)
    const getTotalQuantity = computed(() => {
        return items.value.reduce((totalVal:number, item:any)=> {
            return totalVal + item.qty
        }, 0)
    })

    const getTotalAmount = computed(() => {
        return items.value.reduce((totalVal:number, item:any)=> {
            return totalVal + (item.qty * item.price)
        }, 0)
    })

    /**
     * Actions
     */
    const addToCart = (data:any) => items.value.push(data)
    const updateCartItem = (itemIndex:number, data:any) => {
        let item = items.value.find((v:any, i:number) => i === itemIndex);
        const isObject = (obj:any) => Object.prototype.toString.call(obj) === '[object Object]';
        
        if (!item) return
        if (!isObject(data)) return;

        const keys = Object.keys(data);
        if (keys.length === 0) return;

        // set value
        keys.forEach((k) => {
            if (item.hasOwnProperty(k)) item[k] = parseInt(data[k])     
        })   
    }

    return {
        // states
        items,
        // getters
        getItemsLength,
        getTotalQuantity,
        getTotalAmount,
        // actions
        addToCart,
        updateCartItem
    }
})