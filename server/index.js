var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/farmer', function (req, res) {
  	res.send([
          {
            id: '31231231',
            name: 'Joao Castro',
            document: {
              documentNumber: '789317289731',
              documentType: 'CPF'
            },
            address:{
              street: 'Rua X',
              state: 'SP',
              address: 'Fazendo ABC',
              country: 'Brasil'
            } 
          },
          {
            id: '12312312',
            name: 'Joao Silva',
            document: {
              documentNumber: '1231231231231',
              documentType: 'CPF'
            },
            address:{
              street: 'Rua X',
              state: 'SP',
              address: 'Fazendo ABC',
              country: 'Brasil'
            } 
          }
        ]
  	); 

});

app.get('/document', function (req, res) {
  res.send('Hello World!');
});

app.listen(4211);

