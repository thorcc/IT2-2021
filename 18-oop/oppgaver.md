# Oppgaver - Objekt orientert programmering

Oppgavene kan skrives i et vanlig .js-dokument, i en script-tag i en vanlig HTML-fil eller i script-taggen til en Svelte-fil.

## 1. Bil

1) Skriv en klasse med navn 'Bil':  
2) Bilobjekter skal ha egenskapene eier og kmKjort.  
3) Bilobjekter skal ha en metode dagstur, som øker kmKjort med 100 kilometer.
4) Bilobjekter skal ha en metode kjor, som øker kmKjort med et gitt antall kilometer.  
5) Test klassen din ved å opprette to Bil-objekter med forskjellige eiere og kalle opp kjor- og dagstur-metodene på objektene.

```js
class Bil{
    constructor(!!fyll ut her!!){
        //!!Fyll ut her!!
    }
    dagstur(){
        //!!Fyll ut her!!
    }
    kjor(antall){
        //!!Fyll ut her!!
    }
}
```

## 2. Figurer

1) Lag en klasse for en rektangel. Rektangler har egenskapene hoyde og bredde.
2) Lag en metode areal(), som returnerer arealet av rektangelet.
3) Opprett to rektangler, og logg arealet av rektanglene i konsollen
4) Lag en klasse for en trekant, med passende egenskaper.
5) Lag en metode areal(), som returnerer arealet av rektangelet
6) Opprett to trekanter, og logg arealet av rektanglene i konsollen

> Husk this.

## 3a. Espressomaskin

I denne oppgaven skal vi modellere en kapselmaskin for espresso. Maskinen har to innstillinger, espresso (liten kopp) og lungo (større kopp). Maskinen kan ikke lage kaffe uten nok vann. En espresso krever 40ml, og en lungo krever 110ml. Maskinens vanntank er på 1000ml -- én liter.

Gitt koden under, programmer klassen EspressoMaskin. Du kommer til å måtte definere dine egne egenskaper når du skal løse denne oppgaven, og du står også fritt til å definere egne metoder i klassen. Du kan la metodene logge beskjeder til brukeren i konsollen.

```js
class EspressoMaskin{
    constructor(!!fyll ut her!!){

    }

    lagEspresso(){
        // Lag espresso dersom det er nok vann
    }

    lagLungo(){
        // Lag lungo dersom det er nok vann
    }

    fyllVann(ml){
        // Fyll på et gitt antall milliliter vann, dersom det er plass
    }
}
```

## 3b. Espressomaskin på nettsiden

1. Kopier koden for EspressoMaskin-klassen inn i script-taggen i en svelte-fil.
2. Lag et nytt EspressoMaskin-objekt fra EspressoMaskin-klassen.
   - `let maskin = new EspressoMaskin()`
3. Legg til en knapp på nettsiden, som lager en Espresso.
   - `on:click={maskin.lagEspresso}`
4. Legg til en knapp på nettsiden, som lager en Lungo.
5. Legg til et input-felt, og en ny knapp som fyller maskinen med antall milliliter som er gitt i input-feltet.

## 4. Fotballag

Denne oppgaven er inspirert av eksamen våren 20.

1. Lag ferdig metodene i klassen fotballag under:

```js
class Fotballag{
    constructor(navn){
        this.navn = navn;
        this.vunnet = 0;
        this.uavgjort = 0;
        this.tapt = 0;
        this.maalFor = 0;
        this.maalMot = 0;
    }

    hentPoeng(){
        // Returnerer antall poeng
        // 3 poeng per seier + 1 poeng per uavgjort (tap gir 0 poeng)
    }
    hentMaalforskjell(){
        // Returnerer målFor - målMot
    }
    spillKamp(maalFor, maalMot){
        // Oppdaterer egenskapene basert på hvordan kampen gikk.
    }
}
```

2. Test klassen ved å opprette to fotballag, og spille minst to kamper
