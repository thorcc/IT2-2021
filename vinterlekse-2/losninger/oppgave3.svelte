<svelte:head>
	<title>IT2 - Oppgave 3</title>
</svelte:head>

<script>
	import { slide } from "svelte/transition";

	let lydArm;
	let lydRygg;
	let visArm = false;
	let visRygg = false;


	function klikkArm(){
		lydArm.play();
		visArm = true;

		// Bonus: setTimeout for å skjule tekst etter 2000 millisekunder (2s)
		setTimeout(() => {
			visArm = false;
		},2000)
	}
	function klikkRygg(){
		lydRygg.play();
		visRygg = true;

		// Bonus: setTimeout for å skjule tekst etter 2000 millisekunder (2s)
		setTimeout(() => {
			visRygg = false;
		},2000)
	}
</script>

<h1>Oppgave 3</h1>

<img src="oppgave3/kropp.gif" alt="Kroppen">

{#if visArm}
	<p transition:slide={{duration: 500}}>Armstrekkeren</p>
{/if}

{#if visRygg}
	<p transition:slide={{duration: 500}}>Den brede ryggmuskelen</p>
{/if}

<div on:click={klikkArm} id="arm"></div>
<div on:click={klikkRygg} id="rygg"></div>


<audio bind:this={lydArm} src="oppgave3/armstrekkeren.mp3"></audio>
<audio bind:this={lydRygg} src="oppgave3/brede_ryggmuskel.mp3"></audio>

<style>
	div{
		position: absolute;
		background-color: black;
		opacity: 0.1;
		cursor: pointer;
	}
	div:hover{
		opacity: 0.7;
	}
	#arm{
		width: 200px;
		height: 100px;
		left: 540px;
		top: 300px;
	}
	#rygg{
		width: 150px;
		height: 200px;
		left: 390px;
		top: 360px;
	}
	p{
		/* CSS for å få teksten over bilde */
		position: absolute;
		left: 380px;
		top: 200px;
		background-color: white;
		padding: 20px;
	}
</style>