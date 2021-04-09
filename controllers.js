const ClientModel = require('./models/client');
const ProspectModel = require('./models/prospects');
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
     const client = new ClientModel(req.body);
     try {
       await client.save();
       res.send(client);
     } catch (error) {
       res.status(500).send(error);
     }
   }

async function getProspects(_, res) {
    const prospects = await ProspectModel.find({});
    try {
      console.log(prospects)
      res.send(prospects);
    } catch (error) {
      res.status(500).send(error);
    }
  }

async function deleteProspect (req, res){
  const id= req.body.id;
  try {
    const deleted = await ProspectModel.findByIdAndDelete(id, function(err){
      if (err) {
        res.send(err)
      }
    });
    res.status(200).send(id);
  } catch (error) {
    res.status(500).send(error);
  }
}
 
async function addProspect (req, res){
  const prospect =  new ProspectModel(req.body);
    try {
    const result = await prospect.save();
    res.send(result);
  } catch (error) { 
    res.send('Here the error', error);
  }
};
   
  


async function updateStatus(req, res) {
  const id= req.body.id;
  const status = req.body.status;
  try {
    const updated = await ProspectModel.updateOne({_id:id}, 
        {status:status}, function (err) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Status");
        }
    }); 
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
};   

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



module.exports={ getClients, addClient, getYelpData, addProspect, getProspects, deleteProspect, updateStatus};
