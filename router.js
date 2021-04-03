require('dotenv').config()
const express = require('express');
const { getClients, addClient, getYelpData} = require('./controllers')
const router = express.Router();


router.get('/', getClients);
router.post("/", addClient);
router.post('/yelp', getYelpData);  

module.exports = router;