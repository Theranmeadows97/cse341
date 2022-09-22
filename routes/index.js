const routes = require('express').Router();
const userController = require('../controllers/user');

routes.use('/', userController.getContacts);
routes.use('/contacts', userController.getContact);
//routes.use('/contacts',require('./contacts'));

// routes.get('/', (req, res) => {
//     res.send('Stephanie Meadows');
// });

module.exports = routes;
