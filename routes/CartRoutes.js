const express = require('express');
const CartRoutes = express.Router();

const CartController = require('../controllers/CartController');

CartRoutes.get('/', CartController.getAllCartItems);
CartRoutes.put('/', CartController.updateCartItems);

module.exports = CartRoutes;
