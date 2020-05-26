<script>
import { onMount } from 'svelte';
export let params = {}
let addFavorite = () => {

    let favorites;

    if (localStorage.getItem("favorites")) {

        favorites = JSON.parse(localStorage.getItem("favorites"))
        if(!favorites.includes(params.first)){
            favorites = [params.first, ...favorites] 
         }

    } else {
        favorites = [params.first];
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))


}

let backgroundImage
let description
let audioSrc
let color

    onMount(async () => {
        if (params.first === "excited") {
            backgroundImage = "../img/excited.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fStress_relief.mp3"
        } else if (params.first === "calm") {
            backgroundImage = "../img/calm.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fSpa.mp3?dlid="
        } else if (params.first === "surprised") {
            backgroundImage = "../img/surprised.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fMeditation.mp3"
        } else if (params.first === "happy") {
            backgroundImage = "../img/happy.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fPositivity.mp3"
        } else if (params.first === "angry") {
            backgroundImage = "../img/angry.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fMantras.mp3"
        } else if (params.first === "sad") {
            backgroundImage = "../img/sad.jpg"
            color = ""
            description = ""
            audioSrc = "http://live.radioart.com/fAura.mp3"
        } else {
            alert("Feil id")
        }
    })

</script>

<main style="background-image: url('{backgroundImage}')">

    <div class="splash-box">    

    <h1 class="title">{params.first}</h1>
    <p>{description}</p>
    <audio controls preload src={audioSrc}></audio>

    </div>
    <button id="addFavorite" on:click={addFavorite} > + Legg til favoritt</button>
</main>

<style>
    main {
        background-size: cover;
    }

    #addFavorite {
        border: 1px solid black;
        border-radius: 30px;
        padding: .9rem;
        background-color: white;
        color: #DD6A77;
        letter-spacing: .07rem;
        position: absolute;
        bottom: 12px;
        margin: 0 auto;
        right: 0;
        left: 0;
        text-align: center;
        cursor: pointer;
    }

    .splash-box {
        text-align: center;
        margin-top: 10%;
        padding: 2rem;
        color: white;    
    }

    .title {
        font-weight: 200;
        font-style: italic;
        font-size: 104pt;
        letter-spacing: .2rem;
        text-shadow: 1px 2px #00000040;    }
</style>

