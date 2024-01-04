import { TouchableOpacity, View } from 'react-native';
import { Container, Form, Subtitle, Title } from './styles';
import BackArrow from '../../utils/images/backArrow.svg';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../Components/Button';

import { Input } from '../../Components/Input/Index';
import { OtherOptionsSingin } from '../../Components/OtherOptionsSignin';

export function Register() {
  const { navigate } = useNavigation();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          marginTop: 12,
        }}
        onPress={() => navigate('SignIn' as never)}
      >
        <BackArrow width={12} height={24} />
      </TouchableOpacity>

      <Title>Cadastre-se</Title>
      <Subtitle>Informe seu e-mail e crie uma senha</Subtitle>

      <Form>
        <Input label="Crie um e-mail" placeholder="Digite seu e-mail" />

        <Input label="Repita seu e-mail" placeholder="Digite seu e-mail" />

        <Input label="Crie sua senha" placeholder="Digite sua senha" />

        <Input label="Repita sua senha" placeholder="Digite sua senha" />
      </Form>

      <Button label="Cadastrar" style={{ marginTop: 32 }} />

      <View style={{ paddingBottom: 55 }}>
        <OtherOptionsSingin />
      </View>
    </Container>
  );
}
