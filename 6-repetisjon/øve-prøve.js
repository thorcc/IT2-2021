// Øve-prøve i grunnleggende JavaScript
// Oktober 2020
//
// Navn:____________________________
//
// I oppgave 1 - 10 skal du skrive ut hva som blir
// skrevet ut i konsollen.


// Oppgave 0: Hallo verden!

let skole = "Sandvika VGS";
console.log(skole);

// Svar:__________________


// Oppgave 1

let president_fr = "Emanuel Macron";
let hilsen = `Presidenten i Frankrike heter ${president_fr}.`;

console.log(hilsen);

// Svar: __________________________


// Oppgave 2:

let tall1 = "7";
let tall2 = "3";

console.log(tall1 + tall2);

// Svar: ________________


// Oppgave 3:

let tall3 = 7;
let tall4 = "3";

console.log(tall3 + 4);

// Svar: ________________


// Oppgave 4:
 
let tall5 = 7;
let tall6 = 10 + 3 * tall5;

console.log(tall6);

// Svar: _______________


// Oppgave 5:

let tall7 = 7;
let tall8 = 9;

console.log(tall7 > tall8);

// Svar: ____________________


// Oppgave 6:

let tall9 = 7;
let tall10 = 9;

if (tall9 === tall10) {
    console.log("A");
} else {
    console.log("B");
}

// Svar: ______________


// Oppgave 7:

let tall11 = 7;
let tall12 = 12;

if (tall11 < tall12 && tall12 / 2 === 6) {
    console.log("A");
} else {
    console.log("B");
}

// Svar: _____________

// Oppgave 8:

function hallo (a, b) {
    return a * b;
}
 
console.log(hallo(3, 5));

// Svar: _____________

// Oppgave 9:

function hei(a, b) {
    if (a < b) {
        return a + b;
    } else {
        return a * b;
    }
}
 
console.log(hei(1, 2));

// Svar: _____________

// Oppgave 10:

function takk(a, b) {
    return a * b;
}
 
function farvel(a, b) {
    return a + b;
}
 
console.log(takk(1, 2) + farvel(4, 4));

// Svar: ______________

// Oppgave 11:
// I denne oppgaven skal du gjøre ferdig koden,
// svaret ditt skal stå i mellom parentesene i console.log.
// 
// Du skal logge arealet av en sirkel med radius 10.

function arealSirkel(r){
    return Math.PI * r * r;
}

console.log(________________);


// Oppgave 12:
// I denne oppgaven skal du lage hele koden til et program.
//
// Lag et program der bruker kan skrive inn høyden til en person i cm.
// Brukeren skal få en beskjed avhengig av høyden som skrives inn.
// 
// Dersom høyden er større enn 140 skal det skrives ut: "Alle"
//
// Hvis høyden er mellom 130 til og med 140, skal det skrives ut: "To baner"
// 
// Er høyden under 120 cm skal meldingen "Vent to år" vises.
//
// Skriv koden din under her: