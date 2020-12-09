import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import colors from '../assets/style/colors';

import SearchScreen from '../screens/SearchScreen';
import CryptDetailsScreen from '../screens/CryptDetailsScreen';

const Stack = createStackNavigator();

const SearchStack = () => {
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
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
        }}
      />
      <Stack.Screen name="Details" component={CryptDetailsScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
