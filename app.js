const navbar = document.querySelector('.navbar')

// fixed nav
window.addEventListener('scroll', scrollFunction)
function scrollFunction() {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('fixedNav')

    }
    else {
        navbar.classList.remove('fixedNav')
    }
    // if (document.body.scrollTop > 20) {
}