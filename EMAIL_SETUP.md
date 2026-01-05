# Email Configuration Setup

To enable email functionality for the contact form, follow these steps:

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update Environment Variables**:
   ```bash
   # In your .env file
   EMAIL_USER=ahnafabid600@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

4. **Uncomment Email Code** in `server.js`:
   - Uncomment the `transporter` configuration
   - Uncomment the email sending code in the contact endpoint

## Alternative Email Services

### Using Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
  }
});
```

### Using Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@domain.com',
    pass: 'your-password'
  }
});
```

## Testing

1. Start the server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email for the contact form submission
4. Check server logs for any errors

## Security Notes

- Never commit your actual email password to version control
- Use environment variables for sensitive data
- Consider using services like SendGrid or Mailgun for production
- Enable rate limiting to prevent spam

## Troubleshooting

- **"Less secure app access"**: Use app passwords instead
- **Authentication failed**: Double-check credentials
- **Connection timeout**: Check firewall/network settings
- **Quota exceeded**: Gmail has daily sending limits