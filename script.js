// =========================================================
// BEGIN OUR STORY
// =========================================================

function openStory() {

    document.body.classList.add("page-exit");

    setTimeout(function () {

        window.location.href = "story-intro.html";

    }, 600);

}


// =========================================================
// PHOTO LIGHTBOX
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const photos = document.querySelectorAll(".memory-card img");

    const lightbox = document.getElementById("photoLightbox");

    const lightboxImage = document.getElementById("lightboxImage");


    photos.forEach(function (photo) {

        photo.addEventListener("click", function (event) {

            event.stopPropagation();

            lightboxImage.src = photo.src;

            lightboxImage.alt = photo.alt;

            lightbox.style.display = "flex";

        });

    });

});


function closeLightbox() {

    const lightbox = document.getElementById("photoLightbox");

    if (lightbox) {

        lightbox.style.display = "none";

    }

}


// =========================================================
// FLOATING HEARTS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const heartContainer = document.createElement("div");

    heartContainer.className = "floating-hearts";

    document.body.appendChild(heartContainer);


    function createHeart() {

        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML = "♥";


        // Random position

        heart.style.left = Math.random() * 100 + "%";


        // Random size

        const size = Math.random() * 18 + 10;

        heart.style.fontSize = size + "px";


        // Random animation duration

        const duration = Math.random() * 8 + 7;

        heart.style.animationDuration = duration + "s";


        // Random delay

        heart.style.animationDelay =
            Math.random() * 2 + "s";


        heartContainer.appendChild(heart);


        // Remove heart after animation

        setTimeout(function () {

            heart.remove();

        }, (duration + 2) * 1000);

    }


    // Create hearts continuously

    setInterval(createHeart, 900);

});


// =========================================================
// TYPING EFFECT - HOME PAGE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typingText");

    if (!typingText) {

        return;

    }


    const text = "My B. My Pontsana. My person.";

    let index = 0;


    function typeLetter() {

        if (index < text.length) {

            typingText.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeLetter, 80);

        }

    }


    typeLetter();

});
