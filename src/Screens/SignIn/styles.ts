import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 14px;
  background: #fff;
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

export const InputContainer = styled.View`
  width: 100%;
  max-width: 400px;
`;

export const InputText = styled.TextInput`
  width: 100%;
  border-radius: 5px;
  background: #f2f5fd;
  height: 70px;
  font-family: OpenSans_600SemiBold;
  padding-left: 12px;
`;

export const Label = styled.Text`
  color: #2e3e4b;
  font-size: 14px;
  font-family: OpenSans_400Regular;
  margin-bottom: 4px;
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
  margin-top: 28px;
  flex-direction: row;
  gap: 16px;
`;

export const OtherOptionsContainer = styled.View`
  margin-top: 48px;
`;

export const SocialsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
  margin-top: 22px;
`;
