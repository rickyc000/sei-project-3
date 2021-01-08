import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Space from '../models/space.js'
import User from '../models/user.js'
import spaceData from './data/spaces.js'
import faker from 'faker'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const spaces = await Space.create(spaceData)
    console.log(`🤖 ${spaces.length} spaces created`)

    const users = [] // ! an array to push my 100 fake users into

    for (let index = 0; index < 100; index++) { // ! looping to created 300 users
      const username = faker.internet.userName() // ! generating a fake username
      const firstName = faker.name.firstName() // ! A fake first name
      const lastName = faker.name.lastName() // ! A fake last name
      const email = `${firstName}${lastName}@email.com` // ! concatening them together to make the email
      const profileImage = faker.image.avatar() // ! and a fake profile image
      users.push({
        username,
        firstName,
        lastName,
        email,
        profileImage,
        password: 'pass', // ! setting all the passwords the same
        passwordConfirmation: 'pass',
      })
    }

    const createdUsers = await User.create(users) // ! then pass that users array

    console.log(`🤖 Created ${createdUsers.length}`)


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
