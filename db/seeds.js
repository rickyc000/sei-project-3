import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Space from '../models/space.js'
import spaceData from './data/spaces.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const spaces = await Space.create(spaceData)
    console.log(`🤖 ${spaces.length} spaces created`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')
  }
}

seedDatabase()
