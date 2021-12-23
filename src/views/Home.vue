
<template>
  <section class="section section-one">
      <img src="https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Fhook_flower.png?alt=media&token=ec4e7a76-8f72-40bf-b695-47fb2b3e4e54" alt="beautiful flower" class="hook-flower-img">
        <div class="hook-text__container">
          <h1 class="hook-title">“Flowers don’t tell, they show.”</h1>
            <p class="hook-text">
              Flowers always make people better, happier and more helpful; they are sunshine, food and medicine for the soul.
            </p>
        </div>
    </section>
    <topRatedProductsComp :topRatedProducts="topRatedProducts"></topRatedProductsComp>

    <hookProductComp :hookProducts="hookProducts"></hookProductComp>
    <adProductsComp :adProducts="adProducts"></adProductsComp>

    <weeklyTopRatedProductComp :weeklyTopRatedProducts="weeklyTopRatedProducts"></weeklyTopRatedProductComp>
</template>

<script>

import getProducts from "../firebase"

import topRatedProductsComp from "../components/topRatedProductsComp"
import adProductsComp from "../components/adProductsComp"
import hookProductComp from "../components/hookProductComp"
import weeklyTopRatedProductComp from "../components/weeklyTopRatedProductComp"

export default {
    name: "Home",
    components: { topRatedProductsComp, hookProductComp, adProductsComp, weeklyTopRatedProductComp },
    setup() {
        const { load, topRatedProducts, hookProducts, adProducts, weeklyTopRatedProducts } = getProducts()

        // load data
        load("products/topRatedProducts", topRatedProducts)
        load("products/hookProducts", hookProducts)
        load("products/adProducts", adProducts)
        load("products/weeklyProducts", weeklyTopRatedProducts)
        
        return { topRatedProducts, hookProducts, adProducts, weeklyTopRatedProducts }
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
    position: relative;
    padding-bottom: .5rem;
}
.hook-text {
    max-width: 28rem;
    font-size: 1rem;
    line-height: 1.8rem;
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
