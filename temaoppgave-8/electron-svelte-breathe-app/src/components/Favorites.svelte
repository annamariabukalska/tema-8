<script>
    import { onMount } from 'svelte'; /*når det åpnes, så kjøres*/
    import MoodButton from './MoodButton.svelte'
    let favorites = []

    onMount(async () => {

        if (localStorage.getItem("favorites")) {
            favorites = JSON.parse(localStorage.getItem("favorites"))
        }
        
    })

</script> 

<main>
<h1 id="title">Favoritter</h1>
	<div class="button-grid">
    {#each favorites as fav, i}
        <MoodButton id={fav} title={fav}/>
    {/each}
    
</div>

</main>

<style>

#title{
    text-align: center;
    margin-top: 100px;
}

</style>



