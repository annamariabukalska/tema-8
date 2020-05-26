<script>
  const showNotification = (text) => {
		let myNotification = new Notification(`Hello ${text}🤩`, {
		body: 'Dine påminnelser er lagret nå!'
		})
		myNotification.onclick = () => {
			info = 'Notification clicked'
		}
  }
  
</script>

<main>
    <h1>Sett påminnelse</h1>

    <div class="reminder">
     <section class="item1">
           <div class="circle">Mandag</div>
   </section>
     <section class="item2">
           <div class="circle">Tirsdag</div>
   </section>
     <section class="item3">
           <div class="circle">Onsdag</div>
   </section>
     <section class="item4">
           <div class="circle">Torsdag</div>
   </section>
     <section class="item5">
           <div class="circle">Fredag</div>
   </section>
     <section class="item6">
           <div class="circle">Lørdag</div>
   </section>
     <section class="item7">
           <div class="circle">Søndag</div>
   </section>

     </div>

     <button on:click={ () => showNotification("Anna") } id="start-button">Start</button>

   
</main>

<style>

main {
    text-align: center;
    margin-top: 100px;
}
.reminder {
    display: grid;
    gap: .2rem;
    padding: 1rem;
    grid-auto-flow: column;
    justify-content: space-evenly;
    min-height: 20vh;
    align-items: center;
    
}

.circle {
    color: black;
    background: #F7E5CD;
    height: 100px;  
    width: 100px;
    border-radius: 50%;
    display: grid;
    place-items: center; 
    cursor: pointer;
}

#start-button {
    border-radius: 4rem;
    padding: 1rem;
    margin: 100px;
    background-color: #91887E;
    color: white;
    letter-spacing: .1rem;
    cursor: pointer;
    min-width: 240px;
    border: 0;
    box-shadow: #000000 11%;
}
</style>