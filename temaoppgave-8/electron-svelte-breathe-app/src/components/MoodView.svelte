<script>
import { onMount } from 'svelte';
export let params = {}
let addFavorite = () => {
    localStorage.setItem("favorites", params.first)
}

let backgroundImage
let description = "kommer her"
let audioSrc
let color

    onMount(async () => {
        if (params.first === "excited") {
            backgroundImage = "../img/excited.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else if (params.first === "calm") {
            backgroundImage = "../img/calm.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else if (params.first === "surprised") {
            backgroundImage = "../img/surprised.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else if (params.first === "happy") {
            backgroundImage = "../img/happy.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else if (params.first === "angry") {
            backgroundImage = "../img/angry.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else if (params.first === "sad") {
            backgroundImage = "../img/sad.jpg"
            color = ""
            description = ""
            audioSrc = "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
        } else {
            alert("Feil id")
        }
    })

</script>

<main style="background-image: url('{backgroundImage}')">

    <audio controls src=""></audio>

    <div class="splash-box">    
    <button id="play">▶</button>

    <h1>{params.first}</h1>
    <h2>Spill av og pust ut...</h2>
    <p>{description}</p>

    <button id="addFavorite" on:click={addFavorite} > + Legg til favoritt</button>
    </div>
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
        letter-spacing: .1rem;
    }

    .splash-box {
        text-align: center;
        background-color: white;
        border-radius: .6rem;
        margin-top: 30%;
        padding: 2rem;
        margin: 60px 160px;

    }

    #play {
        height: 7rem;
        width: 7rem;
        background: white;
        border-radius: 80%;
        background-color: #FFFFFF;
        color: #DD6A77;
    }
</style>