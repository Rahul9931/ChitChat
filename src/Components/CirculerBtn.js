//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image, TouchableOpacityComponent } from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const Circulerbtn = ({
    text,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.bottomStyle}>
        <Image 
        source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
        style={styles.imageStyle}
         />
        <View style={styles.bottomView}>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView:{
        backgroundColor:colors.red,
        borderRadius:moderateScale(24),
        padding:moderateScale(2),
        alignSelf:'flex-start'
    },
    imageStyle:{
        height:50,
        width:50,
        borderRadius:25,
    },
    textStyle:{
        alignSelf:'center',
        ...commonStyles.fontSize14,
        color:colors.black
    }

});

//make this component available to the app
export default Circulerbtn;
