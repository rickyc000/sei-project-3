import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export const tagCategories = [
  'Riverside Spot',
  'Architecture',
  'Art & Design',
  'Food & Drink',
  'Peace & Quiet',
  'Lively',
  'Mother Nature',
  'Sports & Leisure'
] 

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
}, {
  timestamps: true,
})

const favouriteSchema = new mongoose.Schema({
  isFavourite: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
  space: { type: mongoose.Schema.ObjectId, ref: 'Space', required: true  },
})

const citySpaceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 800 },
  image: { type: String, required: true },
  location: { type: Object, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
  comments: [commentSchema],
  favouritedBy: [favouriteSchema],
  tags: [{ type: String, required: false }]
})

citySpaceSchema.plugin(uniqueValidator)

export default mongoose.model('Space', citySpaceSchema)