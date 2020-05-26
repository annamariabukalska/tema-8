<script>
import MoodView from './MoodView.svelte'
import { push } from 'svelte-spa-router'


let info = 'Hvordan føler du deg idag?'

</script>
<main>
<div class="welcome-container">
	<h1>Breathe</h1>
	<p  class="welcome-text">{info}</p>
	<div class="button-grid">
		<button class="mood-button" id="excited" on:click={ () => push('/mood/excited') }>Excited</button>
		<button class="mood-button" id="calm" on:click={ () => push('/mood/calm') }>Calm</button>
		<button class="mood-button" id="surprised" on:click={ () => push('/mood/surprised') }>Surprised</button>
		<button class="mood-button" id="happy" on:click={ () => push('/mood/happy') }>Happy</button>
		<button class="mood-button" id="angry" on:click={ () => push('/mood/angry') }>Angry</button>
		<button class="mood-button" id="sad" on:click={ () => push('/mood/sad')}>Sad</button>
	</div>
</div>

</main>

<style>
main {
	text-align: center;
	background-color: #FAFAFA;
}

.welcome-container {
	border: .05rem solid #d0d0d0;
	border-radius: .3rem;
	background-color: #FFFFFF;
    width: 80%;
    margin: 0 auto;
	margin-top: 24px;
	overflow: auto;
	box-shadow: 0px 2px 8px #5f5f5f3d;
}
.welcome-text {
	font-style: italic;
	font-size: 14pt;
	font-weight: bold;
}
.button-grid {
	display: grid;
	gap: .2rem;
	justify-content: flex-start;
	padding: .2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	height: 30vh;

}
 
.mood-button {
	display: grid;
	text-align: center;
	min-width: 240px;
	margin: 10px auto;
	padding: 1rem;
	border-radius: 4rem;
	border: 0;
	cursor: pointer;
	box-shadow: #000000 11%;
}

#excited {
	background-color: #DCD1E4;
}	
#calm {
	background-color: #F7E5CD;
}
#surprised {
	background-color: #B5DEB9;
}
#happy {
	background-color: #F6DDE0;
}
#angry {
	background-color: #CCDAFB;
}
#sad {
	background-color: #F5F5F5;
}
h1 {
	color: black;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}
</style>