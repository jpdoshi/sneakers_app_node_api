const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cartItems: [{
    shoes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shoes',
      required: true,
    },
    shoesSize: {
      type: String,
      required: true,
    },
    colorVariantIndex: {
      type: Number,
      required: true,
    },
  }]
});

const CartModel = mongoose.model('Cart', cartSchema, 'cart_items');
module.exports = CartModel;
