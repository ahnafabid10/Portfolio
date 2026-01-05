// API Configuration for different environments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5000'
  },
  production: {
    // You'll need to update this with your actual backend URL after deployment
    API_BASE_URL: 'https://your-backend-url.herokuapp.com'
  }
};

const environment = process.env.NODE_ENV || 'development';

export default config[environment];