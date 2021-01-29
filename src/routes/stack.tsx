import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../pages/Start';

const StackNav = createStackNavigator();

const options = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 48,
  },
};

const Stack = () => (
  <StackNav.Navigator>
    <StackNav.Screen
      options={{ ...options, title: 'Your Cart' }}
      name="Start"
      component={Start}
    />
    <StackNav.Screen options={options} name="Orders" component={Start} />
  </StackNav.Navigator>
);

export default Stack;
