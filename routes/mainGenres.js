var express = require('express');
var router = express.Router();
const mainGenresCtrl = require('../controllers/mainGenres');
/* GET users listing. */

router.get('/mainGenres', mainGenresCtrl.index);


module.exports = router;