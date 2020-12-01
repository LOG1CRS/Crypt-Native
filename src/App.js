import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colors from './assets/style/colors';

import MainStack from './navigation/MainStack';
import SearchStack from './navigation/SearchStack';
import FavoritesStack from './navigation/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          inactiveTintColor: '#fefefe',
          style: {
            shadowColor: colors.blackPearl,
            borderTopWidth: 0,
            backgroundColor: colors.blackPearl,
            height: 60,
          },
          labelStyle: {
            marginBottom: 7,
          },
          iconStyle: {
            marginTop: 4,
          },
        }}
      >
        <Tabs.Screen
          name="Feed"
          component={MainStack}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="ios-cash" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="ios-search" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="ios-heart" size={size} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
