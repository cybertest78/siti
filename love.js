// JavaScript code to make the heart symbol float

const heartSymbol = document.getElementById("heartSymbol");

function animateHeart() {
    const animationSpeed = 1; // Change the animation speed if needed
    const maxLeft = window.innerWidth - heartSymbol.clientWidth;
    const maxTop = window.innerHeight - heartSymbol.clientHeight;

    let left = 0;
    let top = 0;

    const floatHeart = () => {
        left = Math.random() * maxLeft;
        top = Math.random() * maxTop;

        heartSymbol.style.left = left + "px";
        heartSymbol.style.top = top + "px";

        setTimeout(floatHeart, animationSpeed * 1000);
    };

    floatHeart();
}

animateHeart();
