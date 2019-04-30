const axios = require ('axios');

const getClima = async (lat,lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=542186a36f9e9c17a7b0d3e1f9065504&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
