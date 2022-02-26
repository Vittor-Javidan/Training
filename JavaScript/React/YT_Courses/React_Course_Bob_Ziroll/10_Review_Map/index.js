//number by power 2
const nums = [1, 2, 3, 4, 5]
const squared = nums.map( e => Math.pow(e, 2) )
console.log(squared)

//Capitalize names
const names = ["alice", "bob", "charlie", "danielle"]
const nameUppercase = names.map( name => name[0].toUpperCase() + name.slice(1) )
console.log(nameUppercase)

//Implement Tag Elements
const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
const pokeElements = pokemons.map( pokemon => `<p>${pokemon}</p>`)
console.log(pokeElements)