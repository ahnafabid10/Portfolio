# Deployment Guide

This guide will help you deploy your portfolio to Netlify (frontend) and Heroku (backend).

## Option 1: Frontend Only Deployment (Recommended for Portfolio)

If you want to deploy just the frontend to Netlify without the contact form functionality:

### Steps:

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose GitHub and select your `Portfolio` repository
   - Build settings should auto-detect:
     - Build command: `npm run build`
     - Publish directory: `client/build`
   - Click "Deploy site"

3. **Update site name (optional):**
   - Go to Site settings > General > Site details
   - Change site name to something like `ahnaf-portfolio`

## Option 2: Full-Stack Deployment (Frontend + Backend)

If you want the contact form to work, you need to deploy both frontend and backend:

### Step 1: Deploy Backend to Heroku

1. **Install Heroku CLI** from [heroku.com](https://devcenter.heroku.com/articles/heroku-cli)

2. **Create a separate repository for backend:**
   ```bash
   mkdir portfolio-backend
   cd portfolio-backend
   git init
   ```

3. **Copy backend files:**
   ```bash
   cp ../server.js .
   cp ../package.json .
   cp ../EMAIL_SETUP.md .
   mkdir public
   cp -r ../public/* ./public/
   ```

4. **Create Heroku app:**
   ```bash
   heroku create ahnaf-portfolio-api
   ```

5. **Set environment variables on Heroku:**
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-gmail-app-password
   heroku config:set NODE_ENV=production
   ```

6. **Deploy to Heroku:**
   ```bash
   git add .
   git commit -m "Initial backend deployment"
   git push heroku main
   ```

### Step 2: Update Frontend Configuration

1. **Update netlify.toml** with your Heroku backend URL:
   ```toml
   [[redirects]]
     from = "/api/*"
     to = "https://ahnaf-portfolio-api.herokuapp.com/api/:splat"
     status = 200
     force = true
   ```

2. **Deploy frontend to Netlify** (follow Option 1 steps)

## Option 3: Netlify Functions (Serverless Backend)

For a simpler deployment, you can use Netlify Functions for the contact form:

### Create Netlify Function:

1. **Create functions directory:**
   ```bash
   mkdir netlify/functions
   ```

2. **Create contact function:**
   ```javascript
   // netlify/functions/contact.js
   const nodemailer = require('nodemailer');

   exports.handler = async (event, context) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }

     const { name, email, message } = JSON.parse(event.body);

     // Configure nodemailer (same as your server.js)
     const transporter = nodemailer.createTransporter({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
       }
     });

     try {
       await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: 'ahnafabid600@gmail.com',
         subject: `Portfolio Contact: ${name}`,
         html: `
           <h3>New Contact Form Submission</h3>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>
         `
       });

       return {
         statusCode: 200,
         body: JSON.stringify({ message: 'Email sent successfully!' })
       };
     } catch (error) {
       return {
         statusCode: 500,
         body: JSON.stringify({ error: 'Failed to send email' })
       };
     }
   };
   ```

3. **Update API calls in your React components** to use `/.netlify/functions/contact`

4. **Set environment variables in Netlify:**
   - Go to Site settings > Environment variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

## Recommended Approach

For a portfolio website, I recommend **Option 1** (Frontend only) initially, then add **Option 3** (Netlify Functions) if you need the contact form functionality.

## Post-Deployment Steps

1. **Update README.md** with your live site URL
2. **Test all functionality** on the deployed site
3. **Set up custom domain** (optional) in Netlify settings
4. **Enable HTTPS** (automatic with Netlify)

## Troubleshooting

- **Build fails**: Check build logs in Netlify dashboard
- **Contact form not working**: Verify environment variables are set
- **Routing issues**: Ensure `_redirects` file or `netlify.toml` redirects are configured
- **API calls failing**: Check network tab in browser dev tools

Your portfolio will be live at: `https://your-site-name.netlify.app`