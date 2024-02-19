const express = require('express');
const {response} = require("express");
const  router = require('./router');

const  app = express();

//para recuperar dados em json da requisição
app.use(express.json())


//dizendo pra usar o router importado
app.use(router);

module.exports = app;