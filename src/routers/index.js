const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Linda Zapata'
    });
})

module.exports = router;
