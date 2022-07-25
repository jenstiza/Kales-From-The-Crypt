const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');


module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    edit,
    update,
    delete: deleteRecipe,
  }



function index(req, res) {
  Recipe.find({})
    .populate('author')
    .then(recipes => {
      res.render('recipes/index', {
        recipes,
        title: 'All Recipes'
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/recipes')
    })
}

function newRecipe(req, res) {
  res.render('recipes/new', {
    title: 'Add Recipe',
  })
}

function create(req, res) {
    const Recipe = new Recipe(req.body);
    // Assign the logged in user's id
    recipe.userRecommending = req.user._id;
    recipe.save(function(err) {
      if (err) return res.redirect('/recipes/new' /* or a path that displays a custom error */);
      // Probably want to go to newly added book's show view
      res.redirect(`/recipes/${recipe._id}`);
    });
  }

function show(req, res) {
  Recipe.findById(req.params.id)
    .populate([
      'author', 
      {
        path: 'reviews', 
        populate: {  
          path: 'author',
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
      {_id: req.params.id, userRecommending: req.user._id}, function(err) {
        res.redirect('/recipes');
      }
    );
  }

  function allRecipes(req, res) { 
    let recipeQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    Recipe.find(recipeQuery, function(err, recipes) {
      res.render('/recipes/index', {
        recipes,
        user: req.user,  
        nameSearch: req.query.name  
      });
    });

  }