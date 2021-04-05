require('dotenv').config()
const express = require('express');
const { getClients, addClient, getYelpData, addProspect, getProspects, deleteProspect} = require('./controllers')
const router = express.Router();


router.get('/', getClients);
router.post("/", addClient);

router.post('/yelp', getYelpData);

router.get('/getProspects', getProspects)
router.post('/addProspect', addProspect )  
router.post('/deleteProspect', deleteProspect )  

module.exports = router;