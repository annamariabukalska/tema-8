<script>
import MoodView from './MoodView.svelte'
import MoodButton from './MoodButton.svelte'


let info = 'Hvordan føler du deg idag?'

</script>
<main>
<div class="welcome-container">
	<h1>Breathe</h1>
	<p class="welcome-text">{info}</p>
	<div class="button-grid">

	<MoodButton id="excited" title="Excited"/>
	<MoodButton id="calm" title="Calm"/>
	<MoodButton id="surprised" title="Surprised"/>
	<MoodButton id="happy" title="Happy"/>
	<MoodButton id="angry" title="Angry"/>
	<MoodButton id="sad" title="Sad"/>

	</div>
</div>

</main>

<style>
main {
	text-align: center;
	background-color: #FAFAFA;
	padding-top: 10%;
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
	padding-bottom: 6%;
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


h1 {
	color: black;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}
</style>