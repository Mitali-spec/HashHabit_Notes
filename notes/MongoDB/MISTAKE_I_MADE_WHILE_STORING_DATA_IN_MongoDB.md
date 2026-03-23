#  Mistake I Made While Storing Data in MongoDB

##  What I Did Wrong

I tried to connect my **frontend (browser)** directly to MongoDB using Mongoose.

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/users_goal");
```

👉 This is incorrect because:

* Frontend runs in the browser
* Mongoose works only in Node.js (backend)
* Browser cannot directly connect to MongoDB

---

##  Correct Flow (Important Concept)

```text
Frontend (Browser) → Backend (Server) → Database (MongoDB)
```

✔ The frontend sends a request
✔ The backend receives it
✔ The backend talks to MongoDB

 **Frontend NEVER talks directly to the database**

---

#  Correct Architecture

## 🔹 1. Frontend Code (add_task.js)

```js
let save = document.getElementById("save");
let enter_task = document.getElementById("enter_task");

save.addEventListener("click", async function () {
    let task = enter_task.value;

    if (task === "") {
        alert("ENTER A TASK");
        return;
    }

    // Send data to backend
    await fetch("/add_task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task: task })
    });

    enter_task.value = "";
});
```

---

##  2. Backend Code (server.js)

```js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/users_goal")
.then(() => console.log("connected"))
.catch(err => console.log(err));

// Schema
const taskSchema = new mongoose.Schema({
    add_task: String
});

// Model
const Task = mongoose.model("Task", taskSchema);

// Route to save task
app.post("/add_task", async (req, res) => {
    const task = req.body.task;

    const newTask = new Task({
        add_task: task
    });

    await newTask.save();

    res.send("Task saved");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

#  Key Takeaway

*  Frontend → MongoDB (WRONG)
*  Frontend → Backend → MongoDB (CORRECT)

 Always remember:

> **Only the backend communicates with the database.**

---



---
