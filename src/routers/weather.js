const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const router = new express.Router();

router.get('/weather', async (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an addresss!'
        })
    }

    try {
        const {latitude, longitude, location} = await geocode(req.query.address);
        const forecastData = await forecast(latitude, longitude);
        
        return res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })
    } catch (error) {
        return res.send({ error: error.message })
    }
})

module.exports = router;
