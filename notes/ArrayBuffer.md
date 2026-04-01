##  Understanding Images, Binary Data, and ArrayBuffer

- A browser does **not "see" an image like humans do**.
- Internally, an image is stored as **binary data (bytes)**.

###  What is an Image?
- An image file (like `.png`, `.jpg`) is actually:
  - A sequence of **numbers (0–255)**  
  - These numbers represent **binary data**

###  How the Browser Sees It
- The browser reads the image as:
  - Raw binary data  (not a visual picture)
- Then it **interprets that data** and renders it visually for us.

###  What is ArrayBuffer?
- `ArrayBuffer` is a **container for raw binary data**
- It allows us to **access the actual bytes of a file**

###  Key Idea
> An image is already binary data.  
> ArrayBuffer simply gives us access to that raw binary data.

###  Flow

> Image File → Binary Data → ArrayBuffer → Processing (e.g., hashing)


###  Why This Matters
- Enables:
  - Hashing (SHA-256)
  - Encryption
  - File analysis
  - Cybersecurity applications
