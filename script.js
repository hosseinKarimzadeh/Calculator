let showBox = document.querySelector('.display-box')

function showDisplay(e) {
    const show = e.target.innerText
    if (showBox.innerText == 0) {
        return showBox.innerText = show
    }
    return showBox.innerText += show
}

function calculator() {
    const result = showBox.innerText
    showBox.innerText = eval(result)
}

function allClear() {
    return showBox.innerText = 0
}

function clear() {
    const boxText = showBox.innerText
    if (boxText.length === 1) {
        showBox.innerText = 0
    } else {
        showBox.innerText = boxText.substring(0, boxText.length - 1)

    }
}


document.querySelector('.clear').addEventListener('click', clear)
document.querySelector('.all-clear').addEventListener('click', allClear)
document.querySelector('.calc').addEventListener('click', calculator)
const list = document.querySelectorAll('.show-display');
list.forEach(item => {
    item.addEventListener('click', showDisplay)
})
