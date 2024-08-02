const UserModel = require('../models/UserModel');

const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne(req.body);
    
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json('User Not Found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const updateFavorites = async (req, res) => {
  try {
    const user = await UserModel
      .findByIdAndUpdate(
        req.query.userId,
        { favorites: req.body },
        { new: true }
      );

    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
}

const signUpUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
}

const UserController = { loginUser, signUpUser, updateFavorites };
module.exports = UserController;
