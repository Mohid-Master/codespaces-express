const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000


const uri = "mongodb+srv://mohid751:Myfirst(1st)ClusterMongoDB@cluster-0.yinrsoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


// const url = "mongodb+srv://mohid751:Myfirst(1st)ClusterMongoDB@cluster-0.yinrsoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-0"; // Replace with your MongoDB connection URL
// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection;

// app.use(express.json());

// try {
//     con.on('open', () => {
//         console.log('Connected to the database');
//     })
// } catch (error) {
//     console.log("Error: " + error);
// }

// Include route files
const usersRoute = require('./routes/usersRoute');
// Use routes
app.use('/usersRoute', usersRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
