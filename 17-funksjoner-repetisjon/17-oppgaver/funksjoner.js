// Funksjoner

function skrivTeskt(){
    console.log("hei på deg!");
}

// f(x) = x + x
// f(2) = 2 + 2 = 4

function f(x){
    return x + x;
}

function doble(tall){
    return tall + tall;
}

let tall = doble(23);
console.log(doble(23));

function erStortTall(tall){
    if(tall > 1000){
        return true;
    } else {
        return false;
    }
}

console.log(erStortTall(500));

const brukerstall = Number(window.prompt("Skriv et tall"));

if(erStortTall(brukerstall)){
    window.alert("Det var et stort tall!")
} else {
    window.alert("DEt var lite det")
}