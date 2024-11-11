import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://funval-api.onrender.com/api/v1',
});
