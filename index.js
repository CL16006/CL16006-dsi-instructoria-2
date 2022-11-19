const config = require('./config.js');
const express = require('express')
const app = express()

let lista=["estudiar","programar","cocinar","comer"];
let li="";

console.log(`NODE_ENV=${config.NODE_ENV}`);

//una lista de acciones para realizar 
app.get('/', (req, res) => {
  lista.forEach(function(item) {
    //console.log(item);
    li=li+","+item;
});
  res.send('Lista de tareas:  '+li);
});

//retorna las entradas de la lista con la palabra
app.get('/search', (req, res) => {
  const result = lista.filter(word => word==="estudiar");
    res.send('Resultado  :'+result)
  });

//agrega una accion para realizar
app.post('/', function (req, res) {
  const item="pasear";
  lista.push(item);
  lista.forEach(function(item) {
    //console.log(item);
    li=li+","+item;
});
    res.send('Nueva lista: '+li);
  });
  

  app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
  });