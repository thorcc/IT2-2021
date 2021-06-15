# API

- [RESTful APIs in 100 seconds (frem til 2:30 er relevant)](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [Åpne API-er](https://github.com/public-apis/public-apis#index)
- [MDN: Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [SNL: API](https://snl.no/API)

## Utvalgte APIer

- ~~[Kanye.rest](https://kanye.rest/)~~
- [Taylor.rest](https://taylor.rest/)
- [Rickandmortyapi.com](https://rickandmortyapi.com/)
- [Yr.no](https://developer.yr.no/doc/GettingStarted/)
- [Pokeapi.co - Pokemon](https://pokeapi.co/)
- [Kraken - kryptovaluta](https://www.kraken.com/features/api)

## Eksempel: Taylor Swift sitater

### Hent sitat

````html
<script>
    async function hentSitat() {
        const svar = await fetch("https://api.taylor.rest/");
        const data = await svar.json();
        console.log(data.quote);
    }
</script>
````

### Vis sitat i appen

````html
<script>
    let sitat = "";

    async function hentSitat() {
        const svar = await fetch("https://api.taylor.rest/");
        const data = await svar.json();
        console.log(data.quote);
        sitat = data.quote;
    }

    hentSitat();
</script>

<div>
    {#if sitat}
        <h1>{sitat}</h1>
    {:else}
        <h1>Laster sitat</h1>
    {/if}
</div>
````


## Eksempel: Rick and Morty API
- [Rickandmortyapi.com](https://rickandmortyapi.com/)
- [Dokumentasjon](https://rickandmortyapi.com/documentation#rest)

### Hent karakterer

````html
<script>
    // Funksjon for å hente karakterer

    async function hentAlleKarakterer(){
        const svar = await fetch("https://rickandmortyapi.com/api/character")
        const data = await svar.json()
        console.log(data)
    }
</script>
````

### Vis karakterer i appen

````html
<script>
    let karakterer = []; // En tom array som skal fylles med karakterer

    async function hentKarakterer() {
        const svar = await fetch("https://rickandmortyapi.com/api/character");
        const data = await svar.json();
        karakterer = data.results; // Setter arrayen karakterer til å være lik arrayen med karakterer fra svaret
    }

    hentKarakterer(); // Kjører funksjonen hentAlleKarakterer når appen (nettsiden) lastes inn
</script>

{#each karakterer as karakter}
    <div>
        <h2>{karakter.name}</h2>
        <img src={karakter.image} alt="">
    </div>
{/each}
````
