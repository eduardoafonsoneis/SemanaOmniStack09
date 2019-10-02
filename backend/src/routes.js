const express = require('express');
const routes = express.Router();
const Sessioncontroller = require('./controllers/SessionController')

routes.use(express.json());


//get: filtros
//post: cria /edita 
//req.query = acessar params
//req.body acessar corpo da edição


routes.post('/users',Sessioncontroller.store);

module.exports = routes;