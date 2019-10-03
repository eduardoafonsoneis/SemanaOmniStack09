//index, show, update, destroy
const User = require('../models/User');
module.exports = {
    async store(req, res){
        const email = req.body.email;
        
        let user = await User.findOne({email:email}); //procura pelo email no banco
        if(!user){
            user = await User.create({email})
        }

        return res.json(user);

    }
};