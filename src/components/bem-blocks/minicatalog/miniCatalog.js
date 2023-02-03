const subHidden = document.querySelector('.sub__hidden')
const subHiddenButton = document.querySelector('.sub__hidden-open')
const bodySelector = document.querySelector('body')
const subHead = document.querySelector('.sub > .sub__head')

function subOpen() {
    subHidden.classList.toggle('active')
}

subHiddenButton.addEventListener('click', subOpen)
subHead.addEventListener('click', subOpen)

