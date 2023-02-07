const tabsButton = document.querySelectorAll('.tabs__buttons-item')
const tabsItem = document.querySelectorAll('.tabs__field-item')

function tabChanger(currButton, currTab) {
    tabsButton.forEach(el => {
        el.classList.remove('active')
    })

    tabsItem.forEach(el  => {
        el.classList.remove('active')
    })


    tabsItem[currTab].classList.add('active')
    currButton.classList.add('active')
}

tabsButton.forEach((el, index) => {
    el.addEventListener('click', () => {
        tabChanger(el, index)
    })
})