const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { PORT, MONGOURI } = require('./config');
const app = express();

const UserRoutes = require('./routes/UserRoutes');
const ShoesRoutes = require('./routes/ShoesRoutes');
const CartRoutes = require('./routes/CartRoutes');

try {
  mongoose.connect(MONGOURI, {
    dbName: 'sneakers_app'
  });
  console.log('Connected to Database!');
} catch (err) {
  console.error(err);
}

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/user', UserRoutes);
app.use('/shoes', ShoesRoutes);
app.use('/carts', CartRoutes);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`App is listening on PORT:${PORT}`);
});
