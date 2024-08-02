const CartModel = require('../models/CartModel');

const getAllCartItems = async (req, res) => {
  try {
    const cart = await CartModel.findOne({
      user: req.query.userId
    }, {
      cartItems: 1
    });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).send(err);
  }
}

const updateCartItems = async (req, res) => {
  try {
    const user = req.query.userId;
    let cart = await CartModel.findOne({user});

    if (cart) {
      cart = await CartModel.findByIdAndUpdate(
        cart._id, {
          user,
          cartItems: req.body.cartItems
        }, {
          new: true
        }
      );
    } else {
      cart = await CartModel.create({
        user,
        cartItems: req.body.cartItems
      });
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).send(err);
  }
}

const CartController = { getAllCartItems, updateCartItems };
module.exports = CartController;
