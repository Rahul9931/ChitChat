//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text,RefreshControl,Image,ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//reusable components
import HomeHeader from '../../Components/HomeHeader';
import Roundimg from '../../Components/Roundimg';
import WrapperContainer from '../../Components/WrapperContainer';
//constants
import {data} from '../../Constants/data'
import Imagespath from '../../Constants/Imagespath';
import { moderateScale,moderateScaleVertical } from '../../styles/responsiveSize';

import styles from './styles';
import actions from '../../Redux/actions';

// create a component
let onEndReachedMomentum=false
const Chat = () => {
    const [state, setState] = useState({
        isLoading:false,
        isRefresh:false,
        data:[],
        page:0,
        loadMore:false
    });
    const {isLoading,data,page,loadMore,isRefresh}=state;
    const updateState=(data)=>setState((state)=>({...state,...data}))
    useEffect(()=>{
        apiHit(true,page)
    },[])

    const apiHit=async(val,page=0,loadMore=false)=>{
        if (loadMore){
            updateState({loadMore:true})
        }
        if (val){
            updateState({isLoading:true})
        }
        else {
            updateState({isRefresh:true})
        }
        
        try{
            const headers={'app-id': '61f956a9edc5eaad35a3243a'}
            const res=await actions.getUsers(`?limit=10&page=${page}`,headers)
            //console.log("api res",res.data)
            updateState({
                data:[...data,...res.data],
                isLoading:false,
                isRefresh:false,
                loadMore:false,
                page:page+1,
                
            })

        } catch (error){
            console.log('error raised',error)
            updateState({isLoading: false})
        }
    }
    const renderItem=({item,index})=>{
        return(
        <View style={styles.flatStyle}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Roundimg image={item.picture} size={60}/>
        <View>
        <Text style={styles.nameStyle}>{item.firstName}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.newSnapstyle}>New Snap</Text>
        <Text style={styles.timeStyle}>{'2h'}</Text>
        <Text style={styles.streakStyle}>{'250'}</Text>
        </View>
        </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginRight:moderateScale(10)}}>
        <Roundimg image={'https://img.favpng.com/23/3/8/emoji-emoticon-icon-png-favpng-fnmNLfEDwJwv73WgQ0RK1wLMp.jpg'} 
        size={30}
        />
        <View style={styles.verticleLine} />
        <Image style={styles.chatStyle} source={Imagespath.chat} />
        </View>

        </View>
        )
    }
    const handlRefresh=()=>{
        apiHit(false)
    }
    const onEndReached=()=>{
        apiHit(false,page,true)
    }
    return (
    <WrapperContainer>
    <HomeHeader 
    centerText={"Chat"}
    add={Imagespath.add_person}
    lastImg={Imagespath.more}/>

    <FlatList 
     showsVerticalScrollIndicator={false}
     data={data}
     renderItem={renderItem}
     keyExtractor={(item,index)=>item.id}
     ItemSeparatorComponent={()=><View style={styles.lineStyle}/>}
     onEndReachedThreshold={0.01}
     onMomentumScrollBegin={()=>{
         onEndReachedMomentum=false
     }}
     refreshControl={
         <RefreshControl 
         refreshing={isRefresh}
         onRefresh={handlRefresh}
         tintColor="red"
         />
     }
     ListFooterComponent={
         loadMore&& (<View style={{marginTop:moderateScaleVertical(30)}}>
             <ActivityIndicator color='blue' size='large'/>
         </View>)
     }
     onEndReached={onEndReached}
     />
    </WrapperContainer>
    );
};
export default Chat;