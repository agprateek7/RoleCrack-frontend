# RoleCrack Frontend 🎯

RoleCrack is an AI-powered interview preparation platform that helps users generate personalized technical questions and answers based on their job role and experience. This is the **frontend** of the application, built using **React** and **Tailwind CSS**, designed for an intuitive and seamless study experience.

## 🚀 Key Features

- 🔐 **User Authentication** – JWT-based login/signup with context-based session handling.
- 🧠 **AI-Powered Interview Prep** – Get role-specific interview questions and answers using the Gemini API.
- 📌 **Pin Questions** – Easily pin important questions for quick reference.
- 📝 **Add Notes** - Easily add a note to any question.
- 📖 **Concept Explanations** – Ask follow-up questions and get AI-generated explanations.
- 📁 **Session Management** – View past sessions and Q&A cards in a dashboard view.
- 🪄 **Accordion UI** – Organized Q&A cards with expand/collapse views.
- 🧼 **Modern UI** – Clean, responsive interface using Tailwind CSS v4.

## 🛠️ Tech Stack

- React
- Tailwind CSS
- React Router
- Axios
- Context API
- React Icons (Lucide)

## 🔧 Getting Started

### 1. Prerequisites

- Node.js (v16+)
- npm or yarn

### 2. Installation

```bash
git clone https://github.com/agprateek7/RoleCrack-frontend.git
cd rolecrack-frontend
npm install
```

### 3. Running the App

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (QACard, Accordion, Modal, etc.)
├── context/             # Auth and User context (UserContext)
├── pages/               # Routes: Landing, Dashboard, InterviewPrep
├── utils/               # Axios instance, constants
├── assets/              # Images, icons
├── App.jsx              # Main component and routing
└── main.jsx             # Entry point
```

## 🔗 Backend Repository

👉 [RoleCrack Backend](https://github.com/agprateek7/RoleCrack-backend)

## 📄 License

This project is licensed under the **MIT License**.
