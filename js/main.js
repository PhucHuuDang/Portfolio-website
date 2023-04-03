var navClose = document.querySelector(".nav__close");
var navToggle = document.querySelector(".nav__toggle");
var navMenu = document.querySelector(".nav__menu");
var bodyClick = document.body;
console.log(bodyClick);

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });

    //
    // if (bodyClick) {
    //     bodyClick.addEventListener("click", () => {
    //         navMenu.classList.remove("show-menu");
    //     });
    // }
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// swiper

let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        1200: {
            // i got error cause misSpelling upperCase V in slidesPerView
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    loop: true,
    // spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// EmailJS

const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name");

const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");

const bool = false;

const sendEmail = (e) => {
    e.preventDefault();

    // check if field has a value

    if (
        contactName.value === "" ||
        contactEmail.value === "" ||
        contactProject.value === ""
    ) {
        // add and remove color
        contactMessage.classList.remove("color-blue");
        contactMessage.classList.add("color-red");

        // show message
        contactMessage.textContent = "Please write all the input fields";
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs
            .sendForm(
                "service_6murtev",
                "template_e2tciwl",
                "#contact-form",
                "RnjgWbuG9c3bH-ohe"
            )
            .then(() => {
                // show message color

                contactName.focus();
                contactName.value = "";
                contactEmail.value = "";
                contactProject.value = "";

                contactMessage.classList.add("color-blue");
                contactMessage.textContent = "Message sent...";

                // remove message after 5 seconds

                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);
            })
            .catch((error) => {
                contactMessage.textContent =
                    "Opps! Something got wrong..." + error;
            });
    }
};
contactForm.addEventListener("submit", sendEmail);

// scroll section active link
// ==> bug 2:11:48
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionID = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionID + "]"
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

// scroll up

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 500
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// change theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains("darkTheme") ? "dark" : "light";
const getCurrentIcon = () =>
    document.body.classList.contains("iconTheme")
        ? "ri-moon-line"
        : "ri-sun-line";

// validate user if the user previous chose a topic

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// activate / deactivate the theme manually with the button

const toggleTheme = () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and the current icon that the use chose

    localStorage.setItem("selected-theme", getCurrentTheme);
    localStorage.setItem("selected-icon", getCurrentIcon);
};

themeButton.addEventListener("click", () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and the current icon that the use chose

    localStorage.setItem("selected-theme", getCurrentTheme);
    localStorage.setItem("selected-icon", getCurrentIcon);
});

// change background header

const scrollHeader = () => {
    const header = document.getElementById("header");

    // when the scroll uis greater than 50 viewport height, add the scroll-header class to the header tag

    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// scroll reveal animation

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true, // animation repeat
});

scrollReveal.reveal(
    `.home__data, .projects__container, .testimonial__container, .footer__container`
);
scrollReveal.reveal(`.home__info div`, {
    delay: 600,
    origin: "bottom",
    interval: 100,
});

scrollReveal.reveal(
    `.skills__content:nth-child(1), .contact__content:nth-child(1)`,
    {
        origin: "left",
        interval: 200,
    }
);

scrollReveal.reveal(
    `.skills__content:nth-child(2), .contact__content:nth-child(2)`,
    {
        origin: "right",
        interval: 200,
    }
);

scrollReveal.reveal(`.qualification__content`, {
    origin: "bottom",
    interval: 200,
});

scrollReveal.reveal(
    `.home__social-link:nth-child(1), .services__card:nth-child(1), .footer__home, .footer__social-link:nth-child(1)`,
    {
        delay: 600,
        origin: "left",
        interval: 100,
    }
);
scrollReveal.reveal(
    `.home__social-link:nth-child(2), .services__card:nth-child(2), .footer__skills, .footer__social-link:nth-child(2)`,
    {
        delay: 600,
        origin: "top",
        interval: 200,
    }
);
scrollReveal.reveal(
    `.home__social-link:nth-child(3), .services__card:nth-child(3), .footer__projects, .footer__social-link:nth-child(3) `,
    {
        delay: 600,
        origin: "right",
        interval: 300,
    }
);
