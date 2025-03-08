const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const proNum = document.querySelectorAll('#proBox div')
const proBox = document.querySelector('#proBox')

let num = 0

next.addEventListener('click', ne)
prev.addEventListener('click', pr)

function numRes() {
    if (num > 3) {
        num = 3
    }
    else if (num < 1) {
        num = 1
    }
}
function ne() {
    num += 1
    numRes()
    proNum[num].classList.replace('border-[#E0E0E0]', 'border-[#3498DB]')

    if (num !== 1 || num !== 0) {
        prev.classList.replace('cursor-not-allowed', 'cursor-pointer')
        prev.classList.replace('bg-[#E0E0E0]', 'bg-[#3498DB]')
    }
    if (num === 3) {
        next.classList.replace('cursor-pointer', 'cursor-not-allowed')
        next.classList.replace('bg-[#3498DB]', 'bg-[#E0E0E0]')
    }
    proBox.style.setProperty('--pseudo-w', `${num * 0.333 * 350}px`)
}
function pr() {
    numRes()
    proNum[num].classList.replace('border-[#3498DB]', 'border-[#E0E0E0]')
    num -= 1
    if (num !== 2 || num !== 3) {
        next.classList.replace('cursor-not-allowed', 'cursor-pointer')
        next.classList.replace('bg-[#E0E0E0]', 'bg-[#3498DB]')
    }
    if (num === 0) {
        prev.classList.replace('cursor-pointer', 'cursor-not-allowed')
        prev.classList.replace('bg-[#3498DB]', 'bg-[#E0E0E0]')
    }
    proBox.style.setProperty('--pseudo-w', `${num * 0.333 * 350}px`)
}
