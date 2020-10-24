require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const errorHandler = require('./middleware/errorHandler');

require('express-async-errors');

const app = express();

const routes = require('./routes');

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
app.use(express.json());
app.use(routes);
app.use(errorHandler);
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, (err) => {
  if(err) {
    console.error(err);
    return;
  };
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
})