import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
//import screens
const Stack = createNativeStackNavigator();
function Routes() {
  const isLogin = useSelector((state)=>state.auth.isLogin)
  console.log("isLogin",isLogin)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin?MainStack(Stack):AuthStack(Stack)}
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;