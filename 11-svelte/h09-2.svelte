<script>
	let nm;
	let knop;
	$: km = nm * 1.852;
	$: tid = nm / knop;
</script>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.app {
		width: 350px;
		height: 350px;
		background-color: darkorange;
	}
	input {
		width: 50px;
	}

	h1,
	h2 {
		text-align: center;
	}
</style>

<h1>Høst 2009</h1>

<h2>Oppgave 2 - Omrekningskalkulator</h2>
<main>
	<div class="app">
		<div>
			<label>Avstand (nm): </label>
			<input type="number" bind:value={nm} />
			<label>Fart (knop): </label>
			<input type="number" bind:value={knop} />
		</div>
		{#if knop}
			<div>
				<p>{km} km</p>
				<p>{tid.toFixed(2)} timer</p>
			</div>
		{/if}
	</div>
</main>
