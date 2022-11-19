
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/search', (req, res) => {
    res.send('lista de tareas')
  });

app.post('/', function (req, res) {
    res.send('Got a POST request');
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
