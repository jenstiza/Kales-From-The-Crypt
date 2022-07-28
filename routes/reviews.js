var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');



router.post('/recipes/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;