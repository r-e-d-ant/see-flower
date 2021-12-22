
<template>
    <!-- section three -->
        <section class="section section-three" v-for="hookProduct in hookProducts" :key="hookProduct.id">
            <div class="product-info-container-show_case">
                <router-link class="product-title-link" :to="{ name: 'Details', params: { id: hookProduct.id, category: 'hookProducts' }}">
                    <h3 class="product-title-show_case product-title">{{ hookProduct.name }}</h3>
                </router-link>

                <p class="product-description-show_case">{{ hookProduct.description }}</p>
                <img :src="hookProduct.rate" alt="product rate" class="product-rate">
            </div>

            <img :src="hookProduct.image" alt="product show case" class="product-img-show_case">
        </section>
</template>

<script>
export default {
    props: ['hookProducts'],
    setup() {},
}
</script>

<style scoped>
/* -- section three -- */
.section-three {
    margin: 2.5rem 0;
    background: linear-gradient(278.35deg, #DFDFE1 45.55%, rgba(223, 223, 225, 0) 100%);
    position: relative;
}

@media screen and (max-width: 920px) {
    .section-three::before {
        content: "";
        width: 100%;
        position: absolute;
        inset: 0;
        background: linear-gradient(278.35deg, #DFDFE1 45.55%, rgba(223, 223, 225, 0) 100%);
    }
}
.product-info-container-show_case {
    position: absolute;
    top: 0;
    left: 0;
    padding: .2rem .5rem;
}

@media screen and (min-width: 612px) {
    .product-info-container-show_case {
        padding: 1rem;
    }
}
.product-title-show_case {
    margin-bottom: .5rem;
    font-size: 1.21rem;
    position: relative;
    padding-bottom: .2rem;
}
.product-title-show_case::before {
    content: "";
    background-color: var(--second-clr);
    height: .2rem;
    width: 11.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.product-description-show_case {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: .002rem;
    line-height: 1.5rem;
    max-width: 30rem;
}
@media screen and (min-width: 550px) {
    .product-title-show_case {
        margin-bottom: .8rem;
        padding-bottom: .5rem;
        font-size: 1.5rem;
    }
    .product-title-show_case::before {
        width: 14.8rem;
    }
    .product-description-show_case {
        font-size: 1.1rem;
        line-height: 1.8rem;
    }
    .first_product-description-show_case {
        margin-bottom: 1rem;
    }
    .product-info-container-show_case {
        top: 2rem;
    }
}
@media screen and (min-width: 550px) {
    /* -- section three -- */
    .section-three {
        display: flex;
        justify-content: flex-end;
    }
    .product-img-show_case {
        width: 612px;
        height: 461px;
    }
}
</style>