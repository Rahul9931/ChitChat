import React from 'react';
import { Text, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily';
import { moderateScale } from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
const Btncomp=({
    btntext,
    onPress,
    btnstyle,
    textstyle,
    isDisable=false
})=>{
    return(
        
        <TouchableOpacity style={{
            ...styles.btnstyle,
            ...btnstyle
        }}
        onPress={onPress}
        activeOpacity={0.6}
        disabled={isDisable}
        >
        <Text style={{...styles.textstyle,...textstyle}}>{btntext}</Text>
        </TouchableOpacity>
    );
};
const styles=StyleSheet.create({
    btnstyle:{
        backgroundColor:colors.red,
        justifyContent:'center',
        alignItems:'center',
        height:moderateScale(60),
        
        //marginBottom:50
    },
    textstyle:{
        ...commonStyles.fontSize28,
        color:colors.white,
        fontFamily: fontFamily.bold
    },
})
export default Btncomp;