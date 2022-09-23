const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res) => {
  const data = await mongodb.getDb().db('ContactData').collection('Contacts').find();
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const data = await mongodb.getDb().db('ContactData').collection('Contacts').find({_id: contactId});
  data.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('ContactData').collection('Contacts').insertOne(newContact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'New contact failed to be created.');
  }
};
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('ContactData').collection('Contacts').replaceOne({_id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Contact failed to update.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('ContactData').collection('Contacts').remove({_id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Contact failed to be deleted.');
  }
};

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };