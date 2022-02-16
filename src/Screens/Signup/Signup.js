//import liraries
import React, { useState } from 'react';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
//constant
import strings from '../../Constants/Languages';
import styles from './styles';
//reusable components
import Header from '../../Components/Header';
import TextinputWithLable from '../../Components/TextinputWithLable';
import WrapperContainer from '../../Components/WrapperContainer';
import Btncomp from '../../Components/Btncomp';
// create a component
const Signup = () => {
    const [state,setState]=useState({
        isLoading:false,
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        passward:'',
        isSecure:true
    })
    const {isLoading,firstname,lastname,username,email,passward,isSecure}=state
    const updateState=(data)=>setState((state)=>({...state,...data}))
    return (
        <WrapperContainer isLoading={isLoading}>
        <Header/>
        <ScrollView>
        <View style={{flex:1,justifyContent:'space-between'}}>
        <View>
        <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>
        <TextinputWithLable
         label={strings.FIRST_NAME}
         value={firstname}
         placeholder={strings.ENTER_YOUR_FIRST_NAME}
         onChangeText={(firstname)=>updateState({firstname})}
         />
         <TextinputWithLable
         label={strings.LAST_NAME}
         value={lastname}
         placeholder={strings.ENTER_YOUR_LAST_NAME}
         onChangeText={(text)=>updateState({lastname:text})}
         />
         <TextinputWithLable
         label={strings.USER_NAME}
         value={username}
         placeholder={strings.ENTER_USER_NAME}
         onChangeText={(text)=>updateState({username:text})}
         />
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
         <Btncomp btnstyle={styles.btnstyle}
         btntext={strings.SIGNUP_AND_ACCEPT}

          />
          </View>
          </ScrollView>
        </WrapperContainer>
    );
};
export default Signup;