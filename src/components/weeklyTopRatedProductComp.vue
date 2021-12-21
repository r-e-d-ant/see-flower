
<template>
    <!-- section five -->
        <section class="section section-five">
            <h2 class="section-title">Weekly top rated products</h2>
            <div class="weekly-products-container products-container">
                <div class="product" v-for="weeklyTopRatedProduct in weeklyTopRatedProducts" :key="weeklyTopRatedProduct['product-id']">
                    <img :src="weeklyTopRatedProduct['product-image']" alt="product image" class="product-img">
                    <div class="products-info-container">
                        <a href="#" class="product-title-link"><h3 class="product-title">{{ weeklyTopRatedProduct['product-name'] }}</h3></a>
                        <p class="product-description">{{ weeklyTopRatedProduct['product-description'] }}</p>
                        <img :src="weeklyTopRatedProduct['product-rate']" alt="product rate" class="product-rate">
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    props: ['weeklyTopRatedProducts'],
    setup() {},
}
</script>
<style scoped>
/* -- section five -- */
.section-five {
    padding: 0 .5rem;
    margin: 2.5rem 0;
}
.section-five .section-title::before {
    width: 12rem;
}
@media screen and (min-width: 612px) {
    .section-five {
        padding: 0 1rem;
    }
}
</style>