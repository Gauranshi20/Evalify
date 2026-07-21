# Backend Architecture

**Project:** Evalify  
**Version:** 1.0  
**Technology Stack:** Node.js, Express.js, TypeScript, MongoDB, Mongoose

---

# Overview

The Evalify backend is designed using a layered architecture to ensure scalability, maintainability, and separation of concerns.

Instead of placing all business logic inside controllers, the application follows a structured flow where each layer has a single responsibility.

```
Request
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
MongoDB
```

This architecture keeps the project organized and makes future feature development easier.

---

# Project Structure

```
backend/

src/

│
├── config/
│
├── constants/
│
├── controllers/
│
├── database/
│
├── middlewares/
│
├── models/
│
├── repositories/
│
├── routes/
│
├── services/
│
├── validators/
│
├── ai/
│
├── utils/
│
├── types/
│
├── interfaces/
│
├── uploads/
│
├── jobs/
│
├── emails/
│
├── tests/
│
├── app.ts
│
└── server.ts
```

---

# Folder Responsibilities

## config/

Contains all application configuration.

Examples:

- Database Configuration
- JWT Configuration
- Cloudinary Configuration
- Environment Variables

---

## constants/

Stores reusable constant values.

Examples:

- User Roles
- HTTP Status Codes
- Error Messages
- Notification Types

---

## controllers/

Receives incoming HTTP requests.

Responsibilities:

- Validate request data
- Call service layer
- Return API responses

Controllers should never contain business logic.

---

## services/

Contains the application's business logic.

Examples:

- Calculate grades
- Generate reports
- Process submissions
- Handle AI review requests

Services communicate with repositories.

---

## repositories/

Responsible for database operations.

Responsibilities:

- Create
- Read
- Update
- Delete

Repositories never contain business rules.

---

## models/

Contains all Mongoose schemas.

Examples:

- User
- Assignment
- Submission
- Grade
- Notification

---

## routes/

Defines API endpoints.

Example:

```
/api/v1/auth

/api/v1/users

/api/v1/assignments

/api/v1/submissions
```

---

## middlewares/

Contains reusable Express middleware.

Examples:

- Authentication
- Authorization
- Error Handling
- Validation
- Logging

---

## validators/

Contains request validation using Zod.

Examples:

- Login Validation
- Register Validation
- Assignment Validation

---

## ai/

Responsible for AI integration.

Contains:

- Prompt Builder
- AI Service
- Response Parser
- Evaluation Engine

No AI logic should exist inside controllers.

---

## uploads/

Handles temporary uploaded files.

Production storage will use Cloudinary or AWS S3.

MongoDB stores only file URLs.

---

## emails/

Responsible for sending emails.

Examples:

- Welcome Email
- Password Reset
- Assignment Notifications

---

## jobs/

Background tasks.

Examples:

- Delete expired tokens
- Send reminders
- Generate reports

---

## database/

Database initialization.

Examples:

- MongoDB Connection
- Seed Data

---

## utils/

Reusable helper functions.

Examples:

- Date Formatting
- Token Generation
- File Utilities

---

## interfaces/

TypeScript interfaces.

---

## types/

Global custom types.

---

## tests/

Unit and integration tests.

---

# Request Lifecycle

Every request follows this sequence.

```
Client

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Repository

↓

MongoDB

↓

Service

↓

Controller

↓

Response
```

---

# Error Handling

The backend uses centralized error handling.

```
Throw Error

↓

Error Middleware

↓

JSON Response
```

Example Response

```json
{
  "success": false,
  "message": "Assignment not found"
}
```

---

# Authentication Strategy

Authentication uses JWT.

Access Token

↓

Protected Routes

↓

Refresh Token

↓

Generate New Access Token

Passwords are hashed using bcrypt.

---

# Authorization Strategy

Role Based Access Control (RBAC)

Roles

- Admin
- Teacher
- Student
- Parent

Each route verifies user permissions before execution.

---

# Logging

Future implementation:

- Morgan
- Winston

Logs

- Errors
- Requests
- Authentication
- AI Requests

---

# API Response Format

Success

```json
{
    "success": true,
    "message": "Assignment created successfully",
    "data": {}
}
```

Error

```json
{
    "success": false,
    "message": "Unauthorized"
}
```

---

# Design Principles

The backend follows these principles:

- Single Responsibility Principle
- Separation of Concerns
- RESTful API Design
- Scalable Folder Structure
- Type Safety
- Reusable Services
- Clean Architecture

---

# Future Improvements

- Redis Caching
- Rate Limiting
- Queue System (BullMQ)
- Docker
- Microservices
- GraphQL Gateway
- WebSockets
- Audit Logs
- Monitoring