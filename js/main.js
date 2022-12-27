let userInput = document.getElementById('userInput')
let allItems = document.getElementById('allItems')
let groceries = document.querySelector('.groceries')
let deleteIcon = document.querySelector('.deleteIcon')
let pencil = document.getElementById('pencil')

pencil.addEventListener('click', function () {
    if (userInput.value != '') {
        let value = document.createElement('h2')
        value.innerText = userInput.value
        allItems.appendChild(value)
        userInput.value = ''
    }
})

deleteIcon.addEventListener('click', function () {
    document.querySelectorAll("#allItems h2").forEach(elem => {
        if (elem.style.textDecoration == 'line-through') {
            elem.remove()
        }
    })
})

groceries.addEventListener('click', function (e) {
    if (e.target.matches('#allItems h2')) {
        if (e.target.style.textDecoration == 'line-through') {
            e.target.style.textDecoration = 'none'
        } else {
            e.target.style.textDecoration = 'line-through'
        }
    }
})

userInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        let value = document.createElement('h2')
        value.innerText = userInput.value
        allItems.appendChild(value)
        userInput.value = ''
    }
})