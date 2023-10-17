import { StatusBar } from 'react-native';
import LoginImg from '../../utils/images/loginImg.svg';
import { useNavigation } from '@react-navigation/native';
import { Container, GoogleSignInButton, Subtitle, Title } from './styles';
import { Button } from '../../Components/Button';

export function Login() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#48484850" barStyle="dark-content" />
      <Container>
        <LoginImg width={364} height={234} style={{ marginBottom: 80 }} />
        <Title>Ótimo dia!</Title>
        <Subtitle>Como deseja acessar?</Subtitle>
        <GoogleSignInButton
          text="Entrar com Google"
          source={require('../../utils/google-icon.png')}
          backgroundColor="#8b5fd9"
        />
        <Button
          width={'95%'}
          text="Outras formas"
          outlined
          onPress={() => navigation.navigate('SignIn' as never)}
        />
      </Container>
    </>
  );
}
