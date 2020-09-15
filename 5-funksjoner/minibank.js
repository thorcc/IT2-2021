// Globale variabler
const pSaldo = document.querySelector("#pSaldo");
const btnTaUt = document.querySelector("#btnTaUt");
const btnSettInn = document.querySelector("#btnSettInn");
const inpBelop = document.querySelector("#inpBelop");
let saldo = 5000;

// Funksjonsdefinisjoner
function hentSaldo(){
    return `Saldo: ${saldo}kr`;
}
function taUt(belop){
    saldo = saldo - belop; // oppdaterer saldo
    pSaldo.innerHTML = hentSaldo();
}
function settInn(belop){
    saldo = saldo + belop; // oppdaterer saldo
    pSaldo.innerHTML = hentSaldo();
}

// Hendelser
btnTaUt.onclick = function(){
    let belop = Number(inpBelop.value);
    taUt(belop);
};
btnSettInn.onclick = function(){
    let belop = Number(inpBelop.value);
    settInn(belop);
    console.log(belop + belop);
}

// Kode som kjøres ved oppstart
pSaldo.innerHTML = hentSaldo();
