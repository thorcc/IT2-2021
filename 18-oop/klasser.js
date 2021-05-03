class Rektangel {
    constructor(hoyde, bredde){
        // Objekter av klassen Rektangel får egenskapene hoyde og bredde
        this.hoyde = hoyde;
        this.bredde = bredde;
    }
  }
  
  let mittRektangel = new Rektangel(25, 30);

  //console.log(mittRektangel);


  class Person {
    constructor(fornavn, etternavn){
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.alder = 0;
        this.kjaereste = "Ingen";
    }

    voks(){
        this.alder += 1;
    }

    hentFulltNavn(){
        return this.fornavn + this.etternavn;
    }

    slaaOpp(){
        this.kjaereste = "Ingen";
    }
}

let liv = new Person("Liv Signe", "Navarsete"); // Kari blir født
let trygve = new Person("Trygve Slagsvold", "Vedum"); // Trygve blir født

liv.voks();
trygve.voks();
liv.voks();
trygve.voks();
liv.voks();
trygve.voks();

console.log(liv); // {fornavn: "Liv Signe", etternavn: "Navarsete", alder: 3, kjaereste: "Ingen"}
console.log(liv); // {fornavn: "Trygve Slagsvold", etternavn: "Vedum", alder: 3, kjaereste: "Ingen"}

liv.kjaereste = trygve;

console.log(liv); /* 
alder: 3
etternavn: "Navarsete"
fornavn: "Liv Signe"
​
kjaereste: {…}
​​
alder: 3
​​
etternavn: "Vedum"
​​
fornavn: "Trygve Slagsvold"
​​
kjaereste: "Ingen"
*/