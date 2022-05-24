// Imports
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

// MongoDB
mongoose.connect("mongodb+srv://bryan:bryan@cluster0.fmdfb.mongodb.net/studyio?retryWrites=true&w=majority")

// Middleware
app.use(express.json()) // to allow json change to parse for API calls
app.use(cors()); // to connect FE to BE

// Models
const UserModel = require("./models/user")

// Routes
const userRoute = require("./routes/User")
app.use("/auth", userRoute)



//Needs this at the start, BE server runs on port 3001, then FE runs on 3000
app.listen(3001, () => {
    console.log("SERVER RUNNING");
});