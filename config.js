require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGOURI = `mongodb+srv://jpdoshi2811:${encodeURIComponent(process.env.MONGOPWD)}@cluster0.pxzycum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = {
  PORT, MONGOURI
};
