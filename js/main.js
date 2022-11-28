let mainImage = document.querySelector(".slider");
let v = 0;

setInterval(() => {
    if (v === 0) {
        document.querySelector(".slider").style.transform = "translateX(-100%)";
        v = 1;
    } else if (v === 1) {
        document.querySelector(".slider").style.transform = "translateX(-200%)";
        v = 2;
    } else if (v === 2) {
        document.querySelector(".slider").style.transform = "translateX(0)";
        v = 0;
    }
}, 3000);

//nav
let mainNav = document.querySelector(".navigate .head img");
