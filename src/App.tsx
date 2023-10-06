import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {UserProvider} from './provider/UserContext';

const MainApp = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Router />
      </UserProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
