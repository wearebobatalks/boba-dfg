const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://admin:mWu2vMHAQfcDMyay@boba-talks.8ltm5.mongodb.net/?retryWrites=true&w=majority&appName=boba-talks";
const mongo_client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json());

// Connect to the MongoDB client
async function connectToDB() {
  try{
    await mongo_client.connect();
    return mongo_client.db("boba-talks").collection("users");
  } catch(err) {
    console.error(err);
  }
}
async function disconnectDB() {
  try {
    await mongo_client.close();
    res.status(200).json({
      message: "Database connection closed.",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred during disconnection.",
      error: error.message,
    });
  }
};


/**
 *  This function is used verify a google account
 */
const GOOGLE_CLIENT_ID = "1076864368322-gct1ejsjceb3srdhjsgkjk7armhe1n0v.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: "Invalid user detected. Please try again" };
  }
}

app.post("/signup", async (req, res) => {
  try {
    // console.log({ verified: verifyGoogleToken(req.body.credential) });
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);

      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;

      // Create a new user object with the necessary fields
      const user = {
        firstName: profile?.given_name,
        lastName: profile?.family_name,
        picture: profile?.picture,
        email: profile?.email,
        token: jwt.sign({ email: profile?.email }, "myScret", {
          expiresIn: "1d",
        }),
      };

      const DB = await connectToDB();
      // Insert the user into the MongoDB collection
      await DB.insertOne(user);
      await disconnectDB();

      res.status(201).json({
        message: "Signup was successful",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occured. Registration failed.",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;


      // Query the database for the user
      const DB = await connectToDB();
      const user = await DB.findOne({ email: profile?.email });
      await disconnectDB();

      if (user) {
        // User found, proceed with login
        res.status(200).json({
          message: "Login successful",
          user: user,
        });
      } else {
        // User not found, handle accordingly
        res.status(404).json({
          message: "User not found",
        });
      }
      }
    } catch (error) {
      res.status(500).json({
        message: "An error occurred during login.",
        error: error.message,
      });
    }
      
  console.log(res);
});

//Figure this out soon!!
// app.post("/register", async (req, res) => {
//   try {
//     const { userId, updates } = req.body; // Assuming the request contains the user ID and an object with the updates
//     const DB = await connectToDB();

//     const updateResult = await DB.collection("users").updateOne(
//       { _id: userId }, // Use the unique identifier to find the document
//       { $set: updates } // updates should be an object with fields to update, e.g., { name: "New Name", email: "new@email.com" }
//     );

//     await disconnectDB();

//     if (updateResult.modifiedCount === 0) {
//       return res.status(404).json({
//         message: "User not found or no updates were necessary.",
//       });
//     }

//     res.status(200).json({
//       message: "User updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "An error occurred during the user update.",
//       error: error.message,
//     });
//   }
// });
app.listen("5050", () => console.log("Server running on port 5050"));