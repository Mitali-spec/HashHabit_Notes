# Express Server Basics

To create a server using Express.js, we first need to import the Express module.

```javascript
const express = require("express");
const app = express();
```

- `require("express")` imports the Express module.
- `express()` creates the server application.

---

# Routes

A **route** means:

```
URL + action
```

Examples:

| Route | Meaning |
|------|--------|
| `/` | Home page |
| `/signup` | Signup page |
| `/login` | Login page |

---

# HTTP Methods

## GET

Used when the **browser asks the server for data or a page**.

Example:

```javascript
app.get("/", function(req,res){
    res.send("Home page");
});
```

---

## POST

Used when the **browser sends data to the server**.

Example: sending username and password from a signup form.

```javascript
app.post("/signup", function(req,res){
    res.send("User signed up");
});
```

---

## PUT

Used when we **update existing data**.

Example: updating a user's password or profile.

---

## DELETE

Used when we **delete data** from the server.

Example: deleting a user account.

---

# Summary

| Method | Purpose |
|------|------|
| GET | Get data or open a page |
| POST | Send data to the server |
| PUT | Update existing data |
| DELETE | Remove data from the server |
