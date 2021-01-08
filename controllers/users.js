import User from '../models/user.js'

async function getAllUsers(_req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: 'Not Found' })
  }
}

export default {
  index: getAllUsers,
}