<template>
    <div class="nav-bar">
        <router-link to="/products" class="products-link">
            <div class="logo-wrap">
            <img :src="logo" alt="Store logo">
        </div>
        </router-link>

        <router-link to="/cart" class="cart-link">
            <button>Go to Shopping cart</button>
         </router-link>
    </div>
</template>

<script>
    import logo from '@/assets/logo-hexagon.svg';
    export default {
        name : "Navbar",
        data(){
            return {
                logo,
            }
        }
    }
</script>