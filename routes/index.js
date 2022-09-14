const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Stephanie Meadows');
});

module.exports = routes;