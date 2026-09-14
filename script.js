/* =========================================================
   CLÍNICA ESTÉTICA — SCRIPT.JS
   VERSÃO OTIMIZADA PARA DESKTOP + MOBILE
   ========================================================= */


/* =========================================================
   WHATSAPP
   ========================================================= */

const whatsappNumber = "5512996951062";

const whatsappMessage =
    "Olá! Gostaria de agendar uma avaliação na clínica de estética.";

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/* Coloca o link do WhatsApp em todos os botões */

document.querySelectorAll(".js-whatsapp").forEach((link) => {

    link.href = whatsappURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

});


/* =========================================================
   HEADER
   ========================================================= */

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}


/* Usa passive para não bloquear o scroll */

if (header) {

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    updateHeader();

}


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuToggle.classList.toggle(
            "active",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /* Fecha o menu quando clicar em um link */

    document.querySelectorAll(".nav a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });


    /* Fecha o menu apertando ESC */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            nav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    });

}


/* =========================================================
   ANIMAÇÕES DE ENTRADA
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


/*
   Se o navegador não suportar IntersectionObserver,
   mostra tudo normalmente.
*/

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   SCROLL SUAVE
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

        const targetID =
            anchor.getAttribute("href");

        if (
            !targetID ||
            targetID === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetID);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior:
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                    ? "auto"
                    : "smooth",

            block: "start"
        });

    });

});


/* =========================================================
   FECHA MENU SE A TELA VOLTAR PARA DESKTOP
   ========================================================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 768 &&
        nav &&
        menuToggle
    ) {

        nav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }

});