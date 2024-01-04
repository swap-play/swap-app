import FacebookLogo from '../../utils/images/fbc-logo.svg';
import GoogleLogo from '../../utils/images/google-logo.svg';
import { Container, LineSeparator, SocialsContainer } from './styles';
import { View, Text } from 'react-native';

export function OtherOptionsSingin() {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <LineSeparator />

        <Text>Ou continue com</Text>

        <LineSeparator />
      </View>

      <SocialsContainer>
        <View
          style={{ backgroundColor: '#E0E2E4', padding: 6, borderRadius: 5 }}
        >
          <GoogleLogo width={28} height={28} />
        </View>

        <View
          style={{ backgroundColor: '#E0E2E4', padding: 6, borderRadius: 5 }}
        >
          <FacebookLogo width={28} height={28} />
        </View>
      </SocialsContainer>
    </Container>
  );
}
