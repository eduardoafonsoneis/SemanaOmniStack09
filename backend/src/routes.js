const express = require('express');
const routes = express.Router();
const Sessioncontroller = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routes.use(express.json());


//get: filtros
//post: cria /edita 
//req.query = acessar params
//req.body acessar corpo da edição


routes.post('/sessions',Sessioncontroller.store);
routes.post('/spot',SpotController.store);

module.exports = routes;