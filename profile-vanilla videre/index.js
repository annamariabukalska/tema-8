let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')
let info = document.querySelector('#info')
let show = false
let inpPassword = document.querySelector('#inpPassword')
const MIN_PASSWORD_LENGTH = 7
let aktivitet1 = document.querySelector('#aktivitet1')
let aktivitet2 = document.querySelector('#aktivitet2')
let aktivitet3 = document.querySelector('#aktivitet3')
let aktivitet4 = document.querySelector('#aktivitet4')

let antallVenner = document.querySelector('#antallVenner')
let antallVennerTotalt = document.querySelector('#antallVennerTotalt')

const aktiviteter = ["Legg inn her", "Og her!"]

name.addEventListener('input', nameInput)

function nameInput(){
    console.log(name.value)
}

submit.addEventListener('click', okButton)

function okButton(){
    console.log(name.value,email.value)

    greet()
}


greet = () => {
    const isChecked = document.getElementById("checkbox").checked;

    if (inpPassword.value.length >= MIN_PASSWORD_LENGTH && name.value.length && email.value.length && isChecked) {
        renderWelcomeScreen();
    } else{
        info.innerHTML = "<p>Alle felte må være fylt ut</p>"
    }
}

renderWelcomeScreen = () => {
    form.innerHTML = '<h1>Hei, ' + name.value + '!' + '<h1>'
    form.innerHTML += '<p>Det var hyggelig at du ville være med i prosjektet</p>'
    form.innerHTML += '<p>Om jeg forstår det korrekt, er navnet ditt ' + name.value + ' og eposten din er: ' + email.value

    const newOkButton = document.createElement('button')
    newOkButton.innerHTML = 'OK'
    newOkButton.className = "submitButton"
    newOkButton.addEventListener('click', function(){

        form.innerHTML = '<h1> Supert! Du kan lese nærmere i "Om skolen" og "Om fritidsaktiviteter" dersom vil du vite mer.</h1>'
        //form.innerHTML += '<div class="infoBox">'
        form.innerHTML += '<p>Din informasjon er laget: </p>'
        form.innerHTML += '<p>' + name.value + '</p>'
        form.innerHTML += '<p>' + email.value + '</p>'
        form.innerHTML += '<p>Antall venner: ' + antallVenner.value + '</p>'
        form.innerHTML += '<p>Totalt antall venner: ' + antallVennerTotalt.value  + '</p>'
        form.innerHTML += '<p>Dine aktiviteter: </p>'
        if (aktivitet1.checked) {
            form.innerHTML += '<p>Se på TV</p>'
        }
        if (aktivitet2.checked) {
            form.innerHTML += '<p>Matlaging</p>'
        }
        if (aktivitet3.checked){
            form.innerHTML += '<p>Gaming</p>'
        }
        if (aktivitet4.checked){
            form.innerHTML += '<p>Lese</p>'
        }
        //form.innerHTML += '</div>'
    })
    form.appendChild(newOkButton)

    const newCancelButton = document.createElement('button')
    newCancelButton.innerHTML = 'cancel'
    newCancelButton.className = "submitButton"
    newCancelButton.addEventListener('click', function(){
        form.innerHTML = ''
        form.appendChildChild(name)
        form.appendChildChild(email)
        form.appendChildChild(submit)
    })
    
    form.appendChild(newCancelButton)
}