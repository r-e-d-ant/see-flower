
<template>
    <section class="section section-one-to-cart to-cart-product-infos-container" v-if="oneProduct">
            <!-- <div class="to-cart-product-img"></div> -->
            <img :src="oneProduct.image" :alt="oneProduct.name" class="to-cart-img">
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
import { onMounted } from 'vue'
import getProducts from "../firebase"

export default {
    props: ['id', 'category'],
    setup(props) {
        const { getOneProduct, oneProduct } = getProducts()
        onMounted(() => {
            getOneProduct(props.category, props.id)
        })
        return { oneProduct }
    },
}
</script>

<style scoped>
.section-one-to-cart,
.section-two-to-cart {
    padding: .8rem .5rem;
}
.section-one-to-cart {
    margin-bottom: 4rem;
}
@media screen and (min-width: 612px) {
    .section-one-to-cart,
    .section-two-to-cart {
        padding: 1rem;
    }
    .section-one-to-cart {
        margin-bottom: 3rem;
    }
}

/* ---- to cart stylings ---- */
@media screen and (min-width: 768px) {
    .to-cart-img {
        width: 50%;
    }
}
@media screen and (min-width: 1000px) {
    .to-cart-img {
        width: 582px;
        height: 377px;
    }
}
.to-cart-product-infos {
    margin-top: .5rem;
}
.to-cart-product-title {
    font-weight: 600;
}
.to-cart-product-description {
    max-width: 50rem;
    white-space: pre-line;
    font-weight: 300;
}
.add-to-cart-btn {
    margin-top: 1rem;
    padding: .9rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 2.5px;
    letter-spacing: .05rem;
}
@media screen and (min-width: 768px) {
    .section-one-to-cart {
        display: flex;
    }
    .to-cart-product-infos {
        margin-left: 1rem;
        margin-top: 0;
    }
}

</style>