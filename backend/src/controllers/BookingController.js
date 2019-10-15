const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params; //parametros que vem da rota
        const { date } = req.body;

        //1:24
    }
}