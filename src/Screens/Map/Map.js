import React, { useRef,useState } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import Circulerbtn from '../../Components/CirculerBtn';
import HomeHeader from '../../Components/HomeHeader';
import Imagespath from '../../Constants/Imagespath';
import strings from '../../Constants/Languages'
import colors from '../../styles/colors';
import { data } from './data';

const Map = () => {
    const [curLoc, setCurLoc] = useState({
        latitude: 30.7993,
        longitude: 76.9149,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [address,setAddress]=useState('')
    const mapRef=useRef(null)
    const onCenter=()=>{
        //console.log(mapRef)
        mapRef.current.animateToRegion(curLoc)
    }
    return (
        <View style={{flex:1}}>
        <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={curLoc}
        
        >
        {data.map((val,i)=>{
            return (
                <Marker
                coordinate={val.coords}
                image={val.img}
            />
            )
        })}
        </MapView>
        <View>
        <HomeHeader 
        centerText={address}
        style={{fontSize:25}}
        lastImg={Imagespath.setting24}
        />
        </View>
        <View style={styles.bottomStyle}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Circulerbtn
            text={strings.MY_BITMOJI}
            />
            <TouchableOpacity 
            onPress={onCenter}
            style={styles.navigationStyle}>
            <Image source={Imagespath.navigation24} />
            </TouchableOpacity>
            <Circulerbtn
            text={strings.FRIENDS}
            />

        </View>
        </View>
        </View>
            
    );
};
const styles = StyleSheet.create({
    bottomStyle:{
        position:'absolute',
        bottom:24,
        left:24,
        right:24
    },
    navigationStyle:{
        height:40,
        width:40,
        borderRadius:20,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
    },
});
export default Map;
