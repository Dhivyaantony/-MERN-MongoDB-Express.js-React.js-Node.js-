const express = require('express');
const { addCourtData } = require('../controllers/adminControl');
const router = express.Router();
const multer = require('multer');
const Court = require('../Model/courtModel');
const { adminAuth } = require('../middlewares/authorization');

// Define storage configuration
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/courts');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Use multer middleware
const upload = multer({ storage: fileStorage });

// Define the route
router.post('/addCourtData',adminAuth, upload.single('courtImage'), addCourtData);

module.exports = router;
