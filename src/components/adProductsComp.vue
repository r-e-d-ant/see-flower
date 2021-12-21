
<template>
        <!-- section four -->
        <section class="section section-four">
            <div class="product-ad-container" v-for="adProduct in adProducts" :key="adProduct['product-id']">
                <img :src="adProduct['product-image']" alt="product ad" class="product-ad-img">
                <div class="product-ad-info-container">
                    <h3 class="product-ad-title">{{ adProduct['product-name'] }}</h3>
                    <ul class="product-ad-description-container">
                        <li class="product-ad-description product-ad-description-1">{{ adProduct['product-description'] }}</li>
                    </ul>
                    <img :src="adProduct['product-rate']" alt="product rate" class="product-rate">
                </div>
            </div>
        </section>
</template>

<script>
export default {
    props: ['adProducts'],
    setup() {},
}
</script>

<style scoped>
/* -- section four -- */
.section-four {
    display: none;
    margin: 2.5rem 0;
    padding: 1rem;
}
@media screen and (min-width: 1200px) {
    .section-four {
        display: block;
    }
}
.product-ad-container {
    display: flex;
}
.product-ad-info-container {
    margin-left: 1rem;
}
.product-ad-title {
    margin-bottom: .5rem;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: .5rem;
}
.product-ad-title::before {
    content: "";
    background-color: var(--second-clr);
    height: .2rem;
    width: 14.8rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.product-ad-description {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .002rem;
    line-height: 1.5rem;
    max-width: 30rem;
    margin-top: 1.2rem;
}
.product-ad-description-1,
.product-ad-description-2 {
    margin-bottom: 1.2rem;
}
@media screen and (min-width: 580px) {
    .product-ad-img {
        width: 589px;
        height: 407.06px;
    }
}
</style>