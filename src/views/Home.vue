
<template>
  <div class="main">
    <section class="section section-one">
      <img src="https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Fhook_flower.png?alt=media&token=ec4e7a76-8f72-40bf-b695-47fb2b3e4e54" alt="beautiful flower" class="hook-flower-img">
        <div class="hook-text__container">
          <h1 class="hook-title">The use of the word creatively</h1>
            <p class="hook-text">
              But, to creatively add value takes a more thorough understanding of the business environment in which you work
            </p>
        </div>
    </section>
    <topRatedProductsComp :products="products"></topRatedProductsComp>

    <hookProductComp :hookProducts="hookProducts"></hookProductComp>
    <adProductsComp :adProducts="adProducts"></adProductsComp>
    <weeklyTopRatedProductComp :weeklyTopRatedProducts="weeklyTopRatedProducts"></weeklyTopRatedProductComp>
  </div>
</template>

<script>

import allProducts from "../composables/getProducts"
import getProducts from "../firebase"

import topRatedProductsComp from "../components/topRatedProductsComp"
import adProductsComp from "../components/adProductsComp"
import hookProductComp from "../components/hookProductComp"
import weeklyTopRatedProductComp from "../components/weeklyTopRatedProductComp"
import { onMounted, ref } from 'vue'

export default {
    name: "Home",
    components: { topRatedProductsComp, hookProductComp, adProductsComp, weeklyTopRatedProductComp },
    setup() {

        const ToplocalProducts = allProducts
        // const topRatedProducts = products['top-rated-products']
        const adProducts = ToplocalProducts['ad-products']
        const hookProducts = ToplocalProducts['hook-product']
        const weeklyTopRatedProducts = ToplocalProducts['weekly-top-rated']

        const { products, error, load, addProduct } = getProducts()
        load()

        // onMounted(() => {
        //     addProduct("Green white flower jar", "But, to creatively add value takes a more thorough understanding of the business environment in which you work", "https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Frate.svg?alt=media&token=f0db1a98-ecbe-4284-81d2-1d79cbfc34f6", "https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Fproduct-pics%2Fproduct_pic_4.png?alt=media&token=1cbf60e7-7e53-4301-8af5-c2ff4f4fa7ec")
        // })

        return { products, ToplocalProducts, // topRatedProducts,
        hookProducts, adProducts, weeklyTopRatedProducts }
    },
};
</script>


<style scoped>
.section-one {
    display: flex;
    position: relative;
    background: linear-gradient(270deg, #F7DACA 0%, rgba(247, 218, 202, 0) 100%);
}
.hook-flower-img {
    width: 100%;
    height: 240px;
}
@media screen and (min-width: 364px) {
    .hook-flower-img {
        width: 360px;
        height: 240px;
    }
}
.hook-text__container {
    position: absolute;
    right: 0;
    margin-top: 2rem;
    padding: 0 .5rem;
}
@media screen and (min-width: 612px) {
    .hook-text__container {
        padding: 0 1rem;
    }
}
.hook-title {
    font-size: 1.4rem;
    line-height: 1.9rem;
    position: relative;
    padding-bottom: .5rem;
}
.hook-title::before {
    content: "";
    background-color: var(--second-clr);
    height: .2rem;
    width: 13.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.hook-text {
    max-width: 28rem;
    font-size: 1rem;
    line-height: 1.8rem;
    margin-top: 1.1rem;
}
@media screen and (max-width: 612px) {
    .section-one {
        background: transparent;
    }
    .section-one::before {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        opacity: .9;
        background-color: var(--second-clr-alt);
    }
    .hook-text {
        line-height: 1.7rem;
        margin-top: .8rem;
    }
}
</style>
