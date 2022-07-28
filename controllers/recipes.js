const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');


module.exports = {
    new: newRecipe,
    create,
    show,
    edit,
    update,
    showAll,
    delete: deleteRecipe,
    index
  }

function index(req, res) { 
  console.log(req.body);
  Recipe.find({mainGenre: req.body.mainGenre}, function(err, recipes) {
    res.render('recipes/index', {
      recipes, 
    });
  });

}


function newRecipe(req, res) {
  res.render('recipes/new', {
    title: 'Add Recipe',
  })
}

function create(req, res) {
  console.log(req.body);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
    const recipe = new Recipe(req.body);
    // Assign the logged in user's id
   
    recipe.save(function(err,recipe) {
      if (err) {
        console.log(err);
        return res.redirect('/recipes/new' );
      }
      res.redirect(`/recipes`);
    });
  }

function show(req, res) {
  Recipe.findById(req.params.id)
    .populate([
      'user', 
      {
        path: 'reviews', 
        populate: {  
          path: 'user',
        }
      }
    ])
    .then(recipe => {
      res.render('recipes/show', {
        recipe,
        title: recipe.name
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/recipes')
    })
}

function edit(req, res) {
    Recipe.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, recipe) {
      if (err || !recipe) return res.redirect('/recipes');
      res.render('recipes/edit', {recipe});
    });
  }

function update(req, res) {
    Recipe.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      req.body,
      {new: true},
      function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes');
        res.redirect(`/recipes/${recipe._id}`);
      }
    );
  }

function deleteRecipe(req, res) {
    Recipe.findOneAndDelete(
      {_id: req.params.id}, function(err) {
        res.redirect('/recipes');
      }
    );
  }

  function showAll(req, res) { 
    Recipe.find({}, function(err, recipes) {
      res.render('recipes/index', {
        recipes, 
      });
    });

  }