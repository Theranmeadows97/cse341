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

module.exports = { getContacts, getContact };