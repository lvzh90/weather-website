const request = require('request');
const fetch = require('node-fetch');
require('dotenv').config();

const forescat = async (latitude, longitude) => {
    const API_URL = process.env.WEATHER_API_URL;
    const ACCESS_KEY = process.env.WEATHER_API_ACCESS_KEY
    const url = `${API_URL}/current?access_key=${ACCESS_KEY}&query=${latitude},${longitude}&units=f`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            throw new Error({ message: data.error});
        }

        const { weather_descriptions: weatherDescription, temperature, feelslike } =  data.current;

        return `${weatherDescription[0]}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;
    } catch(error) {
        console.error(`Something went wrong with the weather service. ${error.message}`);
        throw error;
    }
}

module.exports = forescat
