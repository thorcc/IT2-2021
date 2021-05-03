<h1>Oppgave 4 - vinterlekse 2</h1>

<script>
    import { onMount } from "svelte";

    let fly;
    let lyd;

    onMount(() => {
        flyanimasjon = fly.animate([{
            transform: "translateY(300px) translateX(-100px)",
        },{
            transform: "translateY(-200px) translateX(900px)",
        }],{
            duration: 5000,
            iterations: Infinity
        })

        setInterval(() => {
            lyd.currentTime = 0;
        }, 5000)
    })
    
    function lydPaaAv(){
        if(lyd.muted){
            lyd.muted = false;
        }
        else{
            lyd.muted = true;
        }
    }
</script>

<div id="ramme">
    <button on:click={lydPaaAv}>Lyd på/av</button>
    <img bind:this={fly} src="oppgave4/fly.png" alt="Bilde av fly">
</div>
<!-- svelte-ignore a11y-media-has-caption -->
<audio bind:this={lyd} src="oppgave4/jetpass.mp3" autoplay muted></audio>

<style>
    #ramme{
        background-color: aliceblue;
        width: 950px;
        height: 200px;
        overflow: hidden;
    }
</style>