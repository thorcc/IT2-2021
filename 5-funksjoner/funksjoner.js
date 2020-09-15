// Hendelsesstyrte anonyme funksjoner
window.onclick = function(){
    alert("hallo");
}
window.onclick = () => {
    alert("ny måte")
}

// Anonyme funksjoner som starter av seg selv
(() => {
    console.log("Hei");
})();

(function(){
    console.log("Hallo!");
})()


function skiftBakgrunn(farge){
    // Funksjon som tar inn en farge, og skifter farge på nettsiden
    document.body.style.backgroundColor = farge;
}

/* Globale og lokale variabler */

// Globale variabler
let minTemp = -20;
let maxTemp = 40;

function registrerTemp(celsius){
    
    // Lokal variabel
    let fahrenheit = celsius * 1.8 - 32;


    console.log(`Temperaturen er ${celsius}c, ${fahrenheit}f`);
}

registrerTemp(25);


