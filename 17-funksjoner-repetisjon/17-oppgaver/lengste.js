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

console.log(lengsteAlfabetisk("azcbobobegghakl"));