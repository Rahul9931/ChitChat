//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';


// create a component
const Roundimg = ({
    size,
    image,
    style={}
}) => {
    return (
        <Image
        source={{uri:image}}
        style={{
            ...style,
            height:moderateScale(size),
            width:moderateScale(size),
            borderRadius:moderateScale(size/2),
        }} 
         />
    );
};
export default Roundimg;
