import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen } from '../Screens/FirstScreen/FirstScreen';
import { SignIn } from '../Screens/SignIn/SignIn';
import { Tutorial } from '../Screens/Tutorial/Tutorial';
import { Register } from '../Screens/Register/Register';
import { PersonalData } from '../Screens/PersonalData/PersonalData';
import { Home } from '../Screens/Home/Home';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type StackParamList = {
  Home: undefined;
  PersonalData: undefined;
  FirstScreen: undefined;
  SignIn: undefined;
  Register: undefined;
  Tutorial: { stepNumber?: number };
};

const Stack = createNativeStackNavigator<StackParamList>();
export function Routes() {
  const { signedIn, user, appIsReady } = useAuth();
  const [isTutorialDone, setIsTutorialDone] = useState(false);

  useEffect(() => {
    async function handleTutorialAlreadyDone() {
      try {
        const isDone = await AsyncStorage.getItem('@tutorialDone');

        if (isDone) {
          setIsTutorialDone(true);
        }
      } catch (error) {}
    }

    handleTutorialAlreadyDone();
  }, []);

  if (!appIsReady) {
    return null;
  }
  return (
    <Stack.Navigator>
      {signedIn ? (
        <>
          {!isTutorialDone && (
            <Stack.Screen
              name="Tutorial"
              component={Tutorial}
              options={{ headerShown: false }}
            />
          )}

          {!user?.name && (
            <Stack.Screen
              name="PersonalData"
              component={PersonalData}
              options={{ headerShown: false }}
            />
          )}

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
