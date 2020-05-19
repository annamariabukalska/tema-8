<script>
	import {fade, fly, scale } from 'svelte/transition'
	import { apikeys } from '/Users/Anna/Documents/Kristiania/apikeys/apikeys.js'

	let api_key = api_key.newsapi
	let q = ''
	let article

	const getNews = () => {
		const getGif = () => { article() 
		gif = null
		}
		fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${api_key}`)
			.then( res => res.json() )
				.then( json => {
					console.log(json.articles[0])
					article = json.articles[0]
				})
		
	}
</script>

<main>
<header>
	<input 
	placeholder="type to search" 
	type="text" 
	bind:value={q}
	on:keydown = {event => event.key == 'Enter' ? 'getGif()' : 'article()' } 
	on:click = {e => e.target.value = ''}
	on:focus = {e => e.target.value = ''}
	in:fly = {{ y:200, duraction:2000}}>
	<button on:click={getNews}>ok</button>
</header>

{#if article}
<a href="{article.url}">
	<div class="article">
		<h1>{ article.title }</h1>
		<p>{article.description}</p>
	</div>
</a>
{:else}
	<h2>Skriv noe og trykk ok..</h2>
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
	}
	header{
		position:absolute;
		top:2rem;
		width:100%;
		display:grid;
		padding: 0 20vw 0 20vw;
	}
	.article{
		width:40vw;
		height:40vh;
		background-color:#eee;
		padding:2rem;
	}
</style>