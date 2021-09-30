const path = require('path');
const express = require('express');
const hbs = require('hbs');

const indexRouter = require('./routers/index');
const weatherRouter = require('./routers/weather');
const aboutRouter = require('./routers/about');
const helpRouter = require('./routers/help');
const errorRouter = require('./routers/404');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDiectoryPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDiectoryPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.use(indexRouter);
app.use(weatherRouter);
app.use(aboutRouter);
app.use(helpRouter);
app.use(errorRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
