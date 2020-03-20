const models = require('../models');

const listActivity = async (req, res) => {
    try {
    //   var id = JSON.parse(req.params.id);
      const activity = await models.Activity.findAll(
    //       {
    //     where: id
    //   }
      );
      // console.log(req.body.email)
      return res.status(201).json({
        activity,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  module.exports = listActivity;