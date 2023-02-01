import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {isReadyRef, navigationRef} from './navigation/Navigation';
import Routes from './navigation/Routes';
import NewsScreen from './screens/NewsScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        (isReadyRef.current as any) = true;
      }}>
      <Stack.Navigator initialRouteName={Routes.welcomeScreen}>
        <Stack.Screen
          name={Routes.welcomeScreen}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.newsScreen}
          component={NewsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.favoritesScreen}
          component={FavoritesScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
