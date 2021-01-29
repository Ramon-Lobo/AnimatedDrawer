import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  drawer: {
    backgroundColor: '#1F1B33',
    borderTopLeftRadius: 38,
    width: '100%',
  },
  drawerItem: {
    width: '50%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 30,
    marginLeft: 20,
    marginVertical: 15,
  },
  drawerItemLabel: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
  },
  stack: {
    flex: 1,
  },
  contentZIndex: {
    zIndex: 1,
  },
});

const DrawerItemCommonProps = {
  labelStyle: styles.drawerItemLabel,
  activeBackgroundColor: 'rgba(252, 128, 116, 0.2)',
  activeTintColor: '#FC8074',
  inactiveTintColor: 'white',
  inactiveBackgroundColor: 'transparent',
};

const DrawerItemProps = {
  ...DrawerItemCommonProps,
  style: styles.drawerItem,
};

const DrawerItemListProps = {
  ...DrawerItemCommonProps,
  itemStyle: styles.drawerItem,
};

const DrawerTitleContainer = styled.View`
  width: 50%;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 50px;
`;

const DrawerTitle = styled.Text`
  color: #ffffff;
  font-family: Avenir-Black;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 38px;
`;

const DrawerSpacing = styled.View`
  height: 1px;
  width: 175.5px;
  border: 1px solid #84818e;

  margin: 20px 30px;
`;

export {
  styles,
  DrawerItemProps,
  DrawerItemListProps,
  DrawerTitle,
  DrawerTitleContainer,
  DrawerSpacing,
};
