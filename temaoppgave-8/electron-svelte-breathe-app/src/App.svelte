<script>
import Router from 'svelte-spa-router'
import Start from './components/Start.svelte'
import NavBar from './components/NavBar.svelte'
import Reminders from './components/Reminders.svelte'
import Favorites from './components/Favorites.svelte'
import MoodView from './components/MoodView.svelte'
	//context menu
	const { remote } = require('electron')
	const { Menu, MenuItem } = remote

	const routes = {
		'/': Start,
		'/reminders': Reminders,
		'/favorites': Favorites,
		'/mood': MoodView,
	}

	//notifications
	const showNotification = (text) => {
		let myNotification = new Notification(`Hello ${text}`, {
		body: 'You are now officially part of the system OS'
		})
		myNotification.onclick = () => {
			info = 'Notification clicked'
		}
	}


	const amIOnline = () => {
		window.alert(navigator.onLine ? 'you\'re online sirs' : 'you\'re offline')
		info = 'Alert accepted'

	
	}
</script>

<main>
	<NavBar/>
	<Router {routes}/>


</main>

<style>

</style>