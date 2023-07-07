<template>
    <h1>{{name}}</h1>
    <h3>{{subtitle}}</h3>
</template>

<script>
 export default {
        name: 'DeckName',
        props: ['name','subtitle']
    };
</script>
    
<style>
 h1 {
        font-style: italic;
    }
</style>
    
    