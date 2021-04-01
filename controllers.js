const ClientModel = require('./models/client')


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



module.exports={ getClients, addClient, sum};
