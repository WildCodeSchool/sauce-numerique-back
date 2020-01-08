require('dotenv').config();
const { Partners } = require('./models');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/api/v1/partners/:id', async(req,res) => {
  const { id } = req.params;
  const onePartners = await Partners.findOne({where: { id }})
  res.send(onePartners)
})

app.get('/api/v1/partners', async(req, res) => {
    const AllPartners = await Partners.findAll()
    res.send(AllPartners) 
    });


app.post('/api/v1/partners', async (req, res) => {
  const { name, logo } = req.body
  const NewPartners =await Partners.create({name, logo})
  res.send(NewPartners);
});

app.put('/api/v1/partners/:id', async (req, res) => {
  const { id } = req.params;
  const { name, logo} = req.body;
  const UpdatePartners = await Partners.update({ name, logo }, {where: { id }});
  res.send(UpdatePartners);

})

app.delete('/api/v1/partners/:id', async (req, res) => {
  const { id } = req.params;
  await Partners.destroy({ where: { id }});
  res.send(id);
})

app.listen(5000,() => {
  console.log('Listening on port 5000')
})