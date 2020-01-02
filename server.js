const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PartnersRoutes = require('./api/routes/partners');

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

require('dotenv').config();
const cors = require('cors');
const port = 5000;

app.use(cors())
app.use(bodyParser.json());
app.use('/', PartnersRoutes);

app.listen(port, () => 
  // eslint-disable-next-line no-console
  console.log(`Serveur up and running on port ${port}!`)
);