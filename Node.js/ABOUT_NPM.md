# NPM (Node Package Manager)

**NPM stands for Node Package Manager.**

It is a tool using which we can **download code written by other developers** (libraries/packages).

---

## Important Note
Use **NPM commands in CMD / Terminal**, not inside the Node.js terminal.

---

## npm init

Used to **start a new project**.

```bash
npm init
```

You have to fill information like:

- Project name
- Version
- Description
- Author

Whatever information you write will be **stored in JSON format** inside a file called:

```
package.json
```

---

## Installing a Library

To install a library (example: Express):

```bash
npm install express
```

This command will:

- Download the library
- Create a folder called `node_modules`
- Add the library inside `dependencies` in `package.json`

---

## Dependencies

**Dependencies** means your project **depends on that library to run**.

Example inside `package.json`:

```json
"dependencies": {
  "express": "^4.18.2"
}
```

This means the project **needs Express to run**.

---

## Using Express in Your Code

After installing Express, write this in your JavaScript file:

```javascript
const express = require("express");
```

Now you can use Express in your Node.js program.
