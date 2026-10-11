// Initialize Swiper
var swiper = new Swiper('.slide-swp', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullests: true,
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
});

// Swiper Slide Products
var swiper = new  Swiper('.slide-product', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    allowTouchMove: false,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
            allowTouchMove: true,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
            allowTouchMove: true,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            allowTouchMove: true,
        },
    }
});