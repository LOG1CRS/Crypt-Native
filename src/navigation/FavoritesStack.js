import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/style/colors';

import FavoriteScreen from '../screens/FavoriteScreen';
import CryptDetailsScreen from '../screens/CryptDetailsScreen';

const Stack = createStackNavigator();

const FavoritesStack = () => {
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
        name="Favorites"
        component={FavoriteScreen}
        options={{ title: 'Favorites' }}
      />
      <Stack.Screen name="Details" component={CryptDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
