const models = require('../models');
const jwt = require('jsonwebtoken');

const ifExists = async (req, res, next) => {
    try {
        const user = await models.LoginData.findOne({
            where: { email: req.body.email },
        });
        if (user) {
            if (user.password == req.body.password) {
                const token = jwt.sign(user.id, process.env.JWT_SECRET);
                return res.json({
                    success: true,
                    email:user.email,
                    token,
                });
            }
            return res.status(404).send('password did not match');

        }
        return res.status(404).send('user does not exists');
    } catch (error) {
        next(error);
    }
}
module.exports = exports = ifExists;