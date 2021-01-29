import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Node } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Stack from './stack';
import {
  styles,
  DrawerItemProps,
  DrawerItemListProps,
  DrawerTitle,
  DrawerTitleContainer,
  DrawerSpacing,
} from './styles';

const DrawerNav = createDrawerNavigator();

const DrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props}>
    <DrawerTitleContainer>
      <DrawerTitle>Viktor</DrawerTitle>
    </DrawerTitleContainer>
    <DrawerItemList {...props} {...DrawerItemListProps} />
    <DrawerItem onPress={() => {}} label="Your Cart" {...DrawerItemProps} />
    <DrawerItem onPress={() => {}} label="Favourites" {...DrawerItemProps} />
    <DrawerItem onPress={() => {}} label="Your Orders" {...DrawerItemProps} />
    <DrawerSpacing />
    <DrawerItem onPress={() => {}} label="Sign Out" {...DrawerItemProps} />
  </DrawerContentScrollView>
);

const Screens = ({ style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack />
    </Animated.View>
  );
};

const Drawer = () => {
  const [progress, setProgress] = React.useState<Node<number>>(
    new Animated.Value(0),
  );

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-7deg'],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -110],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ rotate }, { translateX }],
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <DrawerNav.Navigator
        overlayColor="#00000000"
        sceneContainerStyle={styles.contentZIndex}
        drawerType="slide"
        drawerPosition="left"
        drawerStyle={styles.drawer}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} style={props.style} />;
        }}>
        <DrawerNav.Screen name="Start">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </DrawerNav.Screen>
      </DrawerNav.Navigator>
    </View>
  );
};

export default Drawer;
