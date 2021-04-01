require('dotenv').config()
const express = require('express');
const { getClients, addClient} = require('./controllers')
const router = express.Router();


router.get('/', getClients);

router.post("/", addClient);
  

module.exports = router;