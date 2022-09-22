const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/user');

routes.get('/', contactsController.getContacts);

routes.get('/:id', contactsController.getContact);

routes.post('/', contactsController.createContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);



module.exports = routes;