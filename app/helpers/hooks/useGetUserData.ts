import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

interface User {
  name: string;
  email: string;
  id: string;
  verifed: boolean;
  favorite: string[];
  phone: string;
}

export const useGetUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      return e;
    }
  };

  useEffect(() => {
    getUser().then(user => {
      setUser(user);
    });
  }, []);

  return {user};
};
