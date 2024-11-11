import { axiosInstance } from '@/services/axiosinstance';

/*export const getServices = async token => {
  const response = await axiosInstance.get('/services', {
    headers: { authorization: token },
  });
  return response.data;
};*/

export const createServiceUpd = async (token, service, id) => {
  const response = await axiosInstance.put('/services', service, {
    headers: { Authorization: token },
  });
  return response.data;
};
