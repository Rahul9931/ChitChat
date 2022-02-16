import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Routes from './src/Navigations/Routes'
Provider
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;

