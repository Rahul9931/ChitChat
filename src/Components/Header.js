//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Touchable } from 'react-native';
import Imagespath from '../Constants/Imagespath'
import { useNavigation } from '@react-navigation/native';
import {moderateScale} from '../styles/responsiveSize'
import colors from '../styles/colors';
// create a component
const Header = ({
    leftImg=Imagespath.back,
    onPress,
    headerStyle
}) => {
    const navigation=useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
        <TouchableOpacity
        onPress={!!onPress?onPress:()=>navigation.goBack()}>
        <Image style={{tintColor:colors.blue}} source={leftImg}/>
        </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        minHeight:moderateScale(50)
    }
});

//make this component available to the app
export default Header;
