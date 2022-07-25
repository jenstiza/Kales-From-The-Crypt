const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      match: /.{10,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

  const recipeSchema = new Schema ({
    title: String,
    reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
  