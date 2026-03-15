# Async and Await in Node.js

When working with databases or APIs in **JavaScript**, some operations take time to complete.
For example, saving data to a database or reading a file.

To handle these operations properly, JavaScript uses **async** and **await**.

---

# 1️ What is `async`

`async` is used before a function to indicate that **this function performs an operation that may take time**.

Example:

```javascript
async function saveUser() {

}
```

This tells JavaScript that the function may perform **asynchronous operations** like:

```
• saving data to database
• reading files
• calling APIs
```

---

# 2️ What is `await`

`await` is used to **pause the function until a task finishes**.

Example:

```javascript
await newuser.save();
```

Explanation:

```
Save the user in the database
Wait until the saving process finishes
Then move to the next line of code
```

---

# 3️ Why `await` is Important

Without `await`:

```javascript
newuser.save();
res.send("Data stored");
```

Problem:

```
Server may send response before data is saved
```

With `await`:

```javascript
await newuser.save();
res.send("Data stored");
```

Now the flow becomes correct.

```
Save data
↓
Wait until saving finishes
↓
Send response
```

---

# 4️ Rule of Async/Await

```
await can only be used inside an async function
```

Example:

```javascript
app.post("/signup", async function(req,res){

    const newuser = new user({
        username: req.body.username,
        password: req.body.password
    });

    await newuser.save();

    res.send("User saved");
});
```

---


So:

```
async → function that may take time
await → wait until task finishes
```

---

# Summary

```
async → marks a function that contains asynchronous tasks
await → pauses execution until the task is complete
```

These are commonly used when working with:

```
databases
APIs
file systems
```
