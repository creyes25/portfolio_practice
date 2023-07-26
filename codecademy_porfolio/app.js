let darkBtn = document.querySelector('#dark')
let lightBtn = document.querySelector('#light')
let bothBtns = document.querySelector('button')
let wholeDoc = document.querySelector('body')
const aLinks = document.querySelectorAll('.links')

function changeToDark() {
    wholeDoc.style.backgroundColor = 'gray'
    wholeDoc.style.color = 'white'
    aLinks.forEach(a => {
        a.style.color= 'white'
    })

    darkBtn.hidden = true
    lightBtn.hidden = false
}


function changeToLight() {
    wholeDoc.style.backgroundColor = 'white'
    wholeDoc.style.color = 'black'
    aLinks.forEach(a => {
        a.style.color= 'black'
    })

    lightBtn.style.backgroundColor = 'white'
    lightBtn.style.color = 'black'

    darkBtn.hidden = false
    lightBtn.hidden = true

    
}


darkBtn.addEventListener('click', changeToDark)
lightBtn.addEventListener('click', changeToLight)


