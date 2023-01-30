import React from 'react';
import { store } from './store';
import Navigator from './navigations/Navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from './navigations/rootNavigator';
import SplashScreen from './screens/splashscreen';
import LoginScreen from './screens/auth/login';
import { StatusBar } from 'react-native';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;