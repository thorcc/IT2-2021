/*
let tall = Number(prompt("Skriv inn ett tall"));
console.log(typeof(tall));

console.log(tall + tall);

if(tall == 1){ // Sjekker om verdien til tall er lik 1
    console.log("To ==");
}

if(tall === 1){ // Sjekker om verdi og datatype er lik tallet 1
    console.log("Tre ===");
}
*/

let brukernavn = prompt("Hva er brukernavnet ditt?");
let passord = prompt("Hva er passordet ditt?");

if(brukernavn === "thor" && passord === "1234"){
    document.body.innerHTML += `<img src="https://akamai.vgc.no/drfront/images/2020/09/01/c=0,39,2550,1493;w=654;h=383;552469.jpg">`
    console.log("Velkommen Thor!");
}
else if(brukernavn === "hans" && passord === "abc"){
    console.log("Velkommen Hans!");
}
else if(brukernavn === "simen" && passord === "passord123"){
    console.log("Velkommen Simen!");
}
else{
    console.log("Feil brukernavn eller passord!");
}
