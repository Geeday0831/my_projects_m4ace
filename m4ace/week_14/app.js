const mongoose = require('mongoose');

const url = 'mongodb+srv://abdulwahabjide:MzE733yg2ewc0lcV@cluster0.0qg0nxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose');
    // You can define schemas and models here
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

/* MzE733yg2ewc0lcV */

/* mongodb+srv://<abdulwahabjide>:<MzE733yg2ewc0lcV>@cluster0.0qg0nxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */