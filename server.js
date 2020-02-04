require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api/v1/partners", require('./routes/partners'));
app.use("/api/v1/ressources", require('./routes/ressources'));
app.use("/api/v1/ressourcesFront", require('./routes/ressourcesFront'));

app.listen(process.env.JAWSDB_PORT || 5000,() => {
  console.log('Listening on port '+ (process.env.JAWSDB_PORT || 5000));
})