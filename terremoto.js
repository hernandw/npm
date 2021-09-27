const axios = require('axios');
const moment = require('moment');

let fecha;

let magnitud;

const getData = async ()=>{
let data = await axios.get('https://api.gael.cl/general/public/sismos');
fecha = data[0].fecha;
magnitud = data[0].magnitud;
}

const imprimir = () =>{
    console.log(`El ultimo sismo fue ${fecha} y su magnitud fue de ${magnitud}`);
}

getData().then(()=>{
    imprimir()
});