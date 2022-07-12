require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const express = require('express');
const logout = express.Router();

logout.use((req, res, next)=> {
    next();
});

logout.post('/', function(req, res) {
    res.json({ auth: false, token: null });
})

module.exports = logout;