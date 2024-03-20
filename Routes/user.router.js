const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { userModel } = require("../Models/user.model");
const userRouter=express.Router()

// Register
userRouter.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new userModel({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Login
  userRouter.post('/login', async (req, res) => {
    try {
        console.log(req.body)
      const { email, password } = req.body;

      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  module.exports={
    userRouter
  }