import { createContext, useCallback, useState, useEffect } from 'react';
import { User } from '../entities/User';
import { localStorageKeys } from '../config/localStorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
  user: User | undefined;
  appIsReady: boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get('/users/me');

        setUser(response?.data);
        setSignedIn(true);
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    }

    loadUser();
  }, []);

  const signin = useCallback(async (accessToken: string) => {
    await AsyncStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(async () => {
    await AsyncStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ signedIn, signout, signin, user, appIsReady }}
    >
      {children}
    </AuthContext.Provider>
  );
}
