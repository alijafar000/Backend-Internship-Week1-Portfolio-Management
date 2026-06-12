# Portfolio Management System Backend

A RESTful Backend API for managing user portfolios and projects. This application allows users to register, login, and manage their projects securely using JWT Authentication.

## Features

* User Registration
* User Login
* JWT Authentication
* Create Project
* Get All Projects
* Get Single Project
* Update Project
* Delete Project
* Password Hashing using bcryptjs
* MongoDB Database Integration
* Error Handling
* Protected Routes

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv

---

## Project Structure

```text
portfolio-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── projectController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Project.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── projectRoutes.js
│   │
│   └── utils/
│       └── generateToken.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd portfolio-backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## API Endpoints

### Authentication Routes

#### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "Jafar",
  "email": "jafar@example.com",
  "password": "123456"
}
```

#### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "jafar@example.com",
  "password": "123456"
}
```

---

### Project Routes

All project routes require JWT Token.

#### Create Project

```http
POST /api/projects
```

#### Get All Projects

```http
GET /api/projects
```

#### Get Single Project

```http
GET /api/projects/:id
```

#### Update Project

```http
PUT /api/projects/:id
```

#### Delete Project

```http
DELETE /api/projects/:id
```

---

## Authorization

Add JWT token in request headers:

```http
Authorization: Bearer <your_jwt_token>
```

---

## Sample Project Schema

```json
{
  "projectName": "Portfolio Website",
  "description": "Personal Portfolio Website",
  "technologiesUsed": ["React", "Node.js", "MongoDB"]
}
```

---

## Future Improvements

* Pagination
* Search and Filtering
* Project Categories
* File Upload Support
* Role Based Access Control

---

## Author

Jafar

Backend Developer Intern
