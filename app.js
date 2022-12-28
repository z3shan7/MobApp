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

// scrollspy


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar__links');


console.log(sections)




// window.onscroll = () => {

function scrollSpy() {


    sections.forEach((sec) => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('navbar__active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('navbar__active')

            })
        }
    })
}
// }
window.addEventListener('scroll', scrollSpy)
