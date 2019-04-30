
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);


const getInfo = async (direccion) => {

    try{
        const respuestalugar = await lugar.getLugarLatLng(argv.direccion);
        const respuestaclima = await clima.getClima(respuestalugar.lat, respuestalugar.lng);
        //Salida
        return `El clima de ${ respuestalugar.direccion } es de ${ respuestaclima }`;

    }
    catch(e){
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
