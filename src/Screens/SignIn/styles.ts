import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: OpenSans_700Bold;
  color: #2e3e4b;
  margin-top: 48px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: OpenSans_500Medium;
  color: #2e3e4b;
  margin-bottom: 46px;
`;

export const PasswordOptionContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const PasswordOptionLabel = styled.Text`
  color: #2e3e4b;
  font-size: 12px;
  font-family: OpenSans_400Regular;
`;

export const OptionSignContainer = styled.View`
  width: 47%;
  margin-top: 28px;
  flex-direction: row;
  gap: 20px;
`;
