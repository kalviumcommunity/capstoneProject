# capstoneProject
initilized the readme file

# Database
This code establishes a connection to a MongoDB database using Mongoose, a popular ODM for Node.js.

The connectDB function uses mongoose.connect() to connect to a MongoDB Atlas cluster with a given connection string.

The async function ensures that the connection attempt is handled properly, and .then() logs a success message if the connection is established.

The connection string contains the database credentials, including the username, password, and cluster information.

This approach allows seamless database interaction in Node.js applications, making it easy to store and retrieve data.