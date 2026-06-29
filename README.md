# 🎓 EduReach – AI-Powered College Intelligence Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-24-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange)
![LangChain](https://img.shields.io/badge/LangChain-RAG-success)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-Backend-blue?logo=render)

</p>

---

## 📖 Overview

EduReach is an AI-powered college admission assistant that helps prospective students obtain information about courses, admissions, placements, campus life, scholarships, and more through an intelligent chatbot and AI voice counselor.

The platform uses Retrieval-Augmented Generation (RAG) with Google Gemini and MongoDB Atlas Vector Search to provide accurate, context-aware responses.

---

# ✨ Features

* 🔐 JWT Authentication
* 🤖 AI Chatbot powered by Google Gemini
* 📚 Retrieval-Augmented Generation (RAG)
* 🗂 MongoDB Atlas Vector Search
* 🎙 AI Voice Counselor
* 📞 Voice Calling Integration
* 🎓 Course & Admission Guidance
* 💼 Placement Information
* 🏫 Campus Information
* 📱 Responsive Modern UI
* ☁️ Cloud Deployment using Vercel & Render

---

# 🏗 System Architecture

```text
                User
                  │
                  ▼
         React + Vite Frontend
                  │
            Axios REST API
                  │
                  ▼
        Node.js + Express Backend
                  │
      ┌───────────┼────────────┐
      │           │            │
      ▼           ▼            ▼
 MongoDB      LangChain     Gemini AI
 Atlas        RAG Engine      Model
```

---

# 🛠 Tech Stack

## Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios
* Lucide React
* React Hot Toast

## Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication
* MongoDB Atlas
* Mongoose

## Artificial Intelligence

* Google Gemini API
* LangChain
* Retrieval-Augmented Generation (RAG)
* MongoDB Atlas Vector Search

## Voice AI

* Web Speech API (Speech Recognition & Speech Synthesis)

## Deployment

* Vercel
* Render
* MongoDB Atlas

---

# 📂 Project Structure

```text
edureach-platform
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.ts
│
├── server
│   ├── src
│   ├── package.json
│   └── tsconfig.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/CambridgeinstitutetechnologyBLR-Dhanush/edureach-platform.git

cd edureach-platform
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173

GOOGLE_API_KEY=YOUR_GEMINI_API_KEY

VAPI_API_KEY=YOUR_VAPI_API_KEY

VAPI_ASSISTANT_ID=YOUR_ASSISTANT_ID

VAPI_PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID
```

---

### Frontend (.env.production)

```env
VITE_API_URL=https://https://edureach-platform-kml4.onrender.com/api
```

---

# 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### AI Chat

```
POST /api/chat/message
```

### Voice Calling

```
POST /api/call
```

---

# 🤖 AI Workflow

```text
User Query
     │
     ▼
React Frontend
     │
     ▼
Express Backend
     │
     ▼
LangChain RAG
     │
     ▼
MongoDB Vector Search
     │
     ▼
Google Gemini
     │
     ▼
AI Response
```

---

# 🔒 Authentication Flow

```text
Register/Login
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
Authenticated Requests
```

---

# 🚀 Deployment

## Frontend

* Platform: Vercel
* Build Command: `npm run build`
* Output Directory: `dist`
* Root Directory: `client`

## Backend

* Platform: Render
* Build Command: `npm install`
* Start Command: `npm start`
* Root Directory: `server`

---

# 💡 Future Enhancements

* 🌍 Multi-language Support
* 📅 Appointment Booking
* 👨‍🎓 Student Dashboard
* 🏫 Admin Dashboard
* 📄 PDF Knowledge Base
* 📧 Email Notifications
* 📱 WhatsApp Integration
* 🎯 AI Career Recommendation System
* 🎤 Real-time Voice-to-Voice AI

---

# 👨‍💻 Developer

**Dhanush Kulkarni**

Electronics & Communication Engineering

Cambridge Institute of Technology

GitHub: https://github.com/CambridgeinstitutetechnologyBLR-Dhanush

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.
