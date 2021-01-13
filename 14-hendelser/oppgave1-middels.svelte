<h1>Oppgave 1 - middels måloppnåelse</h1>

<script>
	let hund;
	let katt;
	let hest;
	let love;

	function spillLyd(art){
		if(art === "hund"){
			hund.play();
		}
		else if(art === "katt"){
			katt.play();
		}
		else if(art === "hest"){
			hest.play();
		}
		else if(art === "love"){
			love.play();
		}
	}

</script>

<img on:click={()=> spillLyd("hund")} src="hund.jpg" alt="">
<img on:click={()=> spillLyd("katt")} src="katt.jpg" alt="">
<img on:click={()=> spillLyd("hest")} src="hest.jpg" alt="">
<img on:click={()=> spillLyd("love")} src="love.jpg" alt="">

<audio bind:this={hund} src="hund.wav"></audio>
<audio bind:this={katt} src="katt.wav"></audio>
<audio bind:this={hest} src="hest.wav"></audio>
<audio bind:this={love} src="love.wav"></audio>
