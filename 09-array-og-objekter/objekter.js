const fotballspiller = {
    navn: "Dominic Calvert-Lewin",
    lag: "Everton",
    maal: 7
}

fotballspiller.navn
fotballspiller.lag
fotballspiller.mal

console.log(fotballspiller.navn);
console.log(fotballspiller.lag);
console.log(fotballspiller.maal);

console.log(fotballspiller["navn"]);
console.log(fotballspiller["lag"]);
console.log(fotballspiller["maal"]);

const spillere = [
    {
        navn: "Jamie Vardy",
        lag: "Leicester",
        maal: 5
    },
    {
        navn: "Mohamed Salah",
        lag: "Liverpool",
        maal: 6
    },
    {
        navn: "Harry Kane",
        lag: "Tottenham",
        maal: 5
    },
    {
        navn: "Dominic Calvert-Lewin",
        lag: "Everton",
        maal: 7
    }
];

for(let spiller of spillere){
    console.log(spiller.navn);
}


let mineTall = [3,1,2,3,8,24];
mineTall.sort();
console.log(mineTall);


function hentAntallMaal(spillernavn){
    for(let spiller of spillere){
        if(spiller.navn == spillernavn){
            return spiller.maal;
        }
    }
}

console.log(hentAntallMaal("Jamie Vardy"));

