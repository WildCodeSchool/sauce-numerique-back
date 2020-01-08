require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api/v1/partners", require('./routes/partners'));
app.use("/api/v1/ressources", require('./routes/ressources'));



app.listen(5000,() => {
  console.log('Listening on port 5000')
})