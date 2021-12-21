<template>
    <footer>
        <div class="upper-footer">
            <div class="footer-links">
                <!-- footer item -->
                <div class="footer-item">
                    <h4 class="footer-item-title">Agency</h4>
                    <ul class="footer-items">
                        <li class="footer-link"><a href="#">Environment</a></li>
                        <li class="footer-link"><a href="#">Understanding</a></li>
                        <li class="footer-link"><a href="#">Creatively</a></li>
                        <li class="footer-link"><a href="#">Business</a></li>
                    </ul>
                </div>
    
                <!-- footer item -->
                <div class="footer-item">
                    <h4 class="footer-item-title">Opportunities</h4>
                    <ul class="footer-items">
                        <li class="footer-link"><a href="#">Competition</a></li>
                        <li class="footer-link"><a href="#">Privilege</a></li>
                        <li class="footer-link"><a href="#">Learning</a></li>
                        <li class="footer-link"><a href="#">Mentor</a></li>
                    </ul>
                </div>
    
                <!-- footer item -->
                <div class="footer-item">
                    <h4 class="footer-item-title">Business</h4>
                    <ul class="footer-items">
                        <li class="footer-link"><a href="#">Confidence</a></li>
                        <li class="footer-link"><a href="#">Presentation</a></li>
                        <li class="footer-link"><a href="#">Network</a></li>
                        <li class="footer-link"><a href="#">Qualities</a></li>
                    </ul>
                </div>
    
                <!-- footer item -->
                <div class="footer-item">
                    <h4 class="footer-item-title">Quick links</h4>
                    <ul class="footer-items">
                        <li class="footer-link"><a href="#">Products</a></li>
                        <li class="footer-link"><a href="#">About</a></li>
                        <li class="footer-link"><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
    
            <img src="../assets/images/footer_flower.png" alt="footer image" class="footer-img">
        </div>

        <div class="lower-footer">
            <div class="logo-footer logo">SeeFlower</div>
            <div class="copy">
                <span class="lower-footer-link copyright">copyright © 2021</span>
                <span class="lower-footer-link developer">Developed by <a href="https://thierrymugisha.me" target="_blank">T. Mugisha</a></span>
                <span class="lower-footer-link privacy">privacy • policy</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>

/* -- footer stylings -- */
footer {
    color: var(--white-clr);
    background-color: var(--primary-clr);
    padding: 0 .5rem;
    margin-top: 10rem;
    padding: 1.5rem .5rem .5rem .5rem;
    position: relative;
}
@media screen and (min-width: 612px) {
    footer {
        padding: 2rem 1rem 1rem 1rem;
    }
}

/* -- upper footer -- */
.footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
}
@media screen and (min-width: 1200px) {
    .upper-footer {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .footer-links {
        width: 70%;
    }
}
@media screen and (min-width: 768px) {
    .footer-links {
        gap: 2rem;
        flex-direction: row;
        justify-content: space-between;
    }
}
.footer-item {
    margin-bottom: 2rem;
}
.footer-item:last-child {
    margin-bottom: 0;
}
.footer-items {
    margin-top: .3rem;
}
.footer-link:first-child {
    margin: 0;
}
.footer-link {
    margin: .2rem 0;
}
.footer-link a {
    color: var(--white-clr);
    font-weight: 300;
    font-size: .9rem;
    position: relative;
}
.footer-link a::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .1rem;
    background-color: var(--second-clr-alt);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 150ms;
}
.footer-link a:hover::before {
    transform: scaleX(1);
}
@media screen and (min-width: 1200px) {
    .footer-link a {
        font-size: .8rem;
    }
}

/* -- footer jar in flower img -- */
.footer-img {
    width: 201px;
    height: 200.93px;
    position: absolute;
    top: -6rem;
    right: 0;
}
@media screen and (min-width: 1024px) {
    .footer-img {
        width: 30%;
        height: auto;
    }
}

/* -- lower footer -- */
.logo-footer {
    margin: 2rem 0 .5rem 0;
}
.copy {
    position: relative;
    padding-top: .8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.copy::before {
    content: "";
    position: absolute;
    top: 0;
    height: .08rem;
    width: 100%;
    background-color: var(--second-clr-alt);
}
@media screen and (min-width: 550px) {
    .copy {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
.lower-footer-link {
    font-size: .8rem;
    margin: .1rem 0;
}
.developer a {
    color: var(--second-clr);
    position: relative;
    padding-bottom: .1rem;
}
.developer a::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .1rem;
    background-color: var(--second-clr);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 150ms;
}
.developer a:hover::before {
    transform: scaleX(1);
}
</style>