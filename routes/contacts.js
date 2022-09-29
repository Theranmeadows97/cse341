const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/user');
const validation = require('../middleware/validate');

routes.get('/', contactsController.getContacts);

routes.get('/:id', contactsController.getContact);

routes.post('/', validation.saveContact, contactsController.createContact);

routes.put('/:id', validation.saveContact, contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);



module.exports = routes;