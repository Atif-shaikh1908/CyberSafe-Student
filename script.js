/* =================================
   CyberSafe Student
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("CyberSafe Student website loaded successfully.");

    /* ================================
       Navigation
    ================================= */

    const navigationLinks = document.querySelectorAll(".navbar nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigationLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });

    });


    /* ================================
       Topic Cards
    ================================= */

    const topicCards = document.querySelectorAll(".topic-card");

    topicCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.style.transition = "0.3s ease";
        });

    });


    /* ================================
       Current Year
    ================================= */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.textContent =
            "© " + currentYear +
            " CyberSafe Student. Educational Project.";

    }


});