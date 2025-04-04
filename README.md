# capstoneProject
initilized the readme file

# Database
This code establishes a connection to a MongoDB database using Mongoose, a popular ODM for Node.js.

The connectDB function uses mongoose.connect() to connect to a MongoDB Atlas cluster with a given connection string.

The async function ensures that the connection attempt is handled properly, and .then() logs a success message if the connection is established.

The connection string contains the database credentials, including the username, password, and cluster information.

This approach allows seamless database interaction in Node.js applications, making it easy to store and retrieve data.

#Schema Creation

Sure thing, Mahanandhan! Here's the **README content in bullet points** format **without any code**:

---

# 📘 Library Management System API – README Content

## ✅ Project Summary

- A RESTful API built with Node.js and Express.
- Designed to manage a library's book collection.
- Data is stored and retrieved from a `data.json` file.
- Supports full CRUD (Create, Read, Update, Delete) operations.

---

## 🔧 Features

- Create new books with details like title, author, genre, year, and copies.
- Read all books or a specific book by its ID.
- Update any field of an existing book using its ID.
- Delete a book by its ID.
- Input validation included to ensure clean and accurate data.

---

## 📁 Project Structure

- Main server logic and routes in a single file.
- Books data stored in `data.json`.
- Easy to set up and extend for learning or small-scale use.

---

## 🚀 How to Run

- Clone or download the project folder.
- Install dependencies using a package manager.
- Start the server locally.
- Use tools like Postman or browser to interact with the API.

---

## 🔗 API Routes

- **POST** to add a new book.
- **GET** to fetch all books.
- **GET** by ID to fetch a specific book.
- **PUT** by ID to update a book's information.
- **DELETE** by ID to remove a book from the list.

---

## 📌 Notes

- The current setup is beginner-friendly and does not use a database.
- All changes will reflect only during runtime; restarting the server will reload from the original `data.json`.
- For persistence or production-level use, integration with a real database is recommended.

---