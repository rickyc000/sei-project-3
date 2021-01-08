import mongoose from 'mongoose'

const citySpaceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 800 },
  image: { type: String, required: true },
  location: { type: Object, required: true },
  // owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true  },
})

export default mongoose.model('Space', citySpaceSchema)