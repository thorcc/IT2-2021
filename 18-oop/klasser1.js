console.log("Javascript er lastet");

class Bil{
    constructor(merke, modell, kjKjort){
        this.merke = merke;
        this.modell = modell;
        this.kmKjort = kjKjort;
    }
    dagstur(){
        this.kjKjort += 100;
    }
    kmKjort(){

    }
}

let bmw = new Bil("BMW", "M5", 100);
let ford = new Bil("Ford", "Focus", 100);

function kjorBmw(){
    bmw.dagstur();
}
