const config = require('./config.js');
const express = require('express')
const app = express()
//const port = 3000

console.log(`NODE_ENV=${config.NODE_ENV}`);

//una lista de acciones para realizar 
app.get('/', (req, res) => {
  res.send('Lista de tareas!')
});

//retorna las entradas de la lista con la palabra
app.get('/search', (req, res) => {
    res.send('lista de tareas seach')
  });

//agrega una accion para realizar
app.post('/', function (req, res) {
    res.send('Got a POST request');
  });
  

  app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
  });