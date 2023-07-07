<template>
    <div class="product-container" v-for="product in cartItems" :key="product.id">
        <img class="product-image" :src="product.imageName" :alt="product.name">
        <div class ="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <button class="remove-button">Remove from cart</button>
        </div>
    </div>
</template>

<script>
import { cartItems } from '../tempdata';
export default {
    name: 'CartProductsList',
    props: ['cartItems'],
}
</script>