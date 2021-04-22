<template>
  <div id="app">
    <!-- Header -->
  <Header></Header>
  <Navbar></Navbar>
  <router-view></router-view>
  <br>
  <Footer></Footer>
  
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import router from './router';
export default {
  name: 'app',
  metaInfo: {
    title: 'BÁO MỚI',
    titleTemplate: 'BÁO MỚI'
  },
  components: {
    Header,
    Navbar,
    Footer,
    router,
  },
   
}
</script>
<style>

</style>

