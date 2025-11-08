// src/api/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // **CHANGE THIS to your actual backend URL**
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;