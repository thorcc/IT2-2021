<svelte:head>
	<title>IT2 - Oppgave 1</title>
</svelte:head>

<h1>Oppgave 1</h1>

<script>
	import { onMount } from "svelte";

	let bitcoin;
	let bitcoinAnimasjon;
	let iGang = false;
	let bitcoinPris;

	onMount(() => {
		let keyframes = [
			{
				transform: "rotate(0turn)"
			},
			{
				transform: "rotate(1turn)"
			}
		];
		let options = {
			duration: 1000,
			iterations: Infinity,
			direction: "alternate"
		};
		bitcoinAnimasjon = bitcoin.animate(keyframes, options);
		bitcoinAnimasjon.pause()
	})

	function startAnimasjon(){
		if(bitcoinAnimasjon.playState === "paused"){
			bitcoinAnimasjon.play();
			iGang = true;
		}
		else {
			bitcoinAnimasjon.pause();
			iGang = false;
		}
	}
	
	function sjekkPris(){
		bitcoinAnimasjon.playbackRate = bitcoinPris;
		if(bitcoinPris > 40000){
			bitcoinAnimasjon.play();
			bitcoinAnimasjon.playbackRate = 2;
		}
	}

</script>

<button on:click={startAnimasjon}>{iGang ? "Pause" : "Play"}</button>
<label>
	Bitcoinpris: <input bind:value={bitcoinPris} type="number">
</label>
<button on:click={sjekkPris}>Sjekk pris</button>
<p>{bitcoinPris}</p>

<img bind:this={bitcoin} src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Bitcoin_logo.svg" alt="Bilde av Bitcoin">

<style>
	button{
		display: block;
	}
	img{
		margin-top: 150px;
	}
</style>