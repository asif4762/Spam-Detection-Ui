# 🛡️ Spam Detector - AI-Powered Message Verification

A beautiful and modern web application for detecting spam messages using Machine Learning and Natural Language Processing. Built with React and powered by a FastAPI backend.

![Spam Detector](https://img.shields.io/badge/React-18.2.0-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## ✨ Features

- 🎨 **Beautiful UI** - Modern gradient design with glassmorphism effects
- 🌊 **Smooth Animations** - Engaging user experience with fluid transitions
- 🤖 **AI-Powered** - Machine learning model for accurate spam detection
- ⚡ **Real-time Analysis** - Instant message verification
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎯 **Easy to Use** - Simple and intuitive interface

## 🚀 Live Demo

- **Frontend**: [Coming Soon]
- **Backend API**: https://spam-detection-e1hd.onrender.com/

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0
- **Lucide React** - Modern icon library
- **Vite** - Fast build tool
- **CSS3** - Custom animations and styling

### Backend
- **FastAPI** - High-performance Python web framework
- **Scikit-learn** - Machine learning model
- **NLTK** - Natural language processing
- **Pickle** - Model serialization

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/spam-detector.git
cd spam-detector
```

2. **Install dependencies**
```bash
npm install
```

3. **Update API URL** (if needed)

Open `src/App.jsx` and update the API URL:
```javascript
const API_URL = 'https://spam-detection-6lm9.onrender.com';
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
spam-detector-frontend/
├── public/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Styling and animations
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Usage

1. Open the application in your browser
2. Enter or paste the message you want to check
3. Click "Check Message" button
4. View the result:
   - ✅ **Safe** - Message is legitimate
   - ⚠️ **Spam** - Message appears to be spam
5. Click "Reset" to check another message

## 🔌 API Reference

### Base URL
```
https://spam-detection-6lm9.onrender.com
```

### Endpoints

#### GET `/`
Health check endpoint

**Response:**
```json
{
  "message": "Spam Detection API Running!"
}
```

#### POST `/predict`
Predict if a message is spam

**Request Body:**
```json
{
  "text": "Your message here"
}
```

**Response:**
```json
{
  "spam": true  // or false
}
```

## 🎨 Features Breakdown

### Design Elements
- **Gradient Background** - Smooth purple-to-pink gradient
- **Animated Orbs** - Floating background elements
- **Glassmorphism** - Frosted glass effect on cards
- **Hover Effects** - Interactive button animations
- **Loading States** - Spinner animation during API calls
- **Error Handling** - Shake animation for errors
- **Success/Error Alerts** - Color-coded results

### Animations
- Fade-in effects
- Scale transformations
- Bounce animations
- Pulse effects
- Shake on errors
- Smooth transitions

## 🧪 Testing Messages

Try these sample messages:

**Spam Examples:**
```
"Congratulations! You've won $1000000! Click here to claim now!"
"URGENT: Your bank account has been compromised. Reply with your password"
"Get rich quick! Make $5000 per day working from home!"
```

**Legitimate Examples:**
```
"Hey, are we still meeting for coffee tomorrow at 3pm?"
"The project deadline has been extended to next Friday"
"Thanks for your help with the presentation today"
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://spam-detection-6lm9.onrender.com
```

Update `src/App.jsx`:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- FastAPI for the amazing backend framework
- React team for the incredible frontend library
- Lucide for the beautiful icons
- NLTK for natural language processing tools

---

Made with ❤️ and ☕ by [Your Name]