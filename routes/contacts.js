const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/user');

router.get('/', contactsController.getUser);

router.get('/:id', contactsController.getUsername);

module.exports = router;