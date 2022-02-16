import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import navigationStrings from '../../Constants/navigationStrings';
import Imagepath from '../../Constants/Imagespath'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';
//reusale component
import Btncomp from '../../Components/Btncomp'


const Initialscreen = ({navigation}) => {
    const gotoscreen=(screen)=>{
        navigation.navigate(screen)}
    
    return (
        <ImageBackground 
        style={{flex:1, justifyContent:'flex-end'}}
        source={Imagepath.bgImage}>
        <SafeAreaView>
        <Btncomp 
        btntext='Login'
        onPress={()=>{gotoscreen(navigationStrings.LOGIN)}}/>
        <Btncomp 
        btntext='Signup'
        onPress={()=>{gotoscreen(navigationStrings.SIGNUP)}}
        btnstyle={{backgroundColor:colors.blue}}/>
        </SafeAreaView>
        </ImageBackground>
        /*<View style={{flex:1, backgroundColor: 'skyblue',justifyContent: 'flex-end'}}>
        <View style={styles.styleLoginback}>
        <TouchableOpacity onPress={()=>{gotoscreen(navigationStrings.LOGIN)}}>
        <Text style={styles.styleLogin}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.styleSignupback}>
        <TouchableOpacity onPress={()=>{gotoscreen(navigationStrings.SIGNUP)}}>
        <Text style={styles.styleLogin}>Signup</Text>
        </TouchableOpacity>
        </View>
        </View>*/
    );
};
/*const styles=StyleSheet.create({
    btnstyle:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        marginBottom:50
    },
    textstyle:{
        fontSize:30,
        color:'white',
    },
})*/
export default Initialscreen;
