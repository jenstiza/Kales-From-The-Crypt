var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');


router.get('/new', recipesCtrl.new);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.show);
router.get('/', recipesCtrl.showAll);
router.get('/:id/edit', recipesCtrl.edit);
router.put('/:id', recipesCtrl.update);
router.post('/catalog', recipesCtrl.index);



module.exports = router;