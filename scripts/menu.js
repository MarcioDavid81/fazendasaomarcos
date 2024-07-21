let navBar = document.querySelector('#header')

document.addEventListener('scroll', () => {
    let scroolTop = window.scrollY;

    if (scroolTop > 0) {
        navBar.classList.add('rolar');
    } else {
        navBar.classList.remove('rolar');
    }
});