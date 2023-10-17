import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Login } from '../Screens/Login/Login';
import { SignIn } from '../Screens/SignIn/SignIn';
import { Tutorial } from '../Screens/Tutorial/Tutorial';

const Stack = createNativeStackNavigator();
type StackNavigation = {
  Login: undefined;
  SignIn: undefined;
  Tutorial: undefined;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
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
