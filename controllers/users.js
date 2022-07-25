const User = require ('../models/user.js');

module.exports = {
        index,
        show,
      
}

function index (req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', {
      users,
			title: 'All Users'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/users/${req.user.user._id}`)
  })
}

function show(req, res) {
  User.findById(req.params.id)
    .populate([
      'recipes',
      {
        path: 'recipes',
        populate: {
          path: 'author'
        }
      }
    ])
    .then(user => {
      User.findById(req.user.user._id)
        .then(self => {
          const isSelf = self._id.equals(user._id)
          const recipes = user.recipes
          res.render('users/show', {
            title: `${user.name}'s profile`,
            user,
            isSelf,
            recipes
          })
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/`)
    })
}

