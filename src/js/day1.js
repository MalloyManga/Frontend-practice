const imgs = document.querySelectorAll('.pic')
imgs.forEach(i => {
    i.addEventListener('click', () => {
        const activeImg = document.querySelector('.pic.flex-5')
        const activeTxt = document.querySelector('.pic.flex-5 p')
        activeTxt.classList.replace('opacity-100', 'opacity-0')
        activeImg.classList.replace('flex-5', 'flex-[0.5]')
        i.classList.replace('flex-[0.5]', 'flex-5')
        document.querySelector('.pic.flex-5 p').classList.replace('opacity-0', 'opacity-100')
    })
});