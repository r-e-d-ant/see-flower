<template>
<section class="section section-one-about">
            <div class="see-flower-history-container">
                <div class="history-container history-one">
                    <img src="../assets/images/about_img_1.png" alt="house covered with flowers" class="history-img">
                    <div class="history">
                        <span class="history-age">2015 - 2018</span>
                        <p class="history-paragraph">
                            But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes
    
                            But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes
                        </p>
                    </div>
                </div>
                <div class="history-container history-two">
                    <div class="history right-history">
                        <span class="history-age">2015 - 2018</span>
                        <p class="history-paragraph">
                            But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes
    
                            But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes
                        </p>
                    </div>
                    <img src="../assets/images/about_img_2.png" alt="house covered with flowers" class="history-img right-history-img">
                </div>
            </div>
        </section>
        <section class="section section-two-about">
            <div class="start-history-about-container">
                <img src="../assets/images/history_pic.png" alt="flower shop" class="start-img-about">
                <div class="start-history-right-side">
                    <h2 class="history-title section-title">The use of the word creatively</h2>
                    <p class="history-paragraph">
                        But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work

                        But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business
                        
                        But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work
                    </p>
                </div>
            </div>
            <p class="history-paragraph full">
                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work
                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work

                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work
                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work

                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work

                But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively add value takes a more thorough understanding of the business environment in which you work
            </p>
        </section>
</template>

<style scoped>
/* -- about page stylings -- */
/* -- threaded histories -- */
.section-one-about, .start-history-about-container {
    padding: .8rem .5rem;
    display: flex;
}
.section-two-about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.section-two-about .full {
    padding: .8rem .5rem;
    max-width: 74rem;
}
.see-flower-history-container {
    margin: 0 auto;
}
@media screen and (min-width: 612px) {
    .section-one-about {
        padding: 3rem 1rem;
    }
    .start-history-about-container {
        padding: 0 1rem;
    }
    .section-two-about .full {
        padding: 0 1rem;
    }
}

.history-container, .start-history-about-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
}
.history-img, .start-img-about {
    border-radius: 10px 10px 0 0;
    margin-bottom: .5rem;
}
.right-history-img {
    border-radius: 0 0 10px 10px;
    margin-bottom: 0;
    margin-top: .5rem;
}
.history-title {
    margin: 0;
}
@media screen and (min-width: 550px) {
    .history-title {
        margin: 0;
    }
}
.history-title::before {
    width: 13.5rem;
}
.history-age {
    font-weight: 300;
    font-size: 1rem;
    opacity: .8;
    position: relative;
    padding-bottom: .5rem;
}
.history-age::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: .1rem;
    width: 100%;
    background-color: var(--second-clr);
}
.history-paragraph {
    white-space: pre-line;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 1.5rem;
}
@media screen and (min-width: 768px) {
    .history-container {
        flex-direction: row;
        margin-bottom: 5rem;
    }
    .history-container, .start-history-about-container {
        flex-direction: row;
    }
    .history-img {
        width: 444px;
        height: 240px;
        border-radius: 30px 0 30px 0;
        margin: 0;
    }
    .right-history-img {
        border-radius: 0 30px 0 30px;
    }
    .history {
        margin-left: 1rem;
    }
    .right-history {
        margin-right: 1rem;
        margin-left: 0;
        text-align: right;
    }
    .history-paragraph {
        white-space: pre-line;
        font-size: .9rem;
        font-weight: 300;
    }
}
@media screen and (min-width: 950px) {
    .history-img {
        border-radius: 40px 0 40px 0;
    }
    .right-history-img {
        border-radius: 0 40px 0 40px;
    }
    .history-paragraph {
        max-width: 33rem;
        font-size: 1rem;
    }
}

/* -- full history -- */
@media screen and (min-width: 768px) {
    .start-img-about {
        width: 338px;
        height: 311px;
        border-radius: 5px;
        margin-bottom: 0;
    }
    .start-history-right-side {
        margin-left: 1rem;
    }
}
@media screen and (min-width: 950px) {
    .start-history-right-side .history-paragraph {
        max-width: 50rem;
    }
}
</style>