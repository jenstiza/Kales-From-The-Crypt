const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subGenreSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      
});




module.exports = mongoose.model('SubGenre', subGenreSchema);