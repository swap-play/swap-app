import axios from 'axios';

export const searchByCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});
