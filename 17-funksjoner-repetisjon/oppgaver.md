# 17. Oppgaver - funksjoner

`*` = utfordrende oppgave

Alle funksjonene skal ha tester som logger funksjonskall i konsollen.  
Oppgavene besvares i en script-fil (.js). Du velger selv hvordan du vil kjøre koden, du kan f.eks koble den til en HTML-fil.

## 0. Summen av to tall  (eksempel)

Lag en funksjon, som tar inn to tall som parametere, og returnerer summen av tallene.

Løsning:
````js
// Oppgave 0

function pluss(tall1, tall2){
    return tall1 + tall2;
} 
console.log("Oppgave 0a");
console.log(pluss(2,2));

````

## 1. Funksjoner

a) Skriv en funksjon, som tar imot et tall som parameter, og returnerer et tall som er dobbelt så stort. 

b) Skriv en funksjon som returnerer arealet av et rektangel, funksjonen skal ta inn høyde og bredde.  

c) Skriv en funksjon som regner ut areal av trekanter, firkanter og sirkler. Funksjonen skal ta inn høyde, bredde og en tekst med hvilken figur det er.  

- Eksempler på funksjonskall: 
```
finnAreal("trekant",30,30) // 450
finnAreal("sirkel",20,20)
```
### Tips

- Høyden og bredden til en sirkel er diameteren.  
- Formlene finnes på google.

## 2. Funksjoner og objekter

a) Opprett tre person-objekter. De skal ha egenskapene `fornavn`, `etternavn`, `fodselsdag`, `fodselsmaaned`, `fodselsaar`.

b) Opprett funksjoner som tar inn et person-objekt som parameter, og returnerer følgende:

    1. Personens fulle navn.
    2. Hvor mange år personen har levd (frem til dagen i dag).
    3. Hvor mange dager personen har levd (frem til dagen i dag).

c) Opprett en funksjon som tar inn to person-objekter som parametere, og returnerer den eldste personen.`*`

## 3. Funksjoner og arrays

a) Lag funksjoner som tar inn en array (liste) med temperaturer, og returnerer: 

 1. Antall dager temperaturen var under 5 grader.
 2. Den høyeste temperaturen.
 3. Gjennomsnittstemperaturen.

b) De første ti dagene i februar ble disse temperaturene målt i Drammen: 3, 4, 5, 6, 5, 5, 6, 4, 4, 5.

a) Finn ut hvor mange dager som hadde lavere temperature enn 5 grader.
b) Finn den høyeste temperaturen.
c) Finn gjennomsnittemperaturen.

## 4. Funksjoner og objekter med arrays

a) Utvid person objektene fra forrige oppgave, slik at de også har egenskapen `favorittmat`, som er en liste på tre matretter, eks: Pizza, Taco og Pølser

b) Opprett funksjon som tar inn et person-objekt som parameter, og returnerer følgende:

    1. Listen `favorittmat`
    2. Den første matretten
    3. En tilfeldig favorittrett fra favorittmat-listen`*`

c) Lag en funksjon `hvaSkalViHaTilMiddag`, som avgjør hva to personer skal ha til middag. Funksjonen skal ta inn to person-objekter som parametere, og returnere en tilfeldig matrett fra favorittmat-listen til en av personene. Tips: Her kan du bruke funksjonen du opprettet i oppgave b3 forrige oppgave.`**`

d) Lag en funksjon som returnerer en liste over matrettene to personer har til felles, hvis de ikke har noen felles matretter, skal en tom liste returneres.`**`

## 5. Funksjoner, objekter og løkker

a) Lag en funksjon `erFavoritt(matrett, person)`, som sjekker om en person har en gitt matrett i favorittlisten sin. Funksjonen skal returnere `true` eller `false`, avhengig om personen har matretten i favorittlisten sin.

## Tips

Lurer du på noe? Prøv å google.

Eksempler:

- Du lurer på hvordan man kan legge til noe i en array, da kan du google `how to add to array javascript`
- Du lurer på hvordan man kan få ut et tilfeldig element fra en array, da kan du google `how to get random from array javascript`


## Ekstraoppgaver. Telle-funksjoner

Denne oppgaven har tre deloppgaver som er uavhengige av hverandre. I hver av deloppgavene skal du skrive en funksjon.

a) Lag en funksjon som returnerer antall sifre i et tall. For eksempel er det 3 sifre i tallet 104.

b) Lag en funksjon som gir hvor mange av en viss bokstav det er i et ord. For eksempel er det 2 forekomster av bokstaven "e" i ordet kakespade.

c) Lag en funksjon som tar enn en streng og et tall, og som returnerer True eller False basert på om strengens lengde er høyere enn tall.

d) Lag en funksjon som teller antall vokaler i en string. Gyldige vokaler er a, e, i, o og u. For eksempel hvis stringen som sendes inn er 'azcbobobegghakl', skal funksjonen retunere 5.

e) Lag en funksjon som returnerer antall ganger 'bob' forekommer i en string. For eksempel hvis 'azcbobobegghakl' sendes inn, skal funksjonen returnere 2.

f) Lag en funksjon som returnerer den lengste delen av en string der bokstavene forekommer i alfabetisk rekkefølge. For eksempel hvis 'azcbobobegghakl' sendes inn, så skal funksjonen returnere 'beggh'
