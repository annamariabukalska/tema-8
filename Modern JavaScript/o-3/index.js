const tallene = [3, 45, 55, 62, 84, 92, 55, 26, 21, 73]

let overTwenty = tallene.filter(
    tall => (tall > 20)
)

let underEigthy = tallene.filter(
    tall => (tall < 80)
)

//console.log(overTwenty.length, 'over 20')
//console.log(underEigthy.length, 'under 80')

// Sjekk med if om antall fra equals === tallene (og at innhold i tallene oppfyller kravet for < 80 og > 20)
let equals = tallene.filter(
    tall => (tall < 80) && (tall > 20)
)

if (tallene.length === equals.length) {
    console.log("Oi! Alle tallene var mellom 20 og 80”")
} else if(equals.length === 0) {
    console.log("Oi! Ingen tall mellom 20 og 80")
} else {
    console.log("Disse tallene er mellom 20 og 80: " + equals)
}