const models = require('../models');
const jwt = require('jsonwebtoken');

const changePassword = async (req, res, next) => {
    try {
        const user = await models.LoginData.findOne({
            where: { email: req.body.email },
        });
        if (user) {
            if (user.password == req.body.password) {
                return res.status(404).json({
                    success: false,
                    message : "same as the previous, please try another password"
                });
            }
            else{
                console.log("user here");
                const newuser = await models.LoginData.update(
                    {password : req.body.password},
                    {where : 
                        {"email":req.body.email}
                    })
                    .then((result => {console.log(result)}))
                    .catch(e => {console.log("error",e)}); 
                console.log(newuser);
                return res.status(200).send('password updated');
            }
        }
        return res.status(404).send('user does not exists');
    } catch (error) {
        next(error);
    }
}
module.exports = exports = changePassword;