const Recipe = require("../models/recipe");


module.exports = {
    create,
    delete: deleteReview,
}

function create (req,res) {
    Recipe.findById(req.params.id, function(err, recipe){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        recipe.reviews.push(req.body);
        recipe.save(function(err){
            res.redirect(`/recipes/${recipe._id}`);
        });
    });

}

async function deleteReview(req, res, next) {
    try {
        const recipe = await Recipe.findOne({"reviews._id": req.params.id, "reviews.user": req.user._id});
        if (!article) throw new Error ("Nice Try!");
        recipe.reviews.remove(req.params.id);
        await recipe.save();
        res.redirect(`/recipes/${recipe._id}`);
    } catch (err) {
        return next (err);
    }
    }


