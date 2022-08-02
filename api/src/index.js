const express = require('express');
const app = express();
const authController = require('./controllers/auth.controller');
const productController = require('./controllers/product.controller');
const authenticate = require('./middlewares/authenticate')
app.use(express.json());
app.use('/auth',authController);
app.use('/products',authenticate,productController);
module.exports = app;