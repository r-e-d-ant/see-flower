<template>
 <section class="section section-two">
        <h2 class="section-title">Top rated products</h2>
        <div class="products-container" v-if="topRatedProducts">
                <div class="product product-one" v-for="topRatedProduct in topRatedProducts" :key="topRatedProduct.id">
                    <img :src="topRatedProduct.image" alt="product image" class="product-img">
                    <div class="products-info-container">
                        <router-link class="product-title-link" :to="{ name: 'Details', params: { id: topRatedProduct.id, category: 'topRatedProducts'}}">
                            <h3 class="product-title"> {{ topRatedProduct.name }} </h3>
                        </router-link>
                        <p class="product-description">{{ topRatedProduct.description }}</p>
                        <img :src="topRatedProduct.rate" alt="product rate" class="product-rate">
                    </div>
                </div>
            </div>
    </section>
</template>
<script>

export default {
    props: ['topRatedProducts'],
    setup() {}
}
</script>

<style scoped>
/* -- home product section stylings --*/
/* -- section two -- */
.section-two {
    margin: 2.5rem 0;
    padding: 0 .5rem;
}
@media screen and (min-width: 612px) {
    .section-two {
        padding: 0 1rem;
    }
}
.section-two .section-title::before {
    width: 6.7rem;
}
</style>