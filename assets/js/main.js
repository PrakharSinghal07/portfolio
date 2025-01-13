/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {

}
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (this.scrollY >= 50)
        header.classList.add('scroll-header');
});
/*=============== SERVICES MODAL ===============*/

const modals = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');


modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modals[i].classList.add('active-modal');
    })
})

modalClose.forEach((mc, i) => {
    mc.addEventListener('click', () => {
        modals[i].classList.remove('active-modal');
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

linkWork.forEach((lw, i) => {
    lw.addEventListener('click', () => {
        for (let j = 0; j < 4; j++) {
            linkWork[j].classList.remove('active__icon');
        }
        lw.classList.add('active__icon')
    })
})

/*=============== SWIPER CERTIFICATION ===============*/
let swiperCertification = new Swiper(".certification__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        628: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    // const sections = document.querySelectorAll('section');
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');


        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// *******************************



/*=============== LIGHT DARK THEME ===============*/

const themeButton = document.querySelector('.change-theme')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,

})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 600 })
sr.reveal(`.home__social, .home__scroll`, { delay: 800, origin: 'bottom' })
sr.reveal(`.about__container`, { delay: 200, origin: 'top' })
sr.reveal(`.skills__content-1`, { delay: 100, origin: 'top' })
sr.reveal(`.skills__content-2`, { delay: 200, origin: 'top' })
sr.reveal(`.work__container`, { delay: 400, origin: 'bottom' })
sr.reveal(`.certification__container`, { delay: 100, origin: 'left' })
sr.reveal(`.contact__info`, { delay: 100, origin: 'left' })
sr.reveal(`.contact__content`, { delay: 200, origin: 'right' })
sr.reveal(`.certification__card-2`, { delay: 200, origin: 'bottom' })

sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })

/*======================== EmailJs Integration ==============================*/

const formSubmitStatus = document.querySelector('.contact__form-submit-status');
formSubmitStatus.style.visibility = 'hidden';
window.onload = (function () {
        emailjs.init({
            publicKey: "uiE-lWPvGZB4_vaqQ",
        });
    })();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('service_u2cjn2o', 'template_mbxvyg', this)
        .then(function () {
            formSubmitStatus.style.visibility = 'visible'
        }, function (error) {
            formSubmitStatus.innerText = 'Failed to send message!';
            formSubmitStatus.style.visibility = 'visible'
        });
});