
<template>
    <section class="section section-one-to-cart to-cart-product-infos-container" v-if="oneProduct">
            <!-- <div class="to-cart-product-img"></div> -->
            <img :src="oneProduct.image" alt="gold flower" class="to-cart-img">
            <div class="to-cart-product-infos">
                <h2 class="to-cart-product-title">{{ oneProduct.name }}</h2>
                <p class="to-cart-product-description">
                    {{ oneProduct.description }}
                </p>
                <button class="add-to-cart-btn cart-btns">Add To Cart</button>
            </div>
        </section>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import getProducts from "../firebase"

export default {
    props: ['id'],
    setup(props) {
        const { getOneProduct, oneProduct } = getProducts()
        onMounted(() => {
            getOneProduct(props.id)
        })
        return { oneProduct }
    },
}
</script>

<style scoped>

</style>