const axios = require('axios');

const getUser = async () =>{
    const {data} = await axios.get('https://randomuser.me/api/');
    const user = data.results[0];
    return user;
}

const diasFeriados = async ()=>{
    const {data} = await axios.get('https://www.feriadosapp.com/api/holidays.json');
    return data.data;
}

Promise.all([getUser(), diasFeriados()]).then((resultado)=>{
    const user = resultado[0];
    const nombre = `${user.name.first} ${user.name.last}`
    const nacimiento = new Date(user.dob.date);
    const cumple = `${nacimiento.getMonth() + 1}-${nacimiento.getDate()  < 10 ? '0' + nacimiento.getDate() : nacimiento.getDate()}` 
    




const feriados = resultado[1];
const carrete = feriados.find((f) => f.date.includes(cumple));

carrete ? console.log(`
'Prepárense todos! porque ${nombre} estará de cumpleaños en el
feriado ${carrete.title}'`) : console.log(`${nombre} no cumple años en ningún día feriado :/`)
})
