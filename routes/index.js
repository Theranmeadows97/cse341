const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));
router.use('/', require('./swagger'));

module.exports = router;


// const routes = require('express').Router();
// const userController = require('../controllers/user');

// routes.use('/', userController.getContacts);
// routes.use('/contacts', userController.getContact);
// //routes.use('/contacts',require('./contacts'));

// // routes.get('/', (req, res) => {
// //     res.send('Stephanie Meadows');
// // });

// module.exports = routes;
