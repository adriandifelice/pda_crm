require('dotenv').config()

const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.tsqqy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;
const Router = require('./router');
const cors = require('cors');

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => app.listen(PORT, () => {
      console.log('running on port 🎾', PORT)
  }))
    .catch(e => console.log('error', e))


app.use(cors());
app.use(express.json());
app.use(Router);

