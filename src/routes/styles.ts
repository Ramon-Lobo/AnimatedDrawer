import { StyleSheet } from 'react-native';

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
    height: 51,
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 30,
    marginLeft: 20,
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

export { styles, DrawerItemProps, DrawerItemListProps };
