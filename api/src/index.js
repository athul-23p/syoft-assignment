const express = require('express');
const cors = require('cors');
const app = express();
const authController = require('./controllers/auth.controller');
const productController = require('./controllers/product.controller');
const authenticate = require('./middlewares/authenticate')
app.use(express.json());
app.use(cors());
app.use('/auth',authController);
app.use('/products',authenticate,productController);
module.exports = app;