const wishesText = `Happy Birthday my love 💖

Joy Abisola Olagboye, today is your day. From the moment you came into my life, everything has become brighter, fuller, and infinitely more beautiful. Your laughter is my favorite melody, and your smile is the sunshine that lights up even my darkest days.

Every single moment with you is a memory I treasure. From our silly little adventures to our quiet, peaceful times together, you make every second feel magical. I never imagined someone could touch my heart the way you do, and yet here you are, making my world better every single day.

I wish for you today and always: laughter that warms your soul, happiness that knows no bounds, and love that surrounds you every moment. May all your dreams, hopes, and desires come true, because someone as wonderful as you deserves nothing less.

Thank you for being my rock, my inspiration, and my heart. I am endlessly grateful for every laugh, every hug, every moment we share. You are my world, my forever, and the love I will cherish for all time
MY FISH I LOVE YOU.`;

const wishesEl = document.getElementById("wishesText");
const bgMusic = document.getElementById("bgMusic");
const nameReveal= document.getElementById("nameReveal")
// ⏳ Delay typing until name reveal finishes
setTimeout(() => {
    nameReveal.style.display = "none";
    startTyping();
}, 3500);
// 🎵 Play music after page loads (allowed after navigation)
window.addEventListener("click", () => {
    bgMusic.volume = 0.15; // soft romantic volume
    bgMusic.play();
}, { once: true });

// ⌨ Typing effect

let i = 0;

function startTyping() {
    function typeWriter() {
        if (i < wishesText.length) {
            wishesEl.innerHTML += wishesText.charAt(i);
            i++;
            setTimeout(typeWriter, 45);
        } else {
            // After typing finishes, add glowing final line
            const finalLine = document.createElement("p");
            finalLine.id = "finalLine";
            finalLine.textContent = "You are my forever ❤";
            wishesEl.appendChild(finalLine);
        }
    }
    typeWriter();
}

// 💖 Floating hearts
const heartsContainer = document.getElementById("heartsContainer");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);