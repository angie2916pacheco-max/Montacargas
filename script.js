/* =========================================================
   MONTACARGAS Y SERVICIOS MR S.A.S.
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   MENÚ PARA CELULAR
========================================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

    // Cerrar el menú al seleccionar una sección
    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("open");
        });

    });

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   BOTÓN VOLVER ARRIBA
========================================================= */

const backTop = document.getElementById("backTop");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   FORMULARIO DE SOLICITUD
========================================================= */

const serviceForm =
    document.getElementById("serviceForm");

if (serviceForm) {

    serviceForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nombre =
                document
                    .getElementById("nombre")
                    .value
                    .trim();

            const telefono =
                document
                    .getElementById("telefono")
                    .value
                    .trim();

            const servicio =
                document
                    .getElementById("servicio")
                    .value
                    .trim();

            const mensaje =
                document
                    .getElementById("mensaje")
                    .value
                    .trim();

            const texto =
                `Hola, quiero solicitar un servicio de Montacargas y Servicios MR S.A.S.\n\n` +
                `Nombre: ${nombre}\n` +
                `Teléfono: ${telefono}\n` +
                `Servicio: ${servicio}\n` +
                `Mensaje: ${mensaje || "No especificado"}`;

            const whatsappUrl =
                "https://wa.me/573202720479?text=" +
                encodeURIComponent(texto);

            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   ENLACES DE SOLICITUD DESDE LA TABLA DE PRECIOS
========================================================= */

const serviceLinks =
    document.querySelectorAll("[data-service]");

serviceLinks.forEach(link => {

    link.addEventListener("click", () => {

        const service =
            link.getAttribute("data-service");

        const serviceSelect =
            document.getElementById("servicio");

        if (serviceSelect && service) {

            serviceSelect.value = service;

        }

    });

});