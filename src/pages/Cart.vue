<template>
    <h1>My Cart</h1>
    <div v-if="cartItems.length>0">
        <CartProductsList :cartItems="cartItems"/>
        <button class="checkout-button" @click="log">Proceed to checkout</button>
    </div>
    <div v-if="cartItems.length===0"><p>Cart is empty</p></div>
</template>

<script>
import {cartItems} from '../tempdata.js';
import CartProductsList from '../components/CartProductsList.vue';
/**
 * Returns the data object for the Vue component.
 *
 * @return {Object} The data object containing the cart items.
 */
export default {
    name: 'Cart',
    components: {
        CartProductsList
    },
    data() {
        return {
            cartItems,
        }
    },
    methods: {
        log: function(){
            console.log("Cliked");
            alert("Going to checkout page...");
        }
    }
}
</script>