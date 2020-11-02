# 4. Funksjoner og løkker

## Funksjoner

### Globale og lokale variabler (kap. 5.3)

Variabler som deklareres inni en funksjon, kaller vi for lokale variabler.
Mens variabler som deklareres utenfor funkjsonene kaller vi globale variabler.

Under er en kode for å registrere temperaturer, minTemp og maxTemp er deklarert utenfor funksjonen, og blir dermed globale variabler.
Globale variabler kan brukes over alt i koden, både inne i variabler og utenfor.
Variablene celsius og fahrenheit deklareres inni funksjonen, dermed blir disse lokale variabler, som kun kan brukes inni funksjonen.

```javascript

// Globale variabler
let minTemp = -20; // kulderekord
let maxTemp = 40; // varmerekord


function registrerTemp(){
    // Lokale variabler
    let celsius = Number(input("Hva er dagens temperatur i Celsius?"));
    let fahrenheit = celsius * 1.8 + 32;

    console.log(`Dagens temperatur er: ${celsius}c, ${fahrenheit}f`);

    if(celsius < minTemp){
        minTemp = celsius; // Oppdaterer den globale variabelen minTemp
        console.log("Ny kulderekord!");
    }
    else if(celsius > maxTemp){
        maxTemp = celsius; // Oppdaterer den globale variabelen maxTemp
        console.log("Ny varmerekord!");
    }

}

// Funksjonskall
registrerTemp();
```

#### Oppgaver

- Gjør prøv-selv oppgave 1,2 og 3 på s. 109
- Valgfritt: Gjør oppgave 4 på s. 109. Her må du tegne med javascript, se kapittel 3.5 for tips.

### Anonyme funksjoner (kap. 5.4)

Anonyme funksjoner er funksjoner uten funksjonsnavn.
De er mest brukt når en funksjon skal knyttes til en hendelse eller når de skal kjøre i det siden lastes.

```javascript
// Anonyme funksjoner knyttet til hendelser

// Gammel skrivemåte (likt som boken)
window.onclick = function(){
    document.body.backgroundColor = "red";
}

// Ny skrivemåte
window.onclick = () => {
    document.body.backgroundColor = "red";
}
```

#### Oppgaver

- Skriv av koden til eksempelene på s. 110, 112 og 113. Vent med å kjøre koden, og forklar hva hver linje i koden gjør til den du sitter ved siden av.
- Gjør alle prøv selv-oppgavene på s. 114

### Funksjoner med returverdi (kap. 5.5)

Med nøkkelordet **return** kan en funksjon returnere en verdi.

```javascript
function velkomstmelding(){
    return "Hallo der!";
}

velkommen.innerHTML = velkomstmelding();
```

#### Oppgaver

- Gjør alle prøv selv oppgavene på s. 117. Se eksemplene for tips.
  
## Oppgave: Minibank

Lag en minibank i nettleseren.
Brukerene skal kunne:

- Se saldo
- Ta ut penger
- Sette inn penger

Bonus:

- Overføre penger mellom konti
- Overføre penger til venner

Bruk litt tid på designet, slik at minibanken blir fin.
Spør Thor om tips hvis du er usikker på hvordan den skal se ut.
