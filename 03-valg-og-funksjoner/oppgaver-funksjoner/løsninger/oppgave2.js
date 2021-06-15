// --- Eks ----

console.log("---Eksempel---")

function gratulerer(navn, aar){
    console.log(`Gratulerer med dagen ${navn}, ${aar} år!`);
}

gratulerer("Thor",30);
gratulerer("Per",95);


// --- 2a ---
console.log("--- 2a ---")
/* 
I denne oppgaven skal du definere en funksjon med navn arealRektangel.
Funksjonen skal ta inn en høyde og bredde som parametere, og logge arealet av rektanglet i konsollen.

OBS! Fjern skråstrekene før funksjonskallene for at funksjonen skal kjør
Tips1: Formel for areal av rektangel er: høyde * bredde
*/

function arealRektangel(hoyde, bredde){
    console.log(hoyde * bredde)
}

arealRektangel(5,2);
arealRektangel(24,10);


// --- 2b ---
console.log("--- 2b ---")
/*
I denne oppgaven skal du definere en funksjon med navn velkommen,
funksjonen skal ta inn navn, skole og trinn, også logge beskjeden "hei elevnavn, velkommen til trinnnummer trinn på skolenavn!"
OBS! Fjern skråstrekene før funksjonskallene for at funksjonen skal kjøre
*/

// Skriv koden din her.
function velkommen(navn, skole, trinn){
    console.log(`Hei ${navn}, velkommen til ${trinn} trinn på ${skole}!`);
}

velkommen("Thor", "Sandvika", 3);
velkommen("Espen", "Nesbru", 1);


// --- Fasit ---
console.log("--- Fasit ---");
console.log("2a: 10 og 240");
console.log('2b: "Hei Thor, velkommen til 3 trinn på Sandvika!" og "Hei Espen, velkommen til 1 trinn på Nesbru!');
