import Plants from 'index.js'

let inp = document.querySelector("#search")
let results = document.querySelector("#plants")

plantliste.plants.map ( plant => 
    results.innerHTML +=  "<div class='plant'><h2>" + plant.name + "</h2><p>by: " + plant.species + "</p></div>"
)

inp.addEventListener("input", e => {
    results.innerHTML = ""
    const filtered = plantliste.plants.filter( plant => plant.name.includes(e.target.value))
    filtered.map(plant => 
        results.innerHTML += "<div class='plant'><h2>" + plant.name + "</h2><p> " + plant.species + "</p></div>"
        )
} )