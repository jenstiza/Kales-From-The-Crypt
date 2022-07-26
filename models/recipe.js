const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  },
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true,
})

const recipeSchema = new Schema({
  mainGenre: {
    type: String,
    enum: ['comedy', 'sci-fi', 'fantasy', 'horror', 'nailed-it!']
  },

  subGenre: {
    type: String,
  },

  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: 'https://i.imgur.com/qQjq06a.png'
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  },
  reviews: [reviewSchema]
}, {
  timestamps: true,
})


module.exports = mongoose.model('Recipe', recipeSchema);
  