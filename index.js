const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10
  },
  {
    name: 'miau',
    type: 'cat',
    age: 2
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1
  }
]
const eMenorQCinco = (numero) => {
  return numero < 5
}

const newPets = pets.filter(({age}) => eMenorQCinco(age))

console.log(pets)
console.log(newPets)