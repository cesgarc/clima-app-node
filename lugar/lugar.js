const axios = require ('axios');

const getLugarLatLng = async ( dir ) => {
    const encodeUlr = encodeURI( dir );
    //console.log('Here:' + encodeUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 1000,
        headers: {'X-RapidAPI-Key': 'd9d463cbf1mshf1ddf5dc5a3ba3fp15010fjsn1754c0151244'}
    });

    const resp = await instance.get();

    if ( resp.data.Results.lenght ===  0){
        throw new Error (`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}