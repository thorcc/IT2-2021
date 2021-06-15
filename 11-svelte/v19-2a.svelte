<script>
    let bredde;
    let hoyde;
    $: piksler = bredde * hoyde;
    $: megapiksler = piksler / 1000;
</script>

<style>
    h1,
    h2 {
        text-align: center;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .app {
        padding: 50px;
        height: 200px;
        background-color: #ffd972;
    }
    input[type="number"] {
        display: block;
    }
</style>

<h1>Vår 2019</h1>
<h2>Oppgave 2a</h2>
<main>
    <div class="app">
        <label> Bredde <input type="number" bind:value={bredde} /> </label>
        <label> Høyde <input type="number" bind:value={hoyde} /> </label>
        {#if piksler && megapiksler}
            <div>
                <p>Antall piksler {piksler}</p>
                <p>Antall megapiksler {megapiksler}</p>
            </div>
        {/if}
    </div>
</main>
