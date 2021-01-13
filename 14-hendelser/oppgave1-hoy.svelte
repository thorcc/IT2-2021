<svelte:head>
	<title>IT2 - Oppgave 1</title>
</svelte:head>

<h1>Oppgave 1 - Høy måloppnåelse</h1>

<script>
	let dyr = ["hest", "hund", "katt", "love"];
	let lyd;

	function trykk(art){
		lyd.src = art + ".wav";
		lyd.play();
	}
</script>

{#each dyr as ettDyr}
	<img on:click={() => trykk(ettDyr)} src="{ettDyr}.jpg" alt="">
{/each}
<audio bind:this={lyd} src="" controls></audio>
	
<style>
	img{
		width: 200px;
	}
</style>
