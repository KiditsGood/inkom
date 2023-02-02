const subHidden = document.querySelector('.sub__hidden')
const subHiddenButton = document.querySelector('.sub__hidden-open')
const overlaySelector = document.querySelector('.overlay')
const bodySelector = document.querySelector('body')
const subSelector = document.querySelector('.sub')
const subHead = document.querySelector('.sub__head')

function subOpen() {
    subHidden.classList.toggle('active')
    bodySelector.classList.toggle('hidden')
    overlaySelector.classList.toggle('active')
    subSelector.classList.toggle('active')
}

subHiddenButton.addEventListener('click', subOpen)
subHead.addEventListener('click', subOpen)
overlaySelector.addEventListener('click', subOpen)

