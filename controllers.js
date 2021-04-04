const ClientModel = require('./models/client')
const axios = require('axios');
const apikey = process.env.YELP_KEY;
const ENDPOINT = "/businesses/search"


async function getClients(_, res) {
    const clients = await ClientModel.find({});
    try {
      res.send(clients);
    } catch (error) {
      res.status(500).send(error);
    }
  }


async function addClient(req, res) {
    console.log(req.body)
     const client = new ClientModel(req.body);
     try {
       await client.save();
       res.send(client);
     } catch (error) {
       res.status(500).send(error);
     }
   }




async function editClient(req, res) {

}   
async function deleteClient(req, res) {
  
}  

let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${apikey}`,
    "Content-type": "application/json",
  },
})



async function getYelpData (req, res) {
  yelpREST("/businesses/search", {
    params: {
     location: "new york",
     term: req.body,
     limit: 10,
   },
  }).then(({ data }) => {
   let { businesses } = data;
   res.send(businesses);
})

}



module.exports={ getClients, addClient, getYelpData};
