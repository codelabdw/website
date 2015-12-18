require('dotenv').load({verbose: false});
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(process.env.PORT);