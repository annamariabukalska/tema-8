<script>
    import { onMount } from 'svelte'; /*når det åpnes, så kjøres*/
    import MoodButton from './MoodButton.svelte'
    let favorites = []

    onMount(async () => {
        favorites = localStorage.getItem("favorites")
        console.log(favorites)
    })

</script> 

<main>
<h1 id="title">Favoritter</h1>
<div class="favorite-list">
    <MoodButton id={favorites} title={favorites}/>
    
</div>

</main>

<style>

#title{
    text-align: center;
}

</style>