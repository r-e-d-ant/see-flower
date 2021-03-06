<template>
     <section class="section-one-in_cart" v-if="inCartProducts && Object.keys(inCartProducts).length">
            <div class="carts-container">
                <!-- cart one -->
                <div class="cart" v-for="inCartProduct in inCartProducts" :key="inCartProduct.id">
                    <div class="cart-product-info-container">
                        <img :src="inCartProduct.image" :alt="inCartProduct.name" class="cart-product-img">
                        <div class="cart-product-info">
                            <h2 class="cart-product-title">{{ inCartProduct.name }}</h2>
                            <span class="cart-product-price">{{ inCartProduct.price }} $</span>
                            <button class="remove-cart-btn cart-btns" @click="removeFromCart(inCartProduct.cartId)">remove cart</button>
                        </div>
                    </div>
                    <i class="bx bx-trash delete-cart-icon" title="delete cart" @click="removeFromCart(inCartProduct.cartId)"></i>
                </div>
            </div>

            <div class="cart-total-container">
                <div class="cart cart-total">
                    <div class="cart-product-info-container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Fcart-total.svg?alt=media&token=090e12c3-727c-4caf-98ce-f50ffd9462e6" alt="" class="filled-cart-icon">
                        <div class="cart-product-info">
                            <h2 class="cart-product-title">Total</h2>
                            <span class="in-cart-total">0 $</span>
                        </div>
                    </div>
                    <button class="checkout-btn cart-btns">CHECKOUT</button>
                </div>
            </div>
        </section>
     <section class="section-one-in_cart" v-else>
         <div class="empty-cart-container">
             <h2 class="empty-cart-info">The cart is empty!</h2>
             <i class="bx bx-cart"></i>
         </div>
     </section>

</template>

<script>
import { onMounted, ref } from 'vue'
import getProducts from "../firebase"

export default {
    setup() {
        const { load, inCartProducts, removeFromCart } = getProducts()

        onMounted(() => {
            load("inCart", inCartProducts)
        })

        return { inCartProducts, removeFromCart }
    },
}
</script>

<style scoped>
/* -- in cart stylings -- */
.section-one-in_cart {
    padding: .8rem .5rem;
}
@media screen and (min-width: 612px) {
    .section-one-in_cart {
        padding: 1rem;
    }
}
.cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-clr);
    padding: .8rem;
    margin: 2rem 0;
    border-radius: 5px;
    transition: box-shadow;
}
.carts-container .cart:hover {
    box-shadow: 2px 5px 5px hsl(0, 0%, 90%);
}

/* -- -- -- */
.cart-product-info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.cart-product-img {
    border-radius: 2.5px;
}
@media screen and (min-width: 440px) {
    .cart-product-info-container {
        flex-direction: row;
        width: auto;
    }
    .cart-product-img {
        width: 10rem;
        border-radius: 2.5px;
    }
}
@media screen and (min-width: 600px) {
    .cart-product-info-container {
        align-items: center;
    }
}
.cart-product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: .5rem;
}
.cart-product-title {
    font-weight: 400;
    font-size: 1.3rem;
    max-width: 20rem;
    margin-bottom: .5rem;
}
@media screen and (min-width: 440px) {
    .cart-product-info {
        justify-content: space-between;
        margin-top: 0;
        margin-left: 1rem;
    }
}
@media screen and (min-width: 600px) {
    .cart-product-title {
        margin-bottom: 1rem;
    }
}
.cart-product-price,
.in-cart-total {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: .5rem;
    color: var(--second-clr);
}
@media screen and (min-width: 600px) {
    .cart-product-title {
        margin-bottom: 0;
    }
}

/* -- -- -- */
.delete-cart-icon {
    cursor: pointer;
    color: var(--danger-clr);
    font-size: 2rem;
    transition: color 150ms;
    position: relative;
    display: none;
}
@media screen and (min-width: 600px) {
    .delete-cart-icon {
        display: block;
    }
}
.delete-cart-icon:hover {
    color: hsl(0, 55%, 45%);
}

/* -- -- -- */
.filled-cart-icon {
    width: 7rem;
    margin-right: 3rem;
}
@media screen and (max-width: 440px) {
    .cart-total {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .filled-cart-icon {
        display: none;
    }
}
.checkout-btn {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: .05rem;
    padding: 1rem;
    border-radius: 2.5px;
}
@media screen and (max-width: 440px) {
    .cart-total {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .filled-cart-icon {
        display: none;
    }
    .checkout-btn {
        padding: .7rem;
        font-size: 1rem;
        font-weight: 400;
    }
}
.remove-cart-btn {
    font-size: 1rem;
    font-weight: 400;
    padding: .7rem;
    border-radius: 2.5px;
    letter-spacing: .05rem;
    background-color: #c84242d0;
}
.remove-cart-btn:hover {
    background-color: var(--danger-clr);
}
@media screen and (min-width: 600px) {
    .remove-cart-btn {
        display: none;
    }
}

/* ------- */
.empty-cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.empty-cart-container i {
    font-size: 6rem;
    margin-top: 2rem;
    color: var(--primary-clr-alt);
}

.empty-cart-info {
    color: var(--primary-clr-alt);
    font-size: 2.5rem;
}
</style>