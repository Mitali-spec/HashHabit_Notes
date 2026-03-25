#  JavaScript + Express Quick Reference

##  Data Conversion

* `JSON.stringify()` → converts **JavaScript object → JSON string**
* `response.json()` → converts **JSON → JavaScript object**
* 👉 JSON itself is just a **format**, not a function

---

## 🔹 Fetch → Backend Flow

```js
body: JSON.stringify({ add_task: task })
```

👉 Converts JavaScript object into JSON before sending to backend

```js
app.use(express.json());
```

👉 Converts incoming JSON → JavaScript object
👉 Stored in:

```js
req.body
```

---

## 🔹 Response Object

```js
let response = await fetch(...);
```

👉 `response` stores the **response sent by server to frontend JS**

---

## 🔹 DOM Manipulation

```js
element.setAttribute(name, value);
```

👉 Sets an attribute on an HTML element

Example:

```js
img.setAttribute("src", "image.png");
```

---

## 🔹 HTTP Methods Mapping

```js
fetch("/task", { method: "DELETE" });
```

👉 Handled in backend by:

```js
app.delete("/task", (req, res) => {
    // delete logic
});
```

---

## 🔹 Prompt Input

```js
prompt("Enter your name:");
```

👉 Shows popup in browser
👉 User enters input → returned value stored in variable

---

## 🔹 Update Task Example

```js
let newValue = prompt("Update task:", li.firstChild.textContent);
```

👉 When user clicks update button:

* Popup appears with current task
* User edits it
* New value is stored in:

```js
li.firstChild.textContent
```

---

## 🔥 Full Communication Flow

1. Frontend sends data using `fetch()`
2. `JSON.stringify()` → JS → JSON
3. Backend uses `express.json()` → JSON → JS
4. Data available in `req.body`
5. Backend sends response
6. Frontend reads using `response.json()`

---

## ⚡ One-Line Summary

👉 **Frontend ↔ Backend Communication =**
`JS → JSON → JS → JSON → JS`
