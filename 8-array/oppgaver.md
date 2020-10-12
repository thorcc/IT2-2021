# Oppgaver - Array og løkker

## 1. For-løkker

Velg enten a. mengdetrening eller b. utfordring

### a. Mengdetrening

1. I konsollen:
   1. Skriv ut tallene fra 1 til 100.
   2. Skriv ut hvert andre tall fra 1 til 100.
   3. Skriv ut hvert tredje tall fra 200 og ned til 0.

2. På nettsiden:
   1. Lag et div-element i HTML, og skriv tallene 1 til 10 ut i HTML-elementet på nettsiden
      - Tips: `document.querySelector("#id")` og `mittElement.innerHTML +=`

### b. Utfordring

1. Lag et program som teller fra 000 til 999. Programmet skal telle ved hjelp av tre løkker, der hver løkke teller henholdsvis 1er-, 10er- og 100er-plassen. Hver tallposisjon skal ha sin egen variabel (i,j,k) i programmet.
2. Lag et div-element i HTML, og skriv tallene 1 til 10 ut i HTML-elementet på nettsiden
   - Tips: `document.querySelector("#id")` og `mittElement.innerHTML +=`
3. Skriv de 10 første fibonaccitallene ut på nettsiden (Tips: google fibonacci)

## 2. Array

1. Lag et array fylt med 3 tall du velger selv. Legg deretter til et nytt tall på slutten av array-en. Skriv ut det første og tredje elementet i array-en.
2. Slett det siste elementet i arrayet.
3. Legg til et nytt tall sist i elementet.
4. Lag et array med fire matvarer. Traverser arrayet med en for of-løkke, og skriv ut matvarene i en nummerert liste.
   - Tips: se eksempel s. 207

## 3. Objekt
1. Lag et objekt med info om deg selv.
2. Logg navn og alder fra objektet i konsollen.

## 4. Array med objekter

1. Lag et array med objekter, hvert objekt skal inneholde info om en film. Filminfo finner du nedenfor.
2. Traverser gjennom arrayet, og logg tittel og regissør i konsollen.
3. Traverser skuespiller-arrayet for hver film, og logg skuespillerne i konsollen.
4. Skriv ut tittel og regissør på nettsiden.
5. Vis filmbildene på nettsiden. 


```
Tenet
   Bilde: https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SY1000_CR0,0,666,1000_AL_.jpg
   År: 2020
   Regissør: Christopher Nolan
   Skuespillere: John David Washington, Robert Pattinson, Elizabeth Debicki

Mulan
   Bilde: https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg
   År: 2020
   Regissør: Niki Caro
   Skuespillere: Yifei Liu, Donnie Yen, Li Gong

Hamilton
   Bilde: https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg
   År: 2020
   Regissør: Thomas Kail
   Skuespillere: Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.

I'm Thinking of Ending Things
   Bilde: https://m.media-amazon.com/images/M/MV5BNWMyZTA1MTItMzFhOS00NGY5LWJlZDMtMzczZmRjOThkMmViXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg
   År: 2020
   Regissør: Charlie Kaufman
   Skuespillere: Jesse Plemons, Jessie Buckley, Toni Collette
```

## 5. Tilfedige bilder

1. Lag en funksjon med navn `tilfeldig`, som tar inn to tall som parametere, `maks` og `min`. Funksjonen skal returnere et tilfeldig heltall mellom `min` og `maks`.
   - Tips: Se s. 58 for tilfeldig tall, og kapittel 5.5 for funksjoner med returverdi.
2. Lag et array med fire dyrenavn, og bruk funksjonen `tilfeldig` for å skrive ut et tilfeldig dyrenavn på nettsiden.
3. Finn fire bilder av dyr på nettet, og lagre filnavnene i en array.
   - Eks: `let dyr = ["hund.jpg","katt.jpg","mus.jpg","ape.jpg","gris.jpg"];`
4. Lag et `img-element` i HTML, og bruk funksjonen `tilfeldig` for å skrive ut et tilfeldig bilde på nettsiden
   - Tips: `mittBilde.src = ...`

## 6. Slideshow

- Les gjennom eksemplet på s. 200 og 201, og lag din egen nettside med et slideshow.

## Utfordring: Coolors

- Lag en kopi av nettstedet coolors: [Coolor.co](https://coolors.co/0c090d-e01a4f-f15946-f9c22e-53b3cb)
- Tips: random-funksjon for rgb-farger.
- Bruk: `querySelectorAll("selektor")` for å hente alle elementer av en selektor, og for-of for å gå gjennom alle
