import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from 'dotenv';
// dotenv.config();

// Replace the uri string with config env.
const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://admin:mWu2vMHAQfcDMyay@boba-talks.8ltm5.mongodb.net/?retryWrites=true&w=majority&appName=boba-talks";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;