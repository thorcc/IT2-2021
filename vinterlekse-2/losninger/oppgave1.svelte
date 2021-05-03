<svelte:head>
	<title>IT2 - Oppgave 1</title>
</svelte:head>

<h1>Oppgave 1</h1>

<script>
	import { slide } from "svelte/transition";
	let vis = false;
</script>

<!--
	I koden under står on:click={() => vis = !vis}
	Når brukeren trykker på knappen kjøres en funksjon som setter vis til det motsatte av vis

	vis = !vis // setter vis til å være det motsatte av vis.
	// Hvis vis = false settes vis = true 
	// Hvis vis = true settes vis = false
-->

<button on:click={() => vis = !vis}>Vis boks</button>

{#if vis}
	<div transition:slide={{duration: 1000}}></div>
{/if}

<style>
	div{
		width: 200px;
		height: 200px;
		background-color: black;
	}
</style>