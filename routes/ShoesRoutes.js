const express = require('express');
const ShoesRoutes = express.Router();

const ShoesController = require('../controllers/ShoesController');

ShoesRoutes.get('/', ShoesController.getAllShoes);
ShoesRoutes.get('/:shoesId', ShoesController.getShoesById);
ShoesRoutes.post('/', ShoesController.createShoes);

module.exports = ShoesRoutes;
