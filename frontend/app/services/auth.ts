import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  },
};
