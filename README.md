# 📝 Paste Manager App

![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.x-purple?logo=redux)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)  
![License](https://img.shields.io/badge/License-MIT-green)  
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

A modern, full-featured paste management application built with React and Redux. Create, edit, view, and share code snippets or text notes with a beautiful dark-themed UI.

---

## 🚀 Getting Started

### 🔧 Installation & Start Project

```bash
# Clone the repository
git clone https://github.com/yourusername/paste-manager-app.git
cd paste-manager-app

# Install dependencies
npm install

# Start the development server
npm start
notes-saver-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Create/Edit paste component
│   │   ├── Paste.jsx         # List all pastes component
│   │   ├── ViewPaste.jsx     # View single paste component
│   │   └── Navbar.jsx        # Navigation bar
│   ├── redux/
│   │   ├── pasteSlice.js     # Redux slice for paste management
│   │   └── store.js          # Redux store configuration
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global styles
│   ├── index.js              # Entry point
│   └── index.css             # Tailwind CSS imports
├── package.json
└── README.md



🎯 Usage Guide
➕ Creating a Paste

Navigate to Home page

Enter a title & content

Click "Create My Paste"

Your paste is saved to localStorage

✏️ Editing a Paste

Go to Pastes page

Click Edit on any paste

Update title/content

Save with "Update My Paste"

👀 Viewing a Paste

Go to Pastes page

Click View

Opens paste in read-only mode

🔍 Searching Pastes

Use the search bar on Pastes page

Type any keyword from the title

Results filter in real-time

📋 Copying Paste Content

Click Copy on any paste

Content copied to clipboard

🔗 Sharing a Paste

Click Share on any paste

Shareable link copied to clipboard

❌ Deleting a Paste

Click Delete on any paste

Paste removed permanently from localStorage
```
