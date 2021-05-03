<svelte:head>
	<title>IT2 - Oppgave 4</title>
</svelte:head>

<h1>Oppgave 4</h1>

<script>
	import { onMount } from "svelte";
	let lyd;
	let fly;
	
	onMount(()=> {
		fly.animate([
			{
				left: "-200px",
				top: "600px"
			},
			{
				left: "400px",
				top: "-200px"
			}
		],{
			duration: 7000,
			iterations: Infinity
		});

		// Bonus: Sync lyden med animasjonen, legg merke til attributtene (autoplay og muted) i HTML-elementet
		// setInterval kjører en funksjon etter et gitt interval (her hvert 7000 millisekund (7s))
		setInterval(()=> {
			lyd.currentTime = 0;
			lyd.play();
		},7000)
		// Bonus-slutt
	});

	function paaEllerAvLyd(){
		if(lyd.muted){
			lyd.muted = false;
		}
		else{
			lyd.muted = true;
		}
	}
</script>


<div id="ramme">
	<p>AIR2010</p>
	<img bind:this={fly} src="oppgave4/fly.png" alt="">
	<button on:click={paaEllerAvLyd}>Lyd AV/PÅ</button>
</div>

<audio bind:this={lyd} autoplay muted src="oppgave4/jetpass.mp3"></audio>


<style>
	#ramme{
		position: relative;
		overflow: hidden;
		height: 200px;
		width: 900px;
		background-color: lightblue;
	}
	img{
		position: absolute;
	}
</style>