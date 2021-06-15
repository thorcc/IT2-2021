// Oppgave 1

// a. mengde

// 1
let mineTall = [9, 3, 1, 2];

// 2
mineTall.pop(); // Fjerner siste
mineTall.shift(); // Fjerner første
console.log(mineTall); // [3, 1]

// 3
// Nå har jeg arrayen [3, 1];
mineTall.splice(1,0,2); // fjern 0 fra indeks 1, og legg til verdeien 2 på indeks 1
//mineTall.splice(indeks,fjerneAntall,leggTil)

// 4
mineTall[3] = "Stilig";
mineTall[5] = true;

// 5
let nyArray = [
    [2,3,1],
    [5,6,4],
    [8,9,10]
]

console.log(nyArray[0][1]) // 3
console.log(nyArray[2][2]) // 10
console.log(nyArray[1][1]) // 6

// b. Utfordring

// 1. 
let gangetabell = [] // oppretter en global variabel
for (let i = 0; i < 11; i += 1){
    let inni = [] // oppretter en variabel som skal fylles med gangestykker
    for (let j = 0; j < 11; j += 1){
        inni.push(i * j); // setter regnestykke i * j inn i arrayen inni
    }
    gangetabell.push(inni); // legger arrayen inni i gangetabell
}

console.log(gangetabell[5][8]); // 40

// 2.
let trePaaRad = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

trePaaRad[1][1] = 1;

console.log(trePaaRad); /*
[0, 0, 0],
[0, 1, 0],
[0, 0, 0]
*/

trePaaRad[0][0] = 2;
console.log(trePaaRad); /*
[2, 0, 0],
[0, 1, 0],
[0, 0, 0]
*/

// Oppgave 2 - telefonbok

// 1 og 2
telefonbok = {
    Arne: 22334455,
    Lisa: 95959595,
    Jonas: 97959795,
    Peder: 12345678
}

// 3.
function hentNummer (navn){
    if(telefonbok[navn]){
        console.log(telefonbok[navn]);
    }
    else{
        console.log("Navnet er ikke i katalogen");
    }
}
console.log(hentNummer("Arne")); // 22334455
console.log(hentNummer("Thor")); // Navnet er ikke i katalogen

// Oppgave 3 - Objekt med arrays
let flagg = {
    norge : ["rødt", "hvitt", "blått"],
    sverige : ["blått", "gult"],
    danmark : ["rødt", "hvitt"],
    finland : ["hvitt", "blått"],
    japan : ["rødt", "hvitt"],
    gabon : ["grønt", "gult", "blått"],
    chile : ["blått", "hvitt", "rødt"]
}

// 1
flagg.england = ["rødt", "hvitt"];
// alternativt flagg["england"] = ["rødt", "hvitt"];

// 2
function hentFarger(land){
    if(flagg[land]){
        console.log(flagg[land]);
    }
    else{
        console.log("Landet er ikke i systemet.")
    }
}

hentFarger("norge"); // ["rødt", "hvitt", "blått"]
hentFarger("usa"); // Landet er ikke i systemet

// Oppgave 4

// 1
let bakeri = [
    {
        navn: "Croissant",
        pris: 25
    },
    {
        navn: "Grovbrød",
        pris: 40
    },
    {
        navn: "Kneipp",
        pris: 20
    },
    {
        navn: "Rosinbolle",
        pris: 20
    },
    {
        navn: "Baguette",
        pris: 10
    }
];

// 2
for(let vare of bakeri){
    console.log(`${vare.navn}: ${vare.pris}`);
}
// ny versjon etter oppg. 5
meny(bakeri);

// 3
bakeri[0].pris += 10;

// 4
for(let vare of bakeri){
    console.log(`${vare.navn}: ${vare.pris}`);
}
// ny versjon etter oppg. 5
meny(bakeri);

// 5
function meny(array){
    for(let vare of array){
        console.log(`${vare.navn}: ${vare.pris}`);
    }  
}
