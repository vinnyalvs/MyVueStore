<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageName" :alt="product.name">
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button class="add-to-cart">Add to cart</button>
         </div>
    </div>
    <div v-else>
        <NotFound />
    </div>
    
</template>

<script>
import {products} from '../tempdata.js';
import NotFound from './NotFound.vue';

  /**
     * Retrieves the product with the given ID from the products list.
     *
     * @return {Object} The product object with the matching ID.
     */
export default {
    name: 'Product',
    data(){
        return {
            product:products.find(product => product.id == this.$route.params.productId)
        }
    },
    components: {
        NotFound
    }
}
</script>