<script>
    let vekt;
    $: bmr = 35.27 + 0.558 * vekt;
    let pal;
    $: energiforbruk = bmr * pal;
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
        background-color: #60992d;
        color: white;
    }
    input[type="number"] {
        display: block;
    }
</style>

<h1>Høst 2013</h1>
<h2>Oppgave 2 - Beregning av energiforbruk</h2>
<main>
    <div class="app">
        <label> Vekt <input type="number" bind:value={vekt} /> </label>
        <label>
            <input type="radio" bind:group={pal} value={1.2} />
            Stille
        </label>
        <label>
            <input type="radio" bind:group={pal} value={1.4} />
            Aktivitet
        </label>
        <div>
            {#if vekt}
                <p>BMR = {bmr.toFixed(2)}</p>
                {#if energiforbruk}
                    <p>Energiforbruk = {energiforbruk.toFixed(2)}</p>
                {/if}
            {/if}
        </div>
    </div>
</main>
