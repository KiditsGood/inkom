const mainSlider = new Swiper('.main__top-slider', {
    autoplay: true,
    loop: true,
    navigation: {
        prevEl: '.main__top-nav.prev',
        nextEl: '.main__top-nav.next'
    }
})