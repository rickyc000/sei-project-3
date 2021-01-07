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

// spaces create 

async function spaceCreate (req, res, next){
  try {
    const newSpace = await Space.create(req.body)
    return res.status(201).json(newSpace)
  } catch (err) {
    next(err)
  }
}

// spaces show

async function spaceShow(req, res, next){
  const { id } = req.params
  try {
    const space = await Space.findById(id)
    if (!space) throw new Error()
    return res.status(200).json(space)
  } catch (err) {
    next(err)
  }
}

// space update / edit

async function spaceUpdate(req, res, next){
  const { id } = req.params
  try {
    const spaceToEdit = await Space.findById(id)
    if (!spaceToEdit) throw new Error()
    Object.assign(spaceToEdit, req.body)
    await spaceToEdit.save()
    return res.status(202).json(spaceToEdit)
  } catch (err) {
    next(err)
  }
}

// space delete

async function spaceDelete(req, res, next) {
  const { id } = req.params
  try {
    const spaceToDelete = await Space.findById(id)
    if (!spaceToDelete) throw new Error()
    await spaceToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}


export default {
  index: spaceIndex,
  create: spaceCreate,
  show: spaceShow,
  update: spaceUpdate,
  delete: spaceDelete,
}