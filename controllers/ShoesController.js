const ShoesModel = require('../models/ShoesModel');

const getAllShoes = async (req, res) => {
  try {
    const shoes = await ShoesModel.find();
    
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).send(err);
  }
}

const getShoesById = async (req, res) => {
  try {
    const shoes = await ShoesModel.findById(req.params.shoesId);
    
    if (shoes) {
      res.status(200).json(shoes);
    } else {
      res.status(404).json('Shoes Not Found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const createShoes = async (req, res) => {
  try {
    const shoes = await ShoesModel.create(req.body);
    
    res.status(201).json(shoes);
  } catch (err) {
    res.status(500).send(err);
  }
}

const ShoesController = { getAllShoes, getShoesById, createShoes };
module.exports = ShoesController;
