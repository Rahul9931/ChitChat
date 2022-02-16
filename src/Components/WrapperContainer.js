//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';
import { Children } from 'react/cjs/react.production.min';
import colors from '../styles/colors';
import Loader from './Loader';

// create a component
const WrapperContainer = ({
    barStyle="dark-content",
    statusBarColor=color.white,
    children,
    isLoading,
    style={}

}) => {
    return (
        <View style={{...styles.container, ...style}}>
            <StatusBar barStyle={barStyle} backgroundColor={statusBarColor}/>
            <SafeAreaView style={{flex:1}}>
                {children}
            </SafeAreaView>
            <Loader isLoading={isLoading}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
});

//make this component available to the app
export default WrapperContainer;
