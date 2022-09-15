const routes = require('express').Router();
const userController = require('../controller/user');

// routes.get('/', (req, res) => {
//     res.send('Stephanie Meadows');
// });

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);

module.exports = routes;