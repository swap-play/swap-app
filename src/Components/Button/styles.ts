import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  max-width: 400px;
  height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  background: #e0e2e4;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  margin-left: 10px;
`;

export const ImageContainerTransparent = styled.View`
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  margin-left: 10px;
`;
