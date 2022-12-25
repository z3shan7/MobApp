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

//  Tab Functionalites

const container = document.querySelector('.features__container')
const tabContent = document.querySelectorAll('.features__tab-content')
const tabBtns = document.querySelectorAll('.features__btn')


container.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
        //  remove active from other buttons
        tabBtns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active')
        });
        // hide other content

        tabContent.forEach((content) => {
            content.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')


    }
})