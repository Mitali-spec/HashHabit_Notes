// ===============================
// IMPORTS
// ===============================



const express = require("express");


const mongoose = require("mongoose");



const app = express();



// ===============================
// MIDDLEWARE
// ===============================



app.use(express.urlencoded({ extended: true }));


// ===============================
// DATABASE CONNECTION
// ===============================


mongoose.connect("mongodb://127.0.0.1:27017/username_and_password")


.then(() => console.log("MongoDB Connected"))


.catch(err => console.log(err));





// ===============================
// SCHEMA & MODEL
// ===============================




const userSchema = new mongoose.Schema({


    username: String,

    
    password: String

    
});



const User = mongoose.model("User", userSchema);



// ===============================
// ROUTES
// ===============================



// Serve HTML page


app.get("/", function(req, res) {


    res.sendFile(__dirname + "/signup_and_login.html");

    
});



// SIGNUP


app.post("/signup", async function(req, res) {


    const username = req.body.username;

    
    const password = req.body.password;

    

    // Check if user already exists

    
    const existingUser = await User.findOne({ username: username });

    

    if (existingUser) {

    
        return res.send("Username already exists");

        
    }

    // Create new user

    
    const newUser = new User({

    
        username: username,

        
        password: password

        
    });

    await newUser.save();

    res.send("Signup successful");

    
});



// LOGIN


app.post("/login", async function(req, res) {



    const username = req.body.username;

    
    const password = req.body.password;
    

    const existingUser = await User.findOne({ username: username });

    

    if (!existingUser) {

    
        return res.send("User not found");

        
    }

    

    if (existingUser.password === password) {

    
        res.send("Login successful");

        
    } else {

    
        res.send("Wrong password");

        
    }

    
});





// ===============================
// SERVER
// ===============================



app.listen(3000, function() {


    console.log("Server running on port 3000");

    
});
