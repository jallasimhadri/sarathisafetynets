/*=========================================
  AOS INITIALIZATION
=========================================*/
console.log("JavaScript is working!");
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});
    
/*=========================================
  MOBILE MENU TOGGLE
=========================================*/

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

/*=========================================
  CLOSE MENU WHEN CLICKING LINKS
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

/*=========================================
  STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/*=========================================
  ACTIVE MENU LINK
=========================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


const swiper = new Swiper(".heroSwiper", {
    loop: true,
    speed: 1200,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    effect: "fade",

    fadeEffect: {
        crossFade: true,
    },
});






const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("active");

        }

    });

}

reveal();







const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".faq-question").addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});






/*=========================================
        WHATSAPP QUOTE FORM
=========================================*/

document
.getElementById("whatsappForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const service=document.getElementById("service").value;
const location=document.getElementById("location").value;
const message=document.getElementById("message").value;

const whatsappMessage=

`*New Quote Request*

👤 Name : ${name}

📞 Phone : ${phone}

🛠 Service : ${service}

📍 Location : ${location}

📝 Requirement :
${message}

Sent from Kranthi Safety Nets Website`;

const url=

`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

window.open(url,"_blank");

});





