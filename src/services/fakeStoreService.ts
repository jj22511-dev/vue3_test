export const FakeStoreService = {
    items: [],

    async fetchItems() {
        if (Array.isArray(this.items) && this.items.length) {
            return this.items;
        }
        
        try {
            let res = await fetch('https://fakestoreapi.com/products');
            let data = await res.json();
            this.items = this.getCustomSortedItems(data);
        } catch (err) {
            console.log(err)
        }

        return this.items   
    },

    async getItemDetails(product_id: string) {
        let res = await fetch(`https://fakestoreapi.com/products/${product_id}`)
        let data = await res.json();
        return data
    },

    getCustomSortedItems(items: any[]) {
        const sortBasis = ['men', 'women', 'jewelery']
        let results:any = [];
        console.log('sorting item...')
        sortBasis.forEach((b) => {
            let filteredItems = items.filter((i) => i.category.includes(b))
            if (filteredItems.length) {
                results.push(...filteredItems)
            } 
        }) 

        return results
    }
}