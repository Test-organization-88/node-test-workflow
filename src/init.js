var express = require('express'),
  app = express(),
  port = process.env.PORT || 8081;

app.listen(port);

app.get('/callData', (req, res) => {
  res.status(200).send({
    respuesta: 'exito papa'
  })

});

app.get('/', (req, res) => {
  res.status(200).send({
    respuesta: 'Hello World'
  })

});

console.log('todo list RESTful API server started on: ' + port);