const axios = require('axios');
require('dotenv').config();

const url = process.env.URL || 'http://localhost:3000/api';    //URL of kestrel server

axios.post(url, { body: "Hello from collector!" })
  .then(response => {
    console.log('Response from kestrel server:', response.data);
  })
  .catch(error => {
    console.error('Error sending request to kestrel server:', error);
  });