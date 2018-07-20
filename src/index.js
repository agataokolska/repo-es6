const me = {
    name: 'Ala',
    lastname: 'Kowalska',
    car: 'Peugeot',
    age: '22',
    city: 'Lublin'
}
// const name = me.name
// const lastname = me.lastname

const {
    name,
    lastname
} = me

const names = ['ala', 'ela', 'zosia']
// const name0 = names[0]
// const name2 = names[2]

const [
    name0,
    ,
    name2
] = names

const meNested = {
    name: {
        firstname: 'Ala',
        surname: 'Kowalska'
    },
    car: 'Peugeot',
    age: '22',
    city: 'Lublin'
}

const firstname1 = meNested.name.firstname
const lastname1 = meNested.name.surname

const {
    name: {
        firstname,
        surname
    }
} = meNested

