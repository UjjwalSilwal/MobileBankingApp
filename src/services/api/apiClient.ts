import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-url.com',
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(async (config) => {
  // attach token here later
  return config;
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;