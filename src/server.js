require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) {
    console.error(err);
    return;
  };
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
})