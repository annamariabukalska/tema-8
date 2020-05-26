<script>
import { push } from 'svelte-spa-router'
export let id
export let title
</script>

<button class="mood-button" id={id} on:click={ () => push(`/mood/${id}`) }>{title}</button>

<style>

.mood-button {
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

</style>