<script>
	const biler = {
		"Kuga": {
			"utstyrsvarianter": {
				"Trend": 401000,
				"Titanium": 420000
			},
			"utstyrspakker": {
				"Familiepakke": 1000,
				"Førerassistentpakke": 10200,
				"Stilpakke": 9200
			}
		},
		"C-max": {
			"utstyrsvarianter": {
				"Trend": 325000,
				"Titanium": 335000
			},
			"utstyrspakker": {
				"Familiepakke": 1000,
				"Førerassitentpakke": 9400,
				"Stilpakke": 3600
			}
		},
		"Focus": {
			"utstyrsvarianter": {
				"Trend": 255000,
				"Titanium": 325000
			},
			"utstyrspakker": {
				"Familiepakke": 900,
				"Førerassitentpakke": 12500,
				"Stilpakke": 9000
			}
		},
		"Mondeo": {
			"utstyrsvarianter": {
				"Trend": 281000,
				"Titanium": 361000
			},
			"utstyrspakker": {
				"Familiepakke": 1100,
				"Førerassitentpakke": 9900,
				"Stilpakke": 7200
			}
		}
	}

	let valgtModell;
	let valgtVariant;
	let valgtePakker = [];
	let sum = 0;
	$: {
		sum = 0;
		if(valgtModell && valgtVariant){
			sum += biler[valgtModell]["utstyrsvarianter"][valgtVariant];
				
			for(let pakke of valgtePakker){
					sum += biler[valgtModell]["utstyrspakker"][pakke];
			}
		}
	}
</script>

<div>
	{#each Object.keys(biler) as modell}
		<label>
			{modell}
			<input type="radio" bind:group={valgtModell} value={modell}>
		</label>
	{/each}
</div>

{#if valgtModell}
	<div>
		{#each Object.keys(biler[valgtModell]["utstyrsvarianter"]) as variant}
			<label>
				{variant}
				<input type="radio" bind:group={valgtVariant} value={variant}>
			</label>
		{/each}
	</div>
{/if}

{#if valgtVariant}
	<div>
		{#each Object.keys(biler[valgtModell]["utstyrspakker"]) as pakke}
			<input bind:group={valgtePakker} value={pakke} type="checkbox">
			{pakke}
		{/each}
	</div>
{/if}

<div>{sum}</div>

<div>
	{valgtModell};
	{valgtVariant};
	{valgtePakker}
</div>