const express = require('express');
const path = require('path');
const pug = require('pug');

const app = express();

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir));

//Won't ever happen because publicDir jumps in and grabs the req
// app.get('/', (req, res) => {
//   res.send('<h1>hello world</h1');
// });

app.set('view engine', 'pug');


app.get('/treasure', (req, res) => {
  res.render('treasure', {
    title: 'treasure FTW!',
    message: 'find the map, find the treasure!'
  })
});

app.get('/pirates', (req, res) => {
  // console.log('rank query', req.query.rank);
  res.send([{name: 'luffy', rank: 'captain'}]);
});

app.get('/pirates/:id', (req, res) => {
  console.log('requested id', req.params.id);
  res.send({name: 'Monkey D Luffy', rank: 'captain'});
});

module.exports = app;