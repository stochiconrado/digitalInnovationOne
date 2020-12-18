const pets = [
  {
    type: 'cat',
    name: 'mingal',
    age: 6,
    weight: 2
  },
  {
    type: 'dog',
    name: 'rex',
    age: 4,
    weight: 5
  },
  {
    type: 'dog',
    name: 'scooby',
    age: 19,
    weight: 25
  },
  {
    type: 'cat',
    name: 'frajola',
    age: 17,
    weight: 3
  },
  {
    type: 'fish',
    name: 'gulp',
    age: 1,
    weight: 1
  },
  {
    type: 'horse',
    name: 'pé de pano',
    age: 3,
    weight: 150
  },
]

/**const totalWeight = pets.reduce((total, pet) => {
  if(pet.type !== 'dog') return total
  return total + pet.weight
}, 0)

console.log(totalWeight)*/


/**const dogs = pets.filter((pet) =>{
  return pet.type === 'dog'
})
//console.log(dogs)*/

const totalWeightDogs = pets
  .filter((pet) =>{
    return pet.type === 'dog'
  }).reduce((total, pet) => {
    return total + pet.weight
  }, 0)

console.log(totalWeightDogs)