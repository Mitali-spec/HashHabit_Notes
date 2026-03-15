# Connecting Node.js to MongoDB

To connect **Node.js** to **MongoDB**, developers usually use **Mongoose**.

Mongoose makes it easier to store and retrieve data from MongoDB.

---

# Step 1 — Install Mongoose

Open the terminal inside your project folder and run:

```bash
npm install mongoose
```

This installs the Mongoose package in your project.

---

# Step 2 — Import Mongoose in your code

In your server file:

```javascript
const mongoose = require("mongoose");
```

This allows your Node.js application to use Mongoose.

---

# Step 3 — Connect to MongoDB

Add this line in your server code:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
```

Explanation:

```
mongodb://127.0.0.1 → MongoDB running on your computer
27017               → Default MongoDB port
mydatabase          → Name of the database
```

If the database does not exist, **MongoDB will automatically create it**.

---

# Step 4 — Confirm Connection

You can print a message when the database connects successfully.

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log(err);
});
```

If successful, the terminal will show:

```
Connected
```

---

# Summary

Steps to connect Node.js to MongoDB:

```
1. Install mongoose
2. Import mongoose in your project
3. Use mongoose.connect()
4. Check connection using .then() and .catch()
```
