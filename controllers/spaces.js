import Space from '../models/space.js'

// spaces index
async function spaceIndex(_req, res, next){
  try {
    const spaces = await Space.find()
    return res.status(200).json(spaces)
  } catch (err) {
    next(err)
  }
}

export default {
  index: spaceIndex,
}