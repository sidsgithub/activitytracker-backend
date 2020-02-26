const models = require('../models');

const newUser = async (req, res) => {
  try {
    const user = await models.LoginData.create(req.body);
    // console.log(req.body.email)
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = newUser;