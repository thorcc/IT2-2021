# Løkker

- [YT: while-løkker (Norsk)](https://www.youtube.com/watch?v=agBmm-nhpJQ&index=4&list=PLJC9cL8YfNXo_CUCsG17Nr5e1Zv8jm9HW)
- [YT: for-løkker (Norsk)](https://www.youtube.com/watch?v=cwEvgSA4LxQ&index=3&list=PLJC9cL8YfNXo_CUCsG17Nr5e1Zv8jm9HW)
- [Scrimba: Rutenett med while-løkke](https://scrimba.com/learn/kursiwebprogrammering/vi-lager-et-rutenett-med-en-while-lkke-cKzmrSQ)

Datamaskiner brukes ofte til å automatisere gjentagende oppgaver.
Å repetere identiske eller lignende arbeidsoppgaver uten å gjøre feil er noe datamaskiner er veldig gode til, mens mennesker ikke alltid er like flinke. 
I javascript brukes løkker for å repetere arbeidsoppgaver.

## While-løkke

While-løkker kjører "så lenge" en betingelse er sann.
For eksempel bruker programmet under en while-løkke for å telle ned fra 5, og deretter si "lift off!":

```JS
let n = 5;
while (n > 0){
    console.log(n);
    n -= 1;
}
console.log("Lift off!");
```

Så lenge `n` er større enn 0 skal programmet kjøre.

While-løkker brukes som oftest når vi ikke vet hvor lenge vi skal holde på.
F.eks helt til en spiller dør i et spill, eller så lenge spilleren ikke har gjettet riktig, som i eksemplet under.

```JS
let hemmeligTall = 32;
let spillerGjett = Number(prompt("Hvilket tall tenker jeg på? (Mellom 1 og 100)"));

while (spillerGjett !== hemmeligTall){
    spillerGjett = Number(prompt("Feil! Prøv igjen!"));
}

alert("Riktig!");
```

### Skrivemåte

```JS
while (betingelse){
    // kode som skal gjennomføres
}
```

### Uendelige løkker

While-løkkene kjører så lenge betingelsen er sann (true). 
Hvis betingelsen aldri blir usann (false), vil en løkke kjøre for alltid, slike løkker kalles uendelige løkker (infinite loops).
Hvis vi ender opp i en uendelig løkke vil PC-en fryse, og vi får ikke kjørt resten av programmet.

#### Eks:

```JS
while (true){
    console.log("Inn i evigheten!")
}
```
```JS
let n = 20;
while (n > 0){
    console.log(n)
}
```
> I det siste eksemplet vil `n` alltid være 20, og 20 er alltid større enn 0.


## For-løkke

En for-løkke gjentar en kode et bestemt antall ganger.
Hvis vi på forhånd vet hvor mange ganger en kode skal kjøre, kan vi bruke en for-løkke.

Løkken under vil telle fra 1 til 10.

```JS
for (let teller = 1; teller < 11; teller += 1){
    console.log(teller);
}
```

### Skrivemåte

```JS
for (definere variabel; betingelse; endre variabel){
    // kode som skal gjennomføres
}
```


## While vs. for

I mange tilfeller kan vi velge om vi skal bruke for eller while.
I eksemplet under brukes både en while-løkke og en for-løkke for å telle til 10.

```JS
// ---- While ----
let i = 1;
while(i < 11){
    console.log(i);
    i += 1;
}

// ---- For -----
for(let i = 1; i < 11; i += 1) {
    console.log(i);
}
```

Selv om det er mulig å bruke begge typene løkker for å løse samme problem, er det noen tilfeller hvor vi oftere bruker for, og andre tilfeller hvor vi oftere bruker while. 
For-løkker brukes som oftest når vi vet hvor mange ganger vi skal gjenta en kode, mens While-løkker brukes oftest når vi ikke vet hvor mange ganger vi skal gjenta en kode.
