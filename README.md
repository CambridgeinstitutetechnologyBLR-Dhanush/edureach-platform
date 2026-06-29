# 🎓 EduReach – AI-Powered College Admission Assistant

EduReach is an AI-powered college counseling platform that helps prospective students explore courses, admissions, placements, fees, scholarships, and campus life through an intelligent chatbot and AI voice assistant.

The project combines **React**, **Node.js**, **MongoDB Atlas Vector Search**, **LangChain**, **Google Gemini**, and **Vapi AI** to deliver an interactive admission guidance experience.

---

# 🚀 Features

* 🔐 JWT Authentication (Login & Registration)
* 🤖 AI Chatbot using Google Gemini
* 📚 RAG (Retrieval-Augmented Generation) with MongoDB Atlas Vector Search
* 🎙️ AI Voice Counselor using Vapi
* 📖 Knowledge Base powered by LangChain
* 🏫 College Information Portal
* 📊 Placement & Recruitment Information
* 🎓 Course & Admission Guidance
* 📱 Responsive Modern UI
* ☁️ Cloud Deployment using Render & Vercel

---

# 🛠 Tech Stack

## Frontend

* React 19
* TypeScript
* Vite
* Axios
* Tailwind CSS
* React Router
* React Hot Toast
* Lucide Icons

## Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication
* MongoDB Atlas
* Mongoose

## AI Technologies

* Google Gemini API
* LangChain
* MongoDB Atlas Vector Search
* Vapi AI (Voice Assistant)

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```
edureach-platform/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── data/
│   │   └── assets/
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── utils/
│   │   └── config/
│   │
│   ├── knowledge-base/
│   ├── package.json
│   └── server.ts
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/edureach-platform.git
cd edureach-platform
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create `.env` inside the **server** folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173

GOOGLE_API_KEY=YOUR_GEMINI_API_KEY

VAPI_API_KEY=YOUR_VAPI_KEY

VAPI_ASSISTANT_ID=YOUR_ASSISTANT_ID

VAPI_PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID
```

Create `.env.production` inside the **client** folder.

```env
VITE_API_URL=https://YOUR_BACKEND_URL/api
```

---

# ▶️ Run Locally

## Backend

```bash
cd server
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

## Frontend

```bash
cd client
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🌐 Deployment

## Frontend

Deploy using **Vercel**

Build Command

```
npm run build
```

Output Directory

```
dist
```

Root Directory

```
client
```

---

## Backend

Deploy using **Render**

Root Directory

```
server
```

Build Command

```
npm install
```

Start Command

```
npm start
```

Configure all required environment variables in Render before deployment.

---

# 🤖 AI Workflow

```
User Question
      │
      ▼
React Chat Interface
      │
      ▼
Express Backend API
      │
      ▼
LangChain RAG Pipeline
      │
      ▼
MongoDB Atlas Vector Search
      │
      ▼
Relevant Documents Retrieved
      │
      ▼
Google Gemini
      │
      ▼
Generated Answer
      │
      ▼
Response to User
```

---

# 🎙 Voice Assistant Workflow

```
User Clicks "Talk to Us"

        │

        ▼

Vapi AI Voice Assistant

        │

        ▼

Speech Recognition

        │

        ▼

Google Gemini

        │

        ▼

Speech Synthesis

        │

        ▼

AI Voice Response
```

---

# 🔒 Authentication Flow

* User Registration
* Password Hashing
* JWT Token Generation
* Secure Login
* Protected Routes
* Session Persistence

---

# 📸 Screenshots

You can include screenshots here:

* Homepage
* Login Page
* Signup Page
* AI Chatbot
* Voice Assistant
* Placement Section

---

# 👨‍💻 Future Improvements

* Multi-language support
* Voice-to-Voice Conversation
* Student Dashboard
* Appointment Booking
* Admin Panel
* Analytics Dashboard
* WhatsApp Integration
* SMS Notifications
* Email Automation

---

# 📄 License

This project is developed for educational and research purposes.

---

# 👤 Author

**Dhanush Kulkarni**

Electronics & Communication Engineering (ECE)

Cambridge Institute of Technology

GitHub: https://github.com/CambridgeinstitutetechnologyBLR-Dhanush
