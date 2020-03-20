const models = require('../models');

const newActivity = async (req, res) => {
  try {
    const activity = await models.Activity.create(req.body);
    // console.log(req.body.email)
    return res.status(201).json({
      activity,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = newActivity;