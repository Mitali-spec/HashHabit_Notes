const express=require("express");
const app=express();

const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/username_and_password")
.then(() => {
    console.log("connected");
})
.catch(err => {
    console.log(err);
});





app.use(express.urlencoded({ extended: true }));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup_login.html");
});

//SCHEMA IS CREATED

const schema=new mongoose.Schema({
username : String,
password : String
});

//MODEL IS CTREATED

const user=mongoose.model("user", schema);

app.post("/signup",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
//CREATE NEW USER FOLLOWING THE STRUCTURE OF SCHEMA

const newuser=new user({
    username: username,
    password: password
});

await newuser.save();

    
    res.send("data stored in mongoDB");
});



app.listen(3000, function(){
    console.log("server is listening on port 3000");
});
