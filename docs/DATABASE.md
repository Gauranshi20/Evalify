# Database Design

## Project

**Evalify – AI-Powered Academic Assessment Platform**

**Database:** MongoDB

**ODM:** Mongoose

**Version:** 1.0

---

# Overview

Evalify follows a document-oriented database architecture using MongoDB. The database is designed to support role-based access, assignment management, AI-assisted grading, analytics, and future scalability.

The schema is normalized where appropriate while leveraging MongoDB's flexibility for embedded documents such as rubrics and notifications.

---

# Collections

## 1. Users

Stores authentication and profile information for all users.

### Fields

| Field      | Type     | Description                     |
| ---------- | -------- | ------------------------------- |
| _id        | ObjectId | Unique identifier               |
| firstName  | String   | User first name                 |
| lastName   | String   | User last name                  |
| email      | String   | Unique email                    |
| password   | String   | Hashed password                 |
| role       | Enum     | ADMIN, TEACHER, STUDENT, PARENT |
| avatar     | String   | Profile image URL               |
| phone      | String   | Contact number                  |
| isVerified | Boolean  | Email verification status       |
| status     | Enum     | ACTIVE, INACTIVE                |
| createdAt  | Date     | Record creation                 |
| updatedAt  | Date     | Record update                   |

---

## 2. ParentStudent

Maps parents to students.

### Fields

| Field        | Type     |
| ------------ | -------- |
| _id          | ObjectId |
| parentId     | ObjectId |
| studentId    | ObjectId |
| relationship | String   |

Examples:

* Mother
* Father
* Guardian

---

## 3. Classes

Represents academic classes.

### Fields

| Field       | Type       |
| ----------- | ---------- |
| _id         | ObjectId   |
| className   | String     |
| classCode   | String     |
| description | String     |
| teacherId   | ObjectId   |
| students    | ObjectId[] |
| createdAt   | Date       |

---

## 4. Subjects

Subjects taught within classes.

### Fields

| Field       | Type     |
| ----------- | -------- |
| _id         | ObjectId |
| subjectName | String   |
| subjectCode | String   |
| classId     | ObjectId |

---

## 5. Assignments

Stores assignment information.

### Fields

| Field       | Type     |
| ----------- | -------- |
| _id         | ObjectId |
| title       | String   |
| description | String   |
| classId     | ObjectId |
| subjectId   | ObjectId |
| rubricId    | ObjectId |
| dueDate     | Date     |
| totalMarks  | Number   |
| attachments | String[] |
| createdBy   | ObjectId |
| createdAt   | Date     |
| updatedAt   | Date     |

---

## 6. Rubrics

Defines grading criteria for assignments.

### Fields

| Field        | Type     |
| ------------ | -------- |
| _id          | ObjectId |
| assignmentId | ObjectId |
| criteria     | Array    |

### Example Criteria

```json
[
  {
    "title": "Code Quality",
    "marks": 30
  },
  {
    "title": "Documentation",
    "marks": 20
  },
  {
    "title": "Functionality",
    "marks": 50
  }
]
```

---

## 7. Submissions

Stores student submissions.

### Fields

| Field        | Type     |
| ------------ | -------- |
| _id          | ObjectId |
| assignmentId | ObjectId |
| studentId    | ObjectId |
| fileUrl      | String   |
| submittedAt  | Date     |
| status       | Enum     |

### Status

* SUBMITTED
* LATE
* REVIEWED

---

## 8. AIReviews

Stores AI-generated evaluation results.

### Fields

| Field          | Type     |
| -------------- | -------- |
| _id            | ObjectId |
| submissionId   | ObjectId |
| suggestedMarks | Number   |
| confidence     | Number   |
| strengths      | String[] |
| weaknesses     | String[] |
| feedback       | String   |
| generatedAt    | Date     |

> AI reviews are recommendations only. Teachers always make the final grading decision.

---

## 9. Grades

Stores final grades published by teachers.

### Fields

| Field           | Type     |
| --------------- | -------- |
| _id             | ObjectId |
| submissionId    | ObjectId |
| teacherId       | ObjectId |
| aiReviewId      | ObjectId |
| finalMarks      | Number   |
| teacherFeedback | String   |
| publishedAt     | Date     |

---

## 10. Notifications

Stores in-app notifications.

### Fields

| Field     | Type     |
| --------- | -------- |
| _id       | ObjectId |
| userId    | ObjectId |
| title     | String   |
| message   | String   |
| type      | Enum     |
| isRead    | Boolean  |
| createdAt | Date     |

### Notification Types

* Assignment
* Grade Published
* Announcement
* Reminder
* System

---

## Entity Relationships

```
User
│
├── Teacher
│     │
│     ├── Class
│     │      │
│     │      ├── Subject
│     │      │       │
│     │      │       └── Assignment
│     │      │                │
│     │      │                └── Rubric
│     │      │
│     │      └── Students
│     │
│     └── Grades
│
├── Student
│     │
│     ├── Submission
│     │        │
│     │        ├── AI Review
│     │        └── Grade
│     │
│     └── Notifications
│
├── Parent
│     │
│     └── Student Mapping
│
└── Admin
      │
      ├── User Management
      ├── Reports
      └── Analytics
```

---

# Design Principles

* MongoDB ObjectIds are used for relationships.
* Passwords are stored using secure hashing (bcrypt).
* Files are stored in cloud storage (AWS S3 or Cloudinary); only URLs are saved in MongoDB.
* AI evaluation is advisory and never replaces teacher approval.
* Soft deletion can be introduced later for critical collections.
* All collections use timestamps for auditing.

---

# Future Collections

The following collections are planned for future releases:

* Attendance
* Announcements
* AIChatHistory
* AuditLogs
* ActivityLogs
* CourseMaterials
* DiscussionForum
* LearningRecommendations
* PerformanceAnalytics

These are intentionally excluded from Version 1 to keep the MVP focused while allowing future expansion.
