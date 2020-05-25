<script>
import MoodView from './MoodView.svelte'

    let info = 'Hvordan føler du deg idag?'

</script>
<main>
<h1>Breathe</h1>
<p>{info}</p>

<div>
	<button class="mood-button" id="excited" on:click={ () => Excited()}>Excited</button>
	<button class="mood-button" id="calm" on:click={ () => Calm()}>Calm</button>
	<button class="mood-button" id="surprised" on:click={ () => Surprised()}>Surprised</button>
	<button class="mood-button" id="happy" on:click={ () => Happy()}>Happy</button>
	<button class="mood-button" id="angry" on:click={ () => Angry()}>Angry</button>
	<button class="mood-button" id="sad" on:click={ () => Sad()}>Sad</button>
</div>

<MoodView moodTitle="Anna"/>

</main>

<style>
main {
	border-radius: 1px;
	display: grid;
    grid-row: auto;
}
 
.mood-button {
	display: grid;
	text-align: center;
	min-width: 240px;
	/* margin: 0 auto; */
	padding: 1rem;
	border-radius: .4rem;
	border: 0;
}

#excited{
	background-color: #DCD1E4;
}	
#calm{
	background-color: #F7E5CD;
}
#surprised{
	background-color: #B5DEB9;
}
#happy{
	background-color: #F6DDE0;
}
#angry{
	background-color: #CCDAFB;
}
#sad{
	background-color: #F5F5F5;
}
h1 {
	color: black;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}
@media (min-width: 640px) {
	main {
		max-width: none;	
	}
}
</style>