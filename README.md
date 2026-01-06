# Ahnaf Abid Portfolio Website

A modern, responsive portfolio website built with React.js and Node.js, featuring a sleek dark theme design with smooth animations, interactive components, and real technology icons.

Site Link: https://ahnafabid.netlify.app/

## 🚀 Features

- **Modern Dark Design**: Professional dark theme with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, GSAP animations, and smooth transitions
- **Real Technology Icons**: Actual technology logos with hover color effects
- **Smooth Scrolling**: Lenis smooth scrolling with GSAP scroll triggers
- **Contact Form**: Functional contact form with backend API integration
- **Professional Sections**: Hero, About, Education, Projects showcase, and Contact

## 🛠️ Tech Stack

### Frontend
- React.js 18
- Framer Motion for animations
- GSAP with ScrollTrigger for scroll animations
- Lenis for smooth scrolling
- Tailwind CSS for styling
- Material Icons for iconography

### Backend
- Node.js with Express.js
- Nodemailer for email functionality
- CORS middleware
- Static file serving

## 📁 Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js
│   │   │   ├── Navigation.js
│   │   │   ├── Contact.js
│   │   │   ├── ProjectDetails.js
│   │   │   ├── TypeWriter.js
│   │   │   └── WelcomeScreen.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── public/                 # Static files
│   └── resume.pdf
├── server.js              # Express server
├── package.json           # Root package.json
├── .env.example           # Environment variables template
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ahnafabid10/Portfolio.git
   cd Portfolio
   ```

2. **Install root dependencies:**
   ```bash
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` file with your email credentials:
   ```
   PORT=5000
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

## 🚀 Running the Application

### Development Mode (Recommended)

Run both frontend and backend simultaneously:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React development server on `http://localhost:3000`

### Individual Services

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### Production Mode

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:5000`

## 📧 Email Configuration

To enable the contact form:

1. **Gmail Setup:**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
   - Use the app password in your `.env` file

2. **Update Environment Variables:**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

## 🎨 Customization

### Personal Information
- Update contact details in `client/src/components/Home.js`
- Replace project data in the `projects` array
- Update education information in the education section
- Replace the profile image URL

### Styling
- Colors and theme can be modified in `client/tailwind.config.js`
- Custom CSS is in `client/src/App.css`
- Component-specific styles use Tailwind classes

### Technology Icons
- Icons are loaded from CDN (devicons and vectorlogo)
- Update the `technologies` array in `Home.js` to add/remove technologies
- Icons automatically show in grayscale and reveal colors on hover

## 🚀 Deployment

### Frontend (React)
- Build: `npm run build`
- Deploy `client/build` folder to Netlify, Vercel, or GitHub Pages

### Backend (Node.js)
- Deploy to Heroku, Railway, or DigitalOcean
- Set environment variables in your hosting platform
- Ensure `NODE_ENV=production`

### Full-Stack Deployment
- Deploy entire project to platforms supporting Node.js
- The Express server serves the React build in production

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with full responsive design
- Optimized for all screen sizes

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📄 License

This project is open source and available under the MIT License.
