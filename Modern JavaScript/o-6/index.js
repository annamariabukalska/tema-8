/*Bruk Array.map() til å lage en liste med matrettene. Lag et liste-element (li) for hver matrett, og legg det inn i <ul>-elementet med id=”ulMatretter”. */


const ulMatretter = document.querySelector("#ulMatretter")

const matretter = ["Kapteinens favoritt", "Kjøtt utklemt i panne", "Biff Stroganof"]

//gammel versjon
for (let index = 0; index < matretter.length; index++) {
    const matrett = matretter[index];
    let matLi = document.createElement('li')
    matLi.innerHTML = matrett
    ulMatretter.appendChild(matLi)
    
}

//ny versjon
matretter.map(matrett => {
    let matLi = document.createElement('li')
    matLi.innerHTML = matrett
    ulMatretter.appendChild(matLi)
})

//eller
matretter.map( retter => ulMatretter.innerHTML +=
    `<li>${retter}</li>`)