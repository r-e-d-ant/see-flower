
<template>
    <!-- section five -->
        <section class="section section-five">
            <h2 class="section-title">Weekly top rated products</h2>
            <div class="weekly-products-container products-container">
                <div class="product" v-for="weeklyTopRatedProduct in weeklyTopRatedProducts" :key="weeklyTopRatedProduct.id">
                    <img :src="weeklyTopRatedProduct.image" alt="product image" class="product-img">
                    <div class="products-info-container">
                        <router-link class="product-title-link" :to="{ name: 'Details', params: { id: weeklyTopRatedProduct.id, category: 'weeklyProducts' }}">
                            <h3 class="product-title"> {{ weeklyTopRatedProduct.name }} </h3>
                        </router-link>
                        <p class="product-description">{{ weeklyTopRatedProduct.description }}</p>
                        <img :src="weeklyTopRatedProduct.rate" alt="product rate" class="product-rate">
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