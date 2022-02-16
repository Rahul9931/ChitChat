//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';
import Imagespath from '../Constants/Imagespath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

// create a component
const TextinputWithLable = ({
    value,
    placeholder,
    onChangeText,
    inputStyle,
    textStyle,
    label,
    isSecure,
    onPressSecure,
    ...props
}) => {
    return (
        <View >
        <Text style={{...styles.labelStyle , marginLeft:20,marginTop:20}}>{label}</Text>
        <View style={{...styles.inputStyle, ...inputStyle}}>
        <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{...styles.textStyle}}
        {...props}/>
        {!!onPressSecure && (
        <TouchableOpacity onPress={onPressSecure} style={{marginTop:15}}>
            <Image source={isSecure ? Imagespath.hide : Imagespath.show}/>
        </TouchableOpacity>)}
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomWidth:1.5,
        padding:8,
        borderBottomColor:colors.black4,
        marginLeft:10,
        
    },
    labelStyle: {
        ...commonStyles.fontSize20,
    },
    textStyle:{
        flex:1,
        ...commonStyles.fontSize20,
    }
});
export default TextinputWithLable;
