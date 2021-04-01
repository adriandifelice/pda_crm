const express = require('express');
const app = express();
const router = express.Router()
const PORT = process.env.PORT | 3000;





app.get('/', (req, res) => {
  res.send('Hello Ganch!')
})


app.listen(PORT, () => {
    console.log('running on port 🎾', PORT)
})

