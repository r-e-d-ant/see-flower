
<template>
    <section class="section section-one-to-cart to-cart-product-infos-container" v-if="oneProduct">
        <img :src="oneProduct.image" :alt="oneProduct.name" class="to-cart-img">
        <div class="to-cart-product-infos">
            <h2 class="to-cart-product-title">{{ oneProduct.name }}</h2>
            <p class="to-cart-product-description">{{ oneProduct.description }}</p>
            <button class="add-to-cart-btn cart-btns">Add To Cart</button>
        </div>
    </section>
    
    <div class="section-two-to-cart">
        <div class="nav-buttons">
            <button class="go-to_reviews-btn goto-btns" ref="reviews" @click="showReviewsComp">Reviews</button>
            <button class="go-to_make_review-btn goto-btns" ref="makeReview" @click="showMakeReviewComp">Make a Review</button>
        </div>
        <userReview v-if="showReviews" @click="showReviewsComp"></userReview>
        <makeReview v-if="showMakeReview" @click="showMakeReviewComp"></makeReview>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import getProducts from "../firebase"

import userReview from "../components/userReview"
import makeReview from "../components/makeReview"

export default {
    props: ['id', 'category'],
    components: { userReview, makeReview },
    setup(props) {

        const showMakeReview = ref(false)
        const showReviews = ref(true)

        const showMakeReviewComp = () => {
            showMakeReview.value = true
            showReviews.value = false
        }
        const showReviewsComp = () => {
            showMakeReview.value = false
            showReviews.value = true
        }

        const { getOneProduct, oneProduct } = getProducts()
        onMounted(() => {
            getOneProduct(props.category, props.id)
        })
        return { oneProduct, showMakeReviewComp, showMakeReview, showReviewsComp, showReviews }
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

/* -- nav buttons -- */
.nav-buttons {
    display: flex;
    position: relative;
    padding-top: .1rem;
}
.nav-buttons::before {
    content: "";
    position: absolute;
    background-color: hsla(21, 72%, 7%, 17%);
    top: 0;
    height: .1rem;
    width: 100%;
}
.goto-btns, .submit-review-btn {
    cursor: pointer;
    border: none;
    padding: .9rem 0;
    font-size: 1rem;
    font-weight: 500;
    width: 9rem;
}
.go-to_reviews-btn {
    border-bottom-left-radius: 5px;
    color: var(--primary-clr);
    background-color: var(--second-clr);
}
.go-to_make_review-btn {
    border-bottom-right-radius: 5px;
    background-color: var(--second-clr-alt);
    transition: 150ms background-color;
}
.go-to_make_review-btn:hover {
    background-color: hsl(21, 74%, 85%);
}
</style>