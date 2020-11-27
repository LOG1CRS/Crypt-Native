import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/style/colors';

import MainScreen from '../screens/MainScreen';
import CryptDetailsScreen from '../screens/CryptDetailsScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Cryptocurrencies' }}
      />
      <Stack.Screen
        name="Details"
        component={CryptDetailsScreen}
        options={{ title: 'Crypto Details' }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
