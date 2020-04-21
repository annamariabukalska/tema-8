let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

name.addEventListener('input', nameInput)

function nameInput(){
    console.log(name.value)
}

submit.addEventListener('click', okButton)

function okButton(){
    console.log(name.value,email.value)
    greet()
}

function greet(){
    form.innerHTML = '<h1> Hei ' + name.value + '<h1>'
    form.innerHTML += '<p>Det var hyggelig at du ville være med i prosjektet</p>'
    form.innerHTML += '<p>Om jeg forstår det korrekt, er navnet ditt' + name.value + 'og eposten din er: ' + email.value

    const newOkButton = document.createElement('button')
    newOkButton.innerHTML = 'ok'
    newOkButton.addEventListener('click', function(){
        form.innerHTML = 'h1> Supper! <h1>'
    })
    form.appendChild(newOkButton)

    const newCancelButton = document.createElement('button')
    newCancelButton.innerHTML = 'cancel'
    newCancelButton.addEventListener('click', function(){
        form.innerHTML = ''
        form.appendChildChild(name)
        form.appendChildChild(email)
        form.appendChildChild(submit)
    })
    
    form.appendChild(newCancelButton)
}