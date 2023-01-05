// navtoggle

const navToggle = document.querySelector(".navbar__nav-toggler");
const links = document.querySelector(".navbar__list");
const navbar = document.querySelector('.navbar')

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
    // if (links.classList.contains('show-links')) {
    //     navbar.style.background = 'linear-gradient(135deg, rgb(74, 13, 143) 0%, rgb(250, 42, 143) 100%);'

    // }
    // else {
    //     navbar.style.background = ''

    // }

});

const topLink = document.querySelector('.top-link')

// fixed nav
window.addEventListener('scroll', scrollFunction)
function scrollFunction() {
    const scrollHeight = window.pageYOffset;
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('fixedNav')
        // navbar.style.background = 'linear-gradient(135deg, rgb(74, 13, 143) 0%, rgb(250, 42, 143) 100%);'

    }
    else {
        navbar.classList.remove('fixedNav')
    }
    // setup back to top link

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
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







// window.onscroll = () => {

// function scrollSpy() {


//     sections.forEach((sec) => {

//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('navbar__active');
//                 document.querySelector('nav a[href*=' + id + ']').classList.add('navbar__active')

//             })
//         }
//     })
// }
// }
// window.addEventListener('scroll', scrollSpy)

