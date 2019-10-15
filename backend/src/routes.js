const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const Sessioncontroller = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
routes.use(express.json());
const upload = multer(uploadConfig);

//get: filtros
//post: cria /edita 
//req.query = acessar params
//req.body acessar corpo da edição


routes.post('/sessions',Sessioncontroller.store);
routes.post('/spot', upload.single('thumbnail'),SpotController.store);
routes.get('/spot', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);
module.exports = routes;