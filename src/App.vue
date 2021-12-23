<template>
<div>
  <Header :main="main"/>
  <main id="main" ref="main"><router-view/></main>
  <Footer/>
</div>
</template>

<script>
import { ref } from "vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer },
  setup() {
    const main = ref(null)
    return { main }
  }
}
</script>
<style>
@import './assets/css/style.css';
.hide-background {
    position: relative;
}
.hide-background::before {
    z-index: 2;
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    background-color: #2c14079d;
}
</style>
