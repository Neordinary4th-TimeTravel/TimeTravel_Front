/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {applyToken} from '../api/client';
import {useUserState} from '../contexts/UserContext';
import authStorage from '../storages/authStorage';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'screens/types';

export default function useAuthLoadEffect() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        navigation.navigate('Login');
        return;
      }
      setUser(auth.user);
      applyToken(auth.jwt);
    };
    fn();
  }, [setUser]);
}
