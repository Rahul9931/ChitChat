import React from 'react';
import navigationStrings from '../Constants/navigationStrings';
import TabRoutes from './TabRoutes';

export default function(Stack){
    return(
        <>
        <Stack.Screen name={navigationStrings.CHAT}
         component={TabRoutes}
         options={{headerShown: false}}/>
        
        </>
    )
}