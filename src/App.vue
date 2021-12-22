<template>
<div>
  <Header/>
  <main id="main"><router-view/></main>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>
<style>
@import './assets/css/style.css';
</style>
