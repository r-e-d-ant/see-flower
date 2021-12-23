
<template>
    <!-- section two -->
        <section class="section section-two">
            <h2 class="section-title">Top rated products</h2>
            <div class="products-container">
                <!-- product one -->
                <div class="product product-one" v-for="product in allProducts" :key="product.id">
                    <img :src="product.image" alt="product image" class="product-img">
                    <div class="products-info-container">
                        <router-link class="product-title-link" :to="{ name: 'Details', params: { id: product.id, category: 'allProducts'}}">
                            <h3 class="product-title">{{ product.name }}</h3>
                        </router-link>
                        <p class="product-description">{{ product.description }}</p>
                        <img :src="product.rate" alt="product rate" class="product-rate">
                    </div>
                </div>
            </div>
        </section>

        <!-- section three -->
        <weeklyTopRatedProductComp :weeklyTopRatedProducts="weeklyTopRatedProducts"></weeklyTopRatedProductComp>
</template>

<script>
import getProducts from "../firebase"
import weeklyTopRatedProductComp from "../components/weeklyTopRatedProductComp"
import { onMounted } from 'vue'

export default {
    name: "Products",
    components: { weeklyTopRatedProductComp },

    setup() {
        const { load, allProducts, weeklyTopRatedProducts } = getProducts()
        
        // get data on mounted
        onMounted(() => {
            load("products/weeklyProducts", weeklyTopRatedProducts)
            load("products/allProducts", allProducts)
        })

        return { allProducts, weeklyTopRatedProducts }
    },
}
</script>

<style scoped>
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
