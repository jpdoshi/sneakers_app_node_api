const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  colorVariants: [{
    color: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  }]
});

const ShoesModel = mongoose.model('Shoes', shoesSchema, 'shoes');
module.exports = ShoesModel;
