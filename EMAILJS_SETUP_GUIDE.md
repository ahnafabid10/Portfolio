# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality for your portfolio contact forms.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Copy the **Service ID** (you'll need this later)

### For Gmail:
- Select Gmail
- Authorize EmailJS to access your Gmail account
- Your service will be created automatically

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply-To: {{reply_to}}
```

4. **Important**: Copy the **Template ID** (you'll need this later)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. **Important**: Copy this key (you'll need this later)

## Step 5: Update Environment Variables

1. Open `client/.env` file
2. Replace the placeholder values with your actual EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (ahnafabid600@gmail.com) for the message

## Security Notes

- ✅ Public Key is safe to expose in frontend code
- ✅ Service ID and Template ID are also safe to expose
- ✅ Your actual email credentials are never exposed
- ✅ EmailJS handles all email authentication securely

## Troubleshooting

### Form not sending emails:
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Ensure EmailJS service is active in your dashboard
4. Check EmailJS dashboard for usage limits

### Emails going to spam:
1. Add your domain to EmailJS allowed origins
2. Set up SPF/DKIM records (advanced)
3. Ask recipients to check spam folder initially

### Rate limiting:
- Free EmailJS accounts have monthly limits
- Upgrade to paid plan if needed
- Monitor usage in EmailJS dashboard

## EmailJS Dashboard Links

- [Services](https://dashboard.emailjs.com/admin)
- [Templates](https://dashboard.emailjs.com/admin/templates)
- [Account Settings](https://dashboard.emailjs.com/admin/account)

## Support

If you encounter issues:
1. Check [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Contact EmailJS support
3. Verify your account is verified and active

---

**Note**: After setup, your contact forms will send emails directly to ahnafabid600@gmail.com without requiring a backend server!