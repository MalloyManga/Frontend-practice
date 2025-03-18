const inp = document.querySelector('#inp')
let flag = false
document.querySelector('#btn').addEventListener('click', () => {
    flag = !flag
    if (flag) {
        inp.classList.replace('w-0', 'w-[200px]')
    }
    else {
        inp.classList.replace('w-[200px]', 'w-0')
    }
})