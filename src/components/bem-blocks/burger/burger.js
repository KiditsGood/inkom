const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

function openBurger() {
    burger.classList.toggle('open')
    nav.classList.toggle('active')
    bodySelector.classList.toggle('hidden')
}

burger.addEventListener('click', openBurger)