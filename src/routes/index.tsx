import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen } from '../Screens/FirstScreen/FirstScreen';
import { SignIn } from '../Screens/SignIn/SignIn';
import { Tutorial } from '../Screens/Tutorial/Tutorial';
import { Register } from '../Screens/Register/Register';
import { PersonalData } from '../Screens/PersonalData/PersonalData';
import { Home } from '../Screens/Home/Home';

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
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
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

      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
