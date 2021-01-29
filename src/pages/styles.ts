import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  position: absolute;
  top: 0;

  flex-direction: row;
  align-items: flex-end;

  height: 100px;
  padding: 20px;
`;

export const IconButton = styled.TouchableOpacity`
  margin: 0px 15px 5px 15px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #9f9fa0;
  font-family: Avenir-Medium;
  letter-spacing: 5px;
`;
