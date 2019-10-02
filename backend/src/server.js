const express = require('express'); //usa o framework
const mongoose = require('mongoose');
const routes = require('./routes'); // importa o rourtes.js

const app = express(); //cria o app

mongoose.connect('mongodb+srv://teste:teste@omnistack-o0ytg.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(express.json());
app.use (routes);

app.listen(3333);