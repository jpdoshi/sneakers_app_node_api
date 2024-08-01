const express = require('express');
const UserRoutes = express.Router();

const UserController = require('../controllers/UserController');

UserRoutes.post('/login', UserController.loginUser);
UserRoutes.post('/signup', UserController.signUpUser);

module.exports = UserRoutes;
