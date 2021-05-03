<h1>Fotballtabell</h1>

<script>
	class Fotballag{
		constructor(navn){
			this.navn = navn;
			this.vunnet = 0;
			this.uavgjort = 0;
			this.tapt = 0;
			this.maalFor = 0;
			this.maalMot = 0;
		}
		hentAntallKamper(){
			return this.vunnet + this.uavgjort + this.tapt;
		}
		hentMaalForskjell(){
			return this.maalFor - this.maalMot;
		}
		hentPoeng(){
			return 3 * this.vunnet + this.uavgjort;
		}
		spillKamp(maalFor, maalMot){
			this.maalFor += maalFor;
			this.maalMot += maalMot;

			if(maalFor > maalMot){
				this.vunnet += 1;
			} else if(maalFor < maalMot){
				this.tapt += 1;
			} else {
				this.uavgjort += 1;
			}
		}
	}

	let kamper = [];

	let tabell = [
		new Fotballag("AS Roma"),
		new Fotballag("FC Inter"),
		new Fotballag("AC Milan")
	]

	let inpHjemmelag;
	let inpBortelag;
	let inpMaalH;
	let inpMaalB;

	function registrerKamp(){
		let hjemmelag;
		let bortelag;
		let alleredeSpilt = false;
		for(let kamp of kamper){
			if(kamp.hjemmelag === inpHjemmelag && kamp.bortelag === inpBortelag){
				alleredeSpilt = true;
			}
		}
		if(!alleredeSpilt){
			for(let lag of tabell){
				if(inpHjemmelag === lag.navn){
					hjemmelag = lag;
				}
				if(inpBortelag === lag.navn){
					bortelag = lag;
				}
			}
			hjemmelag.spillKamp(inpMaalH, inpMaalB);
			bortelag.spillKamp(inpMaalB, inpMaalH);
			kamper.push({
				hjemmelag: hjemmelag.navn,
				bortelag: bortelag.navn
			});
			tabell.sort(sorterTabell);
			tabell = [...tabell];
			console.log(tabell);
		} else {
			console.log("Kampen er allerede spilt!");
		}
		inpBortelag = "";
		inpHjemmelag = "";
		inpMaalH = null;
		inpMaalB = null;
	}


	tabell.sort(sorterTabell);

	function sorterTabell(lag1, lag2){
		if(lag1.hentPoeng() > lag2.hentPoeng()){
			return -1;
		} else if(lag1.hentPoeng() < lag2.hentPoeng()){
			return 1;
		}

		if(lag1.hentMaalForskjell() > lag2.hentMaalForskjell()){
			return -1;
		} else if(lag1.hentMaalForskjell() < lag2.hentMaalForskjell()){
			return 1;
		}

		if(lag1.maalFor > lag2.maalFor){
			return -1;
		} else if(lag1.maalFor < lag2.maalFor){
			return 1;
		}
	}
	
</script>

<table>
	<thead>
		<tr>
			<th>#</th>
			<th>Lag</th>
			<th>Antall kamper</th>
			<th>Vunnet</th>
			<th>Uavgjort</th>
			<th>Tapt</th>
			<th>MF</th>
			<th>MM</th>
			<th>Målforskjell</th>
			<th>Poeng</th>
		</tr>
	</thead>
	<tbody>
		{#each tabell as lag, i}
			<tr>
				<td>{i + 1}</td>
				<td>{lag.navn}</td>
				<td>{lag.hentAntallKamper()}</td>
				<td>{lag.vunnet}</td>
				<td>{lag.uavgjort}</td>
				<td>{lag.tapt}</td>
				<td>{lag.maalFor}</td>				
				<td>{lag.maalMot}</td>				
				<td>{lag.hentMaalForskjell()}</td>				
				<td>{lag.hentPoeng()}</td>				
			</tr>
		{/each}
	</tbody>
</table>

<div>
	<h2>Registrer kamp</h2>
	<label>
		Hjemme
		<input bind:value={inpHjemmelag} type="text">
	</label>
	<label>
		Borte
		<input bind:value={inpBortelag} type="text">
	</label>
	<label>
		Mål hjemme
		<input bind:value={inpMaalH} type="number">
	</label>
	<label>
		Mål borte
		<input bind:value={inpMaalB} type="number">
	</label>
	<button on:click={registrerKamp}>Registrer</button>
</div>

<style>
	table, th, td{
		border: 1px solid black;
		border-collapse: collapse;
		padding: 5px;
	}
</style>