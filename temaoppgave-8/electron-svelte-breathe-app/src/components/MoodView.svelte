<script>

export let params = {}
let addFavorite = () => {
    alert("comming soon")
}
</script>

<main>

    <audio controls src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"></audio>

    <div class="splash-box">    
    <button id="play">▶</button>

    <h1>{params.first}</h1>
    <h2>Spill av og pust ut...</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

    <button id="addFavorite" on:click={addFavorite} > + Legg til favoritt</button>
    </div>
</main>

<style>
    main {
        background-image: url("../../img/happy.jpg");
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
        margin: 100px;

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