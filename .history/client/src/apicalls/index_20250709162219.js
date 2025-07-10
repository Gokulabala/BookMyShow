import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8085/api', // optional if you're prefixing manually
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Attach token dynamically before every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
