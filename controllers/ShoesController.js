const ShoesModel = require('../models/ShoesModel');

const getShoesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    let shoes;

    shoes = await ShoesModel.find((category != 'All') ? {
      category: category
    } : {});

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

const getShoesSlider = async (req, res) => {
  try {
    const shoes = await ShoesModel.find().sort('-discount').limit(5);
    
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).send(err);
  }
}

const searchShoes = async (req, res) => {
  try {
    const shoes = await ShoesModel.find({ $text: { $search: req.query.q } });
    
    res.status(200).json(shoes);
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

const ShoesController = {
  getShoesById,
  getShoesSlider,
  getShoesByCategory,
  searchShoes,
  createShoes
};

module.exports = ShoesController;
