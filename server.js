const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'client/build')));

// Create nodemailer transporter (commented out for now - configure with your email credentials)
// const transporter = nodemailer.createTransporter({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER || 'ahnafabid600@gmail.com',
//     pass: process.env.EMAIL_PASS || 'your-app-password' // Use app password for Gmail
//   }
// });

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running successfully!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Contact endpoint hit');
  console.log('Request body:', req.body);
  console.log('Request headers:', req.headers);
  
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    console.log('Validation failed - missing fields');
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required.' 
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Validation failed - invalid email');
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address.' 
    });
  }
  
  try {
    console.log('Processing contact form submission:', { name, email, message: message.substring(0, 50) + '...' });
    
    // For now, just log the message and return success
    // TODO: Configure nodemailer with your email credentials to send actual emails
    // await transporter.sendMail(mailOptions);
    
    console.log('Sending success response');
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Resume download endpoint
app.get('/api/download-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'resume.pdf');
  
  // Check if resume file exists
  const fs = require('fs');
  if (fs.existsSync(resumePath)) {
    res.download(resumePath, 'Ahnaf_Abid_Resume.pdf', (err) => {
      if (err) {
        console.error('Resume download error:', err);
        res.status(500).json({ error: 'Failed to download resume' });
      }
    });
  } else {
    // If no resume file, return a placeholder response
    res.status(404).json({ 
      error: 'Resume not found. Please contact me directly at ahnafabid600@gmail.com' 
    });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});