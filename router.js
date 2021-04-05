require('dotenv').config()
const express = require('express');
const { getClients, addClient, getYelpData, addProspect, getProspect} = require('./controllers')
const router = express.Router();


router.get('/', getClients);
router.post("/", addClient);

router.post('/yelp', getYelpData);

router.get('/getProspects', getProspect)
router.post('/addProspect', addProspect )  

module.exports = router;