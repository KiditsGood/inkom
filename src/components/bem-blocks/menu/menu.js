const catalogMobile = document.querySelector('button.menu__item')
const subSelector = document.querySelector('.sub')
const subButton = document.querySelector('.nav > .sub__head')
const subBack = document.querySelector('.sub__back')

function mobileCatalogOpen() {
    catalogMobile.classList.toggle('active')
    subSelector.classList.toggle('active')
    bodySelector.classList.toggle('hidden')
}

catalogMobile.addEventListener('click', mobileCatalogOpen)
subButton.addEventListener('click', function () {
    mobileCatalogOpen()
    openBurger()
})
subBack.addEventListener('click', mobileCatalogOpen)