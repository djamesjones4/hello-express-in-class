const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: "Hello Express" });
});

const desserts = require('./desserts');
app.use('', desserts)

app.use(function(req, res) {
  res.sendStatus(404);
})

app.listen(3000)
