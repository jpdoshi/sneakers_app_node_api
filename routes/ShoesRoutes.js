const express = require('express');
const ShoesRoutes = express.Router();

const ShoesController = require('../controllers/ShoesController');

ShoesRoutes.get('/', ShoesController.getAllShoes);
ShoesRoutes.get('/:shoesId', ShoesController.getShoesById);
ShoesRoutes.post('/search', ShoesController.searchShoes);
ShoesRoutes.post('/', ShoesController.createShoes);
ShoesRoutes.post('/category/:category', ShoesController.getShoesByCategory);
ShoesRoutes.post('/slider', ShoesController.getShoesSlider);

module.exports = ShoesRoutes;
