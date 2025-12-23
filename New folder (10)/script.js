const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

const loginBtn = document.getElementById("loginBtn");
const secretMessage = document.getElementById("secretMessage");

// 🔒 Lock login initially
loginBtn.disabled = true;
secretMessage.style.display = "none";

// 🎯 TARGET DATE → 26th of THIS MONTH at 00:00
const now = new Date();
const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),   // this month
    26,               // day
    0, 0, 0           // midnight
);

function updateCountdown() {
    const currentTime = new Date().getTime();
    const diff = targetDate.getTime() - currentTime;

    // ⛔ If time is up
    if (diff <= 0) {
        dEl.textContent = "00";
        hEl.textContent = "00";
        mEl.textContent = "00";
        sEl.textContent = "00";

        loginBtn.disabled = false;
        secretMessage.style.display = "block";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    dEl.textContent = days;
    hEl.textContent = hours;
    mEl.textContent = minutes;
    sEl.textContent = seconds;
}

// 🔁 Update every second
updateCountdown();
const timer = setInterval(updateCountdown, 1000);

// 🚪 Fake login redirect
function login() {
    window.location.href = "love2.html";
}