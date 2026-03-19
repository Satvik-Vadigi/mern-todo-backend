# 🚀 MERN Todo App – Backend API

🌐 **Base URL**
https://production-server-todo-mern.up.railway.app

---

## 📌 Overview

A RESTful API built with Node.js and Express.js that handles user authentication and Todo management.
Implements secure JWT-based authorization and follows MVC architecture.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* Bcrypt.js

---

## 🔐 Features

* 🔑 User Registration & Login
* 🔒 Password hashing using bcrypt
* 🛡️ JWT-based authentication
* 📦 Protected routes using middleware
* 📝 Full CRUD operations for Todos
* 🧠 MVC architecture implementation

---

## 📡 API Endpoints

### 🔑 Auth Routes

* POST `/api/v1/user/register`
* POST `/api/v1/user/login`

### 📝 Todo Routes

* POST `/api/v1/todo/create`
* POST `/api/v1/todo/getAll/:id`
* DELETE `/api/v1/todo/delete/:id`
* PATCH `/api/v1/todo/update/:id`

### 🧪 Test Route

* GET `/api/v1/test`

---

## 🧠 Architecture

* MVC Pattern (Model, Controller, Routes)
* Middleware-based authentication
* MongoDB Atlas for cloud database

---

## 🔐 Authentication Flow

1. User logs in → receives JWT token
2. Token stored on client side
3. Token sent in Authorization header
4. Middleware verifies token before accessing protected routes

---

## 🚀 Deployment

* Backend → Railway
* Database → MongoDB Atlas
* Uptime Monitoring → UptimeRobot (prevents server sleep)

---

## 🔗 Frontend Repo

https://github.com/Satvik-Vadigi/mern-todo-frontend

---

## ⚙️ Environment Variables

Create a `.env` file in root:

PORT=8080
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key

---

## ⚠️ Notes

* All protected routes require JWT token
* Ensure environment variables are configured properly

---

## 👨‍💻 Author

Satvik Vadigi
