var express = require('express');
const { getAllcourtData } = require('../controllers/userControl');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res) {
  res.send('respond with a resource');
});*/
router.get('/getAllcourtData',getAllcourtData)
module.exports = router;
