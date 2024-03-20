const express = require('express');
const orderRouter = express.Router();

const { authMiddleware } = require('../Middlewares/auth.middleware');
const { bookModel } = require('../Models/books.model');
const { userModel } = require('../Models/user.model');
const { orderModel } = require('../Models/order.model');

// POST /api/order
orderRouter.post('/order', authMiddleware, async (req, res) => {
  try {
    const { books, totalAmount } = req.body;
    const userId = req.userId; // Assuming userId is obtained from the token
    const order = new orderModel({ user: userId, books, totalAmount });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/orders
orderRouter.get('/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await orderModel.find().populate('user').populate('books');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = orderRouter;