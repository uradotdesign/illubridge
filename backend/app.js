const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'auth-token, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const uri = 'mongodb+srv://brerorrexha:Kaidozer18@cluster0.0k62u6v.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.get('/', (res, req) => {
  res.send('Homepage');
});

const SvgRoute = require('./routes/Svgs.js');
app.use('/svgs', SvgRoute);

app.listen(3000, () => {
  console.log('Listening at port 3000');
});
