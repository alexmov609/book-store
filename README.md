# 📚 Book Store

A full-stack Book Store application built using Node.js for the backend, React.js for the frontend, MongoDB for database management, and Vite for faster frontend tooling.

## 🛠️ Technologies Used

- **Node.js**: Backend server, handling API requests, routing, and middleware.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing book information, user data, etc.
- **Mongoose**: ODM (Object Data Modeling) for interacting with MongoDB.
- **React.js**: Frontend library for building dynamic user interfaces.
- **Vite**: Fast, modern build tool for development and production of React applications.
- **Axios**: For making HTTP requests from React to Node.js backend.

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) operations for books.
- Browse available books.
- Search for books by title, author, or genre.
- Add books to the inventory and manage them.
  
**Note:** This project focuses purely on CRUD operations.

## 📂 Project Structure

```bash
book-store/
│
├── backend/                  # Backend Node.js API
│   ├── controllers/          # Controllers for handling requests
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   ├── middlewares/          # Custom middleware functions
│   └── app.js                # Main server file
│
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── services/         # Axios services for API calls
│   │   ├── App.js            # Main React file
│   │   └── index.js          # Entry point for React
│   └── vite.config.js        # Vite configuration
│
└── README.md                 # Project documentation
