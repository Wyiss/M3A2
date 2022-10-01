const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
router.use((req, res, next) => {
    console.log("It works")
    next()
  })
module.exports = router;