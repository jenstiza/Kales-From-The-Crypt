const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mainGenreSchema = new Schema ({
    mainCategory: {
        type: String,
        enum: ['A Fish Called Wensleydale', 'Cloves Encounters', 'Leeky Cauldron', 'The Bleu Witch Project', 'To Err is Cumin']
    } 
});









module.exports = mongoose.model('MainGenre', mainGenreSchema);