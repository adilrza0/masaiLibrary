const express = require('express');
const bookRouter = express.Router();
const { authMiddleware } = require('../Middlewares/auth.middleware');
const { bookModel } = require('../Models/books.model');

// GET /api/books
bookRouter.get('/', async (req, res) => {
  try {
    const { author, category } = req.query;
    let query = {};
    
    if (author && category) {
      query = { author, category };
    } else if (author) {
      query = { author };
    } else if (category) {
      query = { category };
    }
    const books = await bookModel.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/books/:id
bookRouter.get('/:id', async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// POST /api/books
bookRouter.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, author, category, price, quantity } = req.body;
    const book = new bookModel({ title, author, category, price, quantity });
    await book.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT / PATCH /api/books/:id
bookRouter.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, author, category, price, quantity } = req.body;
    await bookModel.findByIdAndUpdate(req.params.id, { title, author, category, price, quantity });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/books/:id
bookRouter.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.params.id);
    res.sendStatus(202);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = bookRouter;