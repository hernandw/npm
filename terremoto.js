const axios = require('axios');
const moment = require('moment');
let nombre
let nacimiento
async function getData() {
let { data } = await axios.get('https://randomuser.me/api/')
let user = data.results[0]
nombre = `${user.name.first} ${user.name.last}`
nacimiento = moment(user.dob.date).format('Do MMMM YYYY');
}
function imprimir() {
console.log(`El usuario ${nombre} nació el ${nacimiento}`)
}
getData().then(() => {
imprimir()
})

