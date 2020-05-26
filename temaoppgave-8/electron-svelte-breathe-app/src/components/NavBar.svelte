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


<input type="text" placeholder="Søk">
</nav>

<style>

nav {
    display: flex;
    background-color: #D8E3D8;
    padding: 8px;
    text-align: center;
    color:white;
    transition: .5s;
    justify-content: flex-end;    
}

#start {
    margin-right: auto;
}

input {
    border-radius: .4rem;
 } 
input:focus {
    outline: none;
}

img {
  margin-right: 5px;
  width: 32px;
  vertical-align: middle;
}

button {
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;

}

    
</style>