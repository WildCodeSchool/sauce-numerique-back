require('dotenv').config();
const { Partners } = require('./models');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/api/v1/partners', async(req, res) => {
    const allPartners = await Partners.findAll()
    res.send(allPartners) 
    });


app.post('/api/v1/partners', async (req, res) => {
  const { name, logo } = req.body
  const newPartners =await Partners.create({name, logo})
  res.send(newPartners);
});


app.listen(5000,() => {
  console.log('Listening on port 5000')
})