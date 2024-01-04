// routes/users.js
const express = require('express');
const { userAuth } = require('../middlewares/authorization');
const { getAllcourtData, getSinglecourtData } = require('../controllers/userControl');
const router = express.Router();

router.get('/getAllcourtData', userAuth, getAllcourtData);
router.get('/getSinglecourtData', userAuth, getSinglecourtData);

module.exports = router;
