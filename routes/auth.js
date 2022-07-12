require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express = require('express');

const auth = express.Router();

auth.use((req, res, next)=> {
    next();
});

//authentication
auth.post('/', (req, res, next) => {
    if(req.body.user === 'paulo' && req.body.password === '123'){
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300
      });
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
});

module.exports = auth;