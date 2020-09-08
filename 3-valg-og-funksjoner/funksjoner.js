console.log("funksjoner.js er lastet!");

/* --- Funksjoner i Javascript --- */

// Funksjonsdefinisjon
// OBS! Dette er bare en definisjon, 
// og denne koden vil ikke kjøres uten et funksjonskall
function siHei(){
    console.log("Hei Thor!");
    alert("Jasså ja");
    console.log("Hallo der!");
}

// Funksjonskall, altså vi kjører koden mellom krøllparentesene i siHei.
siHei();
siHei();
siHei();

// Ny skrivemåte for å definere funksjoner
const siHallo = () => {
    console.log("Hallo der!");
    console.log("Dette er den nye skrivemåten!");
}

// Funksjonskallet er helt likt
siHallo();

/* --- Funksjoner med parametre --- */
function siHeiMedNavn(navn){
    console.log(`Hei ${navn}!`);
}

siHeiMedNavn("Per");
siHeiMedNavn("Pål");
siHeiMedNavn("Espen Askeladd");

function siHalloTilFlere(navn1, navn2){
    console.log(`Hallo ${navn1} og ${navn2}!`);
}

siHalloTilFlere("Janne", "Asgeir");

// Ny skrivemåte med parametre
const minFunksjon = (tall2, tall1) => {
    console.log(tall1 + tall2);
}
