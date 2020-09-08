console.log("quiz.js er lastet");

// Referanser til HTML-elementer
const btnSvar = document.querySelector("#btnSvar");
const inpSvar = document.querySelector("#inpSvar");
const pSvar = document.querySelector("#pSvar");

function brukerSvar(){
    console.log("brukerSvar");
    if(inpSvar.value === "Ulan Bator"){
        console.log("Riktig!")
        pSvar.innerHTML = "Riktig";
        document.body.style.backgroundColor = "Green";
    }
    else{
        console.log("Feil!")
        pSvar.innerHTML = "Feil!";
        document.body.style.backgroundColor = "Red";
    }
}

btnSvar.onclick = brukerSvar;