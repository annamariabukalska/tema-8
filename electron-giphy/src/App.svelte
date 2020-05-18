<script>
	import { fade, fly, scale } from 'svelte/transition'	
	import {HeartIcon} from 'svelte-eva-icons'
	
	import { apikeys } from '/Users/Anna/Documents/Kristiania/apikeys/apikeys.js'
	let api_key = apikeys.giphy
   	let q = ''
 	const limit = 1
     let gif
     let favorites = []
     let showFav = false

 	 
 	 const getgif = () =>{
          gif = null
 	 fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${api_key}`) 
 		.then( res => res.json() )
 			.then( json => {
 			 console.log(json)
 			 gif = json.data[0].images.downsized_medium.url 
 			})
 }

    const addToFav = (gif) => {
     if(!favorites.includes(gif)){
          favorites = [gif, ...favorites] //spread syntaks - favorites = gif + favorites
    }else{
            //filter returnerer en liste med de elementer som oppfylder en betingelse
    favorites = favorites.filter( element => element != gif) 
  }
}

    
 </script>

 <svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    </svelte:head> 
 <main>

   

 <header>
 	<input placeholder="Search for gif" type="text" bind:value={q} 
     on:keydown={(event) => event.key == "Enter"? getgif():''}
    on:click={ e => e.target.value=''}
    on:focus={ e => e.target.value = '' }
    >

 	<button on:click={getgif}>Søk</button>
     {#if favorites.length > 0}
        <button in:scale on:click={ () => showFav = !showFav}>
        {showFav ? 'skjul favoritter' : 'vis favoritter'}
        </button>
    {/if}
 </header>

{#if !showFav} 
    {#if gif}
         <img 
        in:fly={{ x: -1000}} 
        src="{gif}" 
        alt="{q}"
        >
        <div class="heart" 
        on:click={ () => addToFav(gif)}
        style={favorites.includes(gif) ? 'fill:redd' : 'fill:gray' }
        >
        <HeartIcon />
        </div>
    {:else}
     <h2>Skriv noe og trykk Søk</h2>
    {/if}   
    {:else}
    <div in:fly={{x:1000}} class="favorites">
    {#each favorites as fav}
        <img src="{fav}" alt="giffy">
    {/each}
    </div>
    {/if}
 </main>

 <style>
 	:global(body, html){
 		margin:0;
 		padding:0;
 	}
 	:global(*){
 		box-sizing:border-box;
 	}
 	main{
 		display:grid;
 		place-items:center;
 		height:100%;
        position: relative;
 	}
    .heart{
        position: absolute;
        bottom: 2rem;
        height: 4rem;
        width: 4rem;
        fill: gray;
    }
    img{
        max-height: 40vh;
        width: 60vw;
        object-fit: cover;
    }
 	header{
 		position:absolute;
 		top:2rem;
 		width:100%;
 		display:grid;
 		padding: 0 20vw 0 20vw;
 	
 	}

    .favorites{
        max-height:60vh;
        overflow:scroll;
        display:grid;
        gap:.2rem;
        grid-template-columns:repeat(4, 200px);
    }
    .favorites img{
        width:100%;
        height:200px;
        object-fit:cover;
}

 </style> 