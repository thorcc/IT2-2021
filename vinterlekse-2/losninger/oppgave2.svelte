<svelte:head>
	<title>IT2 - Oppgave 2</title>
</svelte:head>

<h1>Oppgave 2</h1>

<script>
	import { slide } from "svelte/transition";
	let visNav = false;
</script>

<button on:click={() => visNav = !visNav}>Vis nav</button>

{#if visNav}
	<nav transition:slide={{duration: 1000}}>
		<a href="https://ap.no">Aftenposten</a>
		<a href="https://vg.no">VG</a>
		<a href="https://dagsavisen.no">Dagsavisen</a>
	</nav>
{/if}