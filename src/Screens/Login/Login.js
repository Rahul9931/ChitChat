//import liraries
import React, { useState,useEffect, useDebugValue } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
//constant
import strings from '../../Constants/Languages';
import styles from './styles';
//reusable components
import Header from '../../Components/Header';
import TextinputWithLable from '../../Components/TextinputWithLable';
import WrapperContainer from '../../Components/WrapperContainer';
import Btncomp from '../../Components/Btncomp';
import colors from '../../styles/colors';
import actions from '../../Redux/actions'

// create a component
const Login = () => {
    const [state,setState]=useState({
        isLoading:false,
        email:'',
        passward:'',
        isSecure:true,
        isEnable:false,
    })
    const {isLoading,email,passward,isSecure,isEnable}=state
    const updateState=(data)=>setState((state)=>({...state,...data}))
    useEffect(()=>{
        if (email!=='' && passward!==''){
            updateState({isEnable: true})
            return;
        }
        updateState({isEnable: false})
    },[email, passward])
    const onLogin=()=>{
        actions.login(true)
        alert("Login is success")
    }
    return (
        <WrapperContainer isLoading={isLoading}>
        <Header/>
        <View style={{flex:1,justifyContent:'space-between'}}>
        <View>
        <Text style={styles.headingText}>{strings.LOGIN}</Text>
        <TextinputWithLable
         label={strings.USERNAME_OR_EMAIL}
         value={email}
         placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
         onChangeText={(email)=>updateState({email})}
         />
         <TextinputWithLable
         label={strings.PASSWARD}
         value={passward}
         placeholder={strings.PLEASE_ENTER_YOUR_PASSWARD}
         onChangeText={(passward)=>updateState({passward})}
         secureTextEntry={isSecure}
         isSecure={isSecure}
         onPressSecure={()=>updateState({isSecure:!isSecure})}
         />
         <TouchableOpacity style={{alignSelf:'center',marginTop:20}}>
             <Text style={styles.forgottextStyle}>{strings.FORGOT_YOUR_PASSWARD}</Text>
         </TouchableOpacity>
         </View>
         <Btncomp 
         isDisable={!isEnable}
         btnstyle={{...styles.btnstyle,backgroundColor:isEnable ? colors.blue:colors.black3}}
         btntext={strings.LOGIN}
        onPress={onLogin}
          />
          </View>
        </WrapperContainer>
    );
};
export default Login;
