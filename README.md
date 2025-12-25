# Fundación Alegría Inocente

A beautiful, modern website for the Alegría Inocente Foundation built with React, Framer Motion, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📦 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Git (Recommended)

1. Initialize git repository (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab/Bitbucket

3. Connect your repository to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select the repository
   - Netlify will automatically detect the build settings from `netlify.toml`

### Build Settings (Auto-detected)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (or higher)

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Features

- Bilingual support (Spanish/English)
- Responsive design
- Smooth animations
- YouTube video integration
- Modern UI/UX

## 📄 License

© 2024 Fundación Alegría Inocente. All rights reserved.

