import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #e5e9ed;
`;

export const Header = styled.View`
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 0px 0px 26px 26px;
`;

export const HeaderOptions = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 27px;
`;

export const Highlights = styled.View`
  /* margin-top: 16px; */
`;

export const GameItem = styled.View`
  margin-top: 14px;
`;

export const GameCard = styled.View`
  width: 376px;
  height: 156px;
  margin-top: 16px;
  border-radius: 10px;
  background: #f9f9f9;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const GameCardContent = styled.View`
  justify-content: center;
  gap: 14px;
  padding-left: 10px;
`;

export const Posts = styled.View`
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;

export const Post = styled.View`
  background: #fff;
  border-radius: 20px;
  padding: 18px 16px;
  min-width: 380px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PostContent = styled.View`
  margin: 16px 0;
  gap: 18px;
`;

export const PostFooter = styled.View`
  margin: 0 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
