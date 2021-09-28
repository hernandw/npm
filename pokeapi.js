const axios = require('axios');

let pokemonesPromesas = []
async function pokemonesGet() {
const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
return data.results
}
async function getFullData(name) {
const { data } = await
axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
return data
}
pokemonesGet().then((results) => {
results.forEach((p) => {
let pokemonName = p.name
pokemonesPromesas.push(getFullData(pokemonName))
})
Promise.all(pokemonesPromesas).then((data) => {
data.forEach((p) => {
console.log(`${p.name} => Alto: ${p.height} - Peso: ${p.weight}`)
})
})
})
