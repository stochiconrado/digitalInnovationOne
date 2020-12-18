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
    type: 'fish',
    name: 'gulp',
    age: 1,
    weight: 0.01
  },
  {
    type: 'horse',
    name: 'pé de pano',
    age: 3,
    weight: 500
  },
]

const petsNames = pets.map((pet) => {
  return pet.name
})

//console.log(petsNames)

/**Foreach
 * Não retorna um novo array com a mesma quantidade de elementos
 */

 const forEachPetNames = []
 pets.forEach((pet) =>{
   forEachPetNames.push(pet.name)
 })
console.log(forEachPetNames)

 //console.log(pets)