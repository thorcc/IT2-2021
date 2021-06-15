<script>
    let snitt;
    let tillegg;
    let grense14;

    let inne;

    $: {
        let poeng = snitt * 10 + tillegg;
        if (poeng > grense14) {
            inne = true;
        } else {
            inne = false;
        }
    }
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
        height: 230px;
        background-color: #ebcfb2;
    }
    input[type="number"] {
        display: block;
    }
</style>

<h1>Høst 2015</h1>
<h2>Oppgave 2</h2>
<main>
    <div class="app">
        <label> Snitt <input type="number" bind:value={snitt} /> </label>
        <label>
            Tilleggspoeng
            <input type="number" bind:value={tillegg} />
        </label>
        <label>
            Poenggrense 2014
            <input type="number" bind:value={grense14} />
        </label>
        {#if snitt && tillegg && grense14}
            {#if inne}
                <p>Du kommer inn!</p>
            {:else}
                <p>Du kommer ikke inn..</p>
            {/if}
        {/if}
    </div>
</main>
