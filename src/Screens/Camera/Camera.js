import React,{useState,useRef} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import RNFS, { stat } from 'react-native-fs';
import Imagespath from '../../Constants/Imagespath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'


export default function Camera() {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [camType, setCamType] = useState(RNCamera.Constants.Type.back);
    const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
    const [flashon, setflashon] = useState({
        flashValue:false
    })
    const {flashValue}=flashon
    const updateState=(data)=>((state)=>setflashon({...state,...data}))
    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.DownloadDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    const flipCamera=()=>{
      if(camType===RNCamera.Constants.Type.back){
        setCamType(RNCamera.Constants.Type.front)
      }
      else {
        setCamType(RNCamera.Constants.Type.back)
      }
    }
    const toggleflash=()=>{
      updateState({flashValue:!flashValue})
      if(flash===RNCamera.Constants.FlashMode.off){
        setFlash(RNCamera.Constants.FlashMode.on)
      }
      else{
        setFlash(RNCamera.Constants.FlashMode.off)
      }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={camType}
                flashMode={flash}
                style={styles.preview}
            >
              <View style={styles.btnStyle}>
              <TouchableOpacity 
              style={{marginLeft:moderateScale(20)}}
              onPress={() => toggleflash()} >
                <Image source={Imagespath.flashon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => captureHandle()}>
                    <View style={styles.centerBtn}>
                    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{marginRight:moderateScale(20)}}
                onPress={() => flipCamera()}>
                    <Image source={Imagespath.flip}/>
                </TouchableOpacity>
                </View>
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection:'column'
    },
    preview:{
      flex:1,
      justifyContent:'flex-end',
    //   alignItems:'center'
    },
    btnStyle: {
        flex: 0,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(20)

    },
    centerBtn:{
        height: moderateScaleVertical(70),
        width: moderateScale(70),
        borderRadius: moderateScale(35),
        backgroundColor:'red',
        borderWidth: 3,
        borderColor:'white'
        
    }
});