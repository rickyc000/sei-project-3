import express from 'express'
import spaces from '../controllers/spaces.js'

const router = express.Router()

router.route('/spaces')
  .get(spaces.index)

export default router