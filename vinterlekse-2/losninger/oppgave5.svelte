<svelte:head>
	<title>IT2 - Oppgave 5</title>
</svelte:head>

<h1>Oppgave 5</h1>

<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let sol;
	let flagg;
	let paraply;

	let regn = false;

	let sang;
	let sangtekst;
	let sanganimasjon;

	onMount(() => {
		flagg.animate([
			{
				top: "300px"
			},
			{
				top: "10px"
			}
		],{
			duration: 5000
		});
		sol.animate([{
				transform: "rotate(0turn)",
				top: "300px"
			},{
				transform: "rotate(1turn)",
				top: "10px"
			}],{
			duration: 5000
		})
		
		sanganimasjon = sangtekst.animate([{
				marginTop: "0px"
			},{
				marginTop: "-120px"
			}],{
			duration: 16000,
			/*easing: "steps(4)" denne kan brukes for å få steg i animasjonen*/
		});
		
		sanganimasjon.pause();
	})

	function spillSang(){
		sang.currentTime = 0;
		sanganimasjon.currentTime = 0;
		sang.play();
		sanganimasjon.play();
	}
	function pauseSang(){
		sang.pause();
		sanganimasjon.pause();
	}


</script>

<main>
	<div>
		<img src="oppgave5/tog.png" alt="">
	</div>
	<div>
		<img id="flaggstang" src="oppgave5/flaggstang.png" alt="">
		<img id="flagg" bind:this={flagg} src="oppgave5/flagg.png" alt="">
		{#if regn}
			<img transition:fade={{duration: 1000}} id="paraply" bind:this={paraply} src="oppgave5/paraply.png" alt="">
		{:else}
			<img transition:fade={{duration: 1000}} id="sol" bind:this={sol} src="oppgave5/sol.png" alt="">
		{/if}
	</div>
	
</main>

<label>
	<input type=radio bind:group={regn} value={true}>
	Regn
</label>

<label>
	<input type=radio bind:group={regn} value={false}>
	Sol
</label>

<button on:click={spillSang}>Spill</button>
<button on:click={pauseSang}>Pause</button>


<audio bind:this={sang} src="oppgave5/Kanskje kommer kongen.mp3"></audio>
<div id="sangramme">
	<div bind:this={sangtekst} id="sangtekst">
		<p>Kanskje kommer kongen</p>
		<p>Hit til middag nå i dag</p>
		<p>Vi har dekket på perrongen</p>
		<p>Med god mat av alle slag</p>
	</div>
</div>

<style>
	main{
		display: flex;
	}
	div{
		position: relative;
	}
	img{
		max-width: 400px;
	}
	#flaggstang{
		height: 400px;
	}
	#flagg{
		width: 100px;
		position: absolute;
		left: 35px;
		top: 10px;
	}
	#sol, #paraply{
		width: 100px;
		position: absolute;
		left: 200px;
		top: 10px;
	}
	#sangramme{
		height: 30px;
		overflow: hidden;
		border: solid black;
	}
</style>
