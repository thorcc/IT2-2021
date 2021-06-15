# Arrrayer og objekter

## Oppgave 1 - Array: Mengde eller utfordring

Velg enten a. mengde eller b. utfordring

### a. Mengde

1. Opprett en array `mineTall` med tallene 9, 3, 1 og 2
2. Bruk array-metoder (se powerpoint) for å endre arrayen til å bare inneholde tallene 3 og 1.
3. Legg til tallet 2 mellom tallene 3 og 1.
4. Legg til stringen "Stilig" på indeks 3 og boolean-en true på indeks 5.
5. Du skal opprette en todimensjonal array, lag en array som har tre arrayer inne i seg. Inne i de innerste arrayene skal det være tallverdier.
6. Skriv ut minst tre forskjellige tall fra den todimensjonale arrayen.
   
## b. Utfordring

1. Lag en todimensjonal array som inneholder hele den lille gangetabellen. Den skal kunne f.eks kunne brukes slik: `gangetabell[5][8] // 40`
   - Bonuspoeng: Bruk for-løkke(r) for å genere gangetabellen
2. Lag et tre-på-rad spill med en todimensjonal array, spillet skal spilles ved å oppdatere verdier i arrayen fra konsollen.

## Oppgave 2 - Telefonbok (objekter)

Vi skal i denne oppgaven lage en enkel telefonbok, der bruker kan søke på navn for å hente telefonnummer.

1. Opprett et objekt `telefonbok`.

2. Fyll ordboken med egenskaper og verdier. Navnet skal være egenskap og telefonnummeret skal være verdien:
- Arne, 22334455
- Lisa, 95959595
- Jonas, 97959795
- Peder, 12345678

3. Lag en funksjon som lar brukeren skrive inn et navn, også logges telefonnummeret som hører til dette navnet ut i konsollen. Hvis brukeren skriver inn et navn som ikke eksisterer i ordboken, gi en feilmelding som forteller at vi ikke har lagret dette nummeret.
    - Hint: if

## Oppgave 3 - Objekt med arrays

Objekter under har navn på land som egenskaper og fargene på flagget til landene som verdier. Det er denne du skal bruke i oppgavene under.

``` js
let flagg = {
    norge : ["rødt", "hvitt", "blått"],
    sverige : ["blått", "gult"],
    danmark : ["rødt", "hvitt"],
    finland : ["hvitt", "blått"],
    japan : ["rødt", "hvitt"],
    gabon : ["grønt", "gult", "blått"],
    chile : ["blått", "hvitt", "rødt"]
}
```

> OBS! Merk at vi kan skrive ordbøker og lister over flere linjer, så lenge vi passer på komma og avsluttende "]" eller "}", som i flaggOrdbok over.

1. Legg til et nytt land i objektet, uten å endre objektet.
2. Lag en funksjon som tar inn navn på land, også skriver ut listen over farger som hører til landet.


## Oppgave 4 - Array med objekter

1. Lag en array `bakeri`, og fyll arrayen med følgende varer som objekter, med navn og pris som egenskaper.
   - Croissant 25
   - Grovbrød 40
   - Kneipp 20
   - Rosinbolle 20
   - Baguette 10

2. Skriv ut innholdet i hele bakeri-et som en meny i konsollen med en linje per vare, med navn og pris
   - Tips: for-of

3. Øk prisen på croissant med 10, uten å endre tidligere kode.

4. Skriv ut arrayen med innhold på nytt, og sjekk at croissantens pris er endret riktig.

5. Lag en funksjon `meny(array)` som du kan kalle på for å utføre oppgave 1 og 4, og endre programmet ditt til å kjøre denne funksjonen i stedet.

## Utfordring 1 - Diagrammer
1. Lag et stolpediagram. Se eksempel s. 225
2. Lag et stolpediagram med flex. s. 227
3. Lag et kakediagram. s. 232

## Utfordring 2 - Lag spillet memory
[YT-spilleliste](https://www.youtube.com/playlist?list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw)  

[Medium: Build a memory game in 30 minutes](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)

> OBS! I film nr. to bruker hun terminalen for å opprette filer, du kan gjøre det i VS Code på vanlig måte.

