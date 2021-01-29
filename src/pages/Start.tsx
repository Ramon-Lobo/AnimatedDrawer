import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Header, HeaderTitle, IconButton, Container } from './styles';

const Start: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <IconButton onPress={() => navigation.toggleDrawer()}>
          <Icon size={30} name="menu" color="#E8E5E5" />
        </IconButton>
        <HeaderTitle>START</HeaderTitle>
      </Header>
    </Container>
  );
};

export default Start;
