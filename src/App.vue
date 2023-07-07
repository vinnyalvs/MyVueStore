<script >
import Navbar from '@/components/Navbar.vue';

export default {
  name: "App",
  components: {
    Navbar,
  },
};

</script>

<template> 
  <Navbar />
  <div class ="page-wrap">
    <router-view />
  </div>
</template>

