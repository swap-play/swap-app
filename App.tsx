import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';
import {
  useFonts,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_500Medium,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const [loadedFont] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_500Medium,
  });
  if (!loadedFont) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
