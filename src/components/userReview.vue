<template>
<div class="reviews-container">
                <div class="review-make_review-container">
                    <div class="reviews">
                        <!-- review one -->
                        <div class="user-review">
                            <img src="https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Fuser-img.svg?alt=media&token=4b0dc7a0-0068-4d22-bc0a-1cf286eaaf2b" alt="" class="reviewer-img">
                            <div class="reviewer-review-container">
                                <h2 class="reviewer-name">John Doe</h2>
                                <p class="reviewer-message">
                                    But, to creatively add value takes a more thorough understanding of the business environment in which you work But, to creatively.
                                </p>
                                <img src="https://firebasestorage.googleapis.com/v0/b/see-flower.appspot.com/o/see-flower-images%2Frate.svg?alt=media&token=f0db1a98-ecbe-4284-81d2-1d79cbfc34f6" alt="" class="reviewer-ratings product-rate">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<style scoped>
/* --- section two --- */
/* -- reviews and make review -- */
/* -- reviews -- */
.review-make_review-container {
    margin-top: 3rem;
}
.user-review {
    margin-top: 1.5rem;
}
.user-review .reviewer-img {
    width: 45px;
    height: 45px;
    margin-bottom: .1rem;
}
.reviewer-name {
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: .5rem;
}
.reviewer-message {
    font-weight: 300;
    font-size: 1rem;
    max-width: 24rem;
    line-height: 1.6rem;
}
@media screen and (min-width: 500px) {
    .review-make_review-container {
        margin-top: 3rem;
    }
    .user-review .reviewer-img {
        margin-bottom: 0;
    }
    .user-review {
        margin-top: 1.8rem;
        display: flex;
    }
    .reviewer-review-container {
        margin-left: .8rem;
    }
    .reviewer-name {
        font-weight: 300;
        font-size: 1.2rem;
    }
    .reviewer-message {
        font-weight: 200;
    }
    .reviewer-ratings {
        width: 7rem;
        margin-top: .9rem;
    }
}

/* -- make review -- */
.review-form {
    display: flex;
    flex-direction: column;
}
.review-input {
    width: 100%;
    color: var(--primary-clr);
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    border: thin solid hsla(21, 72%, 7%, 29%);
    padding: .5rem;
    border-radius: 5px;
    transition: 150ms box-shadow;
}
.review-input:focus {
    box-shadow: 0 0 3px hsla(21, 72%, 7%, 29%);
}
@media screen and (min-width: 497px) {
    .review-input {
        width: 30rem;
        font-size: .9rem;
    }
}
.submit-review-btn {
    border-radius: 5px;
    letter-spacing: .05rem;
    margin-top: 1rem;
}
</style>