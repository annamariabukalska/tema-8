<script>
import { push } from 'svelte-spa-router'

</script>

<nav>

    <button id="start" on:click={() => push('/')}>Menu</button>
    <button id="reminders" on:click={() => push('/reminders')}>
    <img src="../img/icon-reminder.png" alt=""/>Påminnelser</button>

    <button id="favorites" on:click={() => push('/favorites')}>
    <img src="../img/icon-favorite.png" alt=""/>
    Favoritter
    </button>

</nav>

<style>

nav {
    display: flex;
    background-color: #b7b7b78a;
    padding: 8px;
    text-align: center;
    color:white;
    transition: .5s;
    justify-content: flex-end;  
    position: fixed;
    width: 100%;  
}

#start {
    margin-right: auto;
}

img {
  margin-right: 8px;
  width: 26px;
  vertical-align: middle;
}

button {
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
  margin-bottom: 0;

}

#favorites {
    margin-right: 12px;
}
    
</style>