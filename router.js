require('dotenv').config()
const express = require('express');
const { getClients, addClient, getYelpData, addProspect, getProspects, deleteProspect, updateStatus} = require('./controllers')
const router = express.Router();


router.get('/', getClients);
router.post("/", addClient);

router.post('/yelp', getYelpData);

router.get('/getProspects', getProspects)
router.post('/addProspect', addProspect )  
router.post('/deleteProspect', deleteProspect )  
router.post('/updateStatus', updateStatus)

module.exports = router;