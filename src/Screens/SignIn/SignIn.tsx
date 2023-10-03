import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Button } from '../../components/Button';
import BackArrow from '../../utils/images/backArrow.svg';

export function SignIn() {
  return (
    <>
      <View>
        <TouchableOpacity>
          <BackArrow width={12} height={24} />
        </TouchableOpacity>

        <Text>Acesse</Text>
        <Text>Com E-mail e senha para entrar</Text>

        <View>
          <Text>E-mail</Text>
          <TextInput />
        </View>

        <View>
          <Text>Senha</Text>
          <TextInput />
        </View>

        <View>
          <View>
            <Checkbox value={true} />
          </View>

          <TouchableOpacity>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableHighlight>
            <Text>Acessar</Text>
          </TouchableHighlight>

          <Button
            outlined
            backgroundColor="#fff"
            text="Cadastrar"
            width={190}
          />
        </View>
      </View>
    </>
  );
}
