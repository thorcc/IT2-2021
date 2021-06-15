<script>
	import { onMount } from 'svelte'; // Importerer onMount fra svelte, fordi vi må vente på at siden er lastet inn for å kunne bruke requestAnimaionFrame()
	let x = 10;
	let y = 10;
	let r= 10;

	function flyttBall(){
		if(x > 100){ // Hvis x er større enn 100:
			x = 0;
		}
		if(y > 100){ // Hvis y er større enn 100:
			y = 0;
		}
		x += 1; // Legg til 1 i x
		y += 1; // Legg til 1 i y
		requestAnimationFrame(flyttBall); // Kjører funksjonen flyttBall på nytt
	}

	onMount( () => { // Når nettsiden er lastet kjøres denne
		flyttBall() // Kjør funksjonen flyttBall
	}); 

</script>

<svg viewBox="0 0 100 100">
	<circle
		cx={x}
		cy={y}
		r={r}
	/>
</svg>