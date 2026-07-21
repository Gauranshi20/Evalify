# Frontend Architecture

**Project:** Evalify

**Version:** 2.0

**Technology Stack**

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Axios
- React Hook Form
- Zod

---

# Overview

The Evalify frontend is built using a feature-first architecture that prioritizes scalability, maintainability, and code reusability.

The application is designed as a modern Single Page Application (SPA), providing a fast, responsive, and intuitive user experience across desktop, tablet, and mobile devices.

The architecture separates UI components, business logic, routing, services, and utilities into dedicated modules, making the project easy to scale as new features are introduced.

---

# Frontend Architecture

```
Browser

↓

React Application

↓

React Router

↓

Layouts

↓

Pages

↓

Components

↓

Axios Services

↓

Backend API
```

---

# Project Structure

```
frontend/

src/

│
├── assets/
│
├── components/
│   ├── common/
│   ├── forms/
│   ├── layout/
│   ├── charts/
│   ├── tables/
│   └── ui/
│
├── pages/
│
├── layouts/
│
├── routes/
│
├── services/
│
├── hooks/
│
├── contexts/
│
├── constants/
│
├── utils/
│
├── types/
│
├── styles/
│
├── App.tsx
│
└── main.tsx
```

---

# Folder Responsibilities

## assets/

Stores static resources.

Examples

- Images
- Logos
- Icons
- Fonts

---

## components/

Reusable UI components used across the application.

Examples

- Buttons
- Cards
- Inputs
- Tables
- Charts
- Sidebar
- Navbar
- Dialogs
- Loaders

Business logic should never exist inside reusable components.

---

## pages/

Represents route-level screens.

Examples

- Login
- Register
- Dashboard
- Assignments
- Reports
- Profile
- Settings

Pages assemble reusable components to build complete screens.

---

## layouts/

Defines reusable page layouts.

Examples

- Public Layout
- Authentication Layout
- Dashboard Layout

Layouts maintain a consistent user experience across different sections of the application.

---

## routes/

Handles application routing.

Responsibilities

- Public Routes
- Protected Routes
- Role-Based Routes
- Redirects

---

## services/

Responsible for communicating with backend APIs using Axios.

Examples

- authService.ts
- assignmentService.ts
- userService.ts
- reportService.ts

Components never communicate directly with the backend.

---

## hooks/

Contains reusable custom React hooks.

Examples

- useAuth
- useDebounce
- useLocalStorage
- useTheme

---

## contexts/

Stores shared application state using React Context.

Examples

- AuthContext
- ThemeContext

Context will only be used for global data such as authentication and theme preferences.

---

## constants/

Stores reusable constants.

Examples

- User Roles
- API Endpoints
- Route Paths
- Theme Values

---

## utils/

Contains helper functions.

Examples

- Date Formatting
- File Size Formatting
- Validation Helpers
- String Utilities

---

## types/

Global TypeScript interfaces and types.

Examples

- User
- Assignment
- Submission
- API Response

---

## styles/

Contains global styling.

Examples

- Global CSS
- Tailwind Configuration
- Custom Fonts

---

# Routing Strategy

## Public Routes

```
/

login

register

forgot-password
```

---

## Protected Routes

```
/dashboard

/profile

/settings
```

---

## Role-Based Routes

```
/teacher

/student

/parent

/admin
```

Unauthorized users are redirected to the login page.

---

# State Management

Evalify uses two types of state.

## Local State

Managed using React Hooks.

Examples

- Modal visibility
- Form values
- Selected tabs
- Search filters

---

## Global State

Managed using React Context.

Examples

- Logged-in user
- Authentication status
- Theme (Light/Dark)
- Sidebar state

This approach keeps the application simple while remaining scalable.

---

# API Communication

All API requests follow this flow.

```
Component

↓

Axios Service

↓

Express Backend

↓

Response

↓

Component
```

A centralized Axios instance is used to handle

- Base URL
- Authentication Token
- Request Interceptors
- Response Interceptors
- Error Handling

---

# Forms

Evalify uses

- React Hook Form
- Zod Validation

Benefits

- Better performance
- Less boilerplate
- Type-safe validation
- Improved user experience

---

# UI Library

Primary UI Components

- shadcn/ui

Additional Libraries

- Lucide React (Icons)
- Recharts (Analytics)
- Sonner (Toast Notifications)

---

# Theme System

Supported Themes

- Light
- Dark

Users can switch themes from the Settings page.

Theme preference is stored locally and restored automatically.

---

# Responsive Design

The application follows a mobile-first design approach.

Supported Devices

- Mobile
- Tablet
- Laptop
- Desktop

Every page must be fully responsive.

---

# Error Handling

Every screen should include

- Loading State
- Empty State
- Error State
- Success State

Users should never encounter blank screens during API requests.

---

# Performance Strategy

The frontend is optimized using

- Lazy Loading
- Dynamic Imports
- Code Splitting
- Optimized Images
- Memoization where required

---

# Security

Frontend security measures include

- Protected Routes
- JWT Authentication
- Input Validation
- Secure API Requests
- XSS Prevention

---

# Design Principles

The frontend follows

- Component Reusability
- Clean Architecture
- Responsive Design
- Accessibility
- Type Safety
- Consistent UI/UX
- Separation of Concerns

---

# Future Enhancements

- Progressive Web App (PWA)
- Multi-language Support
- Real-time Notifications
- Dashboard Personalization
- Offline Support
- Drag-and-Drop Assignment Upload
- Keyboard Shortcuts