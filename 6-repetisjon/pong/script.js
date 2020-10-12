// Globale variabler
const canvas = document.querySelector("#minCanvas");
const ctx = canvas.getContext("2d");

let theGameIsOn = true;

const bane = {
    bredde: canvas.width,
    hoyde: canvas.height,
    gressfarge: "green",
    linjefarge: "white",
    linjebredde: 4
}

let ball = {
    radius: 7,
    xpos: 100,
    ypos: 100,
    farge: "yellow",
    xretning: 1,
    yretning: 1,
    xfart: 4,
    yfart: 4
}

// Funksjoner
function tegnBane(){
    console.log("Tegner bane");
    ctx.fillStyle = bane.gressfarge;
    ctx.fillRect(0,0,bane.bredde, bane.hoyde);
    ctx.fillStyle = bane.linjefarge;
    ctx.fillRect(bane.bredde / 2 - bane.linjebredde / 2, 0, bane.linjebredde, bane.hoyde);
}
function tegnBall(){
    console.log("Tegner ball");
    ctx.beginPath();
    ctx.arc(ball.xpos, ball.ypos, ball.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = ball.farge;
    ctx.fill();

    ball.xpos += ball.xfart * ball.xretning;
    ball.ypos += ball.yfart * ball.yretning;
}
function tegnRacket(){
    console.log("Tegner racket");
}
function sjekkOmBallTrefferRacket(){
    console.log("Sjekker om ball treffer racket");
}
function sjekkOmBallTrefferVegg(){
    console.log("Sjekker om ball treffer vegg");
    if(ball.xpos <= ball.radius || ball.xpos >= bane.bredde){
        ball.xretning *= -1;
    }
    if(ball.ypos <= ball.radius || ball.ypos >= bane.hoyde){
        ball.yretning *= -1;
    }
}
function sjekkOmBallErUtenforBanen(){
    console.log("Sjekker om ball er utenfor banen");
}
function gameLoop(){
    tegnBane();
    tegnBall();
    tegnRacket();
    sjekkOmBallErUtenforBanen();
    sjekkOmBallTrefferRacket();
    sjekkOmBallTrefferVegg();
    if(theGameIsOn){
        requestAnimationFrame(gameLoop);
    }
}

// Funksjon for å starte/stoppe spill
window.onclick = function(){
    if(theGameIsOn){
        theGameIsOn = false;
        console.log("Stopp");
    }
    else{
        theGameIsOn = true;
        console.log("Start");
        gameLoop();
    }
}

// Oppstart
gameLoop();
