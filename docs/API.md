# API Documentation

**Project:** Evalify

**Version:** 1.0

**Architecture:** REST API

**Base URL**

```
http://localhost:5000/api/v1
```

---

# API Design Principles

Evalify follows RESTful API design principles.

- Resource-based URLs
- Standard HTTP methods
- Consistent JSON responses
- JWT Authentication
- Versioned APIs
- Proper HTTP status codes

---

# Standard Response Format

## Success Response

```json
{
  "success": true,
  "message": "Assignment created successfully",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Unauthorized",
  "errors": []
}
```

---

# HTTP Methods

| Method | Purpose |
|----------|------------------------|
| GET | Retrieve data |
| POST | Create new resource |
| PUT | Replace resource |
| PATCH | Update resource |
| DELETE | Remove resource |

---

# Authentication

Protected APIs require a JWT access token.

```
Authorization: Bearer <access_token>
```

---

# Authentication APIs

## Register

POST

```
/auth/register
```

Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "Password123",
  "role": "STUDENT"
}
```

---

## Login

POST

```
/auth/login
```

Body

```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "",
    "refreshToken": "",
    "user": {}
  }
}
```

---

## Logout

POST

```
/auth/logout
```

---

## Forgot Password

POST

```
/auth/forgot-password
```

---

## Reset Password

POST

```
/auth/reset-password
```

---

# User APIs

## Get Profile

GET

```
/users/profile
```

---

## Update Profile

PATCH

```
/users/profile
```

---

## Upload Avatar

POST

```
/users/avatar
```

---

# Teacher APIs

## Create Class

POST

```
/classes
```

---

## Get Classes

GET

```
/classes
```

---

## Get Class Details

GET

```
/classes/:classId
```

---

## Update Class

PATCH

```
/classes/:classId
```

---

## Delete Class

DELETE

```
/classes/:classId
```

---

# Assignment APIs

## Create Assignment

POST

```
/assignments
```

---

## Get Assignments

GET

```
/assignments
```

---

## Get Assignment

GET

```
/assignments/:assignmentId
```

---

## Update Assignment

PATCH

```
/assignments/:assignmentId
```

---

## Delete Assignment

DELETE

```
/assignments/:assignmentId
```

---

# Submission APIs

## Submit Assignment

POST

```
/submissions
```

---

## Get Submission

GET

```
/submissions/:submissionId
```

---

## Get All Submissions

GET

```
/submissions
```

---

# AI Review APIs

## Generate AI Review

POST

```
/ai/review
```

Body

```json
{
  "submissionId": ""
}
```

---

## Get AI Review

GET

```
/ai/review/:reviewId
```

---

# Grade APIs

## Publish Grade

POST

```
/grades
```

---

## Get Grades

GET

```
/grades
```

---

## Update Grade

PATCH

```
/grades/:gradeId
```

---

# Parent APIs

## View Child Progress

GET

```
/parents/progress
```

---

## View Reports

GET

```
/parents/reports
```

---

# Admin APIs

## Get All Users

GET

```
/admin/users
```

---

## Create User

POST

```
/admin/users
```

---

## Update User

PATCH

```
/admin/users/:userId
```

---

## Delete User

DELETE

```
/admin/users/:userId
```

---

# Notification APIs

## Get Notifications

GET

```
/notifications
```

---

## Mark Notification as Read

PATCH

```
/notifications/:notificationId
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# API Versioning

Current Version

```
/api/v1
```

Future versions

```
/api/v2
```

---

# Security

- JWT Authentication
- Password Hashing (bcrypt)
- Input Validation (Zod)
- Role-Based Authorization
- Request Validation
- File Upload Validation

---

# Future APIs

Version 2

- Analytics
- AI Recommendations
- Dashboard Insights
- Assignment Similarity Detection
- Attendance

Version 3

- Live Notifications
- AI Tutor
- AI Question Generator
- Institution Management