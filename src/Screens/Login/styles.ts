import styled from 'styled-components/native';
import { Button } from '../../Components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #2e3e4b;
  font-family: OpenSans_700Bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #2e3e4b;
  font-family: OpenSans_500Medium;
  margin-bottom: 10%;
`;

export const GoogleSignInButton = styled(Button)`
  width: 95%;
  border-radius: 8px;
  margin-bottom: 10px;
`;
