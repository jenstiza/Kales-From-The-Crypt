const mainGenre = require('../models/mainGenre');

module.exports = {
    index,
    show
};

function index (req,res) {
    mainGenre.find({}).sort('mainCategory').exec(function(err, mainGenres){
        res.redirect(`/mainGenres/${mainGenre._id}`), {
            mainGenres,
        }
    })
}