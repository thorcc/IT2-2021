// Globale variabler
const canvas = document.querySelector("#mittCanvas");
const ctx = canvas.getContext("2d");

function firkant(x, y, b, h, farge){
    ctx.fillStyle = farge;
    ctx.fillRect(x, y, b, h);
}
function sirkel(x, y, r, farge){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = farge;
    ctx.fill();
}

firkant(0,0,canvas.width, canvas.height, "darkOrange");

let xPos = 1;
let yPos = 1;
let xFart = 5;
let xAks = -1;

function loop(){
    firkant(0,0, canvas.width, canvas.height, "brown");
    sirkel(xPos, yPos, 20, "blue");
    xPos += xFart * xAks;
    yPos += 1;
    if(xPos > 200){
        xAks *= -1;
    }

    requestAnimationFrame(loop);
}

loop();