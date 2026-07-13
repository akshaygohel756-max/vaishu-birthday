function nextPage() {
    window.location.href = "birthday.html";
}

// Falling Hearts Animation
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);