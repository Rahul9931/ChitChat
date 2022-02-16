//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Touchable } from 'react-native';
import Imagespath from '../Constants/Imagespath'
import { useNavigation } from '@react-navigation/native';
import {moderateScale} from '../styles/responsiveSize'
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import Roundimg from './Roundimg';
// create a component
const HomeHeader = ({
    leftImg=Imagespath.back,
    onPress,
    headerStyle,
    centerText,
    add={},
    lastImg={},
    style={}
}) => {
    const navigation=useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Roundimg 
        image='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'
        size={50}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{marginLeft: moderateScale(10) ,marginTop:moderateScale(10)}} source={Imagespath.search}/>
        </TouchableOpacity>
        </View>
        <Text style={{...styles.textstyle,...style}}>{centerText}</Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Image style={{marginLeft: moderateScale(10)}} source={add}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{marginLeft: moderateScale(10)}} source={lastImg}/>
        </TouchableOpacity>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        minHeight:moderateScale(50),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    imgstyle:{
        height:moderateScale(50),
        width:moderateScale(50),
        borderRadius:moderateScale(25),
        
    },
    textstyle:{
        ...commonStyles.fontSize32,
        
    }

});

//make this component available to the app
export default HomeHeader;