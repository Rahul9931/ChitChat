import React from 'react';
import { BottomTabBar,createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../Constants/navigationStrings';
import {Chat,Camera,Map,Stories} from '../Screens';
import Imagespath from '../Constants/Imagespath';
import { Image } from 'react-native';
import colors from '../styles/colors';
const BottomTab=createBottomTabNavigator();


const TabRoutes=()=>{
    return(
        <BottomTab.Navigator
        tabBar={(tabsProps) =>(
        <>
        <BottomTabBar {...tabsProps}/>
        </>
        )}
        initialRouteName={navigationStrings.CHAT}
        screenOptions={{
            tabBarStyle: {backgroundColor: colors.black },
            tabBarShowLabel:false,
            headerShown:false
          }}
        >
        <BottomTab.Screen 
        name={navigationStrings.MAP}
        component={Map}
        options={{
        tabBarIcon: ({focused})=>{
            return <Image style={{tintColor: focused? colors.green:colors.white}} source={Imagespath.loc} />
        }
        }}
        />

        <BottomTab.Screen 
        name={navigationStrings.CHAT}
        component={Chat}
        options={{
            tabBarIcon: ({focused})=>{
                return <Image style={{tintColor: focused? colors.green:colors.white}} source={Imagespath.chat} />
            }
            }}
        />

        <BottomTab.Screen 
        name={navigationStrings.CAMERA}
        component={Camera}
        options={{
            tabBarIcon: ({focused})=>{
                return <Image style={{tintColor: focused? colors.green:colors.white}} source={Imagespath.camera} />
            }
            }}
        />

        <BottomTab.Screen 
        name={navigationStrings.STORIES}
        component={Stories}
        options={{
            tabBarIcon: ({focused})=>{
                return <Image style={{tintColor: focused? colors.green:colors.white}} source={Imagespath.people} />
            }
            }}
        />

        </BottomTab.Navigator>
        
    )
}
export default TabRoutes;