/* =========================================================
   CLÍNICA ESTÉTICA — SCRIPT.JS
   ========================================================= */


/* =========================================================
   WHATSAPP
   ========================================================= */

const whatsappNumber = "5512996951062";

const whatsappMessage =
    "Olá! Gostaria de agendar uma avaliação na clínica de estética.";


/* Coloca o link do WhatsApp em todos os botões */

document.querySelectorAll(".js-whatsapp").forEach((link) => {

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    link.href = whatsappURL;

    link.target = "_blank";

    link.rel = "noopener";
});


/* =========================================================
   HEADER
   ========================================================= */

const header = document.querySelector(".header");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }
}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* Executa uma vez quando a página carpopo*/

updateHeader();


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

        menuToggle.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}


/* Fecha o menu quando clicar em algum link */

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   ANIMAÇÕES DE ENTRADA
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   SCROLL SUAVE
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

        const targetID =
            anchor.getAttribute("href");

        const target =
            document.querySelector(targetID);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});