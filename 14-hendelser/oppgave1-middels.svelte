<h1>Oppgave 1 - middels måloppnåelse</h1>

<script>
	let hund;
	let katt;
	let hest;
	let love;

	function spillHund(){
			hund.play();
	}
	function spillKatt(){
			katt.play();
	}
	function spillHest(){
			hest.play();
	}
	function spillLove(){
			love.play();
	}
</script>

<img on:click={spillHund} src="hund.jpg" alt="">
<img on:click={spillKatt} src="katt.jpg" alt="">
<img on:click={spillHest} src="hest.jpg" alt="">
<img on:click={spillLove} src="love.jpg" alt="">

<audio bind:this={hund} src="hund.wav"></audio>
<audio bind:this={katt} src="katt.wav"></audio>
<audio bind:this={hest} src="hest.wav"></audio>
<audio bind:this={love} src="love.wav"></audio>
