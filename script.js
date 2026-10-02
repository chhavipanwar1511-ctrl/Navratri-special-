/* =========================================
   CHHAVI MEHNDI ART
   NAVRATRI '26
========================================= */

// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Button press animation
const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});


// Festive floating sparkles
function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.textContent =
        Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = "-20px";

    sparkle.style.fontSize =
        Math.random() * 8 + 8 + "px";

    sparkle.style.color = "#e8b45d";
    sparkle.style.opacity = "0.55";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";

    document.body.appendChild(sparkle);

    const duration =
        Math.random() * 2500 + 3500;

    const animation = sparkle.animate(

        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform: "translateY(50vh) rotate(180deg)",
                opacity: 0.55
            },

            {
                transform: "translateY(110vh) rotate(360deg)",
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    );

    animation.onfinish = () => {
        sparkle.remove();
    };

}


// New sparkle every few seconds
setInterval(() => {

    if (Math.random() > 0.45) {
        createSparkle();
    }

}, 1600);


// Automatically update footer year
const footerYear = document.querySelector("footer small");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Chhavi Mehndi Art`;

}
