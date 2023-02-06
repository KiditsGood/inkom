const smallPhoto = document.querySelectorAll('.photo__left-slider_item')
const bigPhoto = document.querySelector('.photo__right-slider_item:first-child')

const photoLeftSlider = new Swiper('.photo__left-slider', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 10,
    navigation: {
        prevEl: '.photo__left-nav.prev',
        nextEl: '.photo__left-nav.next'
    }
})

function photoChanger(currPhoto) {
    bigPhoto.src = currPhoto.src
}

smallPhoto.forEach(el => {
    el.addEventListener('click', () => {
        photoChanger(el)
    })
})