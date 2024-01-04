import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../routes';

export function useNavigate() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  return navigate;
}
