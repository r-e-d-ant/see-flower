
<template>
    <header>
        <!-- upper header -->
        <div class="upper-header-container">
            <div class="upper-header">
                <div class="left-side-links">
                    <!-- menu icons -->
                    <div class="menu-icons">
                        <i class="bx bx-menu open-menu-icon" ref="openMenuIcon" @click="openMenuFunc"></i>
                        <i class="bx bx-x close-menu-icon" ref="closeMenuIcon" @click="closeMenuFunc"></i>
                    </div>

                    <!-- * View Phone | Desktop * -->
                    <!-- logo -->
                    <div class="logo">SeeFlower</div>
    
                    <!-- ship info, link -->
                    <!-- * View Desktop * -->
                    <p class="ship-address view-desktop">
                        <i class="bx bx-map"></i>
                        <span class="grouped-link">
                            <a href="#" class="upper-text-link">Deliver to</a>
                            <a href="#" class="lower-text-link">Earth</a>
                        </span>
                    </p>
                </div>

                <!-- search products -->
                <!-- * View Desktop * -->
                <form class="search-bar view-desktop">
                    <div class="form-container">
                        <input type="text" class="search-input">
                        <button type="submit" class="search-icon-container">
                            <i class="bx bx-search"></i>
                        </button>
                    </div>
                </form>
    
                <div class="right-side-links">
                    <!-- * View Phone * -->
                    <span class="user-link view-phone">
                        <a href="#" class="upper-text-link">Sign in ></a>
                        <a href="#" class="lower-text-link">
                            <i class='bx bx-user'></i>
                        </a>
                    </span>

                    <!-- * View Desktop * -->
                    <span class="grouped-link view-desktop">
                        <a href="#" class="upper-text-link">Hello, Sign in</a>
                        <a href="#" class="lower-text-link">Accounts</a>
                    </span>

                    <!-- * View Desktop * -->
                    <span class="grouped-link view-desktop">
                        <a href="#" class="upper-text-link">Returns</a>
                        <a href="#" class="lower-text-link">& Orders</a>
                    </span>

                    <!-- * View Phone | Desktop * -->
                    <div class="cart-icon-container">
                        <i class='bx bx-cart cart-icon'></i>
                        <span class="grouped-link">
                            <router-link class="upper-text-link" to="in-cart" v-if="inCartProducts">{{ Object.keys(inCartProducts).length }} In</router-link>
                            <router-link class="lower-text-link" to="in-cart">Cart</router-link>
                        </span>
                    </div>
                </div>
            </div>

            <!-- * View Phone * -->
            <!-- search products -->
            <form class="search-bar view-phone">
                <div class="form-container">
                    <input type="text" class="search-input">
                    <div class="search-icon-container">
                        <i class="bx bx-search"></i>
                    </div>
                </div>
            </form>
        </div>

        <!-- lower header -->
        <div class="lower-header-desktop">
            <nav class="nav-bar" ref="navBar">
                <ul class="nav-lists">
                    <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="products">Products</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="about">About</router-link></li>
                </ul>
            </nav>
            <p class="view-phone ship-address-phone">
                <i class="bx bx-map"></i>
                <a href="#" class="upper-text-link">Deliver to Earth</a>
            </p>
        </div>
    </header>
</template>

<script>
import { ref } from 'vue'
import getProducts from "../firebase"
// import { openMenuFunc, closeMenuFunc } from "../composables/navBar"

export default {
    props: ['main'],
    setup(props) {
        const navBar = ref(null)
        const openMenuIcon = ref(null)
        const closeMenuIcon = ref(null)
        
        const openMenuFunc = () => {
            if(!navBar.value.classList.contains('show-nav-bar')) {
                navBar.value.classList.add('show-nav-bar');
                openMenuIcon.value.classList.add('hide-open-menu__icon');
                closeMenuIcon.value.classList.add('show-close-menu__icon');

                props.main.classList.add('hide-background')
            }
        }

        const closeMenuFunc = () => {
            if(navBar.value.classList.contains('show-nav-bar')) {
                navBar.value.classList.remove('show-nav-bar');
                openMenuIcon.value.classList.remove('hide-open-menu__icon');
                closeMenuIcon.value.classList.remove('show-close-menu__icon');
                
                props.main.classList.remove('hide-background')
            }
        }

        const { load, inCartProducts } = getProducts()
        // load products
        load("inCart", inCartProducts)

        return { inCartProducts, navBar, openMenuIcon, closeMenuIcon, openMenuFunc, closeMenuFunc }
    },
}
</script>

<style scoped>

/* -- header section -- */
header {
    display: flex;
    flex-direction: column;
}


.upper-header-container {
    background-color: var(--primary-clr);
    padding: .8rem .5rem;
    display: flex;
    flex-direction: column;
}
.upper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* -- left side links -- */
.left-side-links {
    display: flex;
    align-items: center;
}

/* -- -- -- */
.bxs-user-circle {
    cursor: pointer;
    font-size: 2.5rem;
    color: var(--second-clr-alt);
    transition: color 150ms;
}
.bxs-user-circle:hover {
    color: var(--second-clr);
}
.menu-icons {
    display: none;
}
.menu-icons
.bx {
    cursor: pointer;
    color: var(--second-clr);
    font-size: 2.2rem;
}
@media screen and (min-width: 480px) {
    .menu-icons .bx {
        font-size: 2.4rem;
    }
}
.menu-icons
.bx-x {
    display: none;
    transition: transform 300ms;
}
.hide-open-menu__icon {
    display: none;
}
.menu-icons
.show-close-menu__icon {
    display: block;
}
.menu-icons
.bx-x:hover {
    transform: rotate(180deg);
}
@media screen and (max-width: 999px) {
    .menu-icons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.logo {
    font-family: 'Fruktur', cursive;
    font-size: 1.3rem;
    color: var(--second-clr);
}
@media screen and (min-width: 480px) {
    /* -- phone -- */
    .logo {
        font-size: 1.8rem;
    }
}

.ship-address {
    display: flex;
    align-items: center;
    margin-left: 1.2rem;
}
.ship-address-phone {
    display: flex;
    align-items: center;
}
.ship-address-phone a {
    color: var(--second-clr);
    font-size: .9rem;
    font-weight: 400;
}
.ship-address .bx-map,
.ship-address-phone .bx-map {
    cursor: pointer;
    color: var(--second-clr);
    font-size: 1.3rem;
}

/* -- middle side search bar -- */
.form-container {
    /* display: flex; */
    position: relative;
}
.search-input {
    height: 2.8rem;
    width: 100%;
    margin: .2rem 0;
    color: var(--primary-clr);
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    padding: 0 .5rem;
    border-radius: 5px;
    transition: border 100ms, box-shadow 100ms;
}
@media screen and (min-width: 999px) {
    .search-input {
        width: 25rem;
        margin: 0;
    }
}
@media screen and (min-width: 1100px) {
    .search-input {
        width: 32rem;
    }
}
@media screen and (min-width: 1150px) {
    .search-input {
        width: 35rem;
    }
}
@media screen and (min-width: 1280px) {
    .search-input {
        width: 40rem;
    }
}
@media screen and (min-width: 1400px) {
    .search-input {
        width: 50rem;
    }
}
@media screen and (min-width: 2000px) {
    .search-input {
        width: 80rem;
    }
}
.search-input:focus {
    border: .1px solid var(--second-clr);
    box-shadow: 0 0 1px 2.5px var(--second-clr);
    padding: 0 .4rem;
    border-radius: 5px;
}
.search-icon-container {
    cursor: pointer;
    height: 2.8rem;
    width: 3rem;
    margin: .2rem 0;
    border: none;
    background-color: var(--second-clr);
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transition: background-color 150ms;
}
@media screen and (min-width: 999px) {
    .search-icon-container {
        margin: 0;
    }
}

.search-icon-container:hover {
    background-color: hsl(22, 73%, 45%);
}
.search-icon-container:hover > .bx-search{
    color: var(--primary-clr-alt);
}
.search-icon-container
.bx-search {
    color: var(--primary-clr);
    font-size: 1.7rem;
    transition: color 150ms;
}

/* -- ---------------------- -- */

/* -- right side links -- */
.right-side-links {
    display: flex;
    align-items: center;
}
.right-side-links
.grouped-link {
    margin-right: 1.8rem;
}
.right-side-links
.grouped-link:last-child {
    margin-right: 0;
}

/* -- account phone view -- */
.user-link {
    display: flex;
    align-items: center;
    margin-right: .2rem;
}
.user-link .upper-text-link {
    color: var(--second-clr);
    font-size: .8rem;
    font-weight: 500;
}
.user-link .lower-text-link .bx-user {
    color: var(--second-clr);
    font-size: 1.5rem;
}

/* -- -- -- */
.cart-icon-container {
    display: flex;
    align-items: center;
    position: relative;
}
.cart-icon {
    color: var(--second-clr);
    font-size: 2.5rem;
}
@media screen and (min-width: 480px) {
    .cart-icon {
        color: var(--second-clr);
        font-size: 3rem;
    }
}
.cart-icon-container p {
    color: var(--second-clr);
    font-weight: 500;
    font-size: 1rem;
}
.cart-icon-container .cart-count {
    color: var(--second-clr);
    font-weight: 300;
    font-size: .9rem;
    font-style: normal;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 1.8rem;
}
/* -- -- -- */

.grouped-link {
    display: flex;
    flex-direction: column;
    line-height: 1.1rem;
}
.grouped-link a {
    color: var(--second-clr);
}
.grouped-link .upper-text-link {
    font-weight: 300;
    font-size: .8rem;
}
.grouped-link .lower-text-link {
    font-weight: 600;
    font-size: .9rem;
}
/* ------ ---------- ------ */

/* -- lower header -- */
.lower-header-desktop {
    background-color: var(--primary-clr-alt);
    padding: .8rem .5rem;
}
@media screen and (min-width: 612px) {
    .upper-header-container,
    .lower-header-desktop {
        padding: .5rem 1rem;
    }
}
.nav-bar {
    display: flex;
    align-items: center;
}
.nav-lists {
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 999px) {
    .nav-lists {
        flex-direction: row;
    }
}
.nav-item {
    margin-right: 2rem;
}
.nav-item
.nav-link {
    color: var(--second-clr);
    font-size: 1.2rem;
    font-weight: 400;
    position: relative;
    padding-bottom: .2rem;
    letter-spacing: .01rem;
}
.nav-item
.nav-link::before {
    content: "";
    background-color: var(--second-clr);
    height: .1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 300ms;
}
.nav-item
.nav-link:hover::before {
    transform: scaleX(1);
}
@media screen and (max-width: 999px) {
    .nav-bar {
        z-index: 3;
        padding: 2rem 4rem 1rem 1rem;
        border-bottom-right-radius: .2rem;
        position: absolute;
        top: 9.5rem;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--primary-clr-alt);
        transition: transform 300ms;
    }
    .show-nav-bar {
        transform: scaleX(1);
    }
    .nav-item {
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
}


/* -- ** changes on different views ** -- */
/* -- phone -- */
@media screen and (min-width: 999px) {
    /* -- phone -- */
    .view-phone {
        display: none;
    }
}
/* -- desktop -- */
@media screen and (max-width: 999px) {
    /* -- desktop -- */
    .view-desktop {
        display: none;
    }
}
/* -- ** -------------------------- ** -- */

</style>