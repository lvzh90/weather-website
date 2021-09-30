const express = require('express');
const router = new express.Router();

router.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.',
        name: 'Linda Zapata'
    });
})



router.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Linda Zapata',
        errorMessage: 'Help article not found'
    })
})

module.exports = router;
