const subHidden = document.querySelector('.sub__hidden')
const subHiddenButton = document.querySelector('.sub__hidden-open')
const bodySelector = document.querySelector('body')
const subHead = document.querySelector('.sub > .sub__head')
const hiddenButton = document.querySelectorAll('button.sub__list-item')
const prefixSelector = document.querySelectorAll('.prefix')
const prefixBack = document.querySelectorAll('.prefix > .sub__back')

function subOpen() {
    subHidden.classList.toggle('active')
    hiddenButton.forEach(el => {
        el.classList.remove('active')
    })
    prefixSelector.forEach(el => {
        el.classList.remove('active')
    })
}

function hiddenOpen(hiddenElem) {
    if (hiddenElem.classList.contains('active')){
        hiddenElem.classList.remove('active')
        hiddenElem.nextElementSibling.classList.remove('active')
    }
    else {
        hiddenButton.forEach(el => {
            el.classList.remove('active')
        })
        prefixSelector.forEach(el => {
            el.classList.remove('active')
        })

        hiddenElem.classList.add('active')
        hiddenElem.nextElementSibling.classList.add('active')

        if(window.innerWidth < 1000){
            subSelector.classList.remove('active')
        }
    }
}

subHiddenButton.addEventListener('click', subOpen)
subHead.addEventListener('click', subOpen)
hiddenButton.forEach(el => {
    el.addEventListener('click', function () {
        hiddenOpen(el)
    })
})
prefixBack.forEach(el => {
    el.addEventListener('click', function () {
        el.parentElement.classList.remove('active')
        subSelector.classList.add('active')
        el.parentElement.previousElementSibling.classList.remove('active')
    })
})