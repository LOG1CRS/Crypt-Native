import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import CryptDetailsScreen from '../screens/CryptDetailsScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={CryptDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
