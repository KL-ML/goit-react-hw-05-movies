import axios from 'axios';
import { BASE_URL, MY_KEY } from 'constants';

const moviesApi = axios.create({
    baseURL: BASE_URL,
});

export const getMovies = async (params = {}, purpose='') => {
  const { data } = await moviesApi.get(purpose, {
    params: {
      api_key: MY_KEY,
      ...params,
    },
  });

  return data;
};