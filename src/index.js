const name = 'Ela'
const lastname = 'Krawczyk'
const add = (a,b) => a + b
const car = {
    model:'Peugeot',
    sound:'wrr'
}

console.log('Hello \n' + name + ' '+ lastname + '!')
console.log(`Hello\n` + name + ` ` + lastname)
console.log(`Hello ${name} ${lastname}!`)
console.log(`Hello 
${name} ${lastname}!`)

console.log(`Wynik 2 plus 3 jest równy ${add(2,3)}`)

console.log(`Mój samochód to ${car.model} i wydaje dźwięk ${car.sound}`)

