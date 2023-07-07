<template>
    <h1>Products</h1>
    <ProductsList :products="products"/>
</template>

<script>
import {products} from '../tempdata.js';
import ProductsList from '../components/ProductsList.vue';

export default {
    name: 'Products',
    components: {ProductsList},
    data(){
        return {
            products
        }
    }
}
</script>