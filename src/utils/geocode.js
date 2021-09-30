const request = require('request');
const fetch = require('node-fetch');
require('dotenv').config();

const geocode = async (address) => {
    const API_URL = process.env.GEOCODE_API_URL;
    const ACCESS_TOKEN = process.env.GEOCODE_API_ACCESS_TOKEN;
    const url = `${API_URL}/${encodeURIComponent(address)}.json?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === 'Not Found' || data.features.length === 0) {
            throw new Error({message: `Unable to find location. Try another search. ${data}`});
        }

        const { center, place_name: location } = data.features[0];

        return {
            latitude: center[1],
            longitude: center[0],
            location
        }
    } catch(error) {
        console.error(`Something went wrong with the location service. ${error.message}`);
        throw error;
    }
}

module.exports = geocode
