import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Routes from './navigation/Routes';
import {WelcomeScreen} from './screens/WelcomeScreen';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.welcomeScreen}>
        <Stack.Screen
          name={Routes.welcomeScreen}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
