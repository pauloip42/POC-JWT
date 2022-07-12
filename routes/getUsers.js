const express = require('express');
const getUsers = express.Router();

const verifyJWT = require('../utils/verifyJWT');

getUsers.get('/', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos usuarios!");
    res.json([{id:1,nome:'paulo'}]);
})

module.exports = getUsers;