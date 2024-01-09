import axios from 'axios';
import { localStorageKeys } from '../config/localStorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
