const express = require('express');
const router = new express.Router();

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Linda Zapata'
    });
})

module.exports = router;
