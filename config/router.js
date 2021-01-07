import express from 'express'
import spaces from '../controllers/spaces.js'

const router = express.Router()

router.route('/spaces')
  .get(spaces.index)
  .post(spaces.create)

router.route('/spaces/:id')
  .get(spaces.show)
  .put(spaces.update)
  .delete(spaces.delete)

export default router