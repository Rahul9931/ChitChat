import React from 'react';
import navigationStrings from '../Constants/navigationStrings';
import {Initialscreen,Login,Signup} from '../Screens'
export default function(Stack){
    return(
        <>
        <Stack.Screen name={navigationStrings.INITIAL_SCREEN}
         component={Initialscreen}
         options={{headerShown: false}}/>
        <Stack.Screen name={navigationStrings.LOGIN}
         component={Login}
         options={{headerShown: false}}/>
        <Stack.Screen name={navigationStrings.SIGNUP} 
        component={Signup}
        options={{headerShown: false}}/>
        </>
    )
}