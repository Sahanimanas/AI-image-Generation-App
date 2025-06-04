# 🖼️ AI Text-to-Image Generator

**Live Demo**: [Click here to visit the website](https://textimagegenerator-14olpse1s-manashvis-projects.vercel.app/)

An AI-powered web application that transforms text prompts into stunning images using the **ClipDrop API**. Built with modern technologies like React, Tailwind, Express, and MongoDB, the app features smooth animations, secure authentication, and persistent data storage.

---

## 🚀 Features

- ✨ Generate realistic images from text using AI
- 🔐 User authentication with input validation via **Joi**
- 🧠 AI integration using **ClipDrop API**
- 📦 MongoDB for storing user data and prompt history
- ⚡ Responsive UI with **Tailwind CSS**
- 🎞️ Framer Motion for smooth transitions
- 📡 RESTful backend with **Node.js** and **Express.js**
- ☁️ Deployed using **Render** (backend) & **Vercel** (frontend)

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- Joi (Validation)
- MongoDB (via Mongoose)

### AI API
- ClipDrop (Text-to-Image generation)

### Deployment
- **Frontend**: Vercel  
- **Backend**: Render

---

## 📂 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-text-to-image-generator.git
cd ai-text-to-image-generator

#server side rendering
cd server
npm install
#setup .env file
MONGO_URI=your_mongo_connection_string
CLIPDROP_API_KEY=your_clipdrop_api_key
JWT_SECRET=your_jwt_secret

#client side rendering
cd ../client
npm run dev

