require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');

console.log('MONGODB_URI:', process.env.MONGODB_URI);

const url = process.env.MONGODB_URI;

mongoose.connect(url)
  .then(async () => {
    console.log('Connected to MongoDB with Mongoose');

    // Add a user
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });

    await newUser.save();
    console.log('User added:', newUser);

    //to fetch and print all my users
    const users = await User.find();
    console.log('All users:', users);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

/* MzE733yg2ewc0lcV */

/* mongodb+srv://<abdulwahabjide>:<MzE733yg2ewc0lcV>@cluster0.0qg0nxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */