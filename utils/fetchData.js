import axios from 'axios';

export async function fetchData(url, token) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }}