// Oppgave 0

function pluss(tall1, tall2){
    return tall1 + tall2;
}

console.log("Oppgave 0");
console.log(pluss(2,2));

// Oppgave 1a

function doble(tall){
    return 2 * tall;
}

console.log("Oppgave 1a");
console.log(doble(2));

// Oppgave 1b

function arealRektangel(hoyde, bredde){
    return hoyde * bredde;
}

console.log("Oppgave 1b");
console.log(arealRektangel(2,3));

// Oppgave 1c

function areal(hoyde, bredde, figur){
    if(figur === "trekant"){
        return hoyde * bredde / 2;
    } else if(figur === "sirkel"){
        return Math.PI * hoyde * bredde / 4;
    } else if(figur === "firkant"){
        return hoyde * bredde;
    } else {
        return NaN;
    }
}

let arealTrekant = areal(20, 10, "trekant");
console.log(arealTrekant);

// Oppgave 2a

let thor = {
    fornavn: "Thor",
    etternavn: "Coward",
    fodselsdag: 13,
    fodselsmaaned: 3,
    aar: 1991,
    favorittmat: ["Taco", "Laks", "Sushi"]
}
let espen = {
    fornavn: "Espen",
    etternavn: "Coward",
    fodselsdag: 13,
    fodselsmaaned: 3,
    aar: 1989,
    favorittmat: ["Taco", "Pizza", "Sushi"]
}



// Oppgave 2b

function navn(person){
    return person.fornavn + " " + person.etternavn;
}

function aar(person){
    // i dag er det 16.03.2021
    let aar = 2021 - person.aar; // Finner antall år
    if(person.fodselsmaaned > 3 || person.fodselsdag > 16){ // Hvis personens maaned er større enn 3 (mars), eller personens dag er større en 16, har hen ikke hatt bursdag enda:
        aar -= 1; // Trekk fra ett år
    }
}



// Oppgave 2c
function eldste(person1, person2){
    if(person1.aar > person2.aar){
        return person1;
    } else if(person2.aar > person1.aar){
        return person2;
    }

    if(person1.fodselsmaaned > person2.fodselsmaaned){
        return person1;
    } else if(person2.fodselsmaaned > person1.fodselsmaaned){
        return person2;
    }

    if(person1.dag > person2.dag){
        return person1;
    } else if(person2.dag > person1.dag){
        return person2;
    }

    return person1;
}


// Oppgave 3

function dagerUnder5(temperaturer){
    let antall = 0; // Lager en teller
    for(let temp of temperaturer){ // Går gjennom alle temperaturer, og kaller hver og en for temp
        if(temp < 5){ // Hvis temp er under 5
            antall += 1; // Legg til 1 på antall
        }
    }
    return antall; // Returner antall
}

function hoyesteTemp(temperaturer){
    let hoyeste = -Infinity;
    for(let temp of temperaturer){
        if(temp > hoyeste){
            hoyeste = temp;
        }
    }
    return hoyeste;
}

function gjennomsnitt(temperaturer){
    let total = 0;
    for(let temp of temperaturer){
        total += temp;
    }
    return total / temperaturer.length;
}

let temps = [3, 4, 5, 6, 5, 5, 6, 4, 4, 5];

let antallDager = dagerUnder5(temps);
let hoyeste = hoyesteTemp(temps);
let snitt = gjennomsnitt(temps);

console.log(antallDager);
console.log(hoyeste);
console.log(snitt);

// Oppgave 4

function hentFavorittmat(person){
    return person.favorittmat;
}

function hentForsteFavoritt(person){
    return person.favorittmat[0];
}

function tilfeldigFavoritt(person){
    let tilfeldigTall = Math.floor(Math.random() * person.favorittmat.length);
    return person.favorittmat[tilfeldigTall];
}

console.log(tilfeldigFavoritt(thor));

// Oppgave 4c

function hvaSkalViHaTilMiddag(person1, person2){
    let tilfeldigTall = Math.random();
    if(tilfeldigTall < 0.5){
        return tilfeldigFavoritt(person1);
    } else{
        return tilfeldigFavoritt(person2);
    }
}

// Oppgave 4d

function fellesFavoritter(person1, person2){
    let felles = []; // en liste som skal fylles med alle felles matretter
    for(let matrettP1 of person1.favorittmat){ // For hver matrett i person1.favorittmat, kall matretten matrettP1
        for(let matrettP2 of person2.favorittmat){ // For hver matrett i person2.favorittmat, kalle matrettP2
            if(matrettP1 === matrettP2){ // Hvis matrettP1 er lik matrettP2:
                felles.push(matrettP1); // Legg matretten i listen
            }
        }
    }
    return felles; // returner listen
}

// Oppgave 5

function erFavoritt(matrett, person){
    for(let matrettPerson of person.favorittmat){ // Gå gjennom alle matrettene til personen, og kall de for matrettPerson
        if(matrettPerson === matrett){ // hvis den aktuelle matrettPerson er lik matretten som blir sendt inn som parameter:
            return true; // returner true
        }
    }
    return false; // Hvis vi går gjennom hele listen, og ikke returnerer true, returneres false
}

// Ekstraoppgaver

// a)
function antallSifre(tall){
    return String(tall).length; // Gjør tallet om til en string, og finner lengden av stringen
}

// b)
function antallForekomster(ord, bokstav){
    let bokstavliste = ord.split(""); // Lager en array med bokstaver av ordet
    let antall = 0;
    for(let bokstavIOrd of bokstavliste){
        if(bokstavIOrd === bokstav){
            antall += 1;
        }
    }
    return antall;
}

// c)
function lengreEnnTall(tekst, tall){
    if(tekst.length > tall){
        return true;
    } else {
        return false;
    }
}

// d)
function antallVokaler(tekst){
    let vokaler = ["a", "e", "i", "o", "u"];
    let antall = 0;
    for(let bokstav of tekst){
        for(let vokal of vokaler){
            if(bokstav === vokal){
                antall += 1;
            }
        }
    }
    return antall;
}

// e)
function antallBob(tekst){
    let antall = 0;
    for (let i = 0; i < tekst.length; i+= 1){
        if(tekst[i] === "b" && tekst[i + 1] === "o" && tekst[i + 2] === "b"){
            antall += 1;
        }
    }
    return antall;
}

// f)
function lengsteAlfabetisk(tekst){
    let lengste = "";
    for(let i = 0; i < tekst.length; i += 1){
        let teller = 0;
        let midlertidig = tekst[i];
        while(tekst[i + teller] <= tekst[i + teller + 1]){
            midlertidig += tekst[i + teller + 1];
            teller += 1;
        }
        if(midlertidig.length > lengste.length){
            lengste = midlertidig;
        }
    }
    return lengste;
}