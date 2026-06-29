# 🎓 EduReach – AI-Powered College Intelligence Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Node.js-24-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Backend-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Gemini-AI-orange?logo=google" />
  <img src="https://img.shields.io/badge/Vapi-AI%20Voice-purple" />
  <img src="https://img.shields.io/badge/Vercel-Frontend-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Render-Backend-blue?logo=render" />
</p>

---

## 📖 Overview

EduReach is an **AI-powered college information platform** that helps students learn about admissions, courses, placements, campus life, scholarships, and more through an intelligent chatbot and AI voice counselor.

Instead of browsing multiple webpages, students can simply ask questions in natural language or request an AI-powered phone call.

---

# 🚀 Live Demo

### Frontend

(Add your Vercel URL here)

Example:

```
https://edureach-platform-xxxxx.vercel.app
```

### Backend API

```
https://edureach-platform-kml4.onrender.com
```

---

# ✨ Features

### 🤖 AI Chatbot

- Natural language conversation
- College information retrieval
- Course guidance
- Placement details
- Admission support
- Scholarship information

---

### 📞 AI Voice Counselor

Powered by **Vapi AI**

- AI phone calls
- Personalized conversations
- Course counselling
- Admission guidance
- Interactive voice responses

---

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- User Sessions

---

### 🎓 College Portal

- Hero Section
- About College
- Courses
- Faculty
- Student Life
- Placement Statistics
- Events Gallery
- Recruiters
- Mentors
- Campus Information

---

### 📱 Responsive UI

- Mobile Friendly
- Modern Design
- Tailwind CSS
- React Components
- Fast Loading

---

# 🏗 Architecture

```
                User
                  │
                  ▼
         React + Vite Frontend
                  │
          Axios REST API Calls
                  │
                  ▼
        Node.js + Express Backend
                  │
     ┌────────────┼─────────────┐
     │            │             │
     ▼            ▼             ▼
 MongoDB      Gemini AI      Vapi AI
 Atlas         Chatbot      Voice Calls
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router
- Lucide Icons
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- TypeScript
- JWT
- MongoDB Atlas
- Mongoose

---

## AI

- Google Gemini API
- LangChain
- RAG Architecture
- Vapi AI Voice Assistant

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# 📂 Project Structure

```
edureach-platform
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   ├── data
│   │   └── assets
│   │
│   └── package.json
│
├── server
│   ├── src
│   │   ├── routes
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── services
│   │   ├── utils
│   │   └── config
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/edureach-platform.git

cd edureach-platform
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```
PORT=5000

MONGODB_URI=

JWT_SECRET=

JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173

GOOGLE_API_KEY=

VAPI_API_KEY=

VAPI_ASSISTANT_ID=

VAPI_PHONE_NUMBER_ID=
```

---

## Frontend (.env.production)

```
VITE_API_URL=https://your-render-backend.onrender.com/api
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/me
```

---

## AI Chat

```
POST /api/chat/message
```

---

## Voice Calling

```
POST /api/call
```

---

# 📷 Screenshots

## Home Page

(Add Screenshot)

---

## AI Chatbot

(Add Screenshot)

---

## Voice Counselor

(Add Screenshot)

---

## Login Page

(Add Screenshot)

---

# 🔒 Authentication Flow

```
Register
      │
      ▼
Generate JWT
      │
      ▼
Store Token
      │
      ▼
Protected Routes
      │
      ▼
Authorized API Requests
```

---

# 🤖 AI Workflow

```
Student Question

       │

       ▼

React Chat Widget

       │

       ▼

Express API

       │

       ▼

Gemini AI + RAG

       │

       ▼

AI Response

       │

       ▼

Displayed to User
```

---

# 📞 Voice Workflow

```
Student

   │

   ▼

Call Request

   │

   ▼

Backend

   │

   ▼

Vapi API

   │

   ▼

AI Voice Assistant

   │

   ▼

Phone Conversation
```

---

# 🚀 Future Enhancements

- Voice-to-Voice AI Chat
- Student Dashboard
- Admin Portal
- Appointment Booking
- WhatsApp Integration
- Multilingual Support
- PDF Admission Assistant
- Email Automation
- Analytics Dashboard
- AI Recommendation System

---

# 👨‍💻 Developer

**Dhanush Kulkarni**

Electronics & Communication Engineering

Cambridge Institute of Technology

GitHub

https://github.com/CambridgeinstitutetechnologyBLR-Dhanush

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.

It motivates future development and improvements.

---

## 📄 License

This project is licensed under the **MIT License**.
