import { axiosInstance } from '@/services/axiosinstance';

export const getServices = async token => {
  const response = await axiosInstance.get('/services', {
    headers: { authorization: token },
  });
  return response.data;
};

export const createService = async (token, service) => {
  const response = await axiosInstance.post('/services', service, {
    headers: { Authorization: token },
  });
  return response.data;
};
