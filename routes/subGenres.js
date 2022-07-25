var express = require('express');
var router = express.Router();
const subGenresCtrl = require('../controllers/subGenres');
/* GET users listing. */

router.get('/mainGenres/:id/subGenres/:id', subGenresCtrl.index);


module.exports = router;