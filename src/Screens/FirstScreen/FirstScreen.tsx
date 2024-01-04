import LoginImg from '../../utils/images/loginImg.svg';
import GoogleLogo from '../../utils/images/google-logo.svg';
import { useNavigation } from '@react-navigation/native';
import { Container, Subtitle, Title } from './styles';
import { Button } from '../../Components/Button';

export function FirstScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <LoginImg width={364} height={234} style={{ marginBottom: 80 }} />
        <Title>Ótimo dia!</Title>
        <Subtitle>Como deseja acessar?</Subtitle>

        <Button
          imageSvg={<GoogleLogo width={28} height={28} />}
          label="Entrar com Google"
        />

        <Button
          label="Outras formas"
          outlined
          onPress={() => navigation.navigate('SignIn' as never)}
          style={{ marginTop: 16 }}
        />
      </Container>
    </>
  );
}
